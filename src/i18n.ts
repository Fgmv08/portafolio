import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      es: {
        translation: {
          header: {
            inicio: "Inicio",
            experiencia: "Experiencia",
            habilidades: "Habilidades",
            proyectos: "Proyectos",
            estudios: "Estudios",
            contacto: "Contacta me"
          },
          perfil: {
            cabezera: "Perfil Profesional",
            titulo: "Frank Giovany Muriel Velásquez",
            contenido: "Desarrollador de Software apasionado por la creación de soluciones innovadoras y la resolución de problemas técnicos complejos. Cuento con una sólida trayectoria en proyectos colaborativos de alto impacto, enfocándome en el crecimiento profesional continuo y la excelencia técnica en entornos corporativos.",
            pie: "Conecta en Linkedin"
          },
          expertiz: {
            cabezera: "Expertiz Técnica",
            titulo: "Full Stack & Automatización",
            contenido: "Especializado en el desarrollo de aplicaciones robustas utilizando el stack moderno (React, Node.js, TypeScript). Mi experiencia se extiende a la automatización de procesos industriales y administrativos mediante RPA con Python, optimizando tiempos de ejecución y reduciendo errores operativos en sectores críticos.",
            pie: "Ver Perfil de LinkedIn"
          },
          experiencia: {
            cabezera: "Experiencia Profesional",
            trayectoria: "Trayectoria Profesional",
            titulo_seccion: "Experiencia Laboral",
            arkia: {
              company: "Arkia / España (Remoto)",
              role: "Full Stack Developer & AI Integration",
              description: [
                "Realice la implementación técnica de Mockups de alta fidelidad desde Figma a entornos productivos utilizando React.ts y Tailwind CSS.",
                "Desarrollé arquitecturas Backend escalables en Node.ts, optimizando procesos críticos de gestión y recuperación de datos.",
                "Implementé sistemas de comunicación bidireccional en tiempo real mediante Socket.io para flujos de datos dinámicos.",
                "Diseñé flujos de extracción y normalización de datos inmobiliarios-financieros, asegurando trazabilidad y consistencia en Supabase.",
                "Integré soluciones de IA colaborativa y automatizaciones con n8n para potenciar la eficiencia operativa de la plataforma."
              ]
            },
            pavas: {
              company: "Pavas Stay Connected",
              role: "Full Stack Developer",
              description: [
                "Desarrollé módulos integrales para la gestión de nómina y administración de proveedores internacionales, sincronizados con SAP y DocuSign.",
                "Realicé mantenimiento preventivo y optimización de aplicaciones en producción, implementando estrategias de caché con Redis para Lagos de Datos.",
                "Gestioné el despliegue continuo de actualizaciones críticas, asegurando la estabilidad de los servicios mediante contenedores Docker.",
                "Facilité el feedback técnico directo con clientes para el diseño y evolución de módulos personalizados en aplicaciones empresariales."
              ]
            },
            bancolombia_it: {
              company: "Bancolombia S.A.",
              role: "IT Support & Automation",
              description: [
                "Lideré técnicamente la migración masiva de clientes VIP de plataformas transaccionales SVE hacia las nuevas soluciones digitales SVN.",
                "Desarrollé sistemas de automatización en Python para el envío de comunicaciones corporativas personalizadas mediante plantillas HTML dinámicas.",
                "Implementé y unifiqué herramientas internas de comunicación para el segmento Pymes, optimizando los tiempos de respuesta del área.",
                "Diseñé tableros de control en Power BI para el seguimiento proactivo de documentación técnica y tutorías de nuevos canales financieros."
              ]
            },
            bancolombia_intern: {
              company: "Bancolombia S.A.",
              role: "Software Development Intern",
              description: [
                "Desarrollé soluciones de RPA con Python para la automatización de contabilidad de pérdidas operativas en sedes de Latinoamérica.",
                "Implementé integraciones de datos transfronterizos mediante Power Automate y Power Apps, unificando la selección de proveedores globales.",
                "Construí módulos en Django y React para el sistema de Riesgos Operacionales, participando activamente en metodologías ágiles y sprints DevOps.",
                "Optimicé la gestión de activos y datos en SharePoint mediante integraciones personalizadas con el stack de Microsoft."
              ]
            }
          },
          habilidades: {
            hard: {
              cabezera: "Mis Herramientas",
              titulo: "Hard Skills / Tecnologías",
              pie: "Explora mis Repositorios",
              items: {
                automatizacion: "Automatización",
                power: "Microsoft Power Platform"
              }
            },
            soft: {
              cabezera: "Habilidades Blandas",
              titulo: "Soft Skills / Colaboración",
              items: [
                "Metodologías Ágiles (Scrum/Agile)",
                "Comunicación técnica asertiva",
                "Resolución proactiva de problemas",
                "Adaptabilidad a entornos dinámicos",
                "Compromiso con la calidad del código",
                "Inglés técnico intermedio"
              ]
            }
          },
          proyectos: {
            cabezera: "Proyectos Destacados",
            titulo: "Experiencia en Proyectos Reales",
            contenido: "Desde el desarrollo de software administrativo para la gestión de proveedores en Ponto Hair Club, hasta la implementación de plataformas de análisis inmobiliario con IA en Arkia (España). Mi enfoque siempre ha sido transformar requerimientos complejos en módulos funcionales y escalables.",
            pie: "Ver Código en GitHub"
          },
          estudios: {
            cabezera: "Educación y Experiencia",
            titulo: "Formación y Trayectoria",
            contenido: "Tecnólogo en Análisis y Desarrollo de Software por el SENA CTM Itagüí. Mi trayectoria incluye roles clave en empresas como Bancolombia, donde optimicé procesos críticos, y Arkia, donde lideré integraciones de IA y automatizaciones en tiempo real.",
            pie: "Conoce el SENA"
          },
          footer: {
            tagline: "Construyendo soluciones escalables con pasión y precisión.",
            copyright: "Todos los derechos reservados.",
            contacto: "Contacto"
          }
        }
      },
      en: {
        translation: {
          header: {
            inicio: "Home",
            experiencia: "Experience",
            habilidades: "Skills",
            proyectos: "Projects",
            estudios: "Education",
            contacto: "Contact me"
          },
          perfil: {
            cabezera: "Professional Profile",
            titulo: "Frank Giovany Muriel Velásquez",
            contenido: "Software Developer passionate about creating innovative solutions and solving complex technical problems. I have a solid track record in high-impact collaborative projects, focusing on continuous professional growth and technical excellence in corporate environments.",
            pie: "Connect on LinkedIn"
          },
          expertiz: {
            cabezera: "Technical Expertise",
            titulo: "Full Stack & Automation",
            contenido: "Specialized in developing robust applications using the modern stack (React, Node.js, TypeScript). My experience extends to information and administrative process automation through RPA with Python, optimizing execution times and reducing operational errors in critical sectors.",
            pie: "View LinkedIn Profile"
          },
          experiencia: {
            cabezera: "Professional Experience",
            trayectoria: "Professional Path",
            titulo_seccion: "Work Experience",
            arkia: {
              company: "Arkia / Spain (Remote)",
              role: "Full Stack Developer & AI Integration",
              description: [
                "I carried out the technical implementation of high-fidelity Mockups from Figma to production environments using React.ts and Tailwind CSS.",
                "I developed scalable Backend architectures in Node.ts, optimizing critical data management and recovery processes.",
                "I implemented bidirectional real-time communication systems through Socket.io for dynamic data flows.",
                "I designed real estate and financial data extraction and normalization flows, ensuring traceability and consistency in Supabase.",
                "I integrated collaborative AI solutions and automations with n8n to boost the platform's operational efficiency."
              ]
            },
            pavas: {
              company: "Pavas Stay Connected",
              role: "Full Stack Developer",
              description: [
                "I developed comprehensive modules for payroll management and international supplier administration, synchronized with SAP and DocuSign.",
                "I performed preventive maintenance and optimization of applications in production, implementing caching strategies with Redis for Data Lakes.",
                "I managed the continuous deployment of critical updates, ensuring service stability through Docker containers.",
                "I facilitated direct technical feedback with clients for the design and evolution of personalized modules in enterprise applications."
              ]
            },
            bancolombia_it: {
              company: "Bancolombia S.A.",
              role: "IT Support & Automation",
              description: [
                "I technically led the massive migration of VIP clients from SVE transactional platforms to the new SVN digital solutions.",
                "I developed automation systems in Python for sending personalized corporate communications using dynamic HTML templates.",
                "I implemented and unified internal communication tools for the SME segment, optimizing the area's response times.",
                "I designed control dashboards in Power BI for proactive monitoring of technical documentation and tutorials for new financial channels."
              ]
            },
            bancolombia_intern: {
              company: "Bancolombia S.A.",
              role: "Software Development Intern",
              description: [
                "I developed RPA solutions with Python for the automation of operational loss accounting in Latin American offices.",
                "I implemented cross-border data integrations through Power Automate and Power Apps, unifying global supplier selection.",
                "I built modules in Django and React for the Operational Risks system, actively participating in agile methodologies and DevOps sprints.",
                "I optimized asset and data management in SharePoint through personalized integrations with the Microsoft stack."
              ]
            }
          },
          habilidades: {
            hard: {
              cabezera: "My Tools",
              titulo: "Hard Skills / Technologies",
              pie: "Explore my Repositories",
              items: {
                automatizacion: "Automation",
                power: "Microsoft Power Platform"
              }
            },
            soft: {
              cabezera: "Soft Skills",
              titulo: "Soft Skills / Collaboration",
              items: [
                "Agile Methodologies (Scrum/Agile)",
                "Assertive technical communication",
                "Proactive problem solving",
                "Adaptability to dynamic environments",
                "Commitment to code quality",
                "Intermediate technical English"
              ]
            }
          },
          proyectos: {
            cabezera: "Featured Projects",
            titulo: "Experience in Real Projects",
            contenido: "From developing administrative software for supplier management at Ponto Hair Club, to implementing AI-powered real estate analysis platforms at Arkia (Spain). My focus has always been on transforming complex requirements into functional and scalable modules.",
            pie: "View Code on GitHub"
          },
          estudios: {
            cabezera: "Education and Experience",
            titulo: "Training and Trajectory",
            contenido: "Software Analysis and Development Technologist from SENA CTM Itagüí. My career includes key roles in companies such as Bancolombia, where I optimized critical processes, and Arkia, where I led AI integrations and real-time automations.",
            pie: "Get to know SENA"
          },
          footer: {
            tagline: "Building scalable solutions with passion and precision.",
            copyright: "All rights reserved.",
            contacto: "Contact"
          }
        }
      }
    }
  });

export default i18n;
