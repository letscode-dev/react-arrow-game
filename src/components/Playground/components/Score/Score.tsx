import { useAppSelector } from "../../../../app/hooks"
import { EMOJI } from "../../constants"

import styles from "./Score.module.css"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <h3 className="headerText">Score</h3>
      <p>
        {EMOJI.ARROW} On error, the "Consecutive successful hits" value is reset
        to zero
      </p>
      <ul className={styles.list}>
        <li>
          Consecutive successful hits:{" "}
          <b className={styles.listItemSuccess}>{state.totalSuccessful}</b>
        </li>
        <li>
          Errors:{" "}
          <b className={styles.listItemUnsuccess}>{state.totalUnsuccessful}</b>
        </li>
      </ul>
    </>
  )
}

export default Score
