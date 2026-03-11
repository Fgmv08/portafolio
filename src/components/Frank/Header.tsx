import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
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
        { name: 'Inicio', href: '#inicio' },
        { name: 'Experiencia', href: '#experiencia' },
        { name: 'Habilidades', href: '#habilidades' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Estudios', href: '#estudios' },
    ];

    return (
        <header className={`main-header ${isScrolled || isMenuOpen ? 'scrolled' : ''}`}>
            <nav className="nav-container">
                <div className="logo-text">FM<span>.</span></div>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

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

