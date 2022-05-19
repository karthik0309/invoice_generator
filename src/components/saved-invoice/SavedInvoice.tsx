import React,{useState} from 'react'
import classes from './SavedIncoice.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import SavedBill from '../saved-bill/SavedBill'
import {savedInvoiceType} from '../../types/types'

const SavedInvoice:React.FC<savedInvoiceType> = ({invoiceDetails}) => {
  const [view,setView] = useState(false)

  const handleview=()=>{
      setView(!view)
  }

  return (
    <div className={!view ? classes.saved_invoice__container : `${classes.saved_invoice__container} ${classes.expand}`}>
        <div className={classes.saved_info}>
            <div className={classes.info}>
                <h3>
                    {invoiceDetails.invoiceName}
                </h3>
                <p className={classes.date}>
                    {invoiceDetails.date}
                </p>
            </div>
            
            <button className={classes.view__dropdown} onClick={handleview}>
                view
                <FontAwesomeIcon icon={faAngleDown} />       
            </button>
        </div>

        <div className={classes.veiw__accordion} style={{display: view ? 'flex' : 'none'}}>
            <SavedBill invoiceDetails={invoiceDetails}/>
        </div>
    </div>
  )
}

export default SavedInvoice