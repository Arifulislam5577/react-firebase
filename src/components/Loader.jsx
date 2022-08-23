import React from "react";

const Loader = () => {
  return (
    <div className="col ">
      <div className="card overflow-hidden shadow" aria-hidden="true">
        <div
          style={{ height: "10rem" }}
          className="bg-primary rounded-top"
        ></div>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a
            href="/"
            tabIndex="-1"
            className="btn btn-primary disabled placeholder col-6"
          >
            {" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loader;
