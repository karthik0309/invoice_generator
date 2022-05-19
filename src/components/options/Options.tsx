import React from 'react'
import {useSearchParams} from 'react-router-dom'
import classes from './Options.module.css'
import Button from '../button/Button'
import {optionType} from '../../types/types'

const Options:React.FC<optionType> = ({state,invoiceName,handleOption,handleChange,handleSaveInvoice,handleExportPDF}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={classes.options__container}>
        <div className={classes.invoice__name}>
            {invoiceName}
            <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.718 0.9321C13.3049 0.507659 12.6351 0.507659 12.2221 0.9321L0.966817 12.4939C0.768477 12.6976 0.656982 12.9741 0.656982 13.2622V16.9132C0.656982 17.5135 1.1306 18 1.71484 18H5.26907C5.54958 18 5.81875 17.8854 6.01709 17.6817L17.272 6.11989C17.6852 5.69545 17.6852 5.00749 17.272 4.58305L13.718 0.9321ZM2.7728 15.8269V13.7123L10.6005 5.67138L12.6588 7.78568L4.83078 15.8269L2.7728 15.8269ZM14.1547 6.24894L12.0964 4.1345L12.9699 3.23717L15.0282 5.35161L14.1547 6.24894Z" fill="#3A3A3A"/>
            </svg>
        </div>   

        <div className={classes.edit__options}>
            <div className={classes.para} id="preview" onClick={(e)=>handleOption(e)} style={{borderBottom: state==='preview' ? '3px solid  #604CC5' : '',
            color: state==='preview' ?'#604CC5' : '#9E9E9E'}}>
                <svg width="18" height="12" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.57983 6.71715C1.57983 6.71715 4.25992 1.02197 9.95509 1.02197C15.6503 1.02197 18.3303 6.71715 18.3303 6.71715C18.3303 6.71715 15.6503 12.4123 9.95509 12.4123C4.25992 12.4123 1.57983 6.71715 1.57983 6.71715Z" stroke={state!=='edit' ? "#604CC5": "#9E9E9E"} strokeWidth="2.01006" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.95508 8.39222C10.8802 8.39222 11.6301 7.64227 11.6301 6.71717C11.6301 5.79206 10.8802 5.04211 9.95508 5.04211C9.02998 5.04211 8.28003 5.79206 8.28003 6.71717C8.28003 7.64227 9.02998 8.39222 9.95508 8.39222Z" fill={state!=='edit' ? "#604CC5": "#9E9E9E"} stroke={state!=='edit' ? "#604CC5": "#9E9E9E"} strokeWidth="2.01006" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                preview
            </div>
            <div className={classes.para} id="edit" onClick={(e)=>handleOption(e)} style={{borderBottom: state==='edit' ? '3px solid  #604CC5' : '',
            color: state==='edit' ?'#604CC5' : '#9E9E9E'}}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.718 0.9321C13.3049 0.507659 12.6351 0.507659 12.2221 0.9321L0.966817 12.4939C0.768477 12.6976 0.656982 12.9741 0.656982 13.2622V16.9132C0.656982 17.5135 1.1306 18 1.71484 18H5.26907C5.54958 18 5.81875 17.8854 6.01709 17.6817L17.272 6.11989C17.6852 5.69545 17.6852 5.00749 17.272 4.58305L13.718 0.9321ZM2.7728 15.8269V13.7123L10.6005 5.67138L12.6588 7.78568L4.83078 15.8269L2.7728 15.8269ZM14.1547 6.24894L12.0964 4.1345L12.9699 3.23717L15.0282 5.35161L14.1547 6.24894Z" fill={state==='edit' ? "#604CC5": "#9E9E9E"}/>
                </svg>
                edit
            </div>
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