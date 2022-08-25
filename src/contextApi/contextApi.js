import axios from "axios";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
// import { productsArr } from "../Data/products";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(cartItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);

  const findProductById = (id, arr) => arr.find((product) => product.id === id);

  // ADD TO CART

  const addToCart = (id) => {
    const product = findProductById(id, products);
    const currentProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    if (cart.find((product) => product.id === currentProduct.id)) {
      return;
    } else {
      setCart([currentProduct, ...cart]);
    }
  };
  localStorage.setItem("cart", JSON.stringify(cart));

  // HANDLE PRODUCT QUANTITY

  const quantityManager = (id, operator) => {
    const product = findProductById(id, cart);
    if (operator === "plus") {
      product.quantity = product.quantity + 1;
      setCart([...cart]);
    } else {
      product.quantity = product.quantity - 1;
      setCart([...cart]);
    }
  };

  // PRODUCT REMOVE FROM CART
  const productRemoveFromCart = (id) => {
    const product = findProductById(id, cart);
    const products = cart.filter((pd) => pd.id !== product.id);
    setCart(products);
    localStorage.setItem("cart", JSON.stringify(products));
  };

  // CLEAR CART
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  //SEARCH PRODUCT
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchTerm);
  };

  // LOGOUT USER
  const logoutUser = () => {
    signOut(auth);
    setUser(null);
  };

  //USER LOGIN OR NOT
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  // FETCH DATA FROM API
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
    <DataContext.Provider
      value={{
        setProducts,
        setLoading,
        loading,
        // eslint-disable-next-line array-callback-return
        products: products.filter((product) => {
          if (searchTerm === "") {
            return product;
          } else if (
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return product;
          }
        }),
        addToCart,
        cart,
        quantityManager,
        productRemoveFromCart,
        clearCart,
        searchTerm,
        setSearchTerm,
        handleSubmit,
        user,
        logoutUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
