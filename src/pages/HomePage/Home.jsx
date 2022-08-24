import React, { useContext } from "react";
import Loader from "../../components/Loader";
import Product from "../../components/Product";
import { DataContext } from "../../contextApi/contextApi";
const Home = () => {
  const { loading, products } = useContext(DataContext);

  if (loading) {
    return (
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4 g-3 py-5">
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </div>
      </div>
    );
  } else if (products.length <= 0) {
    return (
      <div className=" my-5 text-center">
        <h1 className="text-uppercase fw-bold fs-3 text-center">
          No Product
          <span className="text-secondary">&nbsp;Found!</span>
        </h1>
      </div>
    );
  } else {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default Home;
