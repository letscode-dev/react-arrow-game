import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES, IMapArrowCodes, EMOJI } from "../../constants"

import { TypographyText, TypographyHeader } from "../../../UI"

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
      <TypographyHeader>Key pressed</TypographyHeader>

      <div className={styles.container}>
        <TypographyText>
          Press the key corresponding to the key in "Random keys"
        </TypographyText>
        <div className={styles.wrapper}>
          <span className={styles.icon}>{getKeyPressedElement()}</span>
        </div>
      </div>
    </>
  )
}

export default KeyPressed
