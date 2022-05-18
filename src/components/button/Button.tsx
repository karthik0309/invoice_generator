import React from 'react'
import classes from './Button.module.css'

type ButtonType={
    value:string,
    onClick?:()=>void
}
const Button : React.FC<ButtonType> = ({value,onClick}) => {
  return (
    <button className={classes.button} onClick={onClick}>
        {value}
    </button>
  )
}

export default Button