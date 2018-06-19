import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Profile } from './Profile.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      person: []
    }
  }

  fetchPerson = () => {

    const url = `https://randomuser.me/api/`
 
    fetch(url).then(
      response => response.json()
    ).then((person) => {
      this.setState({ person: person.results[0] })
    })
  }

  componentDidMount() {
  
    this.fetchPerson()
  }

  render() {
    const { picture } = this.state.person
    return (
      <div className="App">
        {picture && <Profile image={this.state.person.picture.large}/> }
      </div>
    );
  }
}

export default App;
