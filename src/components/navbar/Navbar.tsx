import React from 'react'
import Vector1 from '../../assets/Vector 91.png'
import Vector2 from '../../assets/Vector 92.png'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navbar__container}>
        <div className={classes.logo}>
            <img src={Vector1} alt="vector1" className={classes.vector1}/>
            <img src={Vector2} alt="vector1" className={classes.vector2}/>
            <h1 className={classes.h2}>
                Invoice Generator
            </h1>
        </div>
    </div>
  )
}

export default Navbar