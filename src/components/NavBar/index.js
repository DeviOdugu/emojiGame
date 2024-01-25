// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isStartGame} = props

  return (
    <nav className="nav-card">
      <div className="scores">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          height="25px"
          width="25px"
          className="emoji-logo"
        />
        <h1 className="heading"> Emoji Game </h1>
      </div>
      {!isStartGame && (
        <div className="scores">
          <p className="score"> Score: {score} </p>
          <p> Top Score: {topScore} </p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
