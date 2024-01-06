import {Component} from 'react'

import './index.css'

class Game extends Component {
  state = {score: 0}

    const onClickRock = () => {

    }

    const onClickScissors = () => {

    }

    const onClickPaper = () => {

    }

    const onClickRules = () => {
        return
        (
           <div>
                <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                />
          </div>
          )
    }

  render() {
    const {choicesList} = this.props
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
        <div>
          <button onClick={onClickRock}>
            <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png" />
          </button>
          <button onClick={onClickScissors}>
            <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png" />
          </button>
        </div>
            <button onClick={onClickPaper}>
            <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png" />
            </button>

        <button onClick={onClickRules}>
          <p>Rules</p>
        </button>
      </div>
    )
  }
}

export default Game
