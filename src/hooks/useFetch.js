import { useEffect, useState } from 'react';
import { getAllProducts, getProductsById } from '../apis/getProducts';

export const useFetch = (id) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	async function getProducts(id) {
		try {
			setLoading(true);
			setError('');
			const data = !!id
				? await getProductsById(id)
				: await getAllProducts();
			setProducts(data);
		} catch (err) {
			setError(err.message || 'Error');
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getProducts(id);
	}, [id]);

	return [products, loading, error];
};
