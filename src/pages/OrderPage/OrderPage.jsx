// src/pages/OrderPage/OrderPage.jsx
import React, { useState, useCallback, useMemo } from "react";
import styles from "./OrderPage.module.css";

// Импортируем всё из нашего index.js
import {
  ModalProvider,
  MultiStepForm,
  PackageSelection,
  // DeliveryForm,
  // OrderSummary,
  // OrderTotal,
} from "../../components/OrderFeatures";
import {
  DeliveryForm,
  OrderSummary,
  OrderTotal,
} from "../../components/MenuSelectionFeatures/index";
// Отдельно импортируем StepsIndicator
import StepsIndicator from "../../components/MenuSelectionFeatures/StepsIndicator/StepsIndicator";

const OrderPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [orderState, setOrderState] = useState({
    // packages — массив объектов { packageId, dates, price, originalPrice, discount, discountPercent, days, packageData }
    packages: [],
    // delivery — { email, phone, fullname, street, house_number, klatka, floor, apartment, gate_code, notes }
    delivery: {},
  });

  // 1. Коллбэк для PackageSelection → обновляем массив пакетов
  const handlePackageUpdate = useCallback((updatedPackages) => {
    setOrderState((prev) => ({
      ...prev,
      packages: updatedPackages,
    }));
  }, []);

  // 2. Коллбэк для DeliveryForm → обновляем данные доставки и переходим на шаг 2
  const handleDeliverySubmit = useCallback((deliveryData) => {
    setOrderState((prev) => ({
      ...prev,
      delivery: deliveryData,
    }));
    setCurrentStep(2);
  }, []);

  // 3. Валидация шага 0: для каждого пакета должен быть хотя бы один selectedDate
  const validateStep0 = useCallback(() => {
    const pkgs = orderState.packages;
    if (pkgs.length === 0) return false;
    return pkgs.every(
      (pkg) => Array.isArray(pkg.dates) && pkg.dates.length > 0
    );
  }, [orderState.packages]);

  // 4. Валидация шага 1: проверяем все обязательные поля доставки
  const validateStep1 = useCallback(() => {
    const data = orderState.delivery;
    const required = [
      "email",
      "phone",
      "fullname",
      "street",
      "house_number",
      "floor",
      "apartment",
      "gate_code",
    ];
    return required.every((key) => {
      return data[key] && data[key].toString().trim() !== "";
    });
  }, [orderState.delivery]);

  const onValidateStep = [validateStep0, validateStep1];

  // 5. Считаем итоги: totalDays, subtotal, discountAmount, totalPrice
  const calculateOrderTotals = useCallback((packages) => {
    const totalDays = packages.reduce((sum, pkg) => sum + (pkg.days || 0), 0);
    const subtotal = packages.reduce(
      (sum, pkg) => sum + (pkg.originalPrice || 0),
      0
    );
    const discountAmount = packages.reduce(
      (sum, pkg) => sum + (pkg.discount || 0),
      0
    );
    const total = subtotal - discountAmount;
    return { totalDays, subtotal, discountAmount, total };
  }, []);

  const { totalDays, subtotal, discountAmount, total } = useMemo(
    () => calculateOrderTotals(orderState.packages),
    [orderState.packages, calculateOrderTotals]
  );

  // 6. Общая «валидность» (оба шага 0 и 1)
  const isOrderValid = useMemo(() => {
    return validateStep0() && validateStep1();
  }, [validateStep0, validateStep1]);

  // 7. Обработчик «Перейти к оплате» справа
  const handleProceedToPayment = useCallback(() => {
    if (isOrderValid) {
      setCurrentStep(2);
    }
  }, [isOrderValid]);

  return (
    <ModalProvider>
      <div className={styles.orderPage}>
        <main className={styles.pageMain}>
          <div className={`${styles.container} ${styles.orderContainer}`}>
            <h1 className={styles.pageTitle}>Złóż zamówienie</h1>

            {/* Индикатор текущего шага */}
            <StepsIndicator currentStep={currentStep} />

            <div className={styles.contentGrid}>
              {/* Левая колонка: мультишаговая форма */}
              <div className={styles.mainColumn}>
                <MultiStepForm
                  initialStep={currentStep}
                  onValidateStep={onValidateStep}
                  onStepChange={(step) => setCurrentStep(step)}
                >
                  {/* — Шаг 0: выбор пакетов — */}
                  <div className={styles.packageStep}>
                    <PackageSelection onOrderUpdate={handlePackageUpdate} />
                  </div>

                  {/* — Шаг 1: ввод данных доставки — */}
                  <div className={styles.deliveryStep}>
                    <DeliveryForm
                      initialValues={orderState.delivery}
                      onBack={() => setCurrentStep(0)}
                      onSubmit={handleDeliverySubmit}
                    />
                  </div>

                  {/* — Шаг 2: обзор и подтверждение заказа — */}
                  <div className={styles.summaryStep}>
                    <OrderSummary
                      selectedPackages={orderState.packages}
                      deliveryData={orderState.delivery}
                    />
                  </div>
                </MultiStepForm>
              </div>

              {/* Правая колонка: итоговая панель */}
              <div className={styles.asideColumn}>
                <OrderTotal
                  packageCount={orderState.packages.length}
                  totalWithoutDiscount={subtotal}
                  discountAmount={discountAmount}
                  totalPrice={total}
                  onProceedToCheckout={handleProceedToPayment}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ModalProvider>
  );
};

export default React.memo(OrderPage);
