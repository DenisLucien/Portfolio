import "./projects.css";
import monVieuxGrimoire from "../../assets/monVieuxGrimoire.png";
import SiteWebForm from "../../assets/SiteWebForm.png";
import { useState } from "react";
import ProjectModale from "./projectmodale";

let projects = [
  {
    titre: "monVieuxGrimoire",
    imgsrc: monVieuxGrimoire,
    description: "Description de mon vieux grimoire",
  },
  {
    titre: "bastarBookingSystem",
    imgsrc: SiteWebForm,
    description: "Description de mon vieux grimoire",
  },
  {
    titre: "kasa",
    imgsrc: monVieuxGrimoire,
    description: "Description de mon vieux grimoire",
  },
];

function Projects() {
  const [modaleproject, setmodaleproject] = useState(null);
  function toggleModale(value) {
    setmodaleproject(value);
  }

  function closeModale() {
    setmodaleproject(null);
  }
  return (
    <div className="latestProjects" id="projects">
      <h2>Derniers Projets</h2>
      <div className="project" onClick={() => toggleModale(0)}>
        <h3>Projet Express/MongoDB - Mon vieux Grimoire</h3>
        <img src={monVieuxGrimoire} alt=""></img>
        <p className="projectText"></p>
      </div>

      <div className="project" onClick={() => toggleModale(1)}>
        <h3>Projet Symfony - BastardBookingSystem</h3>
        <img src={SiteWebForm} alt=""></img>
        <p className="projectText"></p>
      </div>

      <div className="project" onClick={() => toggleModale(2)}>
        <h3>Projet</h3>
        <img src={monVieuxGrimoire} alt=""></img>
        <p className="projectText"></p>
      </div>
      {modaleproject !== null && (
        <ProjectModale
          tabProj={projects}
          numProj={modaleproject}
          onClose={closeModale}
        />
      )}
    </div>
  );
}

export default Projects;
