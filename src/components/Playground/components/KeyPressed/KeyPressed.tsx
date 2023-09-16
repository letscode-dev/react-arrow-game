import { useKeyPressedElement } from "./hooks"
import { TypographyText, TypographyHeader } from "../../../UI"

import styles from "./KeyPressed.module.css"

const KeyPressed: React.FC = () => {
  const keyPressedElement = useKeyPressedElement()

  return (
    <>
      <TypographyHeader>Key pressed</TypographyHeader>

      <div className={styles.container}>
        <TypographyText>
          Press the key corresponding to the key in "Random keys"
        </TypographyText>
        <div className={styles.wrapper}>
          <span className={styles.icon}>{keyPressedElement}</span>
        </div>
      </div>
    </>
  )
}

export default KeyPressed
