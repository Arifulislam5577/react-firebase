import { useEffect, useContext } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
import { DataContext } from "./contextApi/contextApi";
function App() {
  const { setProducts, setLoading } = useContext(DataContext);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await axios("https://fakestoreapi.com/products");
      setProducts(result.data);
      setLoading(false);
    };

    getData();
  }, [setProducts, setLoading]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
