// import styles from "./Modal.module.css"

import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"
import { Button } from "../../../UI"

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
    <div>
      <h3>Modal</h3>
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <Button onClick={handleClose}>Start New Game</Button>
    </div>
  )
}

export default Modal
