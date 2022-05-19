import Reac,{useState,useEffect} from 'react'
import InvoiceBill from '../../components/invoice-bill/InvoiceBill'
import Navbar from '../../components/navbar/Navbar'
import Options from '../../components/options/Options'
import classes from './Invoice.module.css'

const Invoice = () => {
  const [currOption,setCurrOption]=useState('edit')
  const [description,setDescription] = useState<any[]>([])

  const handleOptions=(event:React.ChangeEvent<HTMLElement>) =>{
    setCurrOption(event.target.id)
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
        <Options handleOption={handleOptions} state={currOption}/>
        <InvoiceBill state={currOption} description={description}/>
    </div>
  )
}

export default Invoice