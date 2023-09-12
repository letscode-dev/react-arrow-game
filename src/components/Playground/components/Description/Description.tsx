import { EMOJI } from "../../constants"

const Description: React.FC = () => {
  return (
    <>
      <h3 className="headerText">↑↓→← Arrow-game description</h3>
      <p>
        {EMOJI.ARROW} Player's goal is to press the keyboard arrow key that was
        shown to him before the next one appears.
      </p>
      <p>
        {EMOJI.ARROW} After three consecutive successful hits - game won, after
        three errors - lost.
      </p>
    </>
  )
}

export default Description
