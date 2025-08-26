import "./backSkills.css";
import symfony from "../../assets/techLogo/symfony.png";
import phpLogo from "../../assets/techLogo/phpLogo.png";
import nodeJS from "../../assets/techLogo/nodeJS.png";
import express from "../../assets/techLogo/express.png";
import mongoDB8 from "../../assets/techLogo/mongoDB8.png";

function backSkills() {
  return (
    <div className="backSkills">
      <h3>
        <i class="fa-solid fa-server"></i> - Back-End
      </h3>
      <div className="roundWheelBack">
        <img
          src={symfony}
          alt=""
          className="back1"
        ></img>
        <img
          src={phpLogo}
          alt=""
          className="back2"
        ></img>
        <img
          src={nodeJS}
          alt=""
          className="back3"
        ></img>
        <img
          src={express}
          alt=""
          className="back4"
        ></img>
        <img
          src={mongoDB8}
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
