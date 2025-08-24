import "./resume.css";
function Resume() {
  return (
    <div className="resume">
      <img src="src/assets/portraitLD.png" alt="" className=" portrait"></img>
      <div className="textdiv">
        <h2>Qui suis-je ?</h2>
        <p className="description">
          À la suite d'une formation de Développeur Web suivie avec
          OpenClassrooms et financée par le Greta du Limousin. Durant ce
          parcours, j’ai appliqué mes compétences en JavaScript et TypeScript
          pour concevoir des interfaces dynamiques avec React, et développé des
          applications côté serveur avec Node.js et Express. J’ai travaillé sur
          la gestion et la structuration des données via MongoDB, MySQL et
          PostgreSQL, en veillant à la performance et à la fiabilité. J’ai
          également approfondi le développement en PHP avec le framework
          Symfony, et acquis des compétences en SEO afin d’optimiser la
          visibilité et le référencement des projets web. Ce parcours me permet
          aujourd’hui d’intervenir sur des projets variés, en intégrant à la
          fois des aspects front-end, back-end et optimisation pour le
          référencement.
        </p>
      </div>
    </div>
  );
}

export default Resume;
