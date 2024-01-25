// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, isClickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiCardDetails

  const onClickEmoji = () => {
    isClickedEmoji(id)
  }

  return (
    <li className="list-card">
      <button type="button" onClick={onClickEmoji} className="emoji-button">
        <img
          src={emojiUrl}
          alt={emojiName}
          height="50px"
          width="50px"
          className="emoji-image"
        />
      </button>
    </li>
  )
}

export default EmojiCard
