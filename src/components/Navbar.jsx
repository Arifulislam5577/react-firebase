import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { VscListFlat } from "react-icons/vsc";
import { Link } from "react-router-dom";
const Navbar = () => {
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
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 rounded-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-secondary rounded-0 text-light"
              type="submit"
            >
              Search
            </button>
          </form>
          <button className="btn btn-secondary rounded-0 text-light d-flex align-items-center gap-1">
            <FiShoppingCart />
            <span>-</span>
            <span className="">0</span>
          </button>
          <button className="btn btn-secondary rounded-0 text-light d-flex align-items-center gap-1">
            <VscListFlat />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
