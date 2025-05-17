import React from "react";
import Promo from "../../components/Promo/Promo";
import Advantages from "../../components/Advantages/Advantages";
import CalorieCalculator from "../../components/CalorieCalculator/CalorieCalculator";
import OrderButton from "../../components/Order/OrderButton";
import OrderOptions from "../../components/Order/OrderOptions";
import Footer from "../../components/Footer/Footer";
import Feedback from "../../components/Feedback/Feedback";

const HomePage = () => {
  return (
    <div>
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
