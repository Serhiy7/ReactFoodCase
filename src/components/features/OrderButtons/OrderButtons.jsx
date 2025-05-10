import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OrderButtons.module.css';

const OrderButtons = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Złóż zamówienie</h2>
      <div className={styles.buttons}>
        <Link to="/standard-menu" className={styles.button}>
          Standardowe menu
        </Link>
        <Link to="/menu" className={styles.button}>
          Menu do wyboru
        </Link>
      </div>
    </div>
  );
};

export default OrderButtons;