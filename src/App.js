import React from "react";
import "./App.css";
import Signin from "./components/signin";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import MainBody from "./components/MainBody";
import ProjectCard from "./components/ProjectCard";
import Project from "./components/Project";
function App() {
  return (
    <div>
      <MainBody></MainBody>
      <div className="jumbotron">
        <div className="card-deck">
          <Project></Project>
        </div>
      </div>
    </div>
  );
}

export default App;
