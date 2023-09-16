import cn from "classnames"

import {
  Typography as MaterialTypography,
  TypographyProps as MaterialTypographyProps,
} from "@mui/material"

import styles from "./TypographyText.module.css"

export interface ITypographyTextProps extends MaterialTypographyProps {}

const TypographyText: React.FC<ITypographyTextProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialTypography {...props} className={cn(styles.text, className)}>
      {children}
    </MaterialTypography>
  )
}

export default TypographyText
