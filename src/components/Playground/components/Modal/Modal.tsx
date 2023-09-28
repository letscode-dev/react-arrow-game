import cn from "classnames"
import { Modal as MaterialModal } from "@mui/material"

import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"
import { Button } from "../../../UI"

import styles from "./Modal.module.css"

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModalProps> = (props) => {
  const { setIsShowModal, isSuccessEndGame } = props

  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(resetStore())
    setIsShowModal(false)
  }

  return (
    <MaterialModal open onClose={handleClose} className={styles.wrapper}>
      <div
        className={cn(
          styles.container,
          isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess,
        )}
      >
        <ResultMessage isSuccessEndGame={isSuccessEndGame} />
        <Button onClick={handleClose} className={styles.button}>
          Start New Game
        </Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
