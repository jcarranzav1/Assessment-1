import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRandomNumber } from '../utils/utils';

export const ProductCard = ({ id, image, title }) => {
  const randomTime = getRandomNumber(1, 4) * 60;
  const [time, setTime] = useState(randomTime);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(interval);
      setDisable(true);
    }
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="cards__column">
      <div className="product-card">
        <div className="card-body">
          <img className="card-body__img" src={image} alt={title}></img>
          <p className="card-body__title">{title}</p>
        </div>
        <div className="card-footer">
          <div className="card-footer__timer">
            <span>{('0' + Math.floor(time / 3600)).slice(-2)}:</span>
            <span>{('0' + Math.floor(time / 60)).slice(-2)}:</span>
            <span>{('0' + (time % 60)).slice(-2)}</span>
          </div>
          <Link to={`/detail/${id}`}>
            <button className="btn btn-primary" disabled={disable}>
              {disable ? 'Time Over' : 'Go to Detail'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
