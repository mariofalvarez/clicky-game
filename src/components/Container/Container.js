import React from "react"

import Character from "../Character/Character"

import "./Container.css"

function Container(props) {
  return (
    <div
      className={
        props.shake
          ? "container d-flex flex-wrap justify-content-center shake"
          : "container d-flex flex-wrap justify-content-center"
      }
    >
      {props.characters.map((data1, data2) => (
        <Character name={data1} key={data2} clickEvent={props.clickEvent} />
      ))}
    </div>
  )
}

export default Container
