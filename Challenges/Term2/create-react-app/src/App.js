import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import Project from './Project'

const projectsJson = [
    {
      "title": "My awesome project",
      "description": "Description 1",
      "link": "http://google.com"
    },
    {
      "title": "Another project",
      "description": "Description 2",
      "link": "http://google.com"
    },
    {
      "title": "And another",
      "description": "Description 3",
      "link": "http://google.com"
    }
  ];




let projectsList = projectsJson.map(function(project){
  return <li><Project title={project.title} description={project.description} link={project.link} /></li>;
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <NavBar />
          <h1>My Portfolio</h1>
          <ul>{ projectsList }</ul>
        </div>
      </div>
    );
  }
}

export default App;
