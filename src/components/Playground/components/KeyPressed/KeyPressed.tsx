import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES, IMapArrowCodes, EMOJI } from "../../constants"

import styles from "./KeyPressed.module.css"

const KeyPressed: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getKeyPressedElement = () => {
    if (state.steps.length) {
      const enteredValue = state.steps[state.steps.length - 1].enteredValue

      return enteredValue
        ? MAP_ARROW_CODES[enteredValue as keyof IMapArrowCodes]
        : EMOJI.TIME
    }

    return EMOJI.TIME
  }

  return (
    <>
      <h3 className="headerText">Key pressed</h3>
      <div className={styles.container}>
        <p>
          {EMOJI.ARROW} Press the key corresponding to the key in "Random keys"
        </p>
        <span className={styles.icon}>{getKeyPressedElement()}</span>
      </div>
    </>
  )
}

export default KeyPressed
