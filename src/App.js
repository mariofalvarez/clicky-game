import React, { Component } from "react"

import Container from "./components/Container/Container"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import images from "./images/images"

class App extends Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      highscore: 0,
      notifsColor: "",
      notifs: "Click on each image only once to get points.",
      characters: this.shuffleArray(),
      wasClicked: [],
      shake: false
    }

    this.clickEvent = this.userClick.bind(this)
  }

  shuffleArray() {
    const newArray = images.slice()
    const shuffleArray = []

    while (newArray.length > 0) {
      shuffleArray.push(
        newArray.splice(Math.floor(Math.random() * newArray.length), 1)[0]
      )
    }
    return shuffleArray
  }

  userClick(data) {
    const prevState = this.state.wasClicked.slice()
    const shuffled = this.shuffleArray()
    let score = this.state.score
    let highscore = this.state.highscore

    if (!this.state.wasClicked.includes(data)) {
      if (score === highscore) {
        score++
        highscore++
      } else {
        score++
      }

      prevState.push(data)
    }

    if (this.state.wasClicked.includes(data)) {
      let score = 0

      return this.setState({
        score: score,
        highscore: highscore,
        notifsColor: "incorrect",
        notifs: "Incorrect guess! Try again.",
        characters: shuffled,
        wasClicked: [],
        shake: true
      })
    }

    this.setState({
      score: score,
      highscore: highscore,
      notifsColor: "correct",
      notifs: "Good choice!",
      characters: shuffled,
      wasClicked: prevState,
      shake: false
    })
  }

  render() {
    const state = this.state
    return (
      <div>
        <NavBar
          score={state.score}
          highscore={state.highscore}
          notifs={state.notifs}
          notifsColor={state.notifsColor}
        />
        <Container
          shake={state.shake}
          characters={state.characters}
          clickEvent={this.clickEvent}
        />
        <Footer />
      </div>
    )
  }
}

export default App
