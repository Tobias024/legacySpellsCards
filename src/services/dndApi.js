/**
 * DnD Spells API Service
 * 
 * Provides spell data from local JSON databases.
 * Uses a verified EN↔ES dictionary for translations (Adapter pattern).
 */

import fullSpanishSpells from '../constants/spells_es_full.json';
import fullEnglishSpells from '../constants/spells_en_full.json';
import { getSpanishName } from '../constants/spellTranslationAdapter';

// Create indexes for fast lookup
const esSpellsByName = {};
fullSpanishSpells.forEach(spell => {
    esSpellsByName[spell.nombre] = spell;
});

const createSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/**
 * Get all spells in the specified language
 * @param {string} language - 'en' or 'es'
 * @returns {Promise<Array>} Array of spell objects
 */
export const getAllSpells = async (language = 'en') => {
    console.log("Loading spells from Local JSON...");

    const allSpells = fullEnglishSpells.map(spell => {
        const index = createSlug(spell.name);
        const levelInt = (spell.level === "cantrip") ? 0 : parseInt(spell.level);

        let finalName = spell.name;
        let finalData = null;

        // Build English data in app schema
        const englishData = {
            index: index,
            name: spell.name,
            desc: Array.isArray(spell.description) ? spell.description : [spell.description],
            higher_level: spell.higher_levels ? [spell.higher_levels] : [],
            range: spell.range,
            components: spell.components.raw || "V, S, M",
            material: spell.components.materials_needed ? spell.components.materials_needed.join(', ') : "",
            ritual: spell.ritual,
            duration: spell.duration,
            concentration: spell.duration.toLowerCase().includes("concentration"),
            casting_time: spell.casting_time,
            level: levelInt,
            school: { name: spell.school },
            classes: spell.classes.map(c => ({ name: c.charAt(0).toUpperCase() + c.slice(1) }))
        };

        // Get Spanish translation via dictionary
        const esName = getSpanishName(spell.name);
        let searchTerms = [spell.name.toLowerCase()];

        if (esName) {
            searchTerms.push(esName.toLowerCase());

            if (language === 'es') {
                const esSpell = esSpellsByName[esName];

                if (esSpell) {
                    finalName = esSpell.nombre;

                    // Build Spanish data
                    // Take only first element of arrays (avoid imperial/metric duplication)
                    const descArray = Array.isArray(esSpell.descripcion)
                        ? [esSpell.descripcion[0]]
                        : esSpell.descripcion ? [esSpell.descripcion] : [];

                    const higherLevelArray = Array.isArray(esSpell.a_niveles_superiores)
                        ? [esSpell.a_niveles_superiores[0]]
                        : esSpell.a_niveles_superiores ? [esSpell.a_niveles_superiores] : [];

                    finalData = {
                        index: index,
                        name: esSpell.nombre,
                        desc: descArray,
                        higher_level: higherLevelArray,
                        range: Array.isArray(esSpell.alcance) ? esSpell.alcance[0] : esSpell.alcance,
                        components: Array.isArray(esSpell.componentes) ? esSpell.componentes.join(', ') : esSpell.componentes,
                        material: esSpell.materiales,
                        ritual: esSpell.ritual,
                        duration: esSpell.duracion,
                        concentration: esSpell.concentracion,
                        casting_time: esSpell.tiempo_de_lanzamiento,
                        level: esSpell.nivel,
                        school: { name: esSpell.escuela },
                        classes: esSpell.clases ? esSpell.clases.map(c => ({ name: c })) : []
                    };
                }
            }
        }

        // Fallback to English data
        if (language === 'en' || !finalData) {
            finalData = englishData;
        }

        return {
            index: index,
            name: finalName,
            level: levelInt,
            school: { name: spell.school },
            classes: spell.classes.map(c => ({ name: c })),
            searchTerms: searchTerms,
            originalData: finalData,
            url: null
        };
    });

    // Deduplication by name
    const seen = new Set();
    return allSpells.filter(spell => {
        const nameLower = spell.name.toLowerCase();
        if (seen.has(nameLower)) {
            console.log(`Duplicate spell removed: ${spell.name}`);
            return false;
        }
        seen.add(nameLower);
        return true;
    });
};

/**
 * Get details for a specific spell
 * @param {string} identifier - Spell index or URL
 * @param {string} language - 'en' or 'es'
 * @param {object} preloadedData - Optional preloaded data
 * @returns {Promise<object>} Spell details
 */
export const getSpellDetails = async (identifier, language = 'en', preloadedData = null) => {
    if (preloadedData) {
        return preloadedData;
    }
    const all = await getAllSpells(language);
    const found = all.find(s => s.index === identifier || s.url === identifier);
    return found ? found.originalData : null;
};
