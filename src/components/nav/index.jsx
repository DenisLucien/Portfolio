import "./nav.css";
function Nav() {
  return (
    <header>
      <nav className="nav">
        <a href="" class="siteLink">
          <i class="fa-solid fa-briefcase"></i> Portfolio - DENIS Lucien
        </a>
        <div class="navButtons">
          <a href="#resume" class="siteLink">
            Présentation
          </a>
          <a href="#skills" class="siteLink">
            Compétences
          </a>

          <a href="" class="siteLink">
            Contacts
          </a>

          <a href="#projects" class="siteLink">
            Derniers Projets
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
