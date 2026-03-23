import React, { useEffect, useRef, useState } from "react";
import "../css/TestimonialCarousel.css"; // Optional CSS file

const testimonialsData = [
  
  {
  text: "“Bring life indoors with carefully selected premium plants, elegant planters, and expert support designed for every home.”",
  author: "- Shop The Bloom",
  img: "https://www.thesill.com/cdn/shop/files/Holiday_Gifting_Hero.png?v=1732813001",
  },
  {
  text: "“Order healthy plants online, explore care tips, and discover stylish greenery delivered directly to your door.”",
  author: "- The Bloom App",
  img: "https://www.thesill.com/cdn/shop/files/PhilodendronGrant_EditorialBlock.jpg?v=1643122557",
  },
  {
  text: "“Designed for plant lovers — premium collections, rare species, and trusted delivery all in one beautiful experience.”",
  author: "- Explore The Bloom",
  img: "https://www.thesill.com/cdn/shop/files/editorial-block_holiday_zz_blush_grant.jpg?v=1640625863",
  },
  {
    text: "“Thank you so much for getting back to me about my plant concern! I’m grateful that customer service does still exist <3 Can’t wait to recommend The Bloom to others!”",
    author: "- Molly",
    img: "https://www.thesill.com/cdn/shop/files/PhilodendronGrant_EditorialBlock.jpg?v=1643122557",
  },
  
  {
    text: "“Customer service answered all my care questions within hours. That gave me confidence as a first-time plant buyer.”",
    author: "- Daniel",
    img: "https://www.thesill.com/cdn/shop/files/editorial-block_holiday_zz_blush_grant.jpg?v=1640625863",
  },
  
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef();
  const startX = useRef(0);
  const endX = useRef(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  // Autoplay
  useEffect(() => {
    autoplayRef.current = goToNextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };
    const interval = setInterval(play, 5000); // 5s per slide
    return () => clearInterval(interval);
  }, []);

  // Touch / Swipe handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = startX.current - endX.current;
    if (swipeDistance > 50) {
      goToSlide((currentIndex + 1) % testimonialsData.length);
    } else if (swipeDistance < -50) {
      goToSlide((currentIndex - 1 + testimonialsData.length) % testimonialsData.length);
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="community-heading">
  A community to buy, sell & discover the magic of plants
        </h2>
        

        <div
          className="testimonials-slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="testimonials-slider-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsData.map((testimonial, idx) => (
              <div key={idx} className="testimonials-card">
                <div
                  className="testimonials-image"
                  style={{ backgroundImage: `url(${testimonial.img})` }}
                ></div>
                <div className="testimonials-content">
                  <p>{testimonial.text}</p>
                  <span>{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-dots">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${currentIndex === idx ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}