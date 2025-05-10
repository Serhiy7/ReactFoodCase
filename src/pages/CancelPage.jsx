import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CancelPage = () => {
  return (
    <div>
      <Header />
      <main className="page-main">
        <div className="container">
          <div className="info-block">
            <svg width="120" height="139" viewBox="0 0 120 139" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="69" r="57.5" stroke="#FF0000" strokeWidth="5" />
              <path d="M64.5625 27.3636L63.7457 87.4773H54.2713L53.4545 27.3636H64.5625ZM59.0085 111.653C56.9938 111.653 55.265 110.932 53.8221 109.489C52.3791 108.046 51.6577 106.317 51.6577 104.303C51.6577 102.288 52.3791 100.559 53.8221 99.1161C55.265 97.6732 56.9938 96.9517 59.0085 96.9517C61.0232 96.9517 62.752 97.6732 64.195 99.1161C65.6379 100.559 66.3594 102.288 66.3594 104.303C66.3594 105.637 66.0191 106.862 65.3384 107.978C64.685 109.094 63.8002 109.993 62.6839 110.673C61.5949 111.327 60.3698 111.653 59.0085 111.653Z" fill="#FF1313" />
            </svg>
            <h1>Twoja płatność nie została zrealizowana</h1>
            <p>Twoja płatność za zamówienie nie została zakończona pomyślnie. Zamówienie nie zostało przetworzone, ponieważ wystąpiły problemy z realizacją płatności. Proszę spróbować ponownie lub skontaktować się z nami w celu uzyskania wsparcia.</p>
            <div className="info-block__actions">
              <a href="/" className="btn">Strona główna</a>
              <div className="info-block__cancel">
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

export default CancelPage;
