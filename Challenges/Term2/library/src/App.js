import React, { Component } from 'react';
import './App.css';
import Song from './Song'



class App extends Component {
  state = {
    filter: '',
    songs: [
      {
        "artist": "Kanye",
        "title": 'Jesus Walks'
      },
      {
        "artist": "Kanye",
        "title": 'Gold Digger'
      },
      {
        "artist": "Kanye",
        "title": 'Touch The Sky'
      },
      {
        "artist": "Opeth",
        "title": "Deliverance"
      },
      {
        "artist": "Metallica",
        "title": "Master of Puppets"
      }
    ]
    
  }
  updateFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    // Filter songs
    const filterSongs = this.state.songs.filter(song => song.title.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div className="App App-Custom-Background">
        <h1>Songify</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search for song: </label>
          <input id="search" onChange={this.updateFilter} />
        </form>
        <h4>Total Songs: {filterSongs.length}</h4>
        { filterSongs.map(song =>
          <Song artist={song.artist} title={song.title} />
        )}
      </div>
    );
  }
}

export default App;
