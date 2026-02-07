/**
 * Spell Translation Adapter
 * 
 * Provides translation services between English and Spanish spell names.
 * Uses a verified dictionary as the single source of truth.
 * 
 * Pattern: Adapter (ADOO - Closed for modification, Open for extension)
 */

import spellDictEN from './spellDictionary.json';
import spellDictES from './spellDictionary_es.json';

/**
 * Get the Spanish name for an English spell
 * @param {string} enName - English spell name
 * @returns {string|null} Spanish name or null if not found
 */
export const getSpanishName = (enName) => {
    return spellDictEN[enName] || null;
};

/**
 * Get the English name for a Spanish spell
 * @param {string} esName - Spanish spell name
 * @returns {string|null} English name or null if not found
 */
export const getEnglishName = (esName) => {
    return spellDictES[esName] || null;
};

/**
 * Translate a spell name to the target language
 * @param {string} name - Spell name in any language
 * @param {string} targetLang - Target language ('en' or 'es')
 * @returns {string|null} Translated name or null if not found
 */
export const translateSpellName = (name, targetLang) => {
    if (targetLang === 'es') {
        // Check if it's already Spanish
        if (spellDictES[name]) return name;
        // Otherwise translate from English
        return getSpanishName(name);
    } else {
        // Check if it's already English
        if (spellDictEN[name]) return name;
        // Otherwise translate from Spanish
        return getEnglishName(name);
    }
};

/**
 * Check if a translation exists for a spell
 * @param {string} name - Spell name
 * @returns {boolean} True if translation exists
 */
export const hasTranslation = (name) => {
    return !!(spellDictEN[name] || spellDictES[name]);
};

/**
 * Get dictionary statistics
 * @returns {object} Stats about the dictionary
 */
export const getDictionaryStats = () => ({
    totalEntries: Object.keys(spellDictEN).length,
    englishKeys: Object.keys(spellDictEN),
    spanishKeys: Object.keys(spellDictES)
});
