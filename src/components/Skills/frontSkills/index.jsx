import "./frontSkills.css";

function frontSkills() {
  return (
    <div className="frontSkills">
      <h3>
        <i class="fa-solid fa-marker"></i> - Front-End
      </h3>
      <div className="roundWheelFront">
        <img
          src="src/assets/techLogo/javascript.png"
          alt=""
          className="front1"
        ></img>
        <img
          src="src/assets/techLogo/typescript.png"
          alt=""
          className="front2"
        ></img>
        <img
          src="src/assets/techLogo/React-JS.png"
          alt=""
          className="front3"
        ></img>
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
