import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import StandardMenuPage from "./pages/StandardMenuPage";
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";
import PricesPage from "./pages/PricesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RegulaminPage from "./pages/RegulaminPage";
import FeedbackPage from "./pages/FeedbackPage";

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
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
