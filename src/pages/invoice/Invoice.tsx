import Reac,{useState,useEffect} from 'react'
import InvoiceBill from '../../components/invoice-bill/InvoiceBill'
import Navbar from '../../components/navbar/Navbar'
import Options from '../../components/options/Options'
import classes from './Invoice.module.css'

type invoiceType={
  transactionName:string,
  amount:number,
  description:descriptionType[]
}

type descriptionType={
  name:string,
  price:number,
  quantity:number,
  total:number
}


const Invoice = () => {
  const [currOption,setCurrOption]=useState('edit')
  const [description,setDescription] = useState<any[]>([])
  const [invoiceDetails, setInvoiceDetails] = useState<invoiceType>({
    transactionName:'',
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
  },[])

  // console.log(description)
  return (
    <div className={classes.invoice__container}>
        <Navbar/>
        <Options handleOption={handleOptions} state={currOption} handleChange={handleSave}/>
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