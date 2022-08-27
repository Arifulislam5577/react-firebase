import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./auth/firebase";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { DataContext } from "./contextApi/contextApi";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import Order from "./pages/Order/Order";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/Signin/SignIn";

function App() {
  const { dispatch } = useContext(DataContext);
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios("https:fakestoreapi.com/products");
        dispatch({ type: "FETCH_PRODUCT", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_PRODUCT_ERROR" });
      }
    };
    getData();
  }, [dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN_USER", payload: user });
      } else {
        dispatch({ type: "LOGIN_USER", payload: null });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />

        <Route
          path="/order"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
