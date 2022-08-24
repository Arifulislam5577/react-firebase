import React, { useContext } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserAlt, FaRegUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DataContext } from "../contextApi/contextApi";
const Navbar = () => {
  const { cart, searchTerm, setSearchTerm, handleSubmit, user } =
    useContext(DataContext);
  const totalProducts = cart.reduce((acc, item) => acc + item.quantity, 0);

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
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2 rounded-0 bg-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn btn-secondary rounded-0 text-light d-flex align-items-center"
              type="submit"
            >
              <BsSearch />
            </button>
          </form>
          <Link
            className="btn btn-secondary rounded-0 text-light d-flex align-items-center gap-1"
            to="/cart"
          >
            <FiShoppingCart />
            <span>-</span>
            <span className="">{totalProducts}</span>
          </Link>
          {user ? (
            <Link
              className="btn btn-secondary rounded-0 text-light d-flex align-items-center"
              to="/profile"
            >
              <FaRegUserCircle />
            </Link>
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
