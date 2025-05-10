import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  const discounts = {
    20: 4,  // Скидка 4% на 20 дней
    24: 5,  // Скидка 5% на 24 дня
    28: 7   // Скидка 7% на 28 дней
  };

  useEffect(() => {
    // Замените этот URL на ваш реальный API-эндпоинт
    fetch('https://your-api-endpoint.com/api/prices')
      .then(response => response.json())
      .then(data => setPrices(data))
      .catch(error => console.error('Error fetching prices:', error));
  }, []);

  return (
    <div className="price-list">
      <div className="container">
        <div className="price-list__table">
          <table>
            <thead>
              <tr>
                <th>Kalorii</th>
                <th>1 dzień</th>
                <th>20 dni <b>(-4%)</b></th>
                <th>24 dni <b>(-5%)</b></th>
                <th>28 dni <b>(-7%)</b></th>
              </tr>
            </thead>
            <tbody>
              {prices.map((price, index) => {
                const pricePerDay = parseFloat(price.price);
                const price20DaysOriginal = pricePerDay * 20;
                const price20DaysDiscounted = price20DaysOriginal * (1 - discounts[20] / 100);
                const price24DaysOriginal = pricePerDay * 24;
                const price24DaysDiscounted = price24DaysOriginal * (1 - discounts[24] / 100);
                const price28DaysOriginal = pricePerDay * 28;
                const price28DaysDiscounted = price28DaysOriginal * (1 - discounts[28] / 100);

                return (
                  <tr key={index}>
                    <td>
                      <span>
                        <img src={`/uploads_img${price.image}`} alt={`${price.name} kalorii`} />
                        {price.name} Kalorii
                      </span>
                    </td>
                    <td>
                      {pricePerDay.toFixed(2)} zł
                    </td>
                    <td>
                      <div className="price">
                        {price20DaysDiscounted.toFixed(2)} zł
                        <div className="price__old">{price20DaysOriginal.toFixed(2)} zł</div>
                      </div>
                    </td>
                    <td>
                      <div className="price">
                        {price24DaysDiscounted.toFixed(2)} zł
                        <div className="price__old">{price24DaysOriginal.toFixed(2)} zł</div>
                      </div>
                    </td>
                    <td>
                      <div className="price">
                        {price28DaysDiscounted.toFixed(2)} zł
                        <div className="price__old">{price28DaysOriginal.toFixed(2)} zł</div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Link to="/standard-menu" className="btn price-list__btn">Złóż zamówienie</Link>
      </div>
    </div>
  );
};

export default PriceList;
