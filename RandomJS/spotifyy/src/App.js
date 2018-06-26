import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    filter: '',
    songs: ['Touch the sky', 'Jesus walks', 'Gold Digger']
  }


  filter = (event) => {

    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const { name } = this.state
    return (
      <div className="App">

        <h1>Spotifyy</h1>
        <form>
          <label htmlFor="search">Search for song:</label>
          <input id="search" onChange={this.filter} />
        </form>
        { this.state.songs.filter(song => song.toLowerCase().includes(this.state.filter.toLowerCase())).map(song => <p>{song}</p>)}

        {/* 
        <p>Hello {name || 'Guest'}</p>
        <input onChange={this.updateName} />
        */}
        
      </div>
    );
  }
}

export default App;
