import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '../../components/button/Button'
import TextInput from '../../components/text_input/TextInput'
import Vector1 from '../../assets/Vector 91.png'
import Vector2 from '../../assets/Vector 92.png'
import TradeMarkia from '../../assets/Trademarkia.png'
import classes from './Home.module.css'
import SavedInvoice from '../../components/saved-invoice/SavedInvoice'

const Home = () => {
    const [invoice,setInvoice] = useState("")
    const [savedInvoices,setSavedInvoices] = useState<string[]>([])

    const handleInvoiceChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setInvoice(event.target.value)
    }

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
                        <TextInput 
                        placeholder="Enter text" 
                        onChange={(e)=>handleInvoiceChange(e)}
                        value={invoice}/>

                        <Link to={`/invoice?invoice=${invoice}`}>
                            <Button value="Generate invoice" />
                        </Link>

                    </div>
                </div>
                <div className={classes.home__top__right}>
                    <img src={TradeMarkia} alt="logo" className={classes.logo}/>
                </div>
            </div>

            <div className={classes.home__bottom}>
                {savedInvoices.length>=0  && 
                    <h2 className={classes.h2}>Saved invoices</h2>
                }

                {savedInvoices.map((ele)=>(
                    <SavedInvoice name={ele}/>
                ))}
            </div>
        </div>
    )
}

export default Home