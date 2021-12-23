import { useEffect, useState } from 'react';
import { getProducts } from '../apis/getProducts';
export const useFetch = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	async function loadProducts() {
		try {
			setLoading(true);
			setError('');

			const data = await getProducts();
			setProducts(data);
		} catch (err) {
			setError(err.message || 'Error');
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		loadProducts();
	}, []);

	return [products, loading, error];
};
