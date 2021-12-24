import React from 'react';
import { SyncLoader } from 'react-spinners';
import { useFetch } from '../hooks/useFetch';
import { ProducList } from './ProducList';
export const Home = () => {
	const [products, loading] = useFetch();
	console.log(products);
	return (
		<div>
			<div className="container">
				<p className="container__title animate__animated animate__fadeInDown">
					Products
				</p>
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
					<ProducList products={products} />
				)}
			</div>
		</div>
	);
};
