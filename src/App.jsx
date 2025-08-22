import { useState } from "react";
import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header";
import Nav from "./nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav></Nav>
      <div className="innerBody">
        <Header></Header>
        <div className="resume">
          <img
            src="src/assets/portraitLD.png"
            alt=""
            className=" portrait"
          ></img>
          <p className="description">
            À la suite d'une formation de Développeur Web suivie avec
            OpenClassrooms et financée par le Greta du Limousin. Durant ce
            parcours, j’ai appliqué mes compétences en JavaScript et TypeScript
            pour concevoir des interfaces dynamiques avec React, et développé
            des applications côté serveur avec Node.js et Express. J’ai
            travaillé sur la gestion et la structuration des données via
            MongoDB, MySQL et PostgreSQL, en veillant à la performance et à la
            fiabilité. J’ai également approfondi le développement en PHP avec le
            framework Symfony, et acquis des compétences en SEO afin d’optimiser
            la visibilité et le référencement des projets web. Ce parcours me
            permet aujourd’hui d’intervenir sur des projets variés, en intégrant
            à la fois des aspects front-end, back-end et optimisation pour le
            référencement.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
