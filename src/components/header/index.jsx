import "./header.css";
import techPic from "../../assets/bestamisarikaya.jpg";
function Header() {
  return (
    <div className="header" id="header">
      <p className="style1">
        DENIS Lucien - Développeur fullstack
        <br />
        Bienvenue
        <br />
      </p>
      <img
        src={techPic}
        className="techpic"
        alt=""
      ></img>
    </div>
  );
}

export default Header;
