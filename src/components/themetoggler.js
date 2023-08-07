import React, { useState, useEffect } from 'react';

export default function themetoggler() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isDarkTheme, setDarkTheme] = useState(false);

    const handleThemeToggle = () => {
        setDarkTheme(!isDarkTheme);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme-variables');
        } else {
            document.body.classList.remove('dark-theme-variables');
        }
    }, [isDarkTheme]);
    return (
        <>
            <button
                className={`theme theme1 ${isDarkTheme ? '' : 'active'}`}
                onClick={handleThemeToggle}
            >
                <span className="material-symbols-sharp theme-toggler">
                    {isDarkTheme ? 'light_mode' : 'dark_mode'}
                </span>
            </button>
            <button
                className={`theme theme2 ${isDarkTheme ? 'active' : ''}`}
                onClick={handleThemeToggle}
            >
                <span className="material-symbols-sharp theme-toggler">
                    {isDarkTheme ? 'light_mode' : 'dark_mode'}
                </span>
            </button>
        </>
    )
}
