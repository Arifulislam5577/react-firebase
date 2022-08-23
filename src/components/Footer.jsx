import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-5 bg-primary mt-auto">
      <div className="container text-center d-flex align-items-center flex-column">
        <Link
          className="mb-2 text-decoration-none fs-2 d-flex align-items-center text-white gap-2 fw-bold"
          to="/"
        >
          <GiShoppingBag color="#f97316" />
          S.F.<span className="text-secondary">HOME</span>
        </Link>

        <p className="text-light text-uppercase mb-0">
          s.f.home means shop from home
        </p>
        <p className="text-light">
          All rights reserved || &copy;{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
