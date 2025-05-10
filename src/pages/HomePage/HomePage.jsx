import React from 'react';
import Header from '../components/Header';
import PromoSection from '../components/PromoSection';
import MenuSection from '../components/MenuSection';
import Advantages from '../../components/Advantages';
import Calculator from '../../components/Calculator';
import OrderButtons from '../components/OrderButtons';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <PromoSection />
      <MenuSection />
      <section className="section is-white" style={{ paddingTop: '0px', paddingBottom: '20px' }}>
        <div className="container section__container">
          <Advantages />
          <Calculator />
        </div>
      </section>
      <OrderButtons />
      {/* Feedback component would go here if separate */}
      <Footer />
    </>
  );
};

export default HomePage;