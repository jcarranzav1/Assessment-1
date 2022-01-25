import useSWR from 'swr';
import { getProductsId } from '../apis/products';

export const useProductsId = (id) => {
  const { data, error } = useSWR(`/${id}`, async () => {
    const response = await getProductsId(id);
    return response;
  });

  return {
    data,
    loading: !error && !data,
    error,
  };
};
