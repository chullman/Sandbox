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
  handleSearchSubmit(event) {
    event.preventDefault();
  }

  handleAddSongSubmit = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    let artist = elements.artist.value;
    let title = elements.title.value;

    this.setState({ 
      songs: this.state.songs.concat([{"artist": artist, "title": title}])
    }, this.addSongToLocalStorage(this.state.songs))

  }

  addSongToLocalStorage(songs) {
    console.log("Now adding to local storage");
    localStorage.setItem('songs', JSON.stringify(songs));
  }



  render() {
    // Filter songs
    const filterSongs = JSON.parse(localStorage.getItem('songs')).filter(song => song.title.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div className="App App-Custom-Background">
        <h1>Songify</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <label htmlFor="search">Search for song: </label>
          <input id="search" onChange={this.updateFilter} />
        </form>
        <h4>Total Songs: {filterSongs.length}</h4>
        { filterSongs.map(song =>
          <Song artist={song.artist} title={song.title} />
        )}
        <form onSubmit={this.handleAddSongSubmit}>
          <h2>Add a song:</h2>
          <label htmlFor="addArtist">Artist: </label>
          <input id="addArtist" name="artist"/>
          <label htmlFor="addTitle">Title: </label>
          <input id="addTitle" name="title"/>
          <button>Add</button>
          <br/>
        </form>
      </div>
    );
  }
}

export default App;
