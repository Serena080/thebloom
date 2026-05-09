import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Pots = () => {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const img_url = "https://serena080.alwaysdata.net/static/images/"

  // Fetch all products
  const fetchProducts = async () => {

    try {

      const response = await axios.get(
        "https://serena080.alwaysdata.net/api/getproducts"
      )

      // Filter only pots, vases, and bottles
      const filteredProducts = response.data.filter((product) => {

        const name = product.product_name.toLowerCase()

        return (
          name.includes("pot") ||
          name.includes("vase") ||
          name.includes("bottle")
        )
      })

      setProducts(filteredProducts)

      setLoading(false)

    } catch (error) {

      console.log(error)

      setLoading(false)
    }
  }

  useEffect(() => {

    fetchProducts()

  }, [])

  return (

    <div className="container py-5">

      <h2 className="text-center mb-5 fw-bold text-success">
        🪴 Pots, Vases & Bottles
      </h2>

      {loading ? (

        <div className="text-center">
          <h4>Loading Products...</h4>
        </div>

      ) : (

        <div className="row">

          {products.length > 0 ? (

            products.map((product) => (

              <div
                className="col-md-4 mb-4"
                key={product.product_id}
              >

                <div className="card shadow h-100 border-0 rounded-4">

                  <img
                    src={img_url + product.product_photo}
                    alt={product.product_name}
                    className="card-img-top p-3"
                    style={{
                      height: "300px",
                      objectFit: "contain"
                    }}
                  />

                  <div className="card-body d-flex flex-column">

                    <h4 className="fw-bold">
                      {product.product_name}
                    </h4>

                    <p className="text-muted">
                      {product.product_description.slice(0, 60)}...
                    </p>

                    <h5 className="text-success mb-3">
                      Ksh {product.product_cost}
                    </h5>

                    <button
                      className="btn btn-success rounded-pill mt-auto"
                      onClick={() =>
                        navigate("/makepayment", {
                          state: { product }
                        })
                      }
                    >
                      Purchase Now
                    </button>

                  </div>

                </div>

              </div>

            ))

          ) : (

            <div className="text-center">
              <h4>No Pots, Vases or Bottles Found 🌿</h4>
            </div>

          )}

        </div>

      )}

    </div>

  )
}

export default Pots;