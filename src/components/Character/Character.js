import React from "react"

import "./Character.css"

function Character(props) {
  return (
    <div className="card" onClick={event => props.clickEvent(event.target.src)}>
      <img className="card-height" src={props.name} alt="" />
    </div>
  )
}

export default Character
