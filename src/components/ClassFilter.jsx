import React from 'react';
import './ClassFilter.css';

const CLASSES = [
    "Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"
];

const ClassFilter = ({ selectedClasses, onToggleClass, t }) => {
    return (
        <div className="class-filter-container">
            <span className="filter-label">{t ? t.filterByClass || "Filter by Class" : "Filter by Class"}:</span>
            <div className="class-tags">
                {CLASSES.map((cls) => (
                    <button
                        key={cls}
                        className={`class-tag ${selectedClasses.includes(cls) ? 'active' : ''}`}
                        onClick={() => onToggleClass(cls)}
                    >
                        {cls}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ClassFilter;
