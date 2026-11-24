/**
 * HALUSZKIshop - Dinosaur Selector
 * Główna logika aplikacji (Vue 3)
 */

// =========================================================
// KONFIGURACJA SKALOWANIA CEN
// =========================================================
const PRICING_DATA = {
    levelScaling: [
        { lvl: 10, price: 580 },
        { lvl: 100, price: 1400 },
        { lvl: 200, price: 2570 },
        { lvl: 300, price: 4000 },
        { lvl: 400, price: 6000 },
        { lvl: 500, price: 8000 },
        { lvl: 600, price: 12000 },
        { lvl: 700, price: 16000 },
        { lvl: 800, price: 20000 },
        { lvl: 900, price: 24000 }
    ],
    mutationScaling: {
        1: [
            { pts: 10, price: 600 },
            { pts: 50, price: 3000 },
            { pts: 98, price: 5880 },
            { pts: 100, price: 6000 },
            { pts: 150, price: 7500 },
            { pts: 200, price: 9000 },
            { pts: 250, price: 10500 },
            { pts: 255, price: 10650 }
        ],
        2: [
            { pts: 20, price: 1200 },
            { pts: 100, price: 6000 },
            { pts: 196, price: 11760 },
            { pts: 200, price: 12000 },
            { pts: 300, price: 15000 },
            { pts: 400, price: 18000 },
            { pts: 500, price: 21000 },
            { pts: 510, price: 21300 }
        ],
        3: [
            { pts: 30, price: 1800 },
            { pts: 150, price: 9000 },
            { pts: 294, price: 17640 },
            { pts: 300, price: 18000 },
            { pts: 450, price: 22500 },
            { pts: 600, price: 27000 },
            { pts: 750, price: 31500 },
            { pts: 765, price: 31950 }
        ],
        4: [
            { pts: 40, price: 2400 },
            { pts: 200, price: 12000 },
            { pts: 392, price: 23520 },
            { pts: 400, price: 24000 },
            { pts: 600, price: 30000 },
            { pts: 800, price: 36000 },
            { pts: 1000, price: 42000 },
            { pts: 1020, price: 42600 }
        ],
        5: [
            { pts: 50, price: 3000 },
            { pts: 250, price: 15000 },
            { pts: 490, price: 29400 },
            { pts: 500, price: 30000 },
            { pts: 750, price: 37500 },
            { pts: 1000, price: 45000 },
            { pts: 1250, price: 52500 },
            { pts: 1275, price: 53250 }
        ],
        6: [
            { pts: 60, price: 3600 },
            { pts: 300, price: 18000 },
            { pts: 588, price: 35280 },
            { pts: 600, price: 36000 },
            { pts: 900, price: 45000 },
            { pts: 1200, price: 54000 },
            { pts: 1500, price: 63000 },
            { pts: 1530, price: 63900 }
        ]
    }
};

// =========================================================
// DEFINICJA GŁÓWNYCH STATYSTYK
// =========================================================
const MAIN_STATS = [
    { key: 'HP', label: 'Zdrowie', img: '30px-Health.webp', filter: 'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(1612%) hue-rotate(338deg) brightness(98%) contrast(92%)', mutKey: 'mut HP' },
    { key: 'STAM', label: 'Stamina', img: '30px-Stamina.webp', filter: 'brightness(0) saturate(100%) invert(50%) sepia(96%) saturate(1518%) hue-rotate(11deg) brightness(94%) contrast(93%)', mutKey: 'mut STAM' },
    { key: 'WH', label: 'Waga', img: '30px-Weight.webp', filter: 'brightness(0) saturate(100%) invert(24%) sepia(93%) saturate(2251%) hue-rotate(217deg) brightness(94%) contrast(93%)', mutKey: 'mut WH' },
    { key: 'DMG', label: 'Obrażenia', img: '30px-Melee_Damage.webp', filter: 'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(4000%) hue-rotate(258deg) brightness(90%) contrast(100%)', mutKey: 'mut DMG' },
    { key: 'OX', label: 'Tlen', img: '30px-Oxygen.webp', filter: 'brightness(0) saturate(100%) invert(44%) sepia(83%) saturate(1759%) hue-rotate(162deg) brightness(90%) contrast(98%)', mutKey: 'mut OX' },
    { key: 'FOOD', label: 'Jedzenie', img: '30px-Food.webp', filter: 'brightness(0) saturate(100%) invert(35%) sepia(76%) saturate(464%) hue-rotate(93deg) brightness(92%) contrast(89%)', mutKey: 'mut FOOD' }
];

