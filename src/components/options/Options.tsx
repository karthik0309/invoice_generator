import React from 'react'
import {useSearchParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faEye } from '@fortawesome/free-solid-svg-icons'
import classes from './Options.module.css'
import Button from '../button/Button'
import {optionType} from '../../types/types'

const Options:React.FC<optionType> = ({state,invoiceName,handleOption,handleChange,handleSaveInvoice,handleExportPDF}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={classes.options__container}>
        <h4 className={classes.invoice__name}>
            {invoiceName}
            <FontAwesomeIcon icon={faPen} className={classes.icon}/>
        </h4>   

        <div className={classes.edit__options}>
            <p className={classes.para} id="preview" onClick={(e)=>handleOption(e)} style={{borderBottom: state==='preview' ? '3px solid  #604CC5' : '',
            color: state==='preview' ?'#604CC5' : '#9E9E9E'}}>
                <FontAwesomeIcon icon={faEye} className={classes.i}/>
                preview
            </p>
            <p className={classes.para} id="edit" onClick={(e)=>handleOption(e)} style={{borderBottom: state==='edit' ? '3px solid  #604CC5' : '',
            color: state==='edit' ?'#604CC5' : '#9E9E9E'}}>
                <FontAwesomeIcon icon={faPen} className={classes.i}/>
                edit
            </p>
        </div>

        <div className={classes.buttons}> 
            {state==='preview' ? <Button value="Export PDF" size="med" onClick={handleExportPDF}/> 
            :<Button value="Save Changes" size="med" onClick={handleChange}/>}
            
            <Button value="Save Invoice" bg='#EDEAFF' color='#7161C5' size="med" 
            onClick={handleSaveInvoice}/>
        </div>

    </div>
  )
}

export default Options