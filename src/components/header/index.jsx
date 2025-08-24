import "./header.css";
function Header() {
  return (
    <div className="header">
      <p className="style1">
        DENIS Lucien - Développeur fullstack
        <br />
        Bienvenue
        <br />
      </p>
      <img
        src="src/assets/bestamisarikaya.jpg"
        className="techpic"
        alt=""
      ></img>
    </div>
  );
}

export default Header;
