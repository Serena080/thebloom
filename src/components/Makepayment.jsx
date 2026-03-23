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
     <h1 className="text-success new-arrivals-heading">Make Payment- Lipa na Mpesa</h1>

     <div className="col-md-1">
            <input type="button"
            className="btn btn-primary"
            value="<= Back" 
            onClick={()=> navigate("/")}/>
        </div>

     <div className="col-md-7 card shadow p-4 mpesacard">
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
                    value="Pay for plant"
                    className='btn btn-success'/>
               </form> 

               <div className="product-rating">
  <div className="stars">★ ★ ★ ★ ☆</div>
  <span className="rating-text">4.0 (24 reviews)</span>
</div>


<section className="product-options">

  <div class="option-group">
    <label>Pick a Size:</label>
    <select>
      <option>Small</option>
      <option>Medium</option>
      <option>Large</option>
    </select>
  </div>

  <div class="option-group">
    <label>Pick a Planter:</label>
    <select>
      <option>Marianne</option>
      <option>Marcelle</option>
    </select>
  </div>

  <div class="option-group">
    <label>Pick a Color:</label>
    <div class="color-options">
      <span class="color white"></span>
      <span class="color gold"></span>
      <span class="color black"></span>
    </div>
  </div>

</section>

     <section className="plant-upsells">

  <h3>Our Plant Experts Recommend</h3>

  <div class="upsell-grid">

    <div class="upsell-card">
      {/* <img src="leafcare.jpg" alt="Leaf Care Spray"> */}
      <h4>Leaf Care Spray</h4>
      <p>Keep plants looking fresh and healthy.</p>
      <span>KES 500</span>
      <button>Add</button>
    </div>

    <div class="upsell-card">
      {/* <img src="neemoil.jpg" alt="Organic Neem Oil"> */}
      <h4>Organic Neem Oil</h4>
      <p>Natural protection for healthy leaves.</p>
      <span>KES 500</span>
      <button>Add</button>
    </div>

    <div class="upsell-card">
      {/* <img src="planter.jpg" alt="Decorative Planter"> */}
      <h4>Decorative Planter</h4>
      <p>Elegant planter for indoor styling.</p>
      <span>KES 500</span>
      <button>Add</button>
    </div>

  </div>

 </section>

 <section className="product-description">

  <div class="description-content">
    

    <ul>
      <li>Each plant is unique; size and shape vary by season</li>
      <li>Height ranges between 20–28 inches</li>
      <li>Arrives in a nursery grow pot inside your planter choice</li>
      <li>Bloom colors may slightly vary from photos</li>
    </ul>
  </div>

  <div class="care-guide">

    {/* <img src="orchid.jpg" alt="Tropical Turquoise Orchid"> */}

   

   

    <div class="care-item">
      <h3>☀️ Sunlight Requirements</h3>
      <p>Thrives in bright indirect light and tolerates medium indirect light.</p>
    </div>

    <div class="care-item">
      <h3>💧 Watering Requirements</h3>
      <p>Water every 1–2 weeks and allow potting medium to dry slightly.</p>
    </div>

    <div class="care-item">
      <h3>🐾 Pet Friendly</h3>
      <p>This plant is safe for pets.</p>
    </div>

    {/* <a href="#" class="care-btn">Read Full Care Guide →</a> */}

  </div>

</section>




               


          </div>
     </div>
      
    </div>

  )
}

export default Makepayment;
