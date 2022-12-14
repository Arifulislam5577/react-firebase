import React, { useContext } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUserAlt, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataContext } from "../contextApi/contextApi";
const Navbar = () => {
  const { state, dispatch } = useContext(DataContext);
  const totalProducts = state.cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const { user } = state;

  return (
    <nav className="navbar navbar-expand-lg bg-primary p-3 shadow sticky-top">
      <div className="container">
        <div className="logo">
          <Link
            className="navbar-brand d-flex align-items-center text-white gap-2 fw-bold"
            to="/"
          >
            <GiShoppingBag color="#f97316" />
            S.F.<span className="text-secondary">HOME</span>
          </Link>
        </div>
        <div className=" d-flex justify-content-end gap-2">
          <Link
            className="btn btn-secondary rounded-0 text-light d-flex align-items-center gap-1"
            to="/cart"
          >
            <FiShoppingCart />
            <span>-</span>
            <span className="">{totalProducts}</span>
          </Link>
          {user ? (
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle rounded-0 text-light"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PROFILE
              </button>
              <ul className="dropdown-menu rounded-0 bg-primary p-2">
                <li className="py-3">
                  <Link
                    className="text-decoration-none rounded-0 text-light d-flex align-items-center justify-content-center gap-2"
                    to="/profile"
                  >
                    <FaRegUserCircle /> Dashboard
                  </Link>
                </li>

                <li>
                  <button
                    className="btn btn-danger w-100 rounded-0 text-light d-flex align-items-center justify-content-center gap-2"
                    onClick={() => dispatch({ type: "LOGOUT_USER" })}
                  >
                    <FiLogIn />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              className="btn btn-secondary rounded-0 text-light d-flex align-items-center"
              to="/login"
            >
              <FaUserAlt />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
