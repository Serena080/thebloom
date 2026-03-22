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

   const items = [
    {
      icon: "🌿",
      title: "Expert Guidance",
      text: "Success starts with choosing the right plants—whether it’s a sunny succulent for your windowsill, a low-maintenance indoor green for your workspace, or a seasonal outdoor flower for your garden. "
    },
    {
      icon: "🌱",
      title: "Connect & Grow",
      text: "Plants are more than decor—they’re a way to build community, learn, and share joy. Our workshops, events, and interactive sessions bring plant lovers together, from beginners to seasoned green thumbs. "
    },
    {
      icon: "💚",
      title: "Judgement-Free Service",
      text: "Our team is here to guide you—no question is too small, no mistake too big. Whether you’re new to plant care or an experienced gardener exploring rare species, we provide patient, personalized advice without pressure or judgment.Think of us as your friendly plant concierge, ready to help you grow confidence alongside your greenery."
    }
  ];

   const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);


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
<section className="usp">
      <div className="usp-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`usp-item ${index === activeIndex ? "active" : ""}`}
          >
            <span>{item.icon}</span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .usp {
          background: #f9f8f7;
          padding: 20px;
          border-radius: 70px;
          font-family: papyrus;

        }

        .usp-container {
          max-width: 600px;
          margin: auto;
        }

        .usp-item {
          display: none;
          align-items: center;
          gap: 15px;
          color: #2a2d2f;
          font-size: 16px;
        }

        .usp-item.active {
          display: flex;
          transform: translateX(30px);
          opacity: 0 → 1
        }

        .usp-item span {
          font-size: 28px;
        }
      `}</style>
    </section>
<section className="testimonial-section py-5">
  <div className="container text-center">

    <h2 className="mb-5">What Our Customers Say</h2>

    <div className="testimonial-wrapper">

      <div className="testimonial-card card-1">
        <p>
          "Absolutely beautiful plants and premium delivery experience.
          Finally a plant website that doesn't make beginners feel lost.
          Everything feels simple and welcoming. 💚"
        </p>
        <h5>- Sarah Warren</h5>
      </div>

      <div className="testimonial-card card-2">
        <p>
          "Beautifully designed, easy to navigate, and full of helpful plant advice —
          it feels made for real plant lovers. It feels like shopping with someone
          who actually understands plants and my lifestyle. 🪴"
        </p>
        <h5>- Leila Asha</h5>
      </div>

      <div className="testimonial-card card-3">
        <p>
          "A refreshing plant website that balances inspiration with practical guidance.
          I like that the recommendations feel practical, especially for different weather conditions. 🌦️"
        </p>
        <h5>- Tom Stewart</h5>
      </div>

    </div>
  </div>
</section>



<div className="learning-title">
  <div className="title-text">
    <h2>Plant Care & Workshops</h2>
    <p>Empowering all people to be plant people. Welcome to Plant Parenthood®.</p>

    
  </div>

  <div className="title-images">
    
    <img
      src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
      alt="Plant care"
    />
  </div>
  <div className="title-links">
      
      <a href="/blog">Visit Our Blog →</a>
    </div>
</div>

<section class="upcoming-events">

  <a href="https://www.eventbrite.com/e/gardening-for-beginners-tickets-1982797730387?aff=odcleoeventsincollection" target="_blank" class="event-card ">
    <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F734795929%2F218194620125%2F1%2Foriginal.20240403-152459?auto=format%2Ccompress&q=75&sharp=10&s=44b4227887d6732e5a8ff1edc1ddbac2" alt="Gardening for Beginners" />
    <div class="event-info">
      <span class="price">FREE</span>
      <h3>Gardening for Beginners</h3>
      <p>Start your outdoor garden with confidence and learn essential planting basics.</p>
      <small>April 1</small>
    </div>
  </a>

  <a href="https://www.eventbrite.com/e/planting-bulbs-made-easy-tickets-1982786193881?aff=odcleoeventsincollection" target="_blank" class="event-card">
    <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1177318852%2F218194620125%2F1%2Foriginal.20260211-210604?auto=format%2Ccompress&q=75&sharp=10&s=3a8a83df3530d018db28a69abaaf65ff" alt="Planting Bulbs" />
    <div class="event-info">
      <span class="price">FREE</span>
      <h3>Planting Bulbs Made Easy</h3>
      <p>Learn simple bulb planting techniques for long-lasting seasonal color.</p>
      <small>April 8</small>
    </div>
  </a>

  <a href="https://www.eventbrite.com/e/sustainable-pest-management-tickets-1982796047353?aff=odcleoeventsincollection" target="_blank" class="event-card">
    <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1177189280%2F218194620125%2F1%2Foriginal.20260210-172702?auto=format%2Ccompress&q=75&sharp=10&s=653d313005f73be717838bf1abae33b3" alt="Pest Management" />
    <div class="event-info">
      <span class="price">FREE</span>
      <h3>Sustainable Pest Management</h3>
      <p>Protect plants naturally using eco-friendly pest control methods.</p>
      <small>April 15</small>
    </div>
  </a>

</section>


<section class="contact-section">

  <div class="contact-text">
    <p>Speak to a Plant Specialist</p>
    <h2>Need Help?</h2>
    <p><b>Your confidence is our priority. Unsure what plants suit your light?
      New to gardening? Reach out — we’re here to help.</b>
      
    </p>
  </div>

  <div class="contact-options">

    <a href="/blog" class="contact-card">
      <h4>💬 Chat</h4>
      <p><b>DM with a plant care expert</b></p>
    </a>

    <a href="tel:+254700000000" class="contact-card">
      <h4>📞 Call</h4>
      <p><b>Speak live to a plant care expert</b></p>
    </a>

    <a href="mailto:info@yourwebsite.com" class="contact-card">
      <h4>✉️ Email</h4>
      <p><b>Send us your questions anytime</b></p>
    </a>

  </div>

</section>




    



    </div>

    
  )
}



export default Getproducts;
