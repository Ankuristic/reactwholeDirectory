import React from 'react'

const Card = (props) => {
    const {name,about} ={props}
  return (
   <>

<div className="card">
    <h3>Name: {name}</h3>
    <span>About: {about}</span>
  </div>
   </>
  )
}

Card.defaultProps ={
    name:"your Name",
    about:"about"
}

export default Card