import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/calorie-meal-plan" element={<CalorieMealPlanPage />} />
      <Route path="/menu-selection" element={<MenuSelectionPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} /> */}
    </Routes>
  );
}

export default App;
