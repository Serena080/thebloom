import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* HERO */}
        <div className="about-hero">
          <h1>About Bloom 🌸</h1>
          <p>
            Connecting you directly to farmers and plant producers — fresh,
            trusted, and delivered to your doorstep.
          </p>
        </div>

        <div className="about-section">
  <div className="about-grid">
    
    {/* Image */}
    <div className="about-image">
      <img
        src="https://www.thesill.com/cdn/shop/files/live-plants-bnf-palm-side-table.jpg"
        alt="Plants"
      />
    </div>

    {/* Text */}
    <div className="about-text">
      <h2>We believe Plants Make People Happy 🌿</h2>

      <p>
        Being around plants improves your mood and transforms your space.
      </p>

      <p>
        Science shows that caring for plants helps you relax, slow down,
        and feel more connected to nature.
      </p>

      <p>
        Our mission is simple — connect more people with plants and help
        them grow confidently.
      </p>

      <a href="/" className="btn">
        Explore Plants
      </a>
    </div>

  </div>
</div>

        {/* HOW IT WORKS */}
        <div className="about-section">
          <h2>How It Works</h2>
          <div className="grid">
            <div className="card">
              <h3>🌱 Discover</h3>
              <p>
                Browse a wide range of plants, flowers, and farm products from
                verified farmers and producers near you.
              </p>
            </div>

            <div className="card">
  <h3>⭐ Customer Feedback</h3>
  <p>
    See real reviews and feedback from other users right on the homepage.
    Our platform highlights trusted experiences to help you make confident
    decisions.
  </p>
</div>

            <div className="card">
              <h3>🔍 Search & Filter</h3>
              <p>
                Easily find what you need using smart search, categories, and
                location-based filtering.
              </p>
            </div>

            

            <div className="card">
              <h3>🚚 Delivery</h3>
              <p>
                Get fresh products delivered directly to your doorstep quickly
                and safely.
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="about-section">
          <h2>Key Features</h2>
          <div className="grid">
            <div className="card">
              <h3>🌍 Direct Farmer Connection</h3>
              <p>
                Buy directly from farmers and producers without middlemen,
                ensuring fair prices and fresh quality.
              </p>
            </div>

            <div className="card">
              <h3>💬 Smart Chatbot Assistant</h3>
              <p>
                Ask questions about plant care or find products instantly using
                our intelligent chatbot.
              </p>
            </div>

            <div className="card">
              <h3>🔐 Secure Payments</h3>
              <p>
                Enjoy safe and reliable payment options for a smooth shopping
                experience.
              </p>
            </div>

            <div className="card">
              <h3>📦 Real-Time Availability</h3>
              <p>
                See up-to-date product listings and availability from different
                suppliers.
              </p>
            </div>
          </div>
        </div>

        {/* WHY US */}
        <div className="about-section highlight">
          <h2>Why Choose Bloom?</h2>
          <p>
            Bloom simplifies the connection between customers and agricultural
            producers. Whether you’re a plant lover, home gardener, or business,
            our platform ensures you get quality products while supporting local
            farmers.
          </p>

          <p>
            No need to travel long distances or rely on uncertain sources — with
            Bloom, everything you need is just a few clicks away.
          </p>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <h2>Start Exploring Today 🌿</h2>
          <p>
            Join our growing community and experience the future of plant and
            farm shopping.
          </p>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .about {
          padding: 60px 20px;
          background: #f8f7f3;
        }

        .about-container {
          max-width: 1100px;
          margin: auto;
        }

        .about-hero {
          text-align: center;
          margin-bottom: 50px;
        }

        .about-hero h1 {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        .about-hero p {
          color: #666;
          font-size: 1.1rem;
        }

        .about-section {
          margin-bottom: 50px;
        }

        .about-section h2 {
          margin-bottom: 20px;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .highlight {
          text-align: center;
          background: #e8f5e9;
          padding: 30px;
          border-radius: 20px;
        }

        .about-cta {
          text-align: center;
          margin-top: 40px;
        }

        .about-section {
  padding: 60px 20px;
  background: #f8f7f3;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  max-width: 1100px;
  margin: auto;
}

.about-image img {
  width: 100%;
  border-radius: 15px;
}

.about-text h2 {
  margin-bottom: 15px;
}

.about-text p {
  margin-bottom: 10px;
  color: #555;
}

.btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background: #4caf50;
  color: white;
  border-radius: 8px;
  text-decoration: none;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

        .about-cta h2 {
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}