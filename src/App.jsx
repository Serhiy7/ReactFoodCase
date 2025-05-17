import { Routes, Route } from "react-router-dom";
import { ModalProvider } from "./components/OrderFeatures/ModalManager/ModalManager";
import HomePage from "./pages/Home/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import RegulaminPage from "./pages/RegulaminPage/RegulaminPage";
import Pricing from "./pages/PricingPage/PricingPage";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/regulamin" element={<RegulaminPage />} />
        <Route path="/prices" element={<Pricing />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </ModalProvider>
  );
}

export default App;
