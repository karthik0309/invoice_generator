import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Options from '../../components/options/Options'
import classes from './Invoice.module.css'

const Invoice = () => {
  return (
    <div className={classes.invoice__container}>
        <Navbar/>
        <Options/>
    </div>
  )
}

export default Invoice