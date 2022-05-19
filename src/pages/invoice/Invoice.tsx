import Reac,{useState,useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'
import InvoiceBill from '../../components/invoice-bill/InvoiceBill'
import Navbar from '../../components/navbar/Navbar'
import Options from '../../components/options/Options'
import classes from './Invoice.module.css'
import { invoiceType } from '../../types/types'

const Invoice = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currOption,setCurrOption]=useState('edit')
  const [description,setDescription] = useState<any[]>([])
  const [invoiceDetails, setInvoiceDetails] = useState<invoiceType>({
    invoiceName:'',
    transactionName:'',
    date:'',
    amount:0,
    description:[]
  })

  const [currDescription,setCurrDescription] = useState({
    name:'',
    price:0,
    quantity:0,
    total:0
  })

  const handleOptions=(event:React.ChangeEvent<HTMLElement>) =>{
    setCurrOption(event.target.id)
  } 

  const handleSave=()=>{
    let updatedInvoice = [...invoiceDetails.description]
    let updatedTotal = invoiceDetails.amount

    updatedInvoice.push(currDescription) 
    updatedTotal +=  currDescription.total  
    setInvoiceDetails({...invoiceDetails,description:updatedInvoice,amount:updatedTotal})
    setCurrDescription({name:'',price:0,quantity:0,total:0})
  }

  const handleSaveInvoice = ()=>{
    if(localStorage.getItem('invoice')===null){
      localStorage.setItem('invoice',JSON.stringify([]))
    }

    const invoices = localStorage.getItem('invoice')
    const parsedInvoices = JSON.parse(invoices || '[]')

    parsedInvoices.push(invoiceDetails)
    localStorage.setItem('invoice',JSON.stringify(parsedInvoices))
  }
  
  const fetchDescription=()=>{
    fetch('https://fakestoreapi.com/products?limit=3',{
      method: 'GET',
      mode: 'cors'
    })
    .then(res=>res.json())
    .then(data=>{
      setDescription(data)
    })
  }

  useEffect(()=>{
    fetchDescription()
    setInvoiceDetails({...invoiceDetails,invoiceName:searchParams.get("invoice") || ''})
  },[])

  return (
    <div className={classes.invoice__container}>
        <Navbar/>

        <Options  state={currOption}
        invoiceName={invoiceDetails.invoiceName}
        handleOption={handleOptions}
        handleChange={handleSave}
        handleSaveInvoice={handleSaveInvoice}/>

        <InvoiceBill state={currOption} 
        description={description}
        currDescription={currDescription}
        invoiceDetails={invoiceDetails}
        setInvoiceDetails={setInvoiceDetails}
        setCurrDescription={setCurrDescription}
        />
    </div>
  )
}

export default Invoice