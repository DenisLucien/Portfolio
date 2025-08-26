import "./nav.css";
function Nav() {
  return (
    <header>
      <nav className="nav">
        <a href="#header" class="siteLink">
          <i class="fa-solid fa-briefcase"></i> Portfolio - DENIS Lucien
        </a>
        <div class="navButtons">
          <a href="#resume" class="siteLink">
            Présentation
          </a>
          <a href="#skills" class="siteLink">
            Compétences
          </a>

          <a href="#projects" class="siteLink">
            Derniers Projets
          </a>

          <a href="#contacts" class="siteLink">
            Contacts
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
