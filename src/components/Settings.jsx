import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import './Settings.css';

const Settings = () => {
    const { language, setLanguage, t } = useLanguage();
    const { printTheme, setPrintTheme, viewMode, setViewMode } = useTheme();

    return (
        <div className="settings-panel">
            <h3>{t.settings}</h3>

            <div className="setting-group">
                <label>{t.language}</label>
                <div className="toggle-group">
                    <button
                        className={`toggle-btn ${language === 'es' ? 'active' : ''}`}
                        onClick={() => setLanguage('es')}
                    >
                        Español
                    </button>
                    <button
                        className={`toggle-btn ${language === 'en' ? 'active' : ''}`}
                        onClick={() => setLanguage('en')}
                    >
                        English
                    </button>
                </div>
            </div>

            <div className="setting-group">
                <label>{t.printStyle}</label>
                <div className="toggle-group">
                    <button
                        className={`toggle-btn ${printTheme === 'theatrical' ? 'active' : ''}`}
                        onClick={() => setPrintTheme('theatrical')}
                    >
                        {t.styleTheatrical}
                    </button>
                    <button
                        className={`toggle-btn ${printTheme === 'eco' ? 'active' : ''}`}
                        onClick={() => setPrintTheme('eco')}
                    >
                        {t.styleEco}
                    </button>
                </div>
            </div>

            <div className="setting-group">
                <label>{t.viewMode}</label>
                <div className="toggle-group">
                    <button
                        className={`toggle-btn ${viewMode === 'cards' ? 'active' : ''}`}
                        onClick={() => setViewMode('cards')}
                    >
                        {t.viewCards}
                    </button>
                    <button
                        className={`toggle-btn ${viewMode === 'book' ? 'active' : ''}`}
                        onClick={() => setViewMode('book')}
                    >
                        {t.viewBook}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
