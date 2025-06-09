import React, { useState, useCallback, useMemo, useEffect } from "react";
import styles from "./OrderPage.module.css";
import {
  ModalProvider,
  MultiStepForm,
  PackageSelection,
  OrderTotalPackage,
  StandardOrderSummary,
} from "../../components/OrderFeatures";
import { DeliveryDetailsForm } from "../../components/MenuSelectionFeatures/DeliveryForm";
import { OrderSummary } from "../../components/MenuSelectionFeatures";
import StepsIndicator from "../../components/MenuSelectionFeatures/StepsIndicator/StepsIndicator";

const emptyDelivery = {
  email: "",
  phone: "",
  fullname: "",
  street: "",
  house_number: "",
  klatka: "",
  floor: "",
  apartment: "",
  gate_code: "",
  notes: "",
};

const OrderPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [orderState, setOrderState] = useState({
    packages: [],
    delivery: {},
  });

  const [deliveryFormData, setDeliveryFormData] = useState(emptyDelivery);

  useEffect(() => {
    if (currentStep === 1) {
      setDeliveryFormData({
        ...emptyDelivery,
        ...orderState.delivery,
      });
    }
  }, [currentStep, orderState.delivery]);

  const handlePackageUpdate = useCallback((updatedPackages) => {
    setOrderState((prev) => ({
      ...prev,
      packages: updatedPackages,
    }));
  }, []);

  const handleDeliverySubmit = useCallback((deliveryData) => {
    setOrderState((prev) => ({
      ...prev,
      delivery: deliveryData,
    }));
    setCurrentStep(2);
  }, []);

  // Универсальный onChange
  const handleDeliveryChange = useCallback((fieldOrEvent, val) => {
    let name, value;
    if (typeof fieldOrEvent === "string") {
      name = fieldOrEvent;
      value = val;
    } else {
      ({ name, value } = fieldOrEvent.target);
    }
    setDeliveryFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // Сабмит внутри формы
  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleDeliverySubmit(deliveryFormData);
    },
    [deliveryFormData, handleDeliverySubmit]
  );

  // Сабмит из сайдбара
  const submitDeliveryForm = useCallback(() => {
    handleDeliverySubmit(deliveryFormData);
  }, [deliveryFormData, handleDeliverySubmit]);

  // Валидация шагов
  const validateStep0 = useCallback(() => {
    return (
      orderState.packages.length > 0 &&
      orderState.packages.every(
        (p) => Array.isArray(p.dates) && p.dates.length > 0
      )
    );
  }, [orderState.packages]);

  const validateStep1 = useCallback(() => {
    const d = deliveryFormData;
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
    return required.every((k) => d[k]?.toString().trim().length > 0);
  }, [deliveryFormData]);

  const onValidateStep = [validateStep0, validateStep1];

  // Итоги
  const calculateOrderTotals = useCallback((packages) => {
    const totalDays = packages.reduce((sum, p) => sum + (p.days || 0), 0);
    const subtotal = packages.reduce(
      (sum, p) => sum + (p.originalPrice || 0),
      0
    );
    const discountAmount = packages.reduce(
      (sum, p) => sum + (p.discount || 0),
      0
    );
    return {
      totalDays,
      subtotal,
      discountAmount,
      total: subtotal - discountAmount,
    };
  }, []);

  const { totalDays, subtotal, discountAmount, total } = useMemo(
    () => calculateOrderTotals(orderState.packages),
    [orderState.packages, calculateOrderTotals]
  );

  const isOrderValid = useMemo(
    () => validateStep0() && validateStep1(),
    [validateStep0, validateStep1]
  );

  const handleProceedToPayment = useCallback(() => {
    if (isOrderValid) setCurrentStep(2);
  }, [isOrderValid]);

  return (
    <ModalProvider>
      <div className={styles.orderPage}>
        <main className={styles.pageMain}>
          <div className={`${styles.container} ${styles.orderContainer}`}>
            <h1 className={styles.pageTitle}>Złóż zamówienie</h1>
            <StepsIndicator currentStep={currentStep} />
            <div className={styles.contentGrid}>
              <div className={styles.mainColumn}>
                <MultiStepForm
                  initialStep={currentStep}
                  onValidateStep={onValidateStep}
                  onStepChange={setCurrentStep}
                >
                  {/* Шаг 0 */}
                  <div className={styles.packageStep}>
                    <PackageSelection onOrderUpdate={handlePackageUpdate} />
                  </div>
                  {/* Шаг 1 */}
                  <div className={styles.deliveryStep}>
                    <form onSubmit={handleFormSubmit}>
                      <DeliveryDetailsForm
                        formData={deliveryFormData}
                        onChange={handleDeliveryChange}
                      />
                    </form>
                  </div>
                  {/* Шаг 2 */}
                  <div className={styles.summaryStep}>
                    <StandardOrderSummary
                      packages={orderState.packages}
                      delivery={orderState.delivery}
                      onBack={() => setCurrentStep(1)}
                    />
                  </div>
                </MultiStepForm>
              </div>
              <div className={styles.asideColumn}>
                <OrderTotalPackage
                  packageCount={orderState.packages.length}
                  totalDays={totalDays}
                  discountAmount={discountAmount}
                  totalPrice={total}
                  currentStep={currentStep}
                  onNextStep={() => {
                    if (currentStep === 0) setCurrentStep(1);
                    else if (currentStep === 1) submitDeliveryForm();
                    else if (currentStep === 2) handleProceedToPayment();
                  }}
                  onPrevStep={() => setCurrentStep((s) => Math.max(s - 1, 0))}
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
