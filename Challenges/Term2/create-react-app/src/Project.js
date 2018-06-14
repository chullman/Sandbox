import React, { Component } from 'react';

const Project = function (props) {
  return (
    <div>
      <a href={ props.link }><h3>{ props.title }</h3></a>
      <p>{ props.description }</p>
      
    </div>
  )
}

export default Project;