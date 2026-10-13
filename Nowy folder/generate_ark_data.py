import csv
import os
import re
import json

csv_path = 'lista MZ.csv'
js_path = 'ark_data.js'
ico_dir = 'ico'
csv_shop = 'shop_list.csv'
csv_shop2 = 'shop_list 2.csv'

# Spelling correction map
SPELLING_MAP = {
    'CASTROIDES': 'CASTOROIDES',
    'DAEDON': 'DAEODON',
    'FASOLOZUCHUS': 'FASOLASUCHUS',
    'GASBAG': 'GASBAGS',
    'GIGADESMODUS': 'GIGADESMODUS',
    'GIGANOTORAPTOR': 'GIGANTORAPTOR',
    'HESPERONIS': 'HESPERORNIS',
    'MESOPITEKUS': 'MESOPITHECUS',
    'MOSA': 'MOSASAURUS',
    'PELARGONIS': 'PELAGORNIS',
    'PELAGORIS': 'PELAGORNIS',
    'THERIZINO': 'THERIZINOSAUR',
    'TUSO': 'TUSOTEUTHIS',
    'YUTHYRANNUS': 'YUTYRANNUS',
    'PACHYRHINOSARURUS': 'PACHYRHINOSAURUS',
    'PTERANADON': 'PTERANODON',
}

# Icon mapping overrides
ICON_OVERRIDES = {
    'CASTOROIDES': 'Giant_Beaver.png',
    'ARANEO': 'Spider.png',
    'DAEODON': 'DAEDON.png',
    'FASOLASUCHUS': 'Fasolasuchus.png',
    'GASBAGS': 'Gasbags.png',
    'GOLEM': 'Rock_Elemental.png',
    'GOLEM (ELEMENTAL)': 'Rock_Elemental.png',
    'PULMONOSCORPIUS': 'Scorpion.png',
    'THERIZINOSAUR': 'Empty_TherizinosaurusHead_Icon.png',
    'TUSOTEUTHIS': 'Tusoteuthis.webp',
    'GIGADESMODUS': 'Empty_Gigadesmodus.webp',
    'PARROT': 'Empty_Parrot_Icon.png',
    'UMBRA': 'Empty_Umbra_Icon.png',
    'TIDEPUP': 'Empty_tidepup.png',
    'ELDERCLAW': 'Empty_Elderclaw.webp',
    'PALAEOCTOPUS': 'Paleoctopus_Icon.png',
    'SPINOSAURUS': 'Spino.png',
    'TRICERATOPS': 'Trike.png',
    'YUTYRANNUS': 'Yuthyrannus.avif',
    'PELAGORNIS': 'Pelagornis.png',
    'PTERANODON': 'Pteranodon.png',
    'ARCHELON': 'Archelon-Entry-Icon_ASA.webp',
    'QUEEN BEE': 'Giant_Bee.png',
    'BOARATOS': 'Boaratos_EntryIcon.png',
    'CERBERAX': 'ASA_Icons_Ceberax_DinoHeadIcon.png',
    'CONCAVENATOR': 'DinoEntry_Conca.png',
    'GARGANTAR': 'Empty_Gargantar_Icon.png',
}

# Read icons in directory, excluding 30px-
icons = sorted([
    f for f in os.listdir(ico_dir)
    if os.path.isfile(os.path.join(ico_dir, f)) and not f.startswith('30px-')
])

# Read CSV dinos
dino_registry = {}
with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.reader(f, delimiter=';')
    header = next(reader)
    for row in reader:
        if not row or len(row) < 3:
            continue
        dino = row[0].strip()
        variant = row[1].strip().upper()
        try:
            price = int(row[2].strip().replace(' ', ''))
        except ValueError:
            price = row[2].strip()
            
        # Clean dino name
        dino_key = dino.upper().replace('*', '').strip()
        
        # Apply spelling corrections to key
        if dino_key in SPELLING_MAP:
            dino_key = SPELLING_MAP[dino_key]
            
        if dino_key not in dino_registry:
            dino_registry[dino_key] = {'base': None, 'variants': {}}
            
        if not variant or variant == '':
            dino_registry[dino_key]['base'] = price
        else:
            # S-Fire (mod) -> S-FIRE
            # S (mod) -> S (MOD)
            variant_clean = variant.replace(' (MOD)', '').replace('(MOD)', '').strip()
            # Fix variant spelling typo if any
            if variant_clean == 'ABBERANT':
                variant_clean = 'ABERRANT'
            dino_registry[dino_key]['variants'][variant_clean] = price
            if variant_clean in ['(DLC)', 'DLC'] and dino_registry[dino_key]['base'] is None:
                dino_registry[dino_key]['base'] = price

# Let's assign images and clean registry format
for k in list(dino_registry.keys()):
    # Find icon
    img = None
    if k in ICON_OVERRIDES:
        img = ICON_OVERRIDES[k]
    else:
        # Fuzzy match
        norm_k = re.sub(r'[^a-z0-9]', '', k.lower())
        for icon in icons:
            icon_base = icon.split('.')[0]
            norm_icon = re.sub(r'[^a-z0-9]', '', icon_base.lower())
            if norm_k == norm_icon:
                img = icon
                break
            if norm_k in norm_icon or norm_icon in norm_k:
                img = icon
                
    if img:
        dino_registry[k]['img'] = img

# Formatting to JS string
js_lines = []
js_lines.append("const ICON_DATA = [")
for i, icon in enumerate(icons):
    comma = "," if i < len(icons) - 1 else ""
    js_lines.append(f'    "{icon}"{comma}')
js_lines.append("];\n")

js_lines.append("const DINO_REGISTRY = {")
sorted_keys = sorted(dino_registry.keys())
for idx, k in enumerate(sorted_keys):
    dino_data = dino_registry[k]
    parts = []
    if dino_data['base'] is not None:
        parts.append(f"base: {dino_data['base']}")
    if dino_data['variants']:
        var_parts = []
        for vk, vv in sorted(dino_data['variants'].items()):
            var_parts.append(f'"{vk}": {vv}')
        parts.append(f"variants: {{ {', '.join(var_parts)} }}")
    if 'img' in dino_data:
        parts.append(f'img: "{dino_data["img"]}"')
        
    comma = "," if idx < len(sorted_keys) - 1 else ""
    js_lines.append(f'                    "{k}": {{ {", ".join(parts)} }}{comma}')
js_lines.append("};")

with open(js_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(js_lines) + '\n')

print("Generated new ark_data.js")

# Function to clean CSV file
def clean_csv(file_path):
    if not os.path.exists(file_path):
        return
    updated_rows = []
    with open(file_path, 'r', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter=';')
        header = next(reader)
        updated_rows.append(';'.join(header))
        for row in reader:
            if not row:
                continue
            name = row[0].strip()
            # If name is empty, write as is
            if not name:
                updated_rows.append(';'.join(row))
                continue
            
            # Apply corrections to the dino name inside the csv row
            for old_sp, new_sp in SPELLING_MAP.items():
                if name.upper() == old_sp or name.upper().startswith(old_sp + '-') or name.upper().startswith(old_sp + ' '):
                    suffix = name[len(old_sp):]
                    name = new_sp + suffix
                    break
            
            # Fix variant spelling typos
            name = name.replace('ABBERANT', 'ABERRANT').replace('abberant', 'aberrant').replace('Abberant', 'Aberrant')
            row[0] = name
            updated_rows.append(';'.join(row))
            
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(updated_rows) + '\n')
    print(f"Updated {file_path}")

clean_csv(csv_shop)
clean_csv(csv_shop2)
