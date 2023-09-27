import cn from "classnames"
import MaterialModal from "@mui/material/Modal"

import { resetStore } from "../../store/slices"
import { useAppDispatch } from "../../../../app/hooks"

import { TypographyText, Button } from "../../../UI"
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
        <div className={styles.content}>
          <TypographyText className={styles.message}>
            <ResultMessage isSuccessEndGame={isSuccessEndGame} />
          </TypographyText>
        </div>
        <Button className={cn("button", styles.button)} onClick={handleClose}>
          Start New Game
        </Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
