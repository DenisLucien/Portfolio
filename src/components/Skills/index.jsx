import FrontSkills from "./frontSkills";
import BackSkills from "./backSkills";
import TierTools from "./tierTools";
import "./Skills.css";
function Skills() {
  return (
    <div className="skills" id="skills">
      <h2>
        <i class="fa-solid fa-book"></i> Compétences
      </h2>
      <div className="row">
        <FrontSkills></FrontSkills>
        <BackSkills></BackSkills>
      </div>
      <TierTools></TierTools>
    </div>
  );
}
export default Skills;
