import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Regulamin from '../components/Regulamin';

const RegulaminPage = () => {
  return (
    <div>
      <Header />
      <main className="page-main">
        <Regulamin />
      </main>
      <Footer />
    </div>
  );
};

export default RegulaminPage;
