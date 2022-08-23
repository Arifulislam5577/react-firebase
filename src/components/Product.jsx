import React from "react";

const Product = ({ product }) => {
  const { id, title, price, image } = product;
  return (
    <div className="col" key={id}>
      <div
        className="card overflow-hidden shadow-sm border-0"
        aria-hidden="true"
      >
        <img
          src={image}
          class="card-img-top my-3"
          alt={title}
          style={{ height: "8rem", objectFit: "contain" }}
        />
        <div className="card-body p-4">
          <h5
            className="card-title fs-6 text-primary text-left"
            style={{ height: "3rem" }}
          >
            {title.split(" ").slice(0, 5).join(" ")}
          </h5>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
            <h6 className="fw-bold text-secondary">${price}</h6>
            <button className="btn btn-primary btn-sm  text-capitalize fs-6">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
