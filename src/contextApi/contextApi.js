import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  return (
    <DataContext.Provider
      value={{ setProducts, setLoading, loading, products }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
