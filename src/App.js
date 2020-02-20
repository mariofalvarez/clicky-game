import React, { Component } from "react"

import Game from "./components/Game/Game"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      scoreCounter: 0
    }

    this.updateCounter = this.updateCounter.bind(this)
  }

  updateCounter() {
    this.setState({ scoreCounter: this.state.scoreCounter + 1 })
  }

  render() {
    console.log(this.state.scoreCounter)
    return (
      <div>
        <Game />
      </div>
    )
  }
}
