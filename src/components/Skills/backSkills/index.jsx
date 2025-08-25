import "./backSkills.css";

function backSkills() {
  return (
    <div className="backSkills">
      <h3>
        <i class="fa-solid fa-server"></i> - Back-End
      </h3>
      <div className="roundWheelBack">
        <img
          src="src/assets/techLogo/symfony.png"
          alt=""
          className="back1"
        ></img>
        <img
          src="src/assets/techLogo/phpLogo.png"
          alt=""
          className="back2"
        ></img>
        <img
          src="src/assets/techLogo/nodeJS.png"
          alt=""
          className="back3"
        ></img>
        <img
          src="src/assets/techLogo/express.png"
          alt=""
          className="back4"
        ></img>
        <img
          src="src/assets/techLogo/mongoDB8.png"
          alt=""
          className="back5"
        ></img>
      </div>
      <p className="belowWheelText">
        Langages et Frameworks : PHP (Symfony), Node.js
        (Express.js)
        <br /> Bases de Données :PostGreSQL, MySQL, MongoDB
        <br /> API : Création et consommation d'API REST ainsi qu'utilisation (Géoportail pour l'autocomplétion d'adresses)
      </p>
    </div>
  );
}
export default backSkills;
