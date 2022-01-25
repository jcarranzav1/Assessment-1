import useSWR from 'swr';
import { getAllProducts } from '../apis/products';

export const useProducts = () => {
  const { data, error } = useSWR('/', async () => {
    const response = await getAllProducts();
    return response;
  });

  return {
    data,
    loading: !error && !data,
    error,
  };
};
