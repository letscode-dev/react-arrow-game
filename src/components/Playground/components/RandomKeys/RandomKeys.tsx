import cn from "classnames"

import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import { IMapArrowCodes } from "../../types"
import { IPlaygroundStepsState } from "../../store/types"

import { TypographyText, TypographyHeader } from "../../../UI"

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
      <TypographyHeader>Random keys</TypographyHeader>

      {state.steps.length ? (
        <div className={styles.wrapper}>
          {state.steps.map((element) => (
            <span className={getStylesRandomKeys(element)} key={element.step}>
              {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
            </span>
          ))}
        </div>
      ) : (
        <TypographyText>Press "Play" to start the game</TypographyText>
      )}
    </>
  )
}

export default RandomKeys
