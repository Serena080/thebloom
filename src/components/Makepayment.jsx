import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from './Loader'

const Makepayment = () => {

     // Destructure the product passed from the getproducts component

     // The useLocation hook is used to get/destructure the properties passed from the previous component

     const {product} = useLocation().state || {}
     // console.log("The product details are:",product)


     // Declare the navigate hook
  const navigate = useNavigate()

     // Below we specify the image base url

  const img_url="https://serena080.alwaysdata.net/static/images/"

     //Initialize hooks to manage the state of the 
     const   [number,setNumber]=useState("")


     // Initialize hooks to help you manage the state of your application
     
       const [products, setProducts]=useState([]);
       const [loading,setLoading]=useState(false);
       const [error,setError]=useState("");
       const [success,setSuccess]= useState("");

     // Create a function that will handle the submit function
     const handleSubmit = async (e)=>{

          // Prevent the site from reloading
          e.preventDefault()

          // Update the loading hook
          setLoading(true)


          try {

               // Create a formdata object
               const formdata= new FormData()

               // append the data to form data
               formdata.append("phone",number)
               formdata.append("amount",product.product_cost)


               const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/mpesa_payment",formdata)

               // Set loading back to default
               setLoading(false)

               // Update the products hook with the response given from the API
               setSuccess(response.data.message)
               
          } 
          catch (error) {

               // set loading hook back to default
          setLoading(false)

          // update the setError with a message
          setError(error.message)
               
          }

     }

  


  return (
    <div className='row justify-content-center'>

     {/* <button className="btn btn-outline-dark">Back to products</button> */}
     <h1 className="text-success">Make Payment- Lipa na Mpesa</h1>

     <div className="col-md-1">
            <input type="button"
            className="btn btn-primary"
            value="<= Back" 
            onClick={()=> navigate("/")}/>
        </div>

     <div className="col-md-7 card shadow p-4">
          <img src={img_url+product.product_photo} alt="Product name" className='product_img'/>

          <div className="card-body">
               <h2 className="text-dark">{product.product_name}</h2>

               <p className="text-dark">{product.product_description}</p>

               <h3 className="text-warning">KES {product.product_cost}</h3> <br /> <br />

               <form onSubmit={handleSubmit}>

                    {/* bind the loading hook */}
                    {loading && <Loader />}
                     <h3 className="text-success"> {success} </h3>
                     <h4 className="text-danger"> {error} </h4>
                    <input type="tel"
                    className='form-control'
                    placeholder='Enter your phone number 254xxxxxxxx...' 
                    required
                    value={number}
                    onChange={(e)=>setNumber(e.target.value)}/><br /> <br />

                    <input type="submit" 
                    value="Make Payment"
                    className='btn btn-success'/>
               </form> 

               


          </div>
     </div>
      
    </div>
  )
}

export default Makepayment;
