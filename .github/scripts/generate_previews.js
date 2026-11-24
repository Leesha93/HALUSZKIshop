/**
 * Skrypt generujący podglądy dla każdego stworzenia z shop_list.csv
 * Tworzy katalog d/<slug>/index.html z dedykowanymi meta tagami Open Graph / Discord
 * oraz natychmiastowym przekierowaniem do głównej aplikacji z wybranym dinozaurem.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..', '..');
const CSV_PATH = path.join(ROOT_DIR, 'shop_list.csv');
const ICON_MAP_PATH = path.join(ROOT_DIR, 'icon_mapping.js');
const ICO_DIR = path.join(ROOT_DIR, 'ico');
const OUTPUT_DIR = path.join(ROOT_DIR, 'd');
const BASE_URL = 'https://leesha93.github.io/HALUSZKIshop';

// Wczytaj mapowanie ikon
function loadIconMapping() {
    if (!fs.existsSync(ICON_MAP_PATH)) return {};
    const content = fs.readFileSync(ICON_MAP_PATH, 'utf8');
    const sandbox = {};
    try {
        const fn = new Function('sandbox', content + '; return ICON_MAPPING;');
        return fn(sandbox) || {};
    } catch (e) {
        console.warn('Nie udało się wczytać icon_mapping.js:', e.message);
        return {};
    }
}

// Prosty parser CSV (obsługujący średniki)
function parseCsv(content) {
    const lines = content.split(/\r?\n/).filter(l => l.trim().length > 0);
    if (lines.length === 0) return [];
    
    const headers = lines[0].split(';').map(h => h.trim());
    const items = [];

    for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(';');
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = (row[j] || '').trim();
        }
        if (obj['DINEK']) items.push(obj);
    }
    return items;
}

// Logika slugów dokładnie taka sama jak w app.js
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'y']);
const SPECIAL_OVERRIDES = {
    'MEGALOCEROS': 'jelen'
};

function generateSlugs(items) {
    // Unikalne nazwy stworzeń
    const uniqueDinos = Array.from(new Set(items.map(item => item.DINEK)));

    const list = uniqueDinos.map(name => {
        if (SPECIAL_OVERRIDES[name]) {
            return { original: name, fixedSlug: SPECIAL_OVERRIDES[name] };
        }

        let clean = name.toUpperCase().replace(/\s+/g, ' ').trim();
        let suffix = '';
        if (clean.includes('-TEK')) { suffix = '-tek'; clean = clean.replace('-TEK', ''); }
        else if (clean.endsWith(' ABERRANT') || clean.endsWith(' ABBERANT')) { suffix = '-ab'; clean = clean.replace(/ AB+ERRANT/, ''); }
        else if (clean.includes('-S') || clean.endsWith(' - S')) { suffix = '-s'; clean = clean.replace(/-S| - S/, ''); }
        else if (clean.includes('-X')) { suffix = '-x'; clean = clean.replace('-X', ''); }

        const words = clean.trim().split(/[\s-]+/).filter(Boolean);
        if (words.length >= 2) {
            if (words[0] === 'WYVERN') {
                return { original: name, baseCandidate: 'wyv-' + words[1].toLowerCase(), suffix };
            }
            return { original: name, baseCandidate: words[0][0].toLowerCase() + '-' + words[1].toLowerCase(), suffix };
        }

        const word = words[0].toLowerCase();
        let cutoffs = [];
        for (let i = 3; i < word.length; i++) {
            if (VOWELS.has(word[i])) {
                cutoffs.push(word.substring(0, i + 1));
            }
        }
        let ideal = word.startsWith('megalosaurus') ? 'megalo' : (cutoffs.find(c => c.length >= 4 && c.length <= 6) || cutoffs[0] || word.substring(0, 5));
        return { original: name, word, ideal, suffix, cutoffs };
    });

    const d2s = {};

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item.fixedSlug) {
            d2s[item.original] = item.fixedSlug;
            continue;
        }
        let candidate = item.baseCandidate ? (item.baseCandidate + item.suffix) : (item.ideal + item.suffix);

        let isCollision = list.some((other, idx) => {
            if (idx === i) return false;
            let otherCand = other.fixedSlug || (other.baseCandidate ? other.baseCandidate + other.suffix : other.ideal + other.suffix);
            return otherCand === candidate;
        });

        if (isCollision) {
            let found = false;
            for (let c of (item.cutoffs || [])) {
                let cand = c + item.suffix;
                let col = list.some((other, idx) => {
                    if (idx === i) return false;
                    let otherCand = other.fixedSlug || (other.baseCandidate ? other.baseCandidate + other.suffix : other.ideal + other.suffix);
                    return otherCand === cand;
                });
                if (!col) {
                    candidate = cand;
                    found = true;
                    break;
                }
            }
            if (!found && item.word) {
                for (let l = 4; l <= item.word.length; l++) {
                    let cand = item.word.substring(0, l) + item.suffix;
                    let col = list.some((other, idx) => idx !== i && other.word && other.word.startsWith(item.word.substring(0, l)) && other.suffix === item.suffix);
                    if (!col) {
                        candidate = cand;
                        break;
                    }
                }
            }
        }
        d2s[item.original] = candidate;
    }
    return d2s;
}

// Dopasowanie ikony
function getDinoImg(name, iconMapping, availableIcons) {
    if (!name) return null;
    let cleanName = name.split('-')[0].trim().toUpperCase();
    const suffixes = [' ABERRANT', ' ABBERANT', ' FIRE', ' ICE', ' POISON', ' LIGHTNING', ' X', ' R', ' S', ' ZOMBIE'];

    for (const suffix of suffixes) {
        if (cleanName.endsWith(suffix)) {
            cleanName = cleanName.replace(suffix, '').trim();
        }
    }

    if (iconMapping && iconMapping[cleanName]) {
        return iconMapping[cleanName];
    }

    const searchName = cleanName.replace(/\s/g, '').toLowerCase();
    return availableIcons.find(f => {
        const fileBase = f.split('.')[0].replace(/_/g, '').toLowerCase();
        return fileBase === searchName || fileBase.startsWith(searchName);
    }) || null;
}

const TYPE_NAMES = {
    'gryzak': 'Bojowy',
    'latacz': 'Latający',
    'zbieracz': 'Użytkowy',
    'wodny': 'Wodny',
    'pet': 'Towarzysz'
};

function main() {
    console.log('--- Rozpoczynanie generowania podglądów stworzeń ---');
    
    if (!fs.existsSync(CSV_PATH)) {
        console.error('Brak pliku shop_list.csv!');
        process.exit(1);
    }

    const csvContent = fs.readFileSync(CSV_PATH, 'utf8');
    const rows = parseCsv(csvContent);
    const iconMapping = loadIconMapping();
    const availableIcons = fs.existsSync(ICO_DIR) ? fs.readdirSync(ICO_DIR) : [];

    // Pogrupuj po stworzeniu
    const creatures = {};
    rows.forEach(r => {
        const name = r['DINEK'];
        if (!creatures[name]) {
            creatures[name] = {
                name: name,
                typ: r['typ'] || '',
                prices: [],
                levels: []
            };
        }
        const price = parseInt((r['CENA'] || '').replace(/\s/g, ''), 10);
        if (!isNaN(price) && price > 0) creatures[name].prices.push(price);
        const lvl = parseInt(r['LVL'], 10);
        if (!isNaN(lvl) && lvl > 0) creatures[name].levels.push(lvl);
    });

    const slugMap = generateSlugs(rows);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    let generatedCount = 0;

    for (const name of Object.keys(creatures)) {
        const creature = creatures[name];
        const slug = slugMap[name] || name.toLowerCase().replace(/\s+/g, '-');
        const iconFile = getDinoImg(name, iconMapping, availableIcons);
        const typName = TYPE_NAMES[creature.typ.toLowerCase()] || creature.typ || 'Stworzenie';

        const minPrice = creature.prices.length > 0 ? Math.min(...creature.prices) : null;
        const maxLevel = creature.levels.length > 0 ? Math.max(...creature.levels) : null;

        const formattedPrice = minPrice ? minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : null;

        let descDetails = `Kategoria: ${typName}`;
        if (formattedPrice) descDetails += ` • Cena od: ${formattedPrice} DD`;
        if (maxLevel) descDetails += ` • Max LVL: ${maxLevel}`;

        const pageTitle = `${name} | Haluszki Shop — Mroczne Zakamarki`;
        const ogTitle = `${name} • Haluszki Shop`;
        const ogDesc = `${descDetails}. Oferta stworzeń tribu Haluszki na serwerze Mroczne Zakamarki. Zobacz warianty i zamów!`;
        const imageUrl = iconFile ? `${BASE_URL}/ico/${encodeURIComponent(iconFile)}` : `${BASE_URL}/ui/raw.png`;
        const pageUrl = `${BASE_URL}/d/${slug}/`;

        const html = `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
    <meta name="theme-color" content="#d4a358">
    <meta name="description" content="${ogDesc}">

    <!-- Open Graph / Discord & Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Haluszki Shop — Mroczne Zakamarki">
    <meta property="og:title" content="${ogTitle}">
    <meta property="og:description" content="${ogDesc}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${imageUrl}">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${ogTitle}">
    <meta name="twitter:description" content="${ogDesc}">
    <meta name="twitter:image" content="${imageUrl}">

    <link rel="icon" type="image/png" href="../../ui/raw.png">

    <!-- Natychmiastowe przekierowanie z zachowaniem mutacji, parametrów i flag -->
    <script>
        (function() {
            var slug = '${slug}';
            var hash = window.location.hash || '';
            var search = window.location.search || '';

            var extra = '';
            if (hash) {
                var clean = hash.startsWith('#') ? hash.substring(1) : hash;
                if (clean.startsWith('/')) clean = clean.substring(1);
                if (clean.startsWith(slug + '/')) clean = clean.substring(slug.length + 1);
                if (clean && clean !== slug) {
                    extra = '/' + clean;
                }
            }

            var target = '../../#' + slug + extra + search;
            window.location.replace(target);
        })();
    </script>
    <noscript>
        <meta http-equiv="refresh" content="0; url=../../#${slug}">
    </noscript>
    <style>
        body {
            background-color: #14100c;
            color: #d4a358;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            text-align: center;
            padding: 20px;
            box-sizing: border-box;
        }
        .card {
            background: rgba(30, 24, 18, 0.85);
            border: 1px solid rgba(212, 163, 88, 0.25);
            border-radius: 16px;
            padding: 32px;
            max-width: 440px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        img {
            width: 96px;
            height: 96px;
            object-fit: contain;
            margin-bottom: 16px;
            filter: drop-shadow(0 0 10px rgba(212, 163, 88, 0.3));
        }
        h1 {
            font-size: 20px;
            margin: 0 0 8px 0;
            color: #f5eedf;
        }
        p {
            font-size: 14px;
            color: #a68d60;
            margin: 0 0 20px 0;
        }
        a {
            display: inline-block;
            background: linear-gradient(135deg, #d4a358, #b88636);
            color: #14100c;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            transition: opacity 0.2s;
        }
        a:hover {
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="card">
        <img src="${imageUrl}" alt="${name}">
        <h1>${name}</h1>
        <p>Przekierowywanie do sklepu...</p>
        <a href="../../#${slug}">Otwórz stworzenie</a>
    </div>
</body>
</html>`;

        const dinoDir = path.join(OUTPUT_DIR, slug);
        if (!fs.existsSync(dinoDir)) {
            fs.mkdirSync(dinoDir, { recursive: true });
        }

        fs.writeFileSync(path.join(dinoDir, 'index.html'), html, 'utf8');
        generatedCount++;
    }

    console.log(`[SUKCES] Wygenerowano ${generatedCount} podglądów stworzeń w folderze: /d/`);
}

main();
