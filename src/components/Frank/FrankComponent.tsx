import React from 'react';
import ContentComponent from './ContentComponent';
import ListComponent from './ListComponent';
import './FrankStyles.css';

const FrankComponent: React.FC = () => {
    return (
        <div className="container_section">
            <ContentComponent
                path='frank_2.jpg'
                titulo='Frank Giovany Muriel Velásquez'
                contenido={'Desarrollador de Software apasionado por la creación de soluciones innovadoras y la resolución de problemas técnicos complejos. Cuento con una sólida trayectoria en proyectos colaborativos de alto impacto, enfocándome en el crecimiento profesional continuo y la excelencia técnica en entornos corporativos.'}
                cabezera='Perfil Profesional'
                pie='Conecta en Instagram'
                link={'https://www.instagram.com/franko_mv/'}
            />

            <ContentComponent
                path='habilidades.png'
                titulo='Full Stack & Automatización'
                contenido={'Especializado en el desarrollo de aplicaciones robustas utilizando el stack moderno (React, Node.js, TypeScript). Mi experiencia se extiende a la automatización de procesos industriales y administrativos mediante RPA con Python, optimizando tiempos de ejecución y reduciendo errores operativos en sectores críticos.'}
                cabezera='Expertiz Técnica'
                pie='Ver Perfil de LinkedIn'
                link="https://www.linkedin.com/in/frankgmv/"
            />

            <ListComponent
                list={[
                    'JavaScript (ES6+) / TypeScript',
                    'Python (Django, RPA)',
                    'Node.js / Express',
                    'React / Next.js',
                    'SQL & NoSQL (MySQL, MongoDB, Supabase)',
                    'Docker & Redis',
                    'Automatización con n8n e IA',
                    'Microsoft Power Platform (Power Apps, Automate)'
                ]}
                path='h_v3.png'
                titulo='Hard Skills / Tecnologías'
                cabezera='Mis Herramientas'
                pie='Explora mis Repositorios'
                link="https://github.com/Frankgmv"
            />

            <ListComponent
                list={[
                    'Metodologías Ágiles (Scrum/Agile)',
                    'Comunicación técnica asertiva',
                    'Resolución proactiva de problemas',
                    'Adaptabilidad a entornos dinámicos',
                    'Compromiso con la calidad del código',
                    'Inglés técnico intermedio'
                ]}
                path='h_blandasv2.png'
                titulo='Soft Skills / Colaboración'
                cabezera='Habilidades Blandas'
            />

            <ContentComponent
                path='gitfrank.png'
                titulo='Experiencia en Proyectos Reales'
                contenido={'Desde el desarrollo de software administrativo para la gestión de proveedores en Ponto Hair Club, hasta la implementación de plataformas de análisis inmobiliario con IA en Arkia (España). Mi enfoque siempre ha sido transformar requerimientos complejos en módulos funcionales y escalables.'}
                cabezera='Proyectos Destacados'
                pie='Ver Código en GitHub'
                link="https://github.com/Frankgmv"
            />

            <ContentComponent
                path='sena.png'
                titulo='Formación y Trayectoria'
                contenido={'Tecnólogo en Análisis y Desarrollo de Software por el SENA CTM Itagüí. Mi trayectoria incluye roles clave en empresas como Bancolombia, donde optimicé procesos críticos, y Arkia, donde lideré integraciones de IA y automatizaciones en tiempo real.'}
                cabezera='Educación y Experiencia'
                pie='Conoce el SENA'
                link="https://oferta.senasofiaplus.edu.co/sofia-oferta/"
            />
        </div>
    );
};

export default FrankComponent;

