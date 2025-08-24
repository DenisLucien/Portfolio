import FrontSkills from "./frontSkills";
import BackSkills from "./backSkills";
import "./Skills.css";
function Skills() {
  return (
    <div className="skills">
      <h2>Compétences</h2>
      <div className="row">
        <FrontSkills></FrontSkills>
        <BackSkills></BackSkills>
      </div>
    </div>
  );
}
export default Skills;
