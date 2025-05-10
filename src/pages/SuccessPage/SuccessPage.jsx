import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SuccessPage = () => {
  return (
    <div>
      <Header />
      <main className="page-main">
        <div className="container">
          <div className="info-block">
            <svg width="120" height="139" viewBox="0 0 120 139" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="69" r="57.5" stroke="#057916" strokeWidth="5" />
              <line x1="32.6609" y1="69.1315" x2="59.6609" y2="93.1315" stroke="#006A23" strokeWidth="5" />
              <line x1="57.0866" y1="92.391" x2="94.0866" y2="48.391" stroke="#006A23" strokeWidth="5" />
            </svg>
            <h1>Twoja płatność została przetworzona!</h1>
            <p>Twoja płatność za zamówienie została pomyślnie zakończona. Rozpoczęliśmy już realizację Twojego zamówienia. Oczekuj e-maila z potwierdzeniem i wszystkimi szczegółami.</p>
            <div className="info-block__actions">
              <a href="/" className="btn">Strona główna</a>
              <div className="info-block__success">
                <a href="/standard-menu" className="btn">Standardowe menu</a>
                <a href="/menu" className="btn">Menu do wyboru</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;
