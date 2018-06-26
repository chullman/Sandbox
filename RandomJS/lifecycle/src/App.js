import React, { Component } from 'react';
import { RepoList } from './components/RepoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RepoList user="chullman" />
      </div>
    );
  }
}

export default App;
