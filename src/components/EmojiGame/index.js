// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmoji: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  isClickedEmoji = id => {
    const {score, clickedEmoji} = this.state

    if (!clickedEmoji.includes(id)) {
      this.setState(prevSate => ({
        clickedEmoji: [...prevSate.clickedEmoji, id],
        score: score + 1,
      }))
    } else {
      this.setState({
        clickedEmoji: 'fail',
      })
    }
  }

  onClickPlayAgain = () => {
    const {score, topScore} = this.state
    let bestScore

    if (score > topScore) {
      bestScore = score
    } else {
      bestScore = topScore
    }
    this.setState({
      score: 0,
      topScore: bestScore,
      clickedEmoji: [],
    })
  }

  render() {
    const emojiLists = this.shuffledEmojisList()
    const {score, topScore, clickedEmoji} = this.state

    // In this if any one condition is true then game is ended
    const isStartGame = score === 12 || clickedEmoji === 'fail'

    return (
      <div className="card-container">
        <NavBar score={score} topScore={topScore} isStartGame={isStartGame} />
        {!isStartGame && (
          <ul className="lists">
            {emojiLists.map(eachItem => (
              <EmojiCard
                key={eachItem.id}
                emojiCardDetails={eachItem}
                isClickedEmoji={this.isClickedEmoji}
              />
            ))}
          </ul>
        )}
        {isStartGame && (
          <WinOrLoseCard
            score={score}
            onClickPlayAgain={this.onClickPlayAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
