import cn from "classnames"

import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES, IMapArrowCodes, EMOJI } from "../../constants"
import { IPlaygroundStepsState } from "../../store/types"

import styles from "./RandomKeys.module.css"

const RandomKeys: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    return cn(
      styles.icon,
      element.success && element.success !== null && styles.iconSuccess,
      !element.success && element.success !== null && styles.iconUnsuccess,
    )
  }

  return (
    <>
      <h3 className="headerText">Random keys</h3>
      {state.steps.length ? (
        state.steps.map((element, index) => (
          <span className={getStylesRandomKeys(element)} key={element.step}>
            {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
          </span>
        ))
      ) : (
        <p>{EMOJI.ARROW} Press "Play" to start the game</p>
      )}
    </>
  )
}

export default RandomKeys
