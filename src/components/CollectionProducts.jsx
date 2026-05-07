import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CollectionProducts = () => {

  const location = useLocation()

  const navigate = useNavigate()

  const { products, title } = location.state

  const img_url = "https://serena080.alwaysdata.net/static/images/"

  return (

    <div className="container py-5">

      <h2 className="text-center mb-5 fw-bold">
        🌿 {title}
      </h2>

      <div className="row">

        {products.map((product) => (

          <div
            className="col-md-4 mb-4"
            key={product.product_id}
          >

            <div className="card shadow h-100">

              

              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="card-img-top"
                style={{
                  height: "300px",
                  objectFit: "contain"
                }}
              />

              <div className="card-body d-flex flex-column">

                <h4>{product.product_name}</h4>

                <p>
                  {product.product_description.slice(0, 50)}...

                </p>

                <h5 className="text-success mb-3">
                  Ksh {product.product_cost}
                </h5>

                <button
                  className="btn btn-success mt-auto"
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

        ))}

      </div>

    </div>

  )
}

export default CollectionProducts;