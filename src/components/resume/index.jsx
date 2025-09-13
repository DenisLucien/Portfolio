import "./resume.css";
import portraitLD from "../../assets/portraitLD.png";
function Resume() {
  return (
    <div className="resume" id="resume">
      <img src={portraitLD} alt="" className=" portrait"></img>
      <div className="textdiv">
        <h2>Qui suis-je ?</h2>
        <p className="description">
          Durant un parcours de Développeur Web suivi avec OpenClassrooms et
          financé par le Greta du Limousin j’ai acquis des compétences en
          JavaScript et TypeScript pour concevoir des interfaces dynamiques avec
          React, et développé des bases de données avec Node.js et
          Express. J’ai travaillé sur la gestion et la structuration des données
          via MongoDB, MySQL et PostgreSQL, en veillant à la performance et à la
          fiabilité. J’ai également approfondi le développement en PHP avec le
          framework Symfony, et acquis des compétences en SEO afin d’optimiser
          la visibilité et le référencement des projets web. Ce parcours me
          permet aujourd’hui d’intervenir sur des projets variés, en intégrant à
          la fois des aspects front-end (responsive), back-end et optimisation pour le
          référencement.
        </p>
      </div>
    </div>
  );
}

export default Resume;
