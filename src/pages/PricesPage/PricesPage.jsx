import React from "react";
import MainLayout from "../../components/layouts/MainLayout";

import PriceList from "../../components/features/PriceList/PriceList";
import Calculator from "../../components/features/Calculator/Calculator";

const PricesPage = () => {
  return (
    <div>
      <MainLayout />
      <main className="page-main">
        <h1 className="page-title">Cennic uslug cateringowych</h1>
        <PriceList />
        <Calculator />
      </main>
      <MainLayout />
    </div>
  );
};

export default PricesPage;
