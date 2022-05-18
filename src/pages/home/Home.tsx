import React from 'react'
import Button from '../../components/button/Button'
import TextInput from '../../components/text_input/TextInput'
import Vector1 from '../../assets/Vector 91.png'
import Vector2 from '../../assets/Vector 92.png'
import TradeMarkia from '../../assets/Trademarkia.png'
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.home__container}>
        <div className={classes.home__top}>
            <div className={classes.home__top__left}>
                <div className={classes.vector__container}>
                    <img src={Vector1} alt="vector1" className={classes.vector1}/>
                    <img src={Vector2} alt="vector1" className={classes.vector2}/>
                </div>
                <h1 className={classes.h1}>
                    Invoice Generator
                </h1>
                <div className={classes.input__container}>
                    <TextInput placeholder="Enter text"/>
                    <Button value="Generate invoice"/>
                </div>
            </div>
            <div className={classes.home__top__right}>
                <img src={TradeMarkia} alt="logo" className={classes.logo}/>
            </div>
        </div>
        <div className={classes.home__bottom}>

        </div>
    </div>
  )
}

export default Home