import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { SyncLoader } from 'react-spinners';
//import { useAllProducts } from '../hooks/useAllProducts';
import { useProducts } from '../hooks/useProducts';
import { ProducList } from './ProducList';

const Home = () => {
  const { data: products = [], error = '', loading = false } = useProducts();
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
              <SyncLoader color={'#36D7B7'} loading={true} size={18} />
            </div>
          </div>
        ) : (
          <ProducList products={products} />
        )}
      </div>
    </div>
  );
};
export default Home;
