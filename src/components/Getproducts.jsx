import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';


const Getproducts = () => {

  //1. Initialize hooks to help you manage the state of your application

  const [products, setProducts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  // Declare the navigate hook
  const navigate = useNavigate()


  // Below we specify the image base url

  const img_url="https://serena080.alwaysdata.net/static/images/"

  // 2.Create a function that will help fetch products from the API

  const fetchProducts = async () => {

    // 3.Come up with a try and catch block

    try {

      // 4.Update the loading hook
      setLoading(true)

      //  5.Interact with your endpoint for fetching the products
      const response = await axios.get("https://serena080.alwaysdata.net/api/add_product")

      // 6.Update the products hook with the response given from the API
      setProducts(response.data)

      // 7.Set the loading hook back to default
      setLoading(false)



      
    } 
    
    catch (error) {
      // 8.Update the catch block
      // If there is an error
      // .set loading hook back to default
      setLoading(false)

      // .Update the error hook with a message 
      setError(error.message)
      
    }


    
  }

  // we shall use the useEffect hook.
  // This hook enables us to re-render new features in case of any changes

  useEffect(()=>{
    fetchProducts()
  }, [])

  // console.log(products)


  return (
    <div className='row'>
      <h3 className="text-dark">New Arrivals</h3>
      {loading && <Loader/>}


      <h4 className="text-danger">{error}</h4>


      {/* MAP the products fetched from the API to the user interface */}

      {products.map((product)  =>(

         <div className="col-md-3 justify-content-center mb-3">

        <div className='card shadow'>
          <img src={img_url + product.product_photo} alt="product name"className='product_img mt-3' />

          <div className="card-body">
            <h5 className='text-dark'>{product.product_name}</h5>

            <p className="text-dark">
              {product.product_description.slice(0,50)}...
            </p>
            <h4 className="text-info">{product.product_cost}</h4>

            <button className=' btn btn-outline-success'onClick={()=>navigate("/makepayment",{state :{product}})}>Purchase Now</button>
          </div>
        </div>

      </div>
      )  )}

     


    </div>
  )
}

export default Getproducts;
