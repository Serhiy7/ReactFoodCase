import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Header />
      <main className="page-main">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
