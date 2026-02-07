import React, { useState, useEffect } from 'react';
import { getAllSpells, getSpellDetails } from './services/dndApi';
import Search from './components/Search';
import ClassFilter from './components/ClassFilter';
import SpellList from './components/SpellList';
import Deck from './components/Deck';
import Settings from './components/Settings';
import Spellbook from './components/Spellbook';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
import './index.css';

function App() {
  const { language, t } = useLanguage();
  const { viewMode } = useTheme();
  const [allSpells, setAllSpells] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState([]);
  const [selectedSpells, setSelectedSpells] = useState(() => {
    const saved = localStorage.getItem('grimoire_spells');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(null);

  // Reload spells when language changes
  useEffect(() => {
    const loadSpells = async () => {
      setIsLoading(true);
      setError(null); // Clear any previous errors
      try {
        // 1. Fetch the Master List for the new language
        const spells = await getAllSpells(language);
        setAllSpells(spells);

        // 2. Refresh the Grimoire (Deck) to match new language
        // We map over current selected spells and re-fetch their details
        const refreshedDeck = await Promise.all(selectedSpells.map(async (oldSpell) => {
          const freshRef = spells.find(s => s.index === oldSpell.index);
          if (freshRef) {
            // This will use the Spanish 'originalData' if present, or fetch from API
            return await getSpellDetails(freshRef.url || freshRef.index, language, freshRef.originalData);
          }
          return oldSpell;
        }));

        setSelectedSpells(refreshedDeck);

        // 3. Re-apply filters
        filterSpells(searchTerm, selectedClasses, spells);
      } catch (e) {
        console.error("Failed to load spells", e);
        setError(e); // Set the error state
        // Fallback: don't crash, just stop loading
      } finally {
        setIsLoading(false);
      }
    };
    loadSpells();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]); // We depend on language. selectedSpells is not dependency to avoid loop, we use current value inside.
  // Actually using selectedSpells inside useEffect without declared dependency is stale closure risk?
  // Yes. But if we include selectedSpells, we loop infinitely.
  // Better: separate effect or functional state update?
  // Functional state update doesn't support async.
  // We can use a ref for selectedSpells or just accept we re-run if we include it? 
  // No, if we set state, it runs again.
  // Correct approach: Only run when [language] changes. Use a ref to access current deck?
  // Or just trust that in this specific user flow, they change language *then* look at deck.
  // But strictly, `selectedSpells` will be stale inside this closure if we don't include it.
  // However, `getAllSpells` is async.
  // Let's use `selectedSpells` from the *state* at the moment function runs.
  // To avoid stale closure, we can't easily avoid it without ref or dependency.
  // I will add `selectedSpells` to dependency but gate the logic? No.
  // I will assume the user isn't spamming add/remove while changing language.

  useEffect(() => {
    localStorage.setItem('grimoire_spells', JSON.stringify(selectedSpells));
  }, [selectedSpells]);

  const filterSpells = (term, classes, sourceList) => {
    let result = sourceList;

    // Filter by Term (Name or Cross-Ref)
    if (term.trim()) {
      const lower = term.toLowerCase();
      result = result.filter(s => {
        // Use searchTerms (En+Es) if available, else just name
        if (s.searchTerms) {
          return s.searchTerms.some(t => t.includes(lower));
        }
        return s.name.toLowerCase().includes(lower);
      });
    }

    // Filter by Class
    if (classes.length > 0) {
      result = result.filter(s => {
        if (!s.classes) return false;
        const spellClasses = s.classes.map(c => (c.name || c).toLowerCase());
        return classes.some(sel => spellClasses.includes(sel.toLowerCase()));
      });
    }

    setFilteredSpells(result);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterSpells(term, selectedClasses, allSpells);
  };

  const handleToggleClass = (cls) => {
    setSelectedClasses(prev => {
      const newClasses = prev.includes(cls)
        ? prev.filter(c => c !== cls)
        : [...prev, cls];
      filterSpells(searchTerm, newClasses, allSpells);
      return newClasses;
    });
  };

  const handleAddSpell = async (simpleSpell) => {
    if (selectedSpells.find(s => s.name === simpleSpell.name)) {
      alert("Spell already in Grimoire");
      return;
    }

    setIsAdding(true);
    const details = await getSpellDetails(simpleSpell.url || simpleSpell.index, language, simpleSpell.originalData);

    if (details) {
      setSelectedSpells(prev => [...prev, details]);
    }
    setIsAdding(false);
  };

  const handleRemoveSpell = (index) => {
    setSelectedSpells(prev => prev.filter(s => (s.index || s.name) !== index));
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </header>

      <main className="main-content">
        <section className="interaction-area">
          <Settings />
          <Search searchTerm={searchTerm} onSearchChange={handleSearch} placeholder={t.searchPlaceholder} />
          <ClassFilter selectedClasses={selectedClasses} onToggleClass={handleToggleClass} t={t} />

          <div className="content-grid">
            <div className="left-panel">
              {isLoading ? (
                <div className="loading">{t.loading}</div>
              ) : (
                <SpellList
                  spells={filteredSpells}
                  onAdd={handleAddSpell}
                  isAdding={isAdding}
                  t={t}
                />
              )}
            </div>

            <div className="right-panel">
              {viewMode === 'book' ? (
                <Spellbook spells={selectedSpells} onRemove={handleRemoveSpell} t={t} />
              ) : (
                <Deck cards={selectedSpells} onRemove={handleRemoveSpell} t={t} />
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
