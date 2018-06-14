import React from 'react';

const projectArray = 

const Project = (props) => {
  return (
    <div>
      <a href={ props.link }><h3>{ props.title }</h3></a>
      <p>{ props.description }</p>
      
    </div>
  )
}

export default Project