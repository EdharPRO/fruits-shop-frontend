import { createContext, useEffect, useState } from 'react';
import * as productsApi from '../../../api/products';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [ products, setProducts ] = useState([]);
  const [ isFetched, setIsFetched ] = useState(false);

  const fetchProducts = () => {
    productsApi.fetchProducts().then((products) => {
      setProducts(products);
      setIsFetched(true);
    });
  };

  const providerValue = {
    isFetched,
    products
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={providerValue}>
      {children}
    </ProductsContext.Provider>
  );
};
