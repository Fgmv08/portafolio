import React from 'react';

interface ContentComponentProps {
    path: string;
    titulo?: string;
    contenido?: string;
    cabezera?: string;
    pie?: string;
    link?: string;
}

const ContentComponent: React.FC<ContentComponentProps> = ({
    path,
    titulo,
    contenido,
    cabezera,
    pie = "Read More",
    link = ""
}) => {
    return (
        <section className="content">
            <div className="container-text">
                {cabezera && <p className="text-bridge"><b>------</b> {cabezera}</p>}
                <h2 className="text-title">{titulo}</h2>
                <p className="text-description">{contenido}</p>
                <p className="text-bridge">
                    <a href={link} target='_blank' rel="noreferrer">{pie} </a>
                    <b className="line">-------</b>
                </p>
            </div>
            <div className="container-img">
                <img src={`/${path}`} alt={path} />
            </div>
        </section>
    );
};

export default ContentComponent;
