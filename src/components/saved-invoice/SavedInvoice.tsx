import React from 'react'
import classes from './SavedIncoice.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


type savedInvoiceType={
    name:string
}

const SavedInvoice:React.FC<savedInvoiceType> = ({name}) => {
  return (
    <div className={classes.saved_invoice__container}>
        <div className={classes.info}>
            <h3>
                {name}
            </h3>
            <p className={classes.date}>
                {new Date(Date.now()).toDateString()}
            </p>
        </div>
        
        <button className={classes.view__dropdown}>
            view
            <FontAwesomeIcon icon={faAngleDown} />       
        </button>
    </div>
  )
}

export default SavedInvoice