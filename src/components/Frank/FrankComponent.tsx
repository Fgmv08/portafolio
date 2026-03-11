import React from 'react';
import ContentComponent from './ContentComponent';
import ListComponent from './ListComponent';
import ExperienceComponent from './ExperienceComponent';
import Header from './Header';
import Footer from './Footer';
import './FrankStyles.css';

const FrankComponent: React.FC = () => {
    // ... (omitted professionalExperience for brevity, tool handles replacement)
    const professionalExperience = [
        {
            company: 'Arkia / España (Remoto)',
            role: 'Full Stack Developer & AI Integration',
            stack: ['React.ts', 'Node.ts', 'Supabase', 'TypeScript', 'n8n', 'IA Integrations', 'Socket.io', 'Tailwind'],
            description: [
                'Realice la implementación técnica de Mockups de alta fidelidad desde Figma a entornos productivos utilizando React.ts y Tailwind CSS.',
                'Desarrollé arquitecturas Backend escalables en Node.ts, optimizando procesos críticos de gestión y recuperación de datos.',
                'Implementé sistemas de comunicación bidireccional en tiempo real mediante Socket.io para flujos de datos dinámicos.',
                'Diseñé flujos de extracción y normalización de datos inmobiliarios-financieros, asegurando trazabilidad y consistencia en Supabase.',
                'Integré soluciones de IA colaborativa y automatizaciones con n8n para potenciar la eficiencia operativa de la plataforma.'
            ]
        },
        {
            company: 'Pavas Stay Connected',
            role: 'Full Stack Developer',
            stack: ['React.js', 'Node.js', 'MySQL', 'Redis', 'Docker', 'SAP Integration', 'DocuSign API'],
            description: [
                'Desarrollé módulos integrales para la gestión de nómina y administración de proveedores internacionales, sincronizados con SAP y DocuSign.',
                'Realicé mantenimiento preventivo y optimización de aplicaciones en producción, implementando estrategias de caché con Redis para Lagos de Datos.',
                'Gestioné el despliegue continuo de actualizaciones críticas, asegurando la estabilidad de los servicios mediante contenedores Docker.',
                'Facilité el feedback técnico directo con clientes para el diseño y evolución de módulos personalizados en aplicaciones empresariales.'
            ]
        },
        {
            company: 'Bancolombia S.A.',
            role: 'IT Support & Automation',
            stack: ['Python', 'Power BI', 'Microsoft Power Platform', 'HTML/CSS Emailing', 'Office 365'],
            description: [
                'Lideré técnicamente la migración masiva de clientes VIP de plataformas transaccionales SVE hacia las nuevas soluciones digitales SVN.',
                'Desarrollé sistemas de automatización en Python para el envío de comunicaciones corporativas personalizadas mediante plantillas HTML dinámicas.',
                'Implementé y unifiqué herramientas internas de comunicación para el segmento Pymes, optimizando los tiempos de respuesta del área.',
                'Diseñé tableros de control en Power BI para el seguimiento proactivo de documentación técnica y tutorías de nuevos canales financieros.'
            ]
        },
        {
            company: 'Bancolombia S.A.',
            role: 'Software Development Intern',
            stack: ['Python (RPA)', 'Django', 'React', 'MySQL', 'Power Apps', 'SharePoint', 'DevOps'],
            description: [
                'Desarrollé soluciones de RPA con Python para la automatización de contabilidad de pérdidas operativas en sedes de Latinoamérica.',
                'Implementé integraciones de datos transfronterizos mediante Power Automate y Power Apps, unificando la selección de proveedores globales.',
                'Construí módulos en Django y React para el sistema de Riesgos Operacionales, participando activamente en metodologías ágiles y sprints DevOps.',
                'Optimicé la gestión de activos y datos en SharePoint mediante integraciones personalizadas con el stack de Microsoft.'
            ]
        }
    ];

    return (
        <div className="container_section">
            <Header />
            <div id="inicio">
                <ContentComponent
                    path='frank_2.jpg'
                    titulo='Frank Giovany Muriel Velásquez'
                    contenido={'Desarrollador de Software apasionado por la creación de soluciones innovadoras y la resolución de problemas técnicos complejos. Cuento con una sólida trayectoria en proyectos colaborativos de alto impacto, enfocándome en el crecimiento profesional continuo y la excelencia técnica en entornos corporativos.'}
                    cabezera='Perfil Profesional'
                    pie='Conecta en Linkedin'
                    link={'https://www.linkedin.com/in/frankgmv/'}
                />
            </div>

            <div id="expertiz">
                <ContentComponent
                    path='habilidades.png'
                    titulo='Full Stack & Automatización'
                    contenido={'Especializado en el desarrollo de aplicaciones robustas utilizando el stack moderno (React, Node.js, TypeScript). Mi experiencia se extiende a la automatización de procesos industriales y administrativos mediante RPA con Python, optimizando tiempos de ejecución y reduciendo errores operativos en sectores críticos.'}
                    cabezera='Expertiz Técnica'
                    pie='Ver Perfil de LinkedIn'
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
                        'Automatización',
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
            </div>

            <div id="proyectos">
                <ContentComponent
                    path='gitfrank2.png'
                    titulo='Experiencia en Proyectos Reales'
                    contenido={'Desde el desarrollo de software administrativo para la gestión de proveedores en Ponto Hair Club, hasta la implementación de plataformas de análisis inmobiliario con IA en Arkia (España). Mi enfoque siempre ha sido transformar requerimientos complejos en módulos funcionales y escalables.'}
                    cabezera='Proyectos Destacados'
                    pie='Ver Código en GitHub'
                    link="https://github.com/Frankgmv"
                />
            </div>

            <div id="estudios">
                <ContentComponent
                    path='sena.png'
                    titulo='Formación y Trayectoria'
                    contenido={'Tecnólogo en Análisis y Desarrollo de Software por el SENA CTM Itagüí. Mi trayectoria incluye roles clave en empresas como Bancolombia, donde optimicé procesos críticos, y Arkia, donde lideré integraciones de IA y automatizaciones en tiempo real.'}
                    cabezera='Educación y Experiencia'
                    pie='Conoce el SENA'
                    link="https://oferta.senasofiaplus.edu.co/sofia-oferta/"
                />
            </div>

            <Footer />
        </div>
    );
};


export default FrankComponent;
