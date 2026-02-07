import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [printTheme, setPrintTheme] = useState(() => {
        return localStorage.getItem('print_theme') || 'theatrical';
    });

    const [viewMode, setViewMode] = useState(() => {
        return localStorage.getItem('view_mode') || 'cards';
    });

    useEffect(() => {
        localStorage.setItem('print_theme', printTheme);
        // Apply class to body for global print styling
        document.body.classList.remove('print-theatrical', 'print-eco');
        document.body.classList.add(`print-${printTheme}`);
    }, [printTheme]);

    useEffect(() => {
        localStorage.setItem('view_mode', viewMode);
    }, [viewMode]);

    return (
        <ThemeContext.Provider value={{ printTheme, setPrintTheme, viewMode, setViewMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
