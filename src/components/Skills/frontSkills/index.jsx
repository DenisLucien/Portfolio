import "./frontSkills.css";
import Javascript from "../../assets/techLogo/javascript.png";
import Typescript from "../../assets/techLogo/typescript.png";
import ReactJS from "../../assets/techLogo/React-JS.png";
function frontSkills() {
  return (
    <div className="frontSkills">
      <h3>
        <i class="fa-solid fa-marker"></i> - Front-End
      </h3>
      <div className="roundWheelFront">
        <img src={Javascript} alt="" className="front1"></img>
        <img src={Typescript} alt="" className="front2"></img>
        <img src={ReactJS} alt="" className="front3"></img>
      </div>
      <p className="belowWheelText">
        Langages : JavaScript, TypeScript <br />
        Frameworks et Bibliothèques : React
        <br />
        Intégration Web : HTML5, CSS5, SCSS (Flexbox, Grid, animations CSS)
      </p>
    </div>
  );
}
export default frontSkills;
