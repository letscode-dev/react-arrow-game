import { useEffect, useCallback } from "react"

import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { MAP_ARROW_CODES } from "../../constants"
import { useKeyPressedElement } from "./hooks"
import { TypographyHeader, TypographyText } from "../../../UI"

import styles from "./KeyPressed.module.css"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const keyPressedElement = useKeyPressedElement()

  const dispatch = useAppDispatch()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div>
      <TypographyHeader>Key pressed</TypographyHeader>

      <div className={styles.container}>
        <TypographyText>
          Press the key corresponding to the key in "Random keys"
        </TypographyText>

        <div className={styles.wrapper}>
          <span className={styles.icon}>{keyPressedElement}</span>
        </div>
      </div>
    </div>
  )
}

export default KeyPressed
