import React from 'react'
import '../css/PlantSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

const categories = [
  {
    name: "Discounted",
    items: "32 Items",
    image: "https://plantly.io/wp-content/uploads/2022/12/Discount-300x300.jpg"
  },
  {
    name: "Rare Plants",
    items: "21 Items",
    image: "https://plantly.io/wp-content/uploads/2022/12/Rare-300x300.jpg"
  },
  {
    name: "Outdoor Plants",
    items: "50 Items",
    image: "https://plantly.io/wp-content/uploads/2022/12/Outdoor-Plants-300x300.jpg"
  },
  {
    name: "Indoor Plants",
    items: "20 Items",
    image: "https://plantly.io/wp-content/uploads/2022/12/Copy-of-Site-Images-300x300.jpg"
  }
]

const PlantSlider = () => {
  return (
    <section className="container py-5">

      <h2 className="fw-bold mb-4 text-center">
        🌿 Most Popular Plant Collections
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
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
            <div className="plant-card shadow-sm">

              <img
                src={item.image}
                alt={item.name}
                className="plant-img"
              />

              <div className="plant-info">
                <h5>{item.name}</h5>
                <p>{item.items}</p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default PlantSlider