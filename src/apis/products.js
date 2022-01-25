import http from './http';

export const getAllProducts = async () => {
  return http.get('/').then((response) => response.data);
};

export const getProductsId = (id) => {
  return http.get(`/${id}`).then((response) => response.data);
};
