import React from 'react'
import classes from './TextInput.module.css'

type InputTextType={
    value:string,
    placeholder:string,
    onChange?:(event:any)=>void
}

const TextInput : React.FC<InputTextType> = ({value,placeholder,onChange}) => {
  return (
    <input type="text" 
    placeholder={placeholder}
    className={classes.text__input} 
    onChange={onChange}
    value={value}/>
  )
}


export default TextInput