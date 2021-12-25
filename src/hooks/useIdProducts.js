import { useEffect, useRef, useState } from 'react';
import { getProductsById } from '../apis/getProducts';

export const useIdProducts = (id) => {
  const cache = useRef(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function getProductsId(id) {
    try {
      setLoading(true);
      setError('');
      if (cache.current) {
        const data = cache.current;
        setProducts(data);
      } else {
        const data = await getProductsById(id);
        cache.current = data;
        setProducts(data);
      }
    } catch (err) {
      setError(err.message || 'Error');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductsId(id);
  }, [id]);

  return [products, loading, error];
};
