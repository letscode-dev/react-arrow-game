import { PlayArrow, Pause } from "@mui/icons-material"

import { Button } from "../../../UI"

import styles from "./Controls.module.css"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <Button
        endIcon={<PlayArrow />}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        className={styles.button}
      >
        Play
      </Button>
      <Button
        endIcon={<Pause />}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        className={styles.button}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
