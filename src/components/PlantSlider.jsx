import React, { useEffect, useState } from 'react'
import '../css/PlantSlider.css'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { useNavigate } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/autoplay'

const PlantSlider = () => {

  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  const img_url = "https://serena080.alwaysdata.net/static/images/"

  // Fetch products
  const fetchProducts = async () => {

    try {

      const response = await axios.get(
        "https://serena080.alwaysdata.net/api/add_product"
      )

      setProducts(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {
    fetchProducts()
  }, [])




  // FILTER PRODUCTS

  const discounted = products.filter(product =>
    parseInt(product.product_cost) < 1000
  )

  const rarePlants = products.filter(product =>
    product.product_description.toLowerCase().includes("rare")
  )

  const indoorPlants = products.filter(product =>
    product.product_description.toLowerCase().includes("indoor")
  )




  // CATEGORY OBJECTS

  const categories = [

    {
      name: "Discounted",
      route: "/collections/discounted",
      products: discounted,
      image: discounted[0]
        ? img_url + discounted[0].product_photo
        : "https://plantly.io/wp-content/uploads/2022/12/Discount-300x300.jpg"
    },

    {
      name: "Rare Plants",
      route: "/collections/rare",
      products: rarePlants,
      image: rarePlants[0]
        ? img_url + rarePlants[0].product_photo
        : "https://plantly.io/wp-content/uploads/2022/12/Rare-300x300.jpg"
    },

    {
      name: "Indoor Plants",
      route: "/collections/indoor",
      products: indoorPlants,
      image: indoorPlants[0]
        ? img_url + indoorPlants[0].product_photo
        : "https://plantly.io/wp-content/uploads/2022/12/Copy-of-Site-Images-300x300.jpg"
    }

  ]



  return (

    <section className="container py-5">

      <h2 className="fw-bold mb-4 text-center">
        🌿 Most Popular Plant Collections
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >

        {categories.map((item, index) => (

          <SwiperSlide key={index}>

            <div
              className="plant-card shadow-sm"
              onClick={() =>
                navigate(item.route, {
                  state: {
                    products: item.products,
                    title: item.name
                  }
                })
              }
              style={{ cursor: "pointer" }}
            >

              <img
                src={item.image}
                alt={item.name}
                className="plant-img"
              />

              <div className="plant-info">
                <h5>{item.name}</h5>
                <p>{item.products.length} Items</p>
              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  )
}

export default PlantSlider