import React from 'react';
import Card from './Card';
import './Deck.css';

const Deck = ({ cards, onRemove, t }) => {
    return (
        <div className="deck-container">
            <div className="deck-header">
                <h2>{t.grimoireTitle} ({cards.length})</h2>
                <div className="print-hint">
                    <span className="hint-icon">🖨️</span> {t.printHint}
                </div>
            </div>

            {cards.length === 0 ? (
                <div className="empty-deck">
                    <p>{t.emptyGrimoire}</p>
                </div>
            ) : (
                <div className="cards-grid">
                    {cards.map((spell, idx) => (
                        <div key={`${spell.index || spell.name}-${idx}`} className="card-wrapper">
                            <Card spell={spell} onRemove={onRemove} t={t} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Deck;
