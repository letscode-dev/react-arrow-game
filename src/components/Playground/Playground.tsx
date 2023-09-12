import { useState, useEffect, useCallback, useRef } from "react"
import cn from "classnames"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  setCurrentStep,
  setEnteredValue,
  setSteps,
  setSuccess,
  resetStore,
  IPlaygroundStepsState,
} from "./playgroundSlice"

import {
  MAP_ARROW_CODES,
  INTERVAL_TIME,
  EMOJI,
  END_GAME_CONDITIONS,
  IMapArrowCodes,
} from "./constants"

import styles from "./Playground.module.css"

const Playground = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)

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
  }, [handleKeyDown])

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setSuccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }

    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }
  }, [isTimerActive, dispatch, state])

  useEffect(() => {
    state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT &&
      setIsSuccessEndGame(true)
    state.totalUnsuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT &&
      setIsSuccessEndGame(false)

    if (
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT ||
      state.totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT
    ) {
      setIsShowModal(true)
      setIsTimerActive(false)
    }
  }, [state.totalSuccessful, state.totalUnsuccessful])

  const handleResetGame = () => {
    dispatch(resetStore())
    setIsShowModal(false)
  }

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    return cn(
      styles.icon,
      element.success && element.success !== null && styles.iconSuccess,
      !element.success && element.success !== null && styles.iconUnsuccess,
    )
  }

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
    <div className={styles.container}>
      <div className={styles.columns}>
        <h3 className={styles.headerText}>Random keys</h3>
        {state.steps.length ? (
          state.steps.map((element, index) => (
            <span className={getStylesRandomKeys(element)} key={index}>
              {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
            </span>
          ))
        ) : (
          <p>{EMOJI.ARROW} Press "Play" to start the game</p>
        )}

        <h3 className={styles.headerText}>Key pressed</h3>
        <div className={styles.containerKeyPressed}>
          <p>
            {EMOJI.ARROW} Press the key corresponding to the key in "Random
            keys"
          </p>
          <span className={styles.icon}>{getKeyPressedElement()}</span>
        </div>

        <h3 className={styles.headerText}>Score</h3>
        <p>
          {EMOJI.ARROW} On error, the "Consecutive successful hits" value is
          reset to zero
        </p>
        <ul className={styles.list}>
          <li>
            Consecutive successful hits:{" "}
            <b className={styles.listItemSuccess}>{state.totalSuccessful}</b>
          </li>
          <li>
            Errors:{" "}
            <b className={styles.listItemUnsuccess}>
              {state.totalUnsuccessful}
            </b>
          </li>
        </ul>
      </div>

      <div className={styles.columns}>
        <h3 className={styles.headerText}>↑↓→← Arrow-game description</h3>
        <p>
          {EMOJI.ARROW} Player's goal is to press the keyboard arrow key that
          was shown to him before the next one appears.
        </p>
        <p>
          {EMOJI.ARROW} After three consecutive successful hits - game won,
          after three errors - lost.
        </p>
        <div>
          <button
            className={cn(styles.button, styles.formButton)}
            disabled={isTimerActive}
            onClick={() => setIsTimerActive(true)}
          >
            Play
          </button>
          <button
            className={cn(styles.button, styles.formButton)}
            disabled={!isTimerActive}
            onClick={() => setIsTimerActive(false)}
          >
            Pause
          </button>
        </div>
      </div>

      {isShowModal && (
        <div className={styles.modal}>
          <div
            className={cn(
              styles.modalContainer,
              isSuccessEndGame
                ? styles.modalContainerSuccess
                : styles.modalContainerUnsuccess,
            )}
          >
            <div className={styles.modalContent}>
              {isSuccessEndGame ? (
                <p className={styles.modalParagraph}>
                  Congratulations! <br /> You win!
                </p>
              ) : (
                <p className={styles.modalParagraph}>
                  My regrets. <br /> You have lost this game
                </p>
              )}
            </div>
            <button
              className={cn(styles.button, styles.modalButton)}
              onClick={handleResetGame}
            >
              Start New Game
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Playground
