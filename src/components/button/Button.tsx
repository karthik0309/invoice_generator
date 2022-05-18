import React from 'react'
import classes from './Button.module.css'

type ButtonType={
    value:string,
    bg?:string,
    color?:string,
    size?:string,
    onClick?:()=>void,
}
const Button : React.FC<ButtonType> = ({value,color,bg,size,onClick}) => {
  return (
    <button className={classes.button} 
    onClick={onClick} 
    style={{color:color!==null ? color : 'white',
            background : bg!==null ? bg : '#7161C5',
            height: size==='med' ? '40px' : '50px',
            width : size==='med' ? '140px' : '210px'}}>
        {value}
    </button>
  )
}

export default Button