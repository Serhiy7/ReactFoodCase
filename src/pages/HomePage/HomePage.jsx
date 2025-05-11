import React from "react";
import MainLayout from "../../components/layouts/MainLayout";

import PromoSection from "../../components/features/PromoSection/PromoSection";
import MenuSection from "../../components/features/MenuSection/MenuSection";
import Advantages from "../../components/features/Advantages/Advantages";
import Calculator from "../../components/features/Calculator/Calculator";
// import OrderButtons from "../../components/featuresOrderButtons";

const HomePage = () => {
  return (
    <>
      <MainLayout />
      <PromoSection />
      <MenuSection />
      <section
        className="section is-white"
        style={{ paddingTop: "0px", paddingBottom: "20px" }}
      >
        <div className="container section__container">
          <Advantages />
          <Calculator />
        </div>
      </section>
      {/* <OrderButtons /> */}
      {/* Feedback component would go here if separate */}
      <MainLayout />
    </>
  );
};

export default HomePage;
