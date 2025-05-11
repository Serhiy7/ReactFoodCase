import React from 'react';
import MainLayout from "../../components/layouts/MainLayout";
import PrivacyPolicy from '../../components/features/PrivacyPolicy/PrivacyPolicy';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <MainLayout />
      <main className="page-main">
        <PrivacyPolicy />
      </main>
      <MainLayout />
    </div>
  );
};

export default PrivacyPolicyPage;