// =========================================================
// FUNKCJE POMOCNICZE (HELPERS)
// =========================================================
const interpolate = (table, key, target) => {
    if (target <= table[0][key]) return table[0].price;
    if (target >= table[table.length - 1][key]) {
        if (table.length >= 2) {
            const last = table[table.length - 1];
            const prev = table[table.length - 2];
            const slope = (last.price - prev.price) / (last[key] - prev[key]);
            return last.price + (target - last[key]) * slope;
        }
        return table[table.length - 1].price;
    }
    for (let i = 0; i < table.length - 1; i++) {
        const start = table[i];
        const end = table[i + 1];
        if (target >= start[key] && target <= end[key]) {
            const ratio = (target - start[key]) / (end[key] - start[key]);
            return start.price + ratio * (end.price - start.price);
        }
    }
    return 0;
};

const formatPrice = (p) => p ? p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : "???";

const translateType = (typ) => {
    const types = {
        'gryzak': 'Bojowy',
        'latacz': 'Latający',
        'zbieracz': 'Użytkowy',
        'wodny': 'Wodny',
        'pet': 'Towarzysz'
    };
    return types[typ] || typ;
};

const translateDLC = (dlc) => {
    if (!dlc) return "";
    const dlcMap = {
        'LC': 'Lost Colony',
        'FT': 'Fantastic Tames',
        'ToF': 'Tides of Fortune',
        'AST': 'Astraeos'
    };
    return dlcMap[dlc] || dlc;
};

const hyphenateName = (name) => {
    if (!name) return "";
    return name.split(' ').map(word => {
        if (word.length <= 8) return word;
        
        const rules = [
            { match: /SAURUS/g, replace: "SAU&#8203;RUS" },
            { match: /OSAUR/g, replace: "O&#8203;SAUR" },
            { match: /THERIUM/g, replace: "THE&#8203;RIUM" },
            { match: /CERATOPS/g, replace: "CE&#8203;RA&#8203;TOPS" },
            { match: /ONYX/g, replace: "O&#8203;NYX" },
            { match: /RAPTOR/g, replace: "RAP&#8203;TOR" },
            { match: /TITAN/g, replace: "TI&#8203;TAN" },
            { match: /DONTO/g, replace: "DON&#8203;TO" },
            { match: /PHUS/g, replace: "PHUS" },
            { match: /DRACO/g, replace: "DRA&#8203;CO" },
            { match: /GNATHUS/g, replace: "GNA&#8203;THUS" }
        ];
        
        let result = word;
        rules.forEach(rule => {
            result = result.replace(rule.match, rule.replace);
        });
        
        if (result === word && word.length > 10) {
            return word.match(/.{1,4}/g).join('&#8203;');
        }
        
        return result;
    }).join(' ');
};

// =========================================================
// APLIKACJA VUE 3
// =========================================================
const { createApp, ref, computed, onMounted, watchEffect, nextTick } = Vue;

