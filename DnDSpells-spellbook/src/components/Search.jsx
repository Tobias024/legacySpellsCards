import React from 'react';
import './Search.css';

const Search = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-container">
            <div className="search-wrapper">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for a spell (e.g. Fireball)..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <div className="search-icon">🔍</div>
            </div>
        </div>
    );
};

export default Search;
