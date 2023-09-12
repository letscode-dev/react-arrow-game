import cn from "classnames"

import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"

import styles from "./Modal.module.css"

export interface IModalProps {
  isSuccessEndGame: boolean
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<IModalProps> = (props) => {
  const { isSuccessEndGame, setIsShowModal } = props
  const dispatch = useAppDispatch()

  const handleResetGame = () => {
    dispatch(resetStore())
    setIsShowModal(false)
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(
          styles.container,
          isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess,
        )}
      >
        <div className={styles.content}>
          {isSuccessEndGame ? (
            <p className={styles.modalParagraph}>
              Congratulations! <br /> You win!
            </p>
          ) : (
            <p className={styles.paragraph}>
              My regrets. <br /> You have lost this game
            </p>
          )}
        </div>
        <button
          className={cn("button", styles.modalButton)}
          onClick={handleResetGame}
        >
          Start New Game
        </button>
      </div>
    </div>
  )
}

export default Modal
