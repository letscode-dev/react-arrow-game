// import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>

      <span>Errors: {state.totalUnsuccessful}</span>
      <br />
      <span>Successful: {state.totalSuccessful}</span>
    </>
  )
}

export default Score
