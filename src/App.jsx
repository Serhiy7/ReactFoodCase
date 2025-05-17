import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import RegulaminPage from "./pages/RegulaminPage/RegulaminPage";
import Pricing from "./pages/PricingPage/PricingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/regulamin" element={<RegulaminPage />} />
      <Route path="/prices" element={<Pricing />} />
      {/* <Route path="/calorie-meal-plan" element={<CalorieMealPlanPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      
      <Route path="/terms-of-service" element={<TermsOfServicePage />} /> */}
    </Routes>
  );
}

export default App;
