import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PriceList from '../components/PriceList';
import Calculator from '../components/Calculator';

const PricesPage = () => {
  return (
    <div>
      <Header />
      <main className="page-main">
        <h1 className="page-title">Cennic uslug cateringowych</h1>
        <PriceList />
        <Calculator />
      </main>
      <Footer />
    </div>
  );
};

export default PricesPage;
