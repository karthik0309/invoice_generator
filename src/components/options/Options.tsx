import React from 'react'
import {useSearchParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faEye } from '@fortawesome/free-solid-svg-icons'
import classes from './Options.module.css'
import Button from '../button/Button'


const Options = () => {
  const [searchParams, setSearchParams] = useSearchParams();


  return (
    <div className={classes.options__container}>
        <h4 className={classes.invoice__name}>
            {searchParams.get("invoice")}
            <FontAwesomeIcon icon={faPen}/>
        </h4>   

        <div className={classes.edit__options}>
            <p className={classes.para}>
                <FontAwesomeIcon icon={faEye} className={classes.i}/>
                preview
            </p>
            <p className={classes.para}>
                <FontAwesomeIcon icon={faPen} className={classes.i}/>
                edit
            </p>
        </div>

        <div className={classes.buttons}>
            <Button value="Save Changes" size="med"/>
            <Button value="Save Invoice" bg='#EDEAFF' color='#7161C5' size="med"/>
        </div>

    </div>
  )
}

export default Options