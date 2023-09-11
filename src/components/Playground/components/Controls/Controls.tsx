import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"

import { Button } from "../../../UI"

import styles from "./Controls.module.css"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div className={styles.wrapper}>
      <Button
        endIcon={<PlayArrowIcon />}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        className={styles.formButton}
      >
        Play
      </Button>
      <Button
        endIcon={<PauseIcon />}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        className={styles.formButton}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
