import cn from "classnames"
import { Modal as MaterialModal } from "@mui/material"

import { resetStore } from "../../store/slices"
import { useAppDispatch } from "../../../../app/hooks"

import { Button } from "../../../UI"
import ResultMessage from "./components/ResultMessage"

import styles from "./Modal.module.css"

export interface IModalProps {
  isSuccessEndGame: boolean
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<IModalProps> = (props) => {
  const { isSuccessEndGame, setIsShowModal } = props

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
        <Button className={styles.button} onClick={handleClose}>
          Start New Game
        </Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
