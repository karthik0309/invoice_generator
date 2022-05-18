import React from 'react'
import classes from './TextInput.module.css'

type InputTextType={
    placeholder:string,
    onChange?:()=>void
}

const TextInput : React.FC<InputTextType> = ({placeholder,onChange}) => {
  return (
    <input type="text" 
    placeholder={placeholder}
    className={classes.text__input} 
    onChange={onChange}/>
  )
}


export default TextInput