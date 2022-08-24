import React, { useContext } from "react";
import { DataContext } from "../contextApi/contextApi";

const Product = ({ product }) => {
  const { id, title, price, image } = product;
  const { addToCart, cart } = useContext(DataContext);
  return (
    <div className="col">
      <div
        className="card overflow-hidden shadow-sm border-0"
        aria-hidden="true"
      >
        <img
          src={image}
          className="card-img-top my-3"
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
            <button
              className="btn btn-primary btn-sm  text-capitalize fs-6"
              onClick={() => addToCart(id)}
              disabled={cart.find((pd) => pd.id === id)}
            >
              {cart.find((pd) => pd.id === id) ? "In Cart" : "add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
