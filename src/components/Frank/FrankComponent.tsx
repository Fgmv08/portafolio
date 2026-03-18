import React from 'react';
import { useTranslation } from 'react-i18next';
import ContentComponent from './ContentComponent';
import ListComponent from './ListComponent';
import ExperienceComponent from './ExperienceComponent';
import Header from './Header';
import Footer from './Footer';
import './FrankStyles.css';

const FrankComponent: React.FC = () => {
    const { t } = useTranslation();

    const professionalExperience = [
        {
            company: t('experiencia.arkia.company'),
            role: t('experiencia.arkia.role'),
            stack: ['React.ts', 'Node.ts', 'Supabase', 'TypeScript', 'n8n', 'IA Integrations', 'Socket.io', 'Tailwind'],
            description: t('experiencia.arkia.description', { returnObjects: true }) as string[]
        },
        {
            company: t('experiencia.pavas.company'),
            role: t('experiencia.pavas.role'),
            stack: ['React.js', 'Node.js', 'MySQL', 'Redis', 'Docker', 'SAP Integration', 'DocuSign API'],
            description: t('experiencia.pavas.description', { returnObjects: true }) as string[]
        },
        {
            company: t('experiencia.bancolombia_it.company'),
            role: t('experiencia.bancolombia_it.role'),
            stack: ['Python', 'Power BI', 'Microsoft Power Platform', 'HTML/CSS Emailing', 'Office 365'],
            description: t('experiencia.bancolombia_it.description', { returnObjects: true }) as string[]
        },
        {
            company: t('experiencia.bancolombia_intern.company'),
            role: t('experiencia.bancolombia_intern.role'),
            stack: ['Python (RPA)', 'Django', 'React', 'MySQL', 'Power Apps', 'SharePoint', 'DevOps'],
            description: t('experiencia.bancolombia_intern.description', { returnObjects: true }) as string[]
        }
    ];

    return (
        <div className="container_section">
            <Header />
            <div id="inicio">
                <ContentComponent
                    path='frank_2.jpg'
                    titulo={t('perfil.titulo')}
                    contenido={t('perfil.contenido')}
                    cabezera={t('perfil.cabezera')}
                    pie={t('perfil.pie')}
                    link={'https://www.linkedin.com/in/frankgmv/'}
                />
            </div>

            <div id="expertiz">
                <ContentComponent
                    path='habilidades.png'
                    titulo={t('expertiz.titulo')}
                    contenido={t('expertiz.contenido')}
                    cabezera={t('expertiz.cabezera')}
                    pie={t('expertiz.pie')}
                    link="https://www.linkedin.com/in/frankgmv/"
                />
            </div>

            <div id="experiencia">
                <ExperienceComponent experiences={professionalExperience} />
            </div>

            <div id="habilidades">
                <ListComponent
                    list={[
                        'JavaScript (ES6+) / TypeScript',
                        'Python (Django, RPA)',
                        'Node.js / Express',
                        'React',
                        'SQL & NoSQL (MySQL, MongoDB, Supabase)',
                        'Docker & Redis',
                        t('habilidades.hard.items.automatizacion'),
                        t('habilidades.hard.items.power')
                    ]}
                    path='h_v3.png'
                    titulo={t('habilidades.hard.titulo')}
                    cabezera={t('habilidades.hard.cabezera')}
                    pie={t('habilidades.hard.pie')}
                    link="https://github.com/Frankgmv"
                />

                <ListComponent
                    list={t('habilidades.soft.items', { returnObjects: true }) as string[]}
                    path='h_blandasv2.png'
                    titulo={t('habilidades.soft.titulo')}
                    cabezera={t('habilidades.soft.cabezera')}
                />
            </div>

            <div id="proyectos">
                <ContentComponent
                    path='gitfrank2.png'
                    titulo={t('proyectos.titulo')}
                    contenido={t('proyectos.contenido')}
                    cabezera={t('proyectos.cabezera')}
                    pie={t('proyectos.pie')}
                    link="https://github.com/Frankgmv"
                />
            </div>

            <div id="estudios">
                <ContentComponent
                    path='sena.png'
                    titulo={t('estudios.titulo')}
                    contenido={t('estudios.contenido')}
                    cabezera={t('estudios.cabezera')}
                    pie={t('estudios.pie')}
                    link="https://oferta.senasofiaplus.edu.co/sofia-oferta/"
                />
            </div>

            <div id='contact'>
                <Footer />
            </div>
        </div>
    );
};


export default FrankComponent;
