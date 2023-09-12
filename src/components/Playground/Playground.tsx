import { useState, useEffect, useCallback } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setEnteredValue, setTimer, setAsync } from "./store/slices"
import { MAP_ARROW_CODES, END_GAME_CONDITIONS } from "./constants"

import Modal from "./components/Modal"
import Controls from "./components/Controls"
import Description from "./components/Description"
import Score from "./components/Score"
import KeyPressed from "./components/KeyPressed"
import RandomKeys from "./components/RandomKeys"

import styles from "./Playground.module.css"

const Playground = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(e.key) && state.isTimer) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, state.isTimer],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  useEffect(() => {
    state.isTimer && dispatch(setAsync())
  }, [state.isTimer, dispatch])

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT
    const isUnsuccessful =
      state.totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT

    isSuccessful && setIsSuccessEndGame(true)
    isUnsuccessful && setIsSuccessEndGame(false)

    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true)
      dispatch(setTimer(false))
    }
  }, [state.totalSuccessful, state.totalUnsuccessful, dispatch])

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <RandomKeys />
        <KeyPressed />
        <Score />
      </div>

      <div className={styles.column}>
        <Description />
        <Controls />
      </div>

      {isShowModal && <Modal isSuccessEndGame={isSuccessEndGame} />}
    </div>
  )
}

export default Playground
