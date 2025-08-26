import "./projects.css";
import monVieuxGrimoire from "../../assets/monVieuxGrimoire.png";
import SiteWebForm from "../../assets/SiteWebForm.png";
function Projects() {
  return (
    <div className="latestProjects" id="projects">
      <h2>Derniers Projets</h2>
      <div className="project">
        <h3>Projet Express/MongoDB - Mon vieux Grimoire</h3>
        <img src={monVieuxGrimoire} alt=""></img>
        <p className="projectText"></p>
      </div>

      <div className="project">
        <h3>Projet Symfony - BastardBookingSystem</h3>
        <img src={SiteWebForm} alt=""></img>
        <p className="projectText"></p>
      </div>

      <div className="project">
        <h3>Projet</h3>
        <img src="src/assets/" alt=""></img>
        <p className="projectText"></p>
      </div>
    </div>
  );
}

export default Projects;
