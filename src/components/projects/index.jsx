import "./projects.css";
import monVieuxGrimoire from "../../assets/monVieuxGrimoire.png";
import SiteWebForm from "../../assets/SiteWebForm.png";
import KasaPic from "../../assets/Kasa.png";
import Carducci from "../../assets/Carducci.jpg";
import Booki from "../../assets/Booki.jpg";
import Bluel from "../../assets/sophieBluel.jpg";
import { useState } from "react";
import ProjectModale from "./projectmodale";

let projects = [
  {
    titre: "MonVieuxGrimoire",
    imgsrc: monVieuxGrimoire,
    description: `Dans le projet MonVieuxGrimoire l'objectif était de coder la base de données noSQL de ce site pour une chaîne de librairies.
       Le projet utilise Typescript, Express avec une base de données MongoDB.
        Le site inclut des opérations CRUD avec middleware d'authentification(JWT), comptes utilisateur(bcrypt),
        stockage et optimisation d'images(multer et sharp).
      `,
    lien: "https://github.com/DenisLucien/MonVieuxGrimoire",
  },
  {
    titre: "BastardBookingSystem",
    imgsrc: SiteWebForm,
    description: `Le projet BastardBookingSystem est un projet permettant l'envoi de demandes de représentations pour groupe de musiques.
      Le but est de pouvoir automatiquement demander des demandes et d'en garder un suivi via crm.
      Pour se faire on met en place une base de données qui stock des groupes de musiques, lieux/contacts, utilisateurs et échanges.
      Technologies: Php/Symfony, PostGreSQL/Docker. Autres: mailer (envoi de mails de demandes), API Geoportail(autocomplétion),
       Stimulus ( bibliotheque js pour page dynamique malgrès le php).
       Le code est privé car réalisé pour Nicolas Vauché.`,
    lien: "Aucun",
  },
  {
    titre: "Kasa",
    imgsrc: KasaPic,
    description: `Le but du projet Kasa était de refondre entièrement le site Kasa précèdemment en ASP.NET en React.
    Il fallait également mettre en place des animations et utiliser du SCSS ainsi qu'une architecture de dossier comme
    définie par l'entreprise.`,
    lien: "https://github.com/DenisLucien/ProjetKasa",
  },
  {
    titre: "Nina Carducci",
    imgsrc: Carducci,
    description: `L’objectif du projet était d’optimiser le site d’une photographe professionnelle afin d’améliorer ses
     performances, son référencement naturel (SEO) et son accessibilité, en s’appuyant sur un audit réalisé avec Lighthouse.`,
    lien: "https://github.com/DenisLucien/NinaCarducciSEO",
  },
  {
    titre: "SophieBluel",
    imgsrc: Bluel,
    description: `L’objectif du projet était de développer un portfolio d’architecte en JavaScript en intégrant des fonctionnalités
     dynamiques (galerie, filtres et gestion de projets) grâce à la manipulation du DOM et l’exploitation d’une API.`,
    lien: "https://github.com/DenisLucien/SophieBluel",
  },
  {
    titre: "Booki",
    imgsrc: Booki,
    description: `L’objectif du projet était d'intégrer une interface web statique pour reproduire fidèlement la maquette d’un site de réservation d’hébergements
     et d’activités (Booki), en utilisant uniquement HTML5 et CSS3, tout en garantissant une mise en page responsive adaptée
      aux différents supports (desktop, tablette, mobile).`,
    lien: "https://github.com/DenisLucien/Projet_Booki",
  },
];

function Projects() {
  const [modaleproject, setmodaleproject] = useState(null);
  function toggleModale(value) {
    setmodaleproject(value);
  }

  function closeModale() {
    setmodaleproject(null);
  }
  return (
    <div className="latestProjects" id="projects">
      <h2>Derniers Projets</h2>

      <div className="projectgrid">
        <div className="project" onClick={() => toggleModale(0)}>
          <h3>Projet Express/MongoDB - Mon vieux Grimoire</h3>
          <img src={monVieuxGrimoire} alt=""></img>
          <p className="projectText"></p>
        </div>

        <div className="project" onClick={() => toggleModale(1)}>
          <h3>Projet Symfony - BastardBookingSystem</h3>
          <img src={SiteWebForm} alt=""></img>
          <p className="projectText"></p>
        </div>

        <div className="project" onClick={() => toggleModale(2)}>
          <h3>Projet React/SCSS - Kasa</h3>
          <img src={KasaPic} alt=""></img>
          <p className="projectText"></p>
        </div>
        <div className="project" onClick={() => toggleModale(3)}>
          <h3>Projet SEO/Debuggage - Nina Carducci</h3>
          <img src={Carducci} alt=""></img>
          <p className="projectText"></p>
        </div>
        <div className="project" onClick={() => toggleModale(4)}>
          <h3>Projet JS/API - Sophie Bluel</h3>
          <img src={Bluel} alt=""></img>
          <p className="projectText"></p>
        </div>
        <div className="project" onClick={() => toggleModale(5)}>
          <h3>Projet HTML/CSS - Booki</h3>
          <img src={Booki} alt=""></img>
          <p className="projectText"></p>
        </div>
      </div>

      {modaleproject !== null && (
        <ProjectModale
          tabProj={projects}
          numProj={modaleproject}
          onClose={closeModale}
        />
      )}
    </div>
  );
}

export default Projects;
