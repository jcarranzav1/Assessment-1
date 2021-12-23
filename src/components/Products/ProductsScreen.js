import React from 'react';
import { useFetch } from '../../hooks/useFetch';
export const ProductsScreen = () => {
	const [products] = useFetch();
	return (
		<div className="container">
			<p className="container__title">Products</p>
			<div className="container__cards">
				<div className="cards__row">
					{products.map((product, index) => (
						<div key={index} className="cards__column">
							<div className="product-card">
								<div className="card-body">
									<img
										className="card-body__img"
										src={product.image}
										alt={product.title}></img>
									<p className="card-body__title">
										{product.title}
									</p>
								</div>
								<div className="card-footer">
									<p className="card-footer__timer">
										00:00:00
									</p>
									<button
										className="btn btn-primary"
										disabled>
										Go to Detail
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
