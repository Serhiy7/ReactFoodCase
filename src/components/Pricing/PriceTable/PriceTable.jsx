import React from 'react';
import styles from './PriceTable.module.css';
import PriceRow from '@components/Pricing/PriceRow/PriceRow';

const PriceTable = ({ prices, discounts }) => {
  return (
    <div className={styles.priceTable}>
      <table>
        <thead>
          <tr>
            <th>Kalorii</th>
            <th>1 dzień</th>
            <th>
              20 dni <b>(-4%)</b>
            </th>
            <th>
              24 dni <b>(-5%)</b>
            </th>
            <th>
              28 dni <b>(-7%)</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price, index) => (
            <PriceRow key={index} price={price} discounts={discounts} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
