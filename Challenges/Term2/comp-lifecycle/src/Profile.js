import React, { Component } from 'react';

export class Profile extends Component {

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
    console.log('render')
    return (
      <div>
        <img src={this.props.image}/>
        <h4>{this.props.name}</h4>
        <p>{this.props.email}</p>
        <p>{this.props.phone}</p>
      </div>
    )
  }

}