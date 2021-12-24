import { Alert } from 'react-bootstrap';
import React from 'react';
import { SyncLoader } from 'react-spinners';
import { useFetch } from '../../hooks/useFetch';
export const ProductsScreen = () => {
	const [products, loading, error] = useFetch();
	return (
		<div>
			<div className="container">
				<p className="container__title animate__animated animate__fadeInDown">
					Products
				</p>
				{error && <Alert variant="danger">{error}</Alert>}
				{loading ? (
					<div className="loading-container animate__animated animate__flash">
						<div className="loading-info">
							<p>Loading</p>
							<SyncLoader
								color={'#36D7B7'}
								loading={true}
								size={18}
							/>
						</div>
					</div>
				) : (
					<div className="container__cards ">
						<div className="cards__row animate__animated animate__fadeIn">
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
				)}
			</div>
		</div>
	);
};
