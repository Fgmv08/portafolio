import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('header.inicio'), href: '#inicio' },
        { name: t('header.experiencia'), href: '#experiencia' },
        { name: t('header.habilidades'), href: '#habilidades' },
        { name: t('header.proyectos'), href: '#proyectos' },
        { name: t('header.estudios'), href: '#estudios' },
        { name: t('header.contacto'), href: '#contact' },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className={`main-header ${isScrolled || isMenuOpen ? 'scrolled' : ''}`}>
            <nav className="nav-container">
                <div className="logo-text">FM<span>.</span></div>

                <div className="header-right">
                    <div className="language-selector">
                        <button 
                            className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`} 
                            onClick={() => changeLanguage('es')}
                        >
                            ES
                        </button>
                        <button 
                            className={`lang-btn ${i18n.language.startsWith('en') ? 'active' : ''}`} 
                            onClick={() => changeLanguage('en')}
                        >
                            EN
                        </button>
                    </div>

                    <button
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

