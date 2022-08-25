import React, { useContext } from "react";
import { DataContext } from "../../contextApi/contextApi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const { cart, quantityManager, productRemoveFromCart, clearCart } =
    useContext(DataContext);
  const totalProducts = cart.reduce((acc, item) => acc + item.quantity, 0);
  const productPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const tax = () => Math.round(productPrice * 0.1);
  const shipping = () => (productPrice > 500 ? 0 : 50);

  const handleCheck = () => {
    navigate("/login?redirect=/order");
  };

  return (
    <section className="py-5">
      {cart.length <= 0 ? (
        <div className="container">
          <div className="text-center">
            <h1 className="text-uppercase fw-bold fs-3">
              Your Cart Is currently
              <span className="text-secondary">&nbsp;empty!</span>
            </h1>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-8">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">PRODUCT</th>
                    <th scope="col">NAME</th>
                    <th scope="col">QUANTITY</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => {
                    return (
                      <tr key={product.id} className="align-middle">
                        <th>#{product.id}</th>
                        <td>
                          <img
                            src={product.image}
                            alt={product.title}
                            style={{ height: "2rem", width: "2rem" }}
                          />
                        </td>
                        <td>
                          {product.title.split(" ").slice(0, 3).join(" ")}
                        </td>
                        <td className="d-flex align-items-center gap-2">
                          <button
                            className="btn btn-light btn-sm"
                            onClick={() => {
                              quantityManager(product.id, "minus");
                              if (product.quantity <= 0) {
                                productRemoveFromCart(product.id);
                              }
                            }}
                          >
                            <AiOutlineMinus />
                          </button>
                          {product.quantity}

                          <button
                            className="btn btn-light btn-sm"
                            onClick={() => quantityManager(product.id, "plus")}
                          >
                            <AiOutlinePlus />
                          </button>
                        </td>
                        <td className="text-primary fw-bold">
                          ${(product.quantity * product.price).toFixed(2)}
                        </td>
                        <td>
                          <button
                            className="btn btn-light btn-sm"
                            onClick={() => productRemoveFromCart(product.id)}
                          >
                            <FaRegTrashAlt />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <div className="p-3">
                <h3 className="bg-primary p-2 text-center text-uppercase text-light fw-bold">
                  Summary
                </h3>
                <ol className="list-group my-3">
                  <li className="list-group-item d-flex rounded-0 bg-light justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <span className="fw-bold">Total Product</span>
                    </div>
                    <span className="fw-bold">{totalProducts}</span>
                  </li>
                  <li className="list-group-item d-flex rounded-0 bg-light justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <span className="fw-bold">Price</span>
                    </div>
                    <span className="fw-bold">${productPrice.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex rounded-0 bg-light justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <span className="fw-bold">Tax</span>
                    </div>
                    <span className="fw-bold">${tax()}</span>
                  </li>{" "}
                  <li className="list-group-item d-flex rounded-0 bg-light justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <span className="fw-bold">shipping</span>
                    </div>
                    <span className="fw-bold">${shipping()}</span>
                  </li>
                  <li className="list-group-item d-flex rounded-0 bg-light justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <span className="fw-bold">Total Price</span>
                    </div>
                    <span className="fw-bold">
                      ${(shipping() + tax() + productPrice).toFixed(2)}
                    </span>
                  </li>
                </ol>
                <div className="flex align-items-center w-100 justify-centent-between gap-3">
                  <button
                    className="btn btn-secondary text-white rounded-0 w-50 btn-lg"
                    onClick={() => clearCart()}
                  >
                    CLEAR CART
                  </button>
                  <button
                    onClick={handleCheck}
                    className="btn btn-primary rounded-0 w-50 btn-lg"
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
