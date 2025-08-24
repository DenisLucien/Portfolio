import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Resume from "./components/resume";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="innerBody">
        <Header></Header>
        <Resume></Resume>
        <Skills></Skills>
      </div>
    </>
  );
}

export default App;
