import React, { useState } from "react";
import styles from "./OrderPage.module.css";
import {
  StepsIndicator,
  PackageSelection,
  DeliveryForm,
  OrderSummary,
  OrderTotal,
} from "../../components/OrderFeatures";
import { Header, Footer } from "../../layouts";

const OrderPage = () => {
  const [orderData, setOrderData] = useState({
    packages: [], // Массив выбранных пакетов с датами
    delivery: {}, // Данные доставки
    total: 0, // Общая сумма без скидки
    discount: 0, // Сумма скидки
    totalWithDiscount: 0, // Итоговая сумма
  });

  // Обработчик выбора пакета и дат
  const handlePackageSelect = (selectedPackage) => {
    setOrderData((prev) => ({
      ...prev,
      packages: [...prev.packages, selectedPackage],
      // Обновляем стоимость (примерная логика)
      total: prev.total + selectedPackage.price * selectedPackage.dates.length,
    }));
  };

  // Обработчик данных доставки
  const handleDeliverySubmit = (deliveryData) => {
    setOrderData((prev) => ({
      ...prev,
      delivery: deliveryData,
    }));
  };

  // Переход к оплате
  const handleProceedToCheckout = () => {
    console.log("Данные заказа:", orderData);
    // Здесь будет логика отправки данных на сервер
  };

  return (
    <div className={styles.orderPage}>
      <Header />
      <main className={styles.pageMain}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Złóż zamówienie</h1>

          <StepsIndicator currentStep={1} />

          <div className={styles.pageGrid}>
            <div className={styles.pageGridMain}>
              <PackageSelection onPackageSelect={handlePackageSelect} />
              <DeliveryForm onSubmit={handleDeliverySubmit} />
              <OrderSummary
                packages={orderData.packages}
                deliveryData={orderData.delivery}
              />
            </div>

            <div className={styles.pageGridAside}>
              <OrderTotal
                packageCount={orderData.packages.length}
                totalWithoutDiscount={orderData.total}
                discountAmount={orderData.discount}
                totalPrice={orderData.totalWithDiscount}
                onProceedToCheckout={handleProceedToCheckout}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderPage;
