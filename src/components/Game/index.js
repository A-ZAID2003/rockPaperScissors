import {Component} from 'react'

import './index.css'

class Game extends Component {
  state = {
    score: 0,
  }

  onClickRock = () => {}

  onClickScissors = () => {}

  onClickPaper = () => {}

  onClickRules = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
        alt="rules"
      />
    </div>
  )

  renderGameView = () => {
    const {choicesList} = this.props
    const {id, imageUrl} = this.state
    return
    ;<>
      <div>
        <button onClick={this.onClickRock}>
          <img src={imageUrl} />
        </button>
        <button onClick={this.onClickScissors}>
          <img src={imageUrl} />
        </button>
      </div>

      <div>
        <button onClick={this.onClickPaper}>
          <img src={imageUrl} />
        </button>
      </div>
    </>
  }

  render() {
    const {score} = this.state

    return (
      <div>
        <div>
          <h1>Rock Paper Scissors</h1>
          <div>
            <p>Score</p>
            <p>{score}</p>
          </div>
        </div>
        {this.renderGameView()}
        <button onClick={this.onClickRules} type="button">
          <p>RULES</p>
        </button>
      </div>
    )
  }
}

export default Game
