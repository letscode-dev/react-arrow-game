import cn from "classnames"

import { ButtonProps } from "@mui/material"
import MaterialButton from "@mui/material/Button"

import styles from "./Button.module.css"

export interface IControlsProps extends ButtonProps {}

const Button: React.FC<IControlsProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialButton
      variant="contained"
      size="small"
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </MaterialButton>
  )
}

export default Button
