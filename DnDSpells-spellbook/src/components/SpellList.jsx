import React from 'react';
import './SpellList.css';

const SpellList = ({ spells, onAdd, isAdding, t }) => {
    return (
        <div className="spell-list-container">
            <h2>{t.searchResults} ({spells.length})</h2>
            <div className="spell-list">
                {spells.slice(0, 50).map((spell) => ( // Limit to 50 for performance
                    <div key={spell.index} className="spell-list-item">
                        <span className="spell-name">{spell.name}</span>
                        <button
                            className="add-btn"
                            onClick={() => onAdd(spell)}
                            disabled={isAdding}
                        >
                            {isAdding ? '...' : t.add}
                        </button>
                    </div>
                ))}
                {spells.length > 50 && (
                    <div className="list-message">... {t.moreResults}</div>
                )}
                {spells.length === 0 && (
                    <div className="list-message">{t.noResults}</div>
                )}
            </div>
        </div>
    );
};

export default SpellList;
