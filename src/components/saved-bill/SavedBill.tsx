import React from 'react'
import Vector1 from '../../assets/Vector 91.png'
import Vector2 from '../../assets/Vector 92.png'
import classes from './SavedBill.module.css'
import {savedInvoiceType} from '../../types/types'

const SavedBill:React.FC<savedInvoiceType> = ({invoiceDetails}) => {
  return (
    <div className={classes.invoice_bill__container}>
        <div className={classes.invoice_bill__main}>
        <div className={classes.invoice_bill__line}>
        </div>
        <div className={classes.invoice_bill__header}>
            <div className={classes.logo}>
                <img src={Vector1} alt="vector1" className={classes.vector1}/>
                <img src={Vector2} alt="vector1" className={classes.vector2}/>
                <h3 className={classes.h2}>
                    Invoice Generator
                </h3>
            </div>
            <div className={classes.invoice_bill__address}>
                <p>LegalForce RAPC Worldwide </p>
                <p>+1 877-794-9511 </p>
                <p>1580 West El Camino Real, Suite 10</p>
                <p>Mountain View, California<p>
                </p>94040 - 2479</p>
                <p>United States</p>
            </div>
        </div>

        <div className={classes.invoice_bill__transaction}>
            <div className={classes.invoice_bill__transaction__input}>
                <p>
                    {invoiceDetails.transactionName}
                </p> 
                <p>Paid on {new Date(Date.now()).toDateString()}</p>
            </div>

            <div className={classes.invoice_bill__transaction__amount}>
                <h3>Amount Paid</h3>
                <p>${invoiceDetails.amount}</p>
            </div>
        </div>

        <div className={classes.invoice_bill__description}>
            <div className={classes.invoice_bill__description__header}>
                <h4 className={classes.title}>Description</h4>
                <div className={classes.description}>
                    <h4>Rate</h4>
                    <h4>Qty</h4>
                    <h4>Line Total</h4>
                </div>
            </div>
            <div className={classes.line}></div>

            <div className={classes.description__input}>
                {invoiceDetails.description.length>0 && 
                invoiceDetails.description.map((item:any,index:number) =>(
                    <div key={index} className={classes.description__input__item}>
                        <p className={classes.description__input__title}>{item.name}</p>
                        <div className={classes.description__input__total}>
                            <p>{item.price}</p>
                            <p>{item.quantity}</p>
                            <p>{item.total}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className={classes.total}>
            <div className={classes.total__line}></div>
                <div className={classes.total__container}>
                    <p>Total</p>
                    <p>${invoiceDetails.amount}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SavedBill