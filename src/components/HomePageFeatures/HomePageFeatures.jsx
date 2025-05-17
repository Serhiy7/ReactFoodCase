import Promo from "./Promo/Promo";
import Advantages from "./Advantages/Advantages";
import CalorieCalculator from "./CalorieCalculator/CalorieCalculator";
import OrderButton from "./Order/OrderButton";
import OrderOptions from "./Order/OrderOptions";
import Footer from "./Footer";
import Feedback from "./Feedback/Feedback";

const HomePageFeatures = () => {
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

export default HomePageFeatures;
