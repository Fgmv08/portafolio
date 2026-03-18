import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="main-footer" id="contacto">
            <div className="footer-content">
                <div className="footer-info">
                    <div className="logo-text">FM<span>.</span></div>
                    <p className="footer-tagline">{t('footer.tagline')}</p>
                </div>

                <div className="footer-contact">
                    <h4 className="footer-title">{t('footer.contacto')}</h4>
                    <a href="mailto:fgmv08@gmail.com" className="contact-link">
                        <span className="icon">✉</span> fgmv08@gmail.com
                    </a>
                    <div className="footer-socials">
                        <a href="https://www.linkedin.com/in/frankgmv/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/Frankgmv" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.instagram.com/franko_mv/" target="_blank" rel="noreferrer">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Frank Muriel. {t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
