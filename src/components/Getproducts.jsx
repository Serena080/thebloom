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

        <div className='card shadow cardeffect'>
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

     <section className="container my-5 py-5">
  <div className="row align-items-center">

    {/* Left Content */}
    <div className="col-md-6">
      <h2 className="fw-bold mb-3">Speak to a Plant Specialist</h2>

      <p className="text-muted fs-5">
        Need help choosing the perfect plant for your space? 
        Our plant specialists are ready to guide you with expert care tips,
        styling advice, and personalized recommendations.
      </p>

      <button className="btn btn-success px-4 py-2 rounded-pill mt-3">
        Book a Consultation
      </button>
    </div>

    {/* Right Image */}
    <div className="col-md-6 text-center">
      <img
        src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
        alt="Plant Specialist"
        className="img-fluid rounded shadow"
      />
    </div>

  </div>
</section>
<section className="testimonial-section py-5">
  
  <div className=" text-center">

    <h2 className="mb-5">What Our Customers Say</h2>

    <div className="testimonial-card mx-auto">
      <p>
        "Absolutely beautiful plants and premium delivery experience."
      </p>

      <h5>- Leila</h5>
    </div>

  </div>
</section>

<section className="testimonial-section py-5">

  <div className="col-md-7">
    
  </div>
  
  <div className="container text-center col-md-5">

    

    <div className="testimonial-card mx-auto">
      <p>
        "Absolutely beautiful plants and premium delivery experience."
      </p>

      <h5>- Mark</h5>
    </div>

  </div>
</section>


    



    </div>
  )
}

export default Getproducts;
