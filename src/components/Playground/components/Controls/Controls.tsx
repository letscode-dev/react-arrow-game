import cn from "classnames"

import { useAppSelector, useAppDispatch } from "../../../../app/hooks"
import { setTimer } from "../../store/slices"

import styles from "./Controls.module.css"

const Controls: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  return (
    <>
      <button
        className={cn("button", styles.formButton)}
        onClick={() => dispatch(setTimer(true))}
        disabled={state.isTimer}
      >
        Play
      </button>
      <button
        className={cn("button", styles.formButton)}
        onClick={() => dispatch(setTimer(false))}
        disabled={!state.isTimer}
      >
        Pause
      </button>
    </>
  )
}

export default Controls
