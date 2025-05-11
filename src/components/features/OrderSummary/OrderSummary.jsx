import React from "react";
import PropTypes from "prop-types";
// import { useOrder } from '../../../hooks/useOrder';
import styles from "./OrderSummary.module.css";

const OrderSummary = () => {
  const { order } = useOrder();

  return (
    <div className={styles.summary}>
      <h3 className={styles.heading}>Informacje o zamówieniu</h3>
      <div className={styles.grid}>
        <p>
          <strong>Liczba pakietów:</strong> {order.packages.length}
        </p>
        <p>
          <strong>Сałkowity:</strong> {order.totalPrice.toFixed(2)} zł
        </p>
        <p>
          <strong>Rabat:</strong> {order.discount}%
        </p>
        <p>
          <strong>Razem do zapłaty:</strong>{" "}
          {order.totalWithDiscount.toFixed(2)} zł
        </p>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  order: PropTypes.shape({
    packages: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    totalWithDiscount: PropTypes.number.isRequired,
  }),
};

export default OrderSummary;
