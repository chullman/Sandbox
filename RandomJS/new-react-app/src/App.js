import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './Project'
import NavBar from './NavBar'




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
            <Project title="My Awesome Project" description="description 1" link="http://www.google.com" />
            <Project title="Another Project" description="description 2" link="http://www.google.com" />
            <Project title="And another one!" description="description 3" link="http://www.google.com" />
          </div>
      </div>
    );
  }
}

export default App;
