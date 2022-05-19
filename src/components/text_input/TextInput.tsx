import React from 'react'
import classes from './TextInput.module.css'

type InputTextType={
    value:string,
    placeholder:string,
    size?:string,
    onChange?:(event:any)=>void
}

const TextInput : React.FC<InputTextType> = ({value,placeholder,size,onChange}) => {
  return (
    <input type="text" 
    placeholder={placeholder}
    className={classes.text__input} 
    onChange={onChange}
    value={value}
    style={{width: size==='med' ? '300px' : '400px',
            height: size==='med' ? '35px' : '50px',
            borderRadius: size==='med' ?'6px' : '14px'}}/>
  )
}


export default TextInput