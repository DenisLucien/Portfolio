import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Resume from "./components/resume";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="innerBody">
        <Header></Header>
        <Resume></Resume>
        <Skills></Skills>
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
