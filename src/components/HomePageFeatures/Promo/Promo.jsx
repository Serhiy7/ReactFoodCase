import React from 'react';
import styles from './Promo.module.css';

const Promo = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.container}>
        <div className={styles.promo__inner}>
          <h1 className={styles.promo__title}>Dostawa gotowych posiłków</h1>
          <div className={styles.promo__text}>
            <p>Wygodne posiłki na twój aktywny dzień.</p>
            <p className={styles.accent}>
              <span>
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG content */}
                </svg>
              </span>
              Nasze opakowanie nie szkodzi naturze.
            </p>
          </div>
          <a href="#menu" className={`${styles.btn} ${styles.promo__btn}`}>Zobacz menu</a>
        </div>
        <img src="../assets/img/promo/1.png" alt="" />
      </div>
    </div>
  );
};

export default Promo;
