import { useEffect, useRef, useState } from 'react';
import { getAllProducts } from '../apis/getProducts';

export const useAllProducts = () => {
	const cache = useRef(null);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	async function getProducts() {
		try {
			setLoading(true);
			setError('');
			if (cache.current) {
				const data = cache.current;
				setProducts(data);
			} else {
				const data = await getAllProducts();
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
		getProducts();
	}, []);

	return [products, loading, error];
};
