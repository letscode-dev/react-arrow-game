import { Chip, Stack } from "@mui/material"
import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"

import styles from "./Score.module.css"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>

      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipUnsuccess}
          variant="outlined"
          label={
            <>
              Errors:{" "}
              <span className={styles.counter}>{state.totalUnsuccessful}</span>
            </>
          }
        />

        <Chip
          className={styles.chipSuccessful}
          variant="outlined"
          label={
            <>
              Successful:{" "}
              <span className={styles.counter}>{state.totalSuccessful}</span>
            </>
          }
        />
      </Stack>
    </>
  )
}

export default Score
