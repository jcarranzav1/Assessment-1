import React from 'react';

export const ProductCard = ({ image, title }) => {
	return (
		<div className="cards__column">
			<div className="product-card">
				<div className="card-body">
					<img
						className="card-body__img"
						src={image}
						alt={title}></img>
					<p className="card-body__title">{title}</p>
				</div>
				<div className="card-footer">
					<p className="card-footer__timer">00:00:00</p>
					<button className="btn btn-primary" disabled>
						Go to Detail
					</button>
				</div>
			</div>
		</div>
	);
};
