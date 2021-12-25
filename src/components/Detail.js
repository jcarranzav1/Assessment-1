import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { useIdProducts } from '../hooks/useIdProducts';

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  const [products, loading] = useIdProducts(id);

  if (!products) {
    return <Navigate to="/home" />;
  }

  const { title, price, description, category, image, rating } = products;
  const { rate, count } = !!rating && rating;

  return (
    <>
      {loading ? (
        <div className="loading-container animate__animated animate__flash">
          <div className="loading-info">
            <p>Loading</p>
            <SyncLoader color={'#36D7B7'} loading={true} size={18} />
          </div>
        </div>
      ) : (
        <div className="detail-container ">
          <div className="product-container product-container-sm">
            <div className="product-row">
              <div className="product__img col-xl-4 col-lg-5 col-sm-6 animate__animated animate__fadeInLeft">
                <img src={image} alt={title}></img>
              </div>
              <div className="product__content col-xl-8 col-lg-7 col-sm-6 animate__animated animate__zoomIn">
                <h3 className="content__title">{title}</h3>
                <p className="content__category">{`Category: ${category} `}</p>
                <div className="content__rate">
                  <p className="content__score">{`${rate} score`}</p>
                  <p className="content__rating">{`${count} rating`}</p>
                </div>
                <p className="content__description">{description}</p>
                <p className="content__price">{`Price: $${price}`}</p>
                <button className="btn btn-primary" onClick={handleReturn}>
                  Return
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
