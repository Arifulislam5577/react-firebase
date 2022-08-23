import React, { useContext } from "react";
import Loader from "../../components/Loader";
import Product from "../../components/Product";
import { DataContext } from "../../contextApi/contextApi";
const Home = () => {
  const { loading, products } = useContext(DataContext);
  // console.log(data);
  return (
    <section className="py-5">
      <div className="container">
        {loading ? (
          <div class="row row-cols-2 row-cols-lg-4 g-3">
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </div>
        ) : (
          <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
            {products.map((product) => (
              <Product product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
