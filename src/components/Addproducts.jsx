import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';

const Addproducts = () => {

  // Introduce the hooks
  const [product_name,setProductName]=useState("");
  const [product_description,setProductDescription]= useState("");
  const [product_cost,setProductCost]= useState("");
  const [product_photo,setProductPhoto]= useState("");


  // declare the additional hook to manage the state of the application
  const [loading,setLoading]= useState(false);
  const [success,setSuccess]= useState("");
  const [error,setError]= useState("");

  // create afunction that will handle submit
  const handleSubmit = async (e) => {

    // On the handle submit function, first prevent the site from reloading.

    e.preventDefault()

    // Set the loading hook a message(activate it)
    setLoading(true)

    // create a try and catch block
    try{
      // Create a formData object that will hold
      const formdata = new FormData()

      // Append the form deatils to the form created
      formdata.append("product_name",product_name);
      formdata.append("product_description",product_description);
      formdata.append("product_cost",product_cost);
      formdata.append("product_photo",product_photo);

      // Interact with axios module that will help you connect to the https protocal as you pass in your URL and the data.

      const response = await axios.post("https://serena080.alwaysdata.net/api/add_product",formdata)

      // set loeding hook bak to default
      setLoading(false)


      // Update the success hook with a message
      setSuccess(response.data.message)

      // Clearing the hooks / set to default
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");

      // Clearing the file input option
      e.target.reset()

      setTimeout(() => {
          setSuccess("");
           }, 5000);

    }

    catch(error){

      // set loading hook back to default
      setLoading(false)

      // update the setError with a message
      setError(error.message)

      

    }
    
    

    
  }


  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 p-4 card shadow">


        <h3 className='text-success'>Introduce a plant</h3>

        {/* Bind the loaing hook */}
        {loading && <Loader/>}

        <h3 className='text-success'>{success}</h3>

        <h4 className='text-danger'>{error}</h4>

        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder='Enter the plant name'
          className='form-control'
          required
          value={product_name}
          onChange={(e)=> setProductName(e.target.value)}/> <br />

          {/* {product_name} */}

          <input type="text"
          placeholder='Enter the plant details' 
          className='form-control'
          required
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}/> <br />

          {/* {product_description} */}

          <input type="number" 
          placeholder='Enter the price of the plant'
          className='form-control'
          required
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)}/> <br />

          {/* {product_cost} */}

          <label className='text-dark'>Product Photo</label>

          <input type="file"
          className='form-control'
          required
          accept='image/*'
          onChange={(e)=>setProductPhoto(e.target.files[0])} /> <br /> <br />



          <input type="submit" 
          value="Addproducts"
          className='btn btn-outline-success'/>


        </form>
      </div>
      
    </div>
  )
}

export default Addproducts;
