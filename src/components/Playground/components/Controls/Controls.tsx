import { useAppSelector, useAppDispatch } from "../../../../app/hooks"
import { setTimer } from "../../store/slices"

import styles from "./Controls.module.css"

const Controls: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  return (
    <>
      <button
        className={styles.button}
        onClick={() => dispatch(setTimer(true))}
        disabled={state.isTimer}
      >
        Play
      </button>
    </>
  )
}

export default Controls
