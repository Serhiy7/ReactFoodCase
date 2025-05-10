import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeedbackForm from '../components/FeedbackForm';

const FeedbackPage = () => {
  return (
    <div>
      <Header />
      <main className="page-main">
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
