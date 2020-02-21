import React from "react"
import "./NavBar.css"

function NavBar(props) {
  return (
    <div className="navbar">
      <div>Clicky Game</div>
      <div className={props.notifsColor}>{props.notifs}</div>
      <div>
        Score: {props.score} <span className="divider">|</span> Highscore:{" "}
        {props.highscore}
      </div>
    </div>
  )
}

export default NavBar
