import React,{useState} from 'react'
import Vector1 from '../../assets/Vector 91.png'
import Vector2 from '../../assets/Vector 92.png'
import TextInput from '../text_input/TextInput'
import classes from './InvoiceBill.module.css'

type invoiceBillType = {
    description:any[],
    state:string,
    invoiceDetails:invoiceType,
    currDescription:descriptionType,
    setInvoiceDetails:(e:any) => void,
    setCurrDescription:(e:any) => void
}

type descriptionType={
    name:string,
    price:number,
    quantity:number,
    total:number
}

type invoiceType={
    transactionName:string,
    amount:number,
    description:descriptionType[]
}
const InvoiceBill:React.FC<invoiceBillType> = ({state,description,invoiceDetails,currDescription,setInvoiceDetails,setCurrDescription}) => {

  const handleTransactionName=(event:React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceDetails({...invoiceDetails,transactionName:event.target.value})
  }

  const handleInputChange=(event:React.ChangeEvent<HTMLSelectElement>) => {
    const prodId = event.target.value;
    const product = description.filter((item)=>item.title.substring(0,Math.min(25,item.title.length))== prodId)[0]
    console.log(product+" "+prodId);
    const price = Number(product.price)
    const name = String(product.title.substring(0,Math.min(25,product.title.length,25)));
    setCurrDescription({...currDescription,name:name,price:price})
  }

  const handleQuantityChange=(event:React.ChangeEvent<HTMLInputElement>) => {
    const total = Number(event.target.value) * currDescription.price
    setCurrDescription({...currDescription,quantity:Number(event.target.value),total:total})
  }

  console.log(currDescription)
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
                {state==='preview' ? 
                <p>
                    {invoiceDetails.transactionName}
                </p> : 
                <TextInput 
                size="med"
                placeholder="enter transaction name"
                onChange={(e)=>handleTransactionName(e)}
                value={invoiceDetails.transactionName}/>}

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
                {state==='edit' &&  
                <div className={classes.edit__input}>
                    <select
                    onChange={(e)=>handleInputChange(e)} 
                    value={currDescription.name}  
                    className={classes.edit__name}>
                        {description.map((item:any,index:number) =>(
                            <option key={index} value={item.title.substring(0,Math.min(25,item.title.length))}>
                                {item.title.substring(0,Math.min(25,item.title.length))}
                            </option>
                        ))}
                    </select>
                    <div className={classes.edit__info}>
                        <p>{currDescription.price}</p>
                        <input type="number"
                         onChange={(e)=>{handleQuantityChange(e)}}
                         value={currDescription.quantity} className={classes.edit__quantity}/>
                        <p>${currDescription.total}</p>
                    </div>
                </div>
                }
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

export default InvoiceBill
