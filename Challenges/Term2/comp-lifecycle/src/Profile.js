import React, { Component } from 'react';

export class Profile extends Component {

  constructor(props) {
    super(props)
    console.log('constructor');
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