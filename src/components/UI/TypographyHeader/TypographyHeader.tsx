import cn from "classnames"

import {
  Typography as MaterialTypography,
  TypographyProps,
} from "@mui/material"

import styles from "./TypographyHeader.module.css"

export interface ITypographyHeaderProps extends TypographyProps {}

const TypographyHeader: React.FC<ITypographyHeaderProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialTypography
      variant="h3"
      gutterBottom
      {...props}
      className={cn(styles.text, className)}
    >
      {children}
    </MaterialTypography>
  )
}

export default TypographyHeader
