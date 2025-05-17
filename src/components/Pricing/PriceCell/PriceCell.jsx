import React from "react";
import styles from "./PriceCell.module.css";

const PriceCell = ({ price, originalPrice }) => {
  return (
    <td>
      {originalPrice ? (
        <div className={styles.price}>
          {price.toFixed(2)} zł
          <div className={styles.priceOld}>{originalPrice.toFixed(2)} zł</div>
        </div>
      ) : (
        <>{price.toFixed(2)} zł</>
      )}
    </td>
  );
};

export default PriceCell;
