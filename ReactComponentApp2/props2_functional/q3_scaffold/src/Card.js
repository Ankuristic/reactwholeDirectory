import React from 'react'

function Card (props){
    const {name,about}=props
    return(
        <>
  <div className="card">
    <h3>Name: {props.name}</h3>
    <span>About: {props.about}</span>
  </div>

        </>
    )
}

Card.defaultProps ={
    name:"your Name",
    about:"about"
}

export default Card