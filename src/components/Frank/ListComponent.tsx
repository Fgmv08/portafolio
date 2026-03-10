import React from 'react';

interface ListComponentProps {
    path: string;
    titulo?: string;
    list?: string[];
    cabezera?: string;
    pie?: string;
    link?: string;
}

const ListComponent: React.FC<ListComponentProps> = ({
    path,
    titulo,
    list = ['Habilidad 1', 'Habilidad 2', 'Habilidad 3'],
    cabezera,
    pie = "Read More",
    link = ""
}) => {
    return (
        <section className="content">
            <div className="container-text">
                {cabezera && <p className="text-bridge"><b className="line">------</b> {cabezera}</p>}
                <h2 className="text-title">{titulo}</h2>
                <ul className="list">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                {link && (
                    <p className="text-bridge">
                        <a href={link} target='_blank' rel="noreferrer">{pie} </a>
                        <b className="line">-------</b>
                    </p>
                )}
            </div>
            <div className="container-img">
                <img src={`/${path}`} alt={path} />
            </div>
        </section>
    );
};

export default ListComponent;
