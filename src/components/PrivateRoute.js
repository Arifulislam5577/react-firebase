import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../contextApi/contextApi";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(DataContext);
  return state.user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
