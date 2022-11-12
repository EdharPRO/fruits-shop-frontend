import { api } from '../api';

export const fetchProducts = (config = {}) => {
  return api.get('/products', config).then(({ data }) => {
    return data;
  });
};
