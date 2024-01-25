// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain} = props

  return (
    <>
      {score === 12 ? (
        <div className="result-card">
          <div>
            <h1 className="text"> You Won </h1>
            <p className="best-score"> Best Score </p>
            <p className="total-score"> {score}/12 </p>
            <button type="button" onClick={onClickPlayAgain} className="button">
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            height="200px"
            width="150px"
            className="win-emoji"
          />
        </div>
      ) : (
        <div className="result-card">
          <div>
            <h1 className="text"> You Lose </h1>
            <p className="score-text"> Score </p>
            <p className="total-score">{score}/12</p>
            <button type="button" onClick={onClickPlayAgain} className="button">
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            height="200px"
            width="150px"
            className="lose-emoji"
          />
        </div>
      )}
    </>
  )
}

export default WinOrLoseCard
