import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PackageSelection from "../components/PackageSelection";
import DeliveryForm from "../components/DeliveryForm";
import OrderSummary from "../components/OrderSummary";
import Payment from "../components/Payment";
import CookieBanner from "../../components/CookieBanner";
import Modal from "../components/Modal";
import useOrder from "../../hooks/useOrder";

const StandardMenuPage = () => {
  const { order, addPackage, removePackage } = useOrder();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleSubmit = (formData) => {
    console.log("Form data:", formData);
    console.log("Order data:", order);
    setIsModalOpen(true);
  };

  const packages = [
    { name: "1200", price: 50, image: "/uploads_img/1200.png" },
    { name: "1500", price: 60, image: "/uploads_img/1500.png" },
    { name: "1800", price: 70, image: "/uploads_img/1800.png" },
    { name: "2100", price: 80, image: "/uploads_img/2100.png" },
  ];

  return (
    <div>
      <Header />
      <main className="page-main">
        <div className="container">
          <h1 className="page-title">Złóż zamówienie</h1>
          <div className="steps-line">
            <div className="steps-line__item active">
              <div className="steps-line__num">1</div>
              Wybierz kaloryczność
            </div>
            <div className="steps-line__item">
              <div className="steps-line__num">2</div>
              Podaj dane dostawy
            </div>
            <div className="steps-line__item">
              <div className="steps-line__num">3</div>
              Podsumowania zamówienia
            </div>
            <div className="steps-line__item">
              <div className="steps-line__num">4</div>
              Płatność
            </div>
          </div>
          <div className="page-grid">
            <div className="page-grid__main">
              <div className="page-grid__tab active product-tab">
                <PackageSelection packages={packages} />
              </div>
              <div className="page-grid__tab">
                <DeliveryForm onSubmit={handleSubmit} />
              </div>
              <div className="page-grid__tab">
                <OrderSummary />
              </div>
            </div>
            <div className="page-grid__aside">
              <Payment />
            </div>
          </div>
        </div>
      </main>
      <CookieBanner />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="calc-modal__title">
          Wybierz datę dostawy dla wszystkich paczek
        </div>
        {/* Дополнительный контент модального окна */}
      </Modal>
    </div>
  );
};

export default StandardMenuPage;
