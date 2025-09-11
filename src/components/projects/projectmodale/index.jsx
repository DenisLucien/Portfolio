import "./projectmodale.css";
function ProjectModale({ tabProj, numProj, onClose }) {
  function handleClickOutside(e) {
    if (e.target.classList.contains("projectmodale")) {
      onClose();
      console.log("outside");
    }
  }
  return (
    <div className="projectmodale" onClick={handleClickOutside}>
      <h3>{tabProj[numProj].titre}</h3>
      <div className="blocImgDescr">
        <img src={tabProj[numProj].imgsrc} alt=""></img>
        <p className="modaledescription">{tabProj[numProj].description}</p>
      </div>

      <button onClick={onClose}>Fermer</button>
    </div>
  );
}

export default ProjectModale;
