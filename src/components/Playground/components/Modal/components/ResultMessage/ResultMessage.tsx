// import styles from "./ResultMessage.module.css"

import { TypographyText } from "../../../../../UI"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (
    <TypographyText>
      Congratulations! <br /> You win!
    </TypographyText>
  ) : (
    <TypographyText>
      My regrets. <br /> You have lost this game
    </TypographyText>
  )
}

export default ResultMessage
