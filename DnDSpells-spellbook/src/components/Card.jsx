import React from 'react';
import './Card.css';

const Card = ({ spell, onRemove, condensed = false, t }) => {
    if (!spell) return null;

    // Helper to format level
    const getLevelStr = (level) => {
        if (level === 0 || level === "Cantrip" || level === "Truco") return t ? t.cantrip : 'Cantrip';
        return `${level} ${t ? t.level : 'Level'}`; // "1 Level" is a bit weird but OK for now in Spanish "1 Nivel"
    };

    // Helper to process text with basic HTML tags safely
    const formatText = (text) => {
        if (!text) return null;
        // 1. Replace <br> with newlines for splitting
        let clean = text.replace(/<br\s*\/?>/gi, '\n');

        // 2. Split by newlines to create paragraphs
        return clean.split('\n').map((line, i) => {
            if (!line.trim()) return null;

            // 3. Simple parser for <b> and <i>
            // This is a naive parser but sufficient for the known JSON structure
            // It splits by tags and maps them to span elements
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

    // Safe accessor for description
    const renderDescription = () => {
        if (!spell.desc) return null;

        // If array, join first to handle inconsistent data types
        const text = Array.isArray(spell.desc) ? spell.desc.join('\n') : spell.desc;
        return formatText(text);
    };

    // Calculate total content length for dynamic font sizing
    const getContentLength = () => {
        let total = 0;

        // Description
        if (spell.desc) {
            const descText = Array.isArray(spell.desc) ? spell.desc.join(' ') : spell.desc;
            total += descText.replace(/<[^>]*>/g, '').length; // Strip HTML tags
        }

        // Higher level text
        if (spell.higher_level) {
            const hlText = Array.isArray(spell.higher_level) ? spell.higher_level.join(' ') : spell.higher_level;
            total += hlText.replace(/<[^>]*>/g, '').length;
        }

        return total;
    };

    // Determine font size class based on content length
    const getFontSizeClass = () => {
        const length = getContentLength();

        if (length < 300) return 'text-short';       // Large font, 1 column
        if (length < 500) return 'text-medium';      // Medium font, 1 column
        if (length < 700) return 'text-long';        // Small font, 2 columns 
        if (length < 900) return 'text-extra-long';  // Smaller font, 2 columns
        return 'text-massive';                        // Smallest font, 2 columns
    };

    return (
        <div className={`spell-card ${condensed ? 'condensed' : ''} ${getFontSizeClass()}`}>
            <div className="card-header">
                <h3>{spell.name}</h3>
                <span className="spell-level">{getLevelStr(spell.level)}</span>
            </div>

            <div className="card-meta">
                <div className="meta-item">
                    <strong>{t ? t.time : 'Time'}:</strong> {spell.casting_time}
                </div>
                <div className="meta-item">
                    <strong>{t ? t.range : 'Range'}:</strong> {spell.range}
                </div>
                <div className="meta-item">
                    <strong>{t ? t.components : 'Components'}:</strong> {Array.isArray(spell.components) ? spell.components.join(', ') : spell.components}
                </div>
                <div className="meta-item">
                    <strong>{t ? t.duration : 'Duration'}:</strong> {spell.duration}
                </div>
            </div>

            <div className="card-body">
                {renderDescription()}

                {spell.higher_level && spell.higher_level.length > 0 && (
                    <div className="higher-level">
                        <strong>{t ? t.higherLevels : 'At Higher Levels'}:</strong>
                        {Array.isArray(spell.higher_level) ? spell.higher_level.map((p, idx) => <p key={idx}>{p}</p>) : <p>{spell.higher_level}</p>}
                    </div>
                )}
            </div>

            <div className="card-footer">
                <span className="school-tag">{spell.school?.name || spell.school}</span>
                {onRemove && (
                    <button className="remove-btn" onClick={() => onRemove(spell.index || spell.name)}>
                        {t ? t.remove : 'Remove'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
