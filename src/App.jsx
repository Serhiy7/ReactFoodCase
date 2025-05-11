import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import StandardMenuPage from "./pages/StandardMenuPage/StandardMenuPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import CancelPage from "./pages/CancelPage/CancelPage";
import PricesPage from "./pages/PricesPage/PricesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import RegulaminPage from "./pages/RegulaminPage/RegulaminPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/standard-menu" element={<StandardMenuPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/regulamin" element={<RegulaminPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
