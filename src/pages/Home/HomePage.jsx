import React from "react";
import Promo from "../../components/HomePageFeatures/Promo/Promo";
import Advantages from "../../components/HomePageFeatures/Advantages/Advantages";
import CalorieCalculator from "../../components/HomePageFeatures/CalorieCalculator/CalorieCalculator";
import OrderButton from "../../components/HomePageFeatures/Order/OrderButton";
import OrderOptions from "../../components/HomePageFeatures/Order/OrderOptions";
import { Footer, Header } from "../../components/layouts/index";
import Feedback from "../../components/HomePageFeatures/Feedback/Feedback";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Promo />
      <Advantages />
      <CalorieCalculator />
      <OrderButton />
      <OrderOptions />
      <Feedback />
      <Footer />
    </div>
  );
};

export default HomePage;
