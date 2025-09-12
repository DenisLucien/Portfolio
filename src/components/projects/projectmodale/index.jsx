import "./projectmodale.css";
function ProjectModale({ tabProj, numProj, onClose }) {
  function handleClickOutside(e) {
    if (e.target.classList.contains("projectmodale")) {
      onClose();
      console.log("outside");
    }
  }
  let link, linktext;
  if (tabProj[numProj].titre === "BastardBookingSystem") {
    linktext = "Pas de lien disponible";
    link = "#";
  } else {
    linktext = "Lien GIithub du projet";
    link = tabProj[numProj].lien;
  }
  return (
    <div className="projectmodale" onClick={handleClickOutside}>
      <h3>{tabProj[numProj].titre}</h3>
      <div className="blocImgDescr">
        <img src={tabProj[numProj].imgsrc} alt=""></img>
        <div className="rightside">
          <p className="modaledescription">{tabProj[numProj].description}</p>
          <a href={link} target="_blank">
            {linktext}
          </a>
        </div>
      </div>

      <button onClick={onClose}>Fermer</button>
    </div>
  );
}

export default ProjectModale;
