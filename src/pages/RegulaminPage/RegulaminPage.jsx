import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import Regulamin from "../../components/features/Regulamin/Regulamin";

const RegulaminPage = () => {
  return (
    <div>
      <MainLayout />
      <main className="page-main">
        <Regulamin />
      </main>
      <MainLayout />
    </div>
  );
};

export default RegulaminPage;
