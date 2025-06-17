import React from "react";
import styles from "./Promo.module.css";

const Promo = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.promo__container}>
        <div className={styles.promo__inner}>
          <h1 className={styles.promo__title}>Dostawa gotowych posiłków</h1>
          <div className={styles.promo__text}>
            <p>Wygodne posiłki na twój aktywny dzień.</p>
            <p className={styles.accent}>
              <span>
                <img
                  src="/assets/img/promo/icon.png"
                  alt="Эко-упаковка"
                  className={styles.promoIcon}
                />
              </span>
              Nasze opakowanie nie szkodzi naturze.
            </p>
          </div>
          <a href="#menu" className={`${styles.btn} ${styles.promo__btn}`}>
            Zobacz menu
          </a>
        </div>
        <img
          src="/public/assets/img/promo/1.png"
          alt=""
          className={styles.promoImg}
        />
      </div>
    </div>
  );
};

export default Promo;
