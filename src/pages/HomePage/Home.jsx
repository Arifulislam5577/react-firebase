import React, { useContext } from "react";
import Loader from "../../components/Loader";
import Product from "../../components/Product";
import { DataContext } from "../../contextApi/contextApi";
const Home = () => {
  const { state } = useContext(DataContext);
  const { loading, products } = state;
  if (loading || products.length <= 0) {
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