createApp({
    setup() {
        // --- Stan aplikacji (State) ---
        const rawData = ref([]);
        const iconList = ref([]);
        const searchQuery = ref("");
        const selectedCategory = ref(null);
        const sortBy = ref("alpha");
        const hoveredDino = ref(null);
        const selectedDinoName = ref("");
        const selectedMutations = ref({});
        const toast = ref({ show: false, message: "" });
        const isLoading = ref(true);
        const isKastratSelected = ref(false);
        const isSaddleSelected = ref(false);
        const preferredBaseIndex = ref(0);
        const isSidebarOpen = ref(false);
        const maxPriceFilter = ref(50000);
        const mainStats = MAIN_STATS;

        // --- Dane przetworzone (Processed Data) ---
        const processedData = computed(() => {
            const groups = {};
            rawData.value.forEach(item => {
                const name = item.DINEK;
                if (!groups[name]) {
                    groups[name] = { 
                        name: name, 
                        typ: item.typ, 
                        variants: [],
                        maxBaseLevel: 0,
                        maxBasePrice: 0,
                        representativeStats: {},
                        hasMutations: false,
                        hasSaddle: false,
                        isNew: false
                    };
                }
                groups[name].variants.push(item);

                // Sprawdzanie oznaczenia NOWOŚĆ
                const checkCsvVal = (key) => {
                    for (const k of Object.keys(item)) {
                        if (k.trim().toUpperCase() === key.toUpperCase()) {
                            const val = String(item[k] || '').trim().toUpperCase();
                            if (val === 'X' || val === '1' || val === 'TAK' || val === 'TRUE') return true;
                        }
                    }
                    return false;
                };
                if (checkCsvVal('NOWOSC') || checkCsvVal('NOWOŚĆ') || checkCsvVal('NEW')) {
                    groups[name].isNew = true;
                }
                
                if (item['SIODLO MAX'] === 'X' || item['SIODLO MAX'] === 'x') {
                    groups[name].hasSaddle = true;
                }
                
                const mutSum = mainStats.reduce((sum, s) => sum + (parseInt(item[s.mutKey]) || 0), 0);
                const baseLvl = (parseInt(item.LVL) || 0) - mutSum;
                
                if (mutSum > 0) groups[name].hasMutations = true;
                
                if (mutSum === 0) {
                    if (baseLvl >= groups[name].maxBaseLevel) {
                        groups[name].maxBaseLevel = baseLvl;
                        const stats = {};
                        mainStats.forEach(s => stats[s.key] = parseInt(item[s.key]) || 0);
                        groups[name].representativeStats = stats;
                    }
                    const c = item.CENA ? parseInt(item.CENA.replace(/\s/g, '')) : 0;
                    if (!isNaN(c) && c > groups[name].maxBasePrice) {
                        groups[name].maxBasePrice = c;
                    }
                }
            });
            return Object.values(groups).sort((a, b) => a.name.localeCompare(b.name));
        });

        const maxAvailablePrice = computed(() => {
            if (!processedData.value || processedData.value.length === 0) return 50000;
            return Math.max(...processedData.value.map(d => d.maxBasePrice));
        });

        // --- Filtrowanie i sortowanie dinozaurów ---
        const filteredDinos = computed(() => {
            let filtered = [...processedData.value];
            
            // Wyszukiwarka
            if (searchQuery.value) {
                const query = searchQuery.value.toLowerCase();
                filtered = filtered.filter(d => d.name.toLowerCase().includes(query) || d.typ.toLowerCase().includes(query));
            }
            
            // Filtr ceny maksymalnej
            if (maxPriceFilter.value < maxAvailablePrice.value) {
                filtered = filtered.filter(d => d.maxBasePrice > 0 && d.maxBasePrice <= maxPriceFilter.value);
            }
            
            // Filtr kategorii
            if (selectedCategory.value) {
                if (selectedCategory.value === 'new') {
                    filtered = filtered.filter(d => d.isNew);
                } else if (selectedCategory.value === 'mutated') {
                    filtered = filtered.filter(d => d.variants.some(v => mainStats.some(s => v[s.mutKey] && v[s.mutKey] !== '')));
                } else {
                    filtered = filtered.filter(d => d.typ.toLowerCase() === selectedCategory.value.toLowerCase());
                }
            }
            
            // Sortowanie
            if (sortBy.value === 'lvl') {
                filtered.sort((a, b) => {
                    if (a.maxBaseLevel === 0 && b.maxBaseLevel === 0) return a.name.localeCompare(b.name);
                    if (a.maxBaseLevel === 0) return 1;
                    if (b.maxBaseLevel === 0) return -1;
                    return a.maxBaseLevel - b.maxBaseLevel;
                });
            } else if (sortBy.value === 'price') {
                filtered.sort((a, b) => {
                    if (a.maxBasePrice === 0 && b.maxBasePrice === 0) return a.name.localeCompare(b.name);
                    if (a.maxBasePrice === 0) return 1;
                    if (b.maxBasePrice === 0) return -1;
                    return a.maxBasePrice - b.maxBasePrice;
                });
            } else {
                filtered.sort((a, b) => a.name.localeCompare(b.name));
            }
            
            return filtered;
        });

        // --- Szczegóły wybranego dinozaura ---
        const selectedDino = computed(() => processedData.value.find(d => d.name === selectedDinoName.value));

        const availableMutations = (statKey) => {
            if (!selectedDino.value) return [];
            const mutKey = 'mut ' + statKey;
            const set = new Set();
            selectedDino.value.variants.forEach(v => {
                if (v[mutKey] && v[mutKey] !== '') set.add(v[mutKey]);
            });
            return Array.from(set).sort((a, b) => parseInt(a) - parseInt(b));
        };

        const baseVariants = computed(() => {
            if (!selectedDino.value) return [];
            return selectedDino.value.variants.filter(v => mainStats.every(s => !(v[s.mutKey] && v[s.mutKey] !== '')));
        });

        const activeBase = computed(() => baseVariants.value[preferredBaseIndex.value] || baseVariants.value[0] || null);

        const bestMatchVariant = computed(() => {
            if (!selectedDino.value) return null;
            const aBase = activeBase.value;
            if (!aBase) return null;

            return selectedDino.value.variants.find(v => 
                (parseInt(v.LVL) - mainStats.reduce((sum, s) => sum + (parseInt(v[s.mutKey]) || 0), 0)) === parseInt(aBase.LVL) &&
                mainStats.every(s => String(v[s.mutKey] || '') === String(selectedMutations.value[s.mutKey] || ''))
            ) || null;
        });

        const baseLevel = computed(() => {
            if (activeBase.value) return parseInt(activeBase.value.LVL);
            const firstV = selectedDino.value?.variants[0];
            if (!firstV) return 0;
            let vMutSum = 0;
            mainStats.forEach(s => vMutSum += parseInt(firstV[s.mutKey]) || 0);
            return (parseInt(firstV.LVL) - vMutSum);
        });

        const selectionMutationTotal = computed(() => {
            let total = 0;
            mainStats.forEach(s => total += parseInt(selectedMutations.value[s.mutKey]) || 0);
            return total;
        });

        const calculatedLevel = computed(() => {
            if (!selectedDino.value) return '---';
            return baseLevel.value === 0 ? '---' : baseLevel.value + selectionMutationTotal.value;
        });

        const isKastratRequired = computed(() => {
            return mainStats.some(s => (parseInt(selectedMutations.value[s.mutKey]) || 0) >= 100);
        });

        const isKastratActive = computed(() => isKastratRequired.value || isKastratSelected.value || (bestMatchVariant.value?.KASTRAT ? true : false));

        // --- Logika kalkulacji cen ---
        const pricingInfo = computed(() => {
            if (!selectedDino.value) return { baseSpeciesPrice: 0, multiplier: 0 };
            const fullName = selectedDinoName.value.toUpperCase();
            let species = "";
            let variant = "";

            const speciesBase = (typeof DINO_REGISTRY !== 'undefined') ? DINO_REGISTRY : {};
            const sortedKeys = Object.keys(speciesBase).sort((a, b) => b.length - a.length);
            const foundSpeciesKey = sortedKeys.find(k => fullName.startsWith(k));
            
            if (foundSpeciesKey) {
                species = foundSpeciesKey;
                variant = fullName.substring(species.length).replace(/^[- ]+/, '').trim();
            } else {
                const parts = fullName.split('-');
                species = parts[0].trim();
                variant = parts.slice(1).join('-').trim();
            }

            const entry = speciesBase[species];
            let baseSpeciesPrice = 10000;
            if (entry) {
                baseSpeciesPrice = entry.base || (entry.variants && (entry.variants['(DLC)'] || entry.variants['DLC'])) || 10000;
                if (variant && entry.variants) {
                    if (entry.variants[variant]) {
                        baseSpeciesPrice = entry.variants[variant];
                    } else {
                        const vClean = variant.replace(/[- ]/g, '').toUpperCase();
                        const foundVar = Object.keys(entry.variants).find(v => {
                            const vKeyClean = v.toUpperCase().replace(/[- ]/g, '');
                            return vClean === vKeyClean || vClean.includes(vKeyClean) || vKeyClean.includes(vClean);
                        });
                        if (foundVar) baseSpeciesPrice = entry.variants[foundVar];
                    }
                }
            }
            return { baseSpeciesPrice, multiplier: baseSpeciesPrice / 10000 };
        });

        const getMutationCost = (val) => {
            const info = pricingInfo.value;
            const multiplier = info.multiplier;
            if (multiplier === 0 || !val) return 0;
            
            const scaling = PRICING_DATA.mutationScaling[1];
            const cost10k = interpolate(scaling, 'pts', val);
            return Math.round((cost10k * multiplier) / 10) * 10; 
        };

        const calculatedPrice = computed(() => {
            const info = pricingInfo.value;
            const multiplier = info.multiplier;
            if (multiplier === 0) return { min: 0, sug: 0 };

            const totalLvl = calculatedLevel.value === '---' ? 0 : calculatedLevel.value;
            const totalMut = selectionMutationTotal.value;
            const baseLvlActual = Math.max(0, totalLvl - totalMut);

            const levelPrice10k = interpolate(PRICING_DATA.levelScaling, 'lvl', baseLvlActual);
            const levelPriceSug10k = levelPrice10k * 1.2;
            
            let mutPrice10k = 0;
            const activeStatCount = mainStats.filter(s => selectedMutations.value[s.mutKey]).length;
            if (activeStatCount > 0 && totalMut > 0) {
                const scaling = PRICING_DATA.mutationScaling;
                const targetScaling = scaling[activeStatCount] || scaling[Math.min(activeStatCount, 6)] || scaling[4];
                if (targetScaling) {
                    mutPrice10k = interpolate(targetScaling, 'pts', totalMut);
                }
            }
            const mutPriceSug10k = mutPrice10k * 1.2;

            const minTotal = Math.ceil(((levelPrice10k + mutPrice10k) * multiplier) / 100) * 100;
            const sugTotal = Math.ceil(((levelPriceSug10k + mutPriceSug10k) * multiplier) / 100) * 100;

            let finalPrice = minTotal;
            if (isKastratSelected.value) {
                 finalPrice = Math.ceil((minTotal * 0.8) / 100) * 100;
            }

            return { min: minTotal, sug: sugTotal, final: finalPrice };
        });

        const displayPrice = computed(() => {
            if (!selectedDino.value) return { min: '0', sug: '0', final: '0' };
            let minVal = 0;
            let sugVal = 0;
            let finalVal = 0;

            const match = bestMatchVariant.value;
            if (match) {
                minVal = parseInt(match.CENA.replace(/\s/g, '')) || 0;
                sugVal = Math.ceil((minVal * 1.2) / 100) * 100;
                if (isKastratSelected.value && !match.KASTRAT) {
                    finalVal = Math.ceil((minVal * 0.8) / 100) * 100;
                } else {
                    finalVal = minVal;
                }
            } else {
                const calc = calculatedPrice.value;
                minVal = isKastratSelected.value ? Math.ceil((calc.min * 0.8) / 100) * 100 : calc.min;
                sugVal = isKastratSelected.value ? Math.ceil((calc.sug * 0.8) / 100) * 100 : calc.sug;
                finalVal = minVal;
            }

            if (isSaddleSelected.value) {
                minVal += 600;
                sugVal += 600;
                finalVal += 600;
            }

            return {
                min: formatPrice(minVal),
                sug: formatPrice(sugVal),
                final: formatPrice(finalVal)
            };
        });

        const selectedDinoDLC = computed(() => {
            if (!selectedDino.value) return null;
            if (bestMatchVariant.value?.DLC) return bestMatchVariant.value.DLC;
            const firstWithDLC = selectedDino.value.variants.find(v => v.DLC);
            return firstWithDLC ? firstWithDLC.DLC : null;
        });

        const dinoNameFontSize = computed(() => {
            const name = (selectedDinoName.value || "").trim();
            if (!name) return '2.5rem';

            const words = name.split(/\s+/);
            const longestWord = Math.max(...words.map(w => w.length));
            const isMultiWord = words.length > 1;

            if (window.innerWidth < 768) {
                if (longestWord >= 18) return '1.05rem';
                if (longestWord >= 14) return '1.25rem';
                if (longestWord >= 10) return '1.45rem';
                if (isMultiWord) return '1.5rem';
                return '1.8rem';
            }

            if (longestWord >= 19) return '1.35rem';
            if (longestWord >= 16) return '1.55rem';
            if (longestWord >= 14) return '1.75rem';
            if (longestWord >= 11) return '2.1rem';
            
            if (isMultiWord) {
                return '1.9rem';
            }

            if (name.length > 8) return '2.3rem';
            return '2.8rem';
        });

        // --- Metody i akcje (Methods) ---
        const formatStatDisplay = (stat) => {
            const v = bestMatchVariant.value;
            if (!v) {
                const baseV = activeBase.value || selectedDino.value?.variants.find(v => mainStats.every(s => !(v[s.mutKey] && v[s.mutKey] !== '')));
                const baseVal = baseV ? (parseInt(baseV[stat.key]) || 0) : '---';
                const mutVal = parseInt(selectedMutations.value[stat.mutKey]) || 0;
                const sum = (baseVal === '---') ? '---' : baseVal + mutVal;
                if (mutVal === 0) return `${baseVal}`;
                return `${baseVal} + ${mutVal} (${sum})`;
            }
            const base = parseInt(v[stat.key]) || 0;
            const mut = parseInt(v[stat.mutKey]) || 0;
            if (mut === 0) return `${base}`;
            return `${base} + ${mut} (${base + mut})`;
        };

        const getStatValue = (stat) => {
            const v = bestMatchVariant.value;
            let baseVal = 0, mutVal = 0;
            if (!v) {
                const baseV = activeBase.value || selectedDino.value?.variants.find(v => mainStats.every(s => !(v[s.mutKey] && v[s.mutKey] !== '')));
                baseVal = baseV ? (parseInt(baseV[stat.key]) || 0) : 0;
                mutVal = parseInt(selectedMutations.value[stat.mutKey]) || 0;
            } else {
                baseVal = parseInt(v[stat.key]) || 0;
                mutVal = parseInt(v[stat.mutKey]) || 0;
            }
            return { base: baseVal, mut: mutVal, sum: baseVal + mutVal };
        };

        const hasMutations = (dino) => {
            return dino.variants.some(v => mainStats.some(s => v[s.mutKey] && v[s.mutKey] !== ''));
        };

        const selectDino = (name) => {
            selectedDinoName.value = name;
            resetFilters();
            isSidebarOpen.value = false;
        };

        const goHome = () => {
            selectedDinoName.value = "";
            resetFilters();
            isSidebarOpen.value = false;
        };

        const toggleKastrat = () => {
            if (!isKastratRequired.value) {
                isKastratSelected.value = !isKastratSelected.value;
            }
        };

        const toggleMutation = (statKey, val) => {
            const mutKey = 'mut ' + statKey;
            if (selectedMutations.value[mutKey] === val) {
                delete selectedMutations.value[mutKey];
            } else {
                selectedMutations.value[mutKey] = val;
            }
        };

        const resetFilters = () => {
            selectedMutations.value = {};
            isKastratSelected.value = false;
            isSaddleSelected.value = false;
            preferredBaseIndex.value = 0;
        };

        const onDataLoaded = () => {
            maxPriceFilter.value = maxAvailablePrice.value;
        };

        const getDinoImg = (name) => {
            if (!name) return null;
            let cleanName = name.split('-')[0].trim().toUpperCase();
            const suffixes = [' ABERRANT', ' ABBERANT', ' FIRE', ' ICE', ' POISON', ' LIGHTNING', ' X', ' R', ' S', ' ZOMBIE'];
            
            for (const suffix of suffixes) {
                if (cleanName.endsWith(suffix)) {
                    cleanName = cleanName.replace(suffix, '').trim();
                }
            }

            // 1. Dopasowanie z mapowania ikon z gry
            if (typeof ICON_MAPPING !== 'undefined' && ICON_MAPPING[cleanName]) {
                return ICON_MAPPING[cleanName];
            }

            // 2. Wyszukiwanie elastyczne (fuzzy fallback)
            const searchName = cleanName.replace(/\s/g, '').toLowerCase();
            return iconList.value.find(f => {
                const fileBase = f.split('.')[0].replace(/_/g, '').toLowerCase();
                return fileBase === searchName || fileBase.startsWith(searchName);
            }) || null;
        };

        const showToast = (msg) => {
            toast.value = { show: true, message: msg };
            setTimeout(() => toast.value.show = false, 3000);
        };

        const copyOrder = () => {
            const isCustom = !bestMatchVariant.value;
            
            const priceStr = isCustom 
                ? `${displayPrice.value.min} - ${displayPrice.value.sug}` 
                : displayPrice.value.final;
            
            const activeMutations = mainStats.filter(s => selectedMutations.value[s.mutKey]);
            let mutsText = '';
            if (activeMutations.length > 0) {
                const muts = activeMutations.map(s => `• **${s.label}:** +${selectedMutations.value[s.mutKey]} pkt`).join('\n');
                mutsText = `🛠️ **Konfiguracja:**\n${muts}\n`;
            }
            
            const baseLvlText = activeBase.value ? activeBase.value.LVL : baseLevel.value;
            
            let extras = '';
            if (isKastratActive.value) extras += `✂️ **Kastrat:** TAK\n`;
            if (isSaddleSelected.value) extras += `🐎 **Siodło:** MAX ARMOR (+600 DD)\n`;
            
            let text = `📦 **HALUSZKI SHOP - ZAMÓWIENIE**\n` +
                         `🦖 **Stworzenie:** ${selectedDinoName.value}\n` +
                         `📊 **Poziom:** ${calculatedLevel.value} (Baza: ${baseLvlText} LVL)\n` +
                         `💰 **Cena:** ${priceStr} DD\n`;
            
            if (mutsText) text += mutsText;
            if (extras) text += extras;
            
            navigator.clipboard.writeText(text.trim());
            showToast("Skopiowano!");
        };

        // --- Cykl życia i obserwatorzy ---
        onMounted(() => {
            try {
                iconList.value = typeof ICON_MAPPING !== 'undefined' ? Object.values(ICON_MAPPING) : [];
                
                Papa.parse('shop_list.csv', {
                    download: true,
                    header: true,
                    skipEmptyLines: true,
                    delimiter: ";",
                    complete: (results) => {
                        console.log("CSV loaded, rows:", results.data.length);
                        rawData.value = results.data
                            .filter(row => row.DINEK && row.DINEK.trim() !== "")
                            .map(row => {
                                const cleanRow = {};
                                Object.keys(row).forEach(key => {
                                    const cleanKey = key.trim();
                                    cleanRow[cleanKey] = (row[key] || "").trim();
                                });
                                return cleanRow;
                            });
                        
                        nextTick(() => { 
                            if (typeof lucide !== 'undefined') lucide.createIcons(); 
                        });
                        onDataLoaded();
                        
                        setTimeout(() => {
                            isLoading.value = false;
                        }, 800);
                    },
                    error: (err) => {
                        console.error("CSV loading error:", err);
                        rawData.value = [];
                        isLoading.value = false;
                        showToast("Błąd wczytywania danych sklepu!");
                    }
                });
            } catch(e) { 
                console.error("App error:", e);
                isLoading.value = false;
            }
        });

        watchEffect(() => { 
            // Śledzenie zmian dla ikon lucide
            const _ = rawData.value;
            const __ = filteredDinos.value;
            const ___ = selectedDinoName.value;
            const ____ = selectedCategory.value;
            const _____ = sortBy.value;
            
            if (typeof lucide !== 'undefined') {
                nextTick(() => lucide.createIcons());
            }
        });

        return {
            searchQuery, selectedCategory, sortBy, hoveredDino, filteredDinos, selectedDinoName, selectedDino, selectedMutations, maxPriceFilter, maxAvailablePrice,
            isLoading, mainStats, toast, bestMatchVariant, calculatedLevel, displayPrice, baseLevel, selectionMutationTotal,
            isKastratRequired, isKastratSelected, isKastratActive, isSaddleSelected, calculatedPrice, hasMutations, dinoNameFontSize, isSidebarOpen,
            baseVariants, preferredBaseIndex, activeBase, getMutationCost, pricingInfo, selectedDinoDLC,
            selectDino, goHome, resetFilters, toggleMutation, toggleKastrat, availableMutations, formatStatDisplay, getStatValue,
            formatPrice, translateType, translateDLC, getDinoImg, copyOrder, hyphenateName
        };
    }
}).mount('#app');
