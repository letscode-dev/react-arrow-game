// import styles from "./KeyPressed.module.css"

import { useEffect, useCallback } from "react"

import { MAP_ARROW_CODES } from "../../constants"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (MAP_ARROW_CODES.hasOwnProperty(e.key)) {
      console.log(e.key)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return <div>KeyPressed</div>
}

export default KeyPressed
