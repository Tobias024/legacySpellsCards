import React from 'react';
import './Spellbook.css';

const Spellbook = ({ spells, onRemove, t }) => {

    // Helper to format level
    const getLevelStr = (level) => {
        if (level === 0 || level === "Cantrip" || level === "Truco") return t ? t.cantrip : 'Cantrip';
        return `${level} ${t ? t.level : 'Level'}`;
    };

    // Helper to process text (copied from Card.jsx for consistency)
    const formatText = (text) => {
        if (!text) return null;
        let clean = text.replace(/<br\s*\/?>/gi, '\n');

        return clean.split('\n').map((line, i) => {
            if (!line.trim()) return null;

            const parts = line.split(/(<\/?(?:b|i)>)/g);
            const children = [];
            let currentTag = null;

            parts.forEach((part, pIdx) => {
                if (part === '<b>' || part === '<i>') {
                    currentTag = part;
                } else if (part === '</b>' || part === '</i>') {
                    currentTag = null;
                } else if (part) {
                    if (currentTag === '<b>') children.push(<strong key={pIdx}>{part}</strong>);
                    else if (currentTag === '<i>') children.push(<em key={pIdx}>{part}</em>);
                    else children.push(<span key={pIdx}>{part}</span>);
                }
            });

            return <p key={i}>{children.length ? children : line}</p>;
        });
    };

    const renderDescription = (spell) => {
        if (!spell.desc) return null;
        const text = Array.isArray(spell.desc) ? spell.desc.join('\n') : spell.desc;
        return formatText(text);
    };

    return (
        <div className="spellbook-wrapper">
            <div className="spellbook-header non-print">
                <h2>{t.viewBook} ({spells.length})</h2>
                <div className="print-hint">
                    <span className="hint-icon">🖨️</span> {t.printHint} (Landscape)
                </div>
            </div>

            {spells.length === 0 ? (
                <div className="spellbook-empty">
                    <p>{t.emptyGrimoire}</p>
                </div>
            ) : (
                <div className="spellbook-content">
                    {spells.map((spell, idx) => (
                        <div key={`${spell.index || spell.name}-${idx}`} className="spell-entry">
                            <button
                                className="spell-remove-btn non-print"
                                onClick={() => onRemove(spell.index || spell.name)}
                                title={t.remove}
                            >
                                ✖
                            </button>

                            <div className="spell-entry-header">
                                <h3>{spell.name}</h3>
                                <div className="spell-classification">
                                    {getLevelStr(spell.level)} - {spell.school.name || spell.school}
                                </div>
                            </div>

                            <div className="spell-meta-grid">
                                <strong>{t.time}:</strong> <span>{spell.casting_time}</span>
                                <strong>{t.range}:</strong> <span>{spell.range}</span>
                                <strong>{t.components}:</strong> <span>{Array.isArray(spell.components) ? spell.components.join(', ') : spell.components}</span>
                                <strong>{t.duration}:</strong> <span>{spell.duration} {spell.concentration && '(C)'}</span>
                            </div>

                            <div className="spell-body">
                                {renderDescription(spell)}

                                {spell.higher_level && spell.higher_level.length > 0 && (
                                    <div className="spell-higher-level">
                                        <strong>{t.higherLevels}:</strong>
                                        {Array.isArray(spell.higher_level)
                                            ? spell.higher_level.map((p, i) => <span key={i}> {p}</span>)
                                            : <span> {spell.higher_level}</span>}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Spellbook;
