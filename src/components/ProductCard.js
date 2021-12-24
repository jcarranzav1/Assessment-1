import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ id, image, title }) => {
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
					<Link to={`/detail/${id}`}>
						<button className="btn btn-primary">
							Go to Detail
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
