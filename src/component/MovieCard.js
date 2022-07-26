import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
  return (
    
        <div className="card">
        <div className="img-container">
        <img src={props.poster} alt={props.title}></img> 
          
        </div>
        <div className="content">
          
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <a href={props.url} className="button" > LOOK  </a> 
        </div>
        </div>
  )
}

export default MovieCard