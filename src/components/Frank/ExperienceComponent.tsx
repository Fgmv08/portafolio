import React from 'react';

interface ExperienceItem {
    role: string;
    company: string;
    stack: string[];
    description: string[];
}

interface ExperienceComponentProps {
    experiences: ExperienceItem[];
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({ experiences }) => {
    return (
        <section className="experience-section">
            <div className="experience-header">
                <p className="text-bridge"><b>------</b> Trayectoria Profesional</p>
                <h2 className="text-title">Experiencia Laboral</h2>
            </div>

            <div className="experience-timeline">
                {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                        <div className="experience-info">
                            <span className="experience-company">{exp.company}</span>
                            <h3 className="experience-role">{exp.role}</h3>
                            <div className="experience-stack">
                                {exp.stack.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <ul className="experience-list">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceComponent;
