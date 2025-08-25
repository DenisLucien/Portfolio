import "./projects.css";
function Projects() {
  return (
    <div className="latestProjects" id="projects">
      <h2>Derniers Projets</h2>
      <div className="project">
        <h3>Projet Express/MongoDB - Mon vieux Grimoire</h3>
        <img src="src/assets/monVieuxGrimoire.png" alt=""></img>
        <p className="projectText"></p>
      </div>

      <div className="project">
        <h3>Projet Symfony - BastardBookingSystem</h3>
        <img src="src/assets/SiteWebForm.png" alt=""></img>
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
