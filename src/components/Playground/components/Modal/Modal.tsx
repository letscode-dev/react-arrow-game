import cn from "classnames"

import styles from "./Modal.module.css"

export interface IModalProps {
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModalProps> = (props) => {
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(
          styles.container,
          isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess,
        )}
      >
        <div>
          {isSuccessEndGame ? (
            <p className={styles.paragraph}>
              Congratulations! <br /> You win!
            </p>
          ) : (
            <p className={styles.paragraph}>
              My regrets. <br /> You have lost this game
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
