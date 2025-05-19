import HomePage from "./pages/Home/HomePage";
import MenuSelectionPage from "./pages/MenuSelectionPage/MenuSelectionPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import RegulaminPage from "./pages/RegulaminPage/RegulaminPage";
import Pricing from "./pages/PricingPage/PricingPage";

export const appRoutes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/menu-selection", component: MenuSelectionPage },
  { path: "/order", component: OrderPage },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/regulamin", component: RegulaminPage },
  { path: "/pricing", component: Pricing },
];
