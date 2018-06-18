import React, { Component } from 'react';

const Song = function (props) {

  return (
    <div> 
      <p><strong>Artist: </strong>{props.artist}</p> 
      <p><strong>Title: </strong>{props.title}</p>
      <br />
    </div> 
  )
}

export default Song;