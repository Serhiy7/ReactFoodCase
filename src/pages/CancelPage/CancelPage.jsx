import React from 'react';
import MainLayout from "../../components/layouts/MainLayout";
import styles from './CancelPage.module.css';

const CancelPage = () => {
  return (
    <MainLayout>
      <div className={styles.infoBlock}>
        <svg> {/* SVG-иконка */} </svg>
        <h1>Twoja płatność nie została zrealizowana</h1>
        <p>Twoja płatność za zamówienie nie została zakończona pomyślnie...</p>
        <div className={styles.actions}>
          <a href="/" className="btn">Strona główna</a>
          <div className={styles.cancelLinks}>
            <a href="/standard-menu" className="btn">Standardowe menu</a>
            <a href="/menu" className="btn">Menu do wyboru</a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CancelPage;