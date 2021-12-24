import React from 'react';
import { ProductCard } from './ProductCard';

export const ProducList = ({ products }) => {
	return (
		<div className="container__cards ">
			<div className="cards__row animate__animated animate__fadeIn">
				{products.map((product, index) => (
					<ProductCard
						key={index}
						image={product.image}
						title={product.title}
					/>
				))}
			</div>
		</div>
	);
};
