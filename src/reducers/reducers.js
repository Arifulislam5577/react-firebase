import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase";

const cartItems = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const initialState = {
  loading: true,
  products: [],
  cart: cartItems,
  user: null,
  error: "",
};

// LOGOUT USER
const logoutUser = () => {
  signOut(auth);
};

localStorage.setItem("cart", JSON.stringify(initialState.cart));

const findProductById = (id, arr) => arr.find((product) => product.id === id);

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: "",
      };

    case "FETCH_PRODUCT_ERROR":
      return {
        ...state,
        loading: false,
        error: "Something Went Wrong",
      };

    // CART REDUCER
    case "ADD_TO_CART":
      const product = findProductById(action.payload, state.products);

      if (!product) {
        return;
      } else {
        const currentProduct = {
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
          rating: product.rating,
          quantity: 1,
        };

        if (findProductById(action.payload, state.cart)) {
          return;
        } else {
          const cartProduct = [currentProduct, ...state.cart];
          localStorage.setItem("cart", JSON.stringify(cartProduct));
          return { ...state, cart: cartProduct };
        }
      }
    case "HANDLE_PRODUCT_QUANTITY":
      const cartProduct = findProductById(action.payload.id, state.cart);
      if (action.payload.operator === "plus") {
        cartProduct.quantity = cartProduct.quantity + 1;
        return { ...state, cart: [...state.cart] };
      } else {
        cartProduct.quantity = cartProduct.quantity - 1;
        return { ...state, cart: [...state.cart] };
      }

    case "REMOVE_ITEM":
      const item = findProductById(action.payload, state.cart);
      const products = state.cart.filter((pd) => pd.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(products));
      return { ...state, cart: products };
    case "CLEAR_CART":
      localStorage.removeItem("cart");
      return { ...state, cart: [] };

    case "LOGIN_USER":
      return { ...state, loading: false, user: action.payload };
    case "LOGOUT_USER":
      logoutUser();
      return { ...state, loading: false, user: null };

    default:
      return state;
  }
};

export { initialState, reducer };
