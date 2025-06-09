import React, { useState, useMemo, useCallback } from "react";
import styles from "./MenuSelectionPage.module.css";

import {
  StepsIndicator,
  DeliveryForm,
  OrderSummary,
  OrderTotal,
} from "../../components/MenuSelectionFeatures";
import PackageWidget from "../../components/MenuSelectionFeatures/PackageWidget/PackageWidget";

const MenuSelectionPage = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1–4
  const [packages, setPackages] = useState([
    { date: "", sniad: null, obiad: null, kolacja: null },
  ]);

  // Подняли стейт формы доставки
  const [deliveryData, setDeliveryData] = useState({
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
  });

  // Собираем единый заказ
  const order = useMemo(() => {
    const selectedMeals = packages
      .flatMap((p) => [p.sniad, p.obiad, p.kolacja].filter(Boolean))
      .map((m) => ({
        id: m.id,
        name: m.name,
        weight: m.weight,
        price: m.price,
      }));
    const total = selectedMeals.reduce((s, m) => s + m.price, 0);
    const selectedDates = Array.from(
      new Set(packages.map((p) => p.date).filter(Boolean))
    );
    return {
      packages,
      selectedMeals,
      delivery: deliveryData,
      total,
      selectedDates,
    };
  }, [packages, deliveryData]);

  // Пакеты
  const addPackage = () =>
    setPackages((prev) => [
      ...prev,
      { date: "", sniad: null, obiad: null, kolacja: null },
    ]);
  const removePackage = useCallback(
    (idx) => setPackages((prev) => prev.filter((_, i) => i !== idx)),
    []
  );
  const updatePackage = useCallback(
    (idx, data) =>
      setPackages((prev) => prev.map((p, i) => (i === idx ? data : p))),
    []
  );

  // Шаги
  const goNextStep = useCallback(
    () => setCurrentStep((s) => Math.min(s + 1, 4)),
    []
  );
  const goPrevStep = useCallback(
    () => setCurrentStep((s) => Math.max(s - 1, 1)),
    []
  );

  // Обработчик сабмита формы доставки
  const handleDeliverySubmit = (vals) => {
    setDeliveryData(vals);
    setCurrentStep(3);
  };

  // Проверка первого шага
  const isStep1Valid = useMemo(() => {
    return (
      packages.length > 0 &&
      packages.every(
        (pkg) => pkg.date && (pkg.sniad || pkg.obiad || pkg.kolacja)
      )
    );
  }, [packages]);

  return (
    <div className={styles.page}>
      <main className={styles.pageMain}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Menu do wyboru</h1>
          <StepsIndicator currentStep={currentStep} />

          <div className={styles.pageGrid}>
            <div className={styles.pageGridMain}>
              {currentStep === 1 && (
                <>
                  {packages.map((pkg, idx) => (
                    <PackageWidget
                      key={idx}
                      index={idx}
                      data={pkg}
                      onUpdate={updatePackage}
                      onRemove={removePackage}
                    />
                  ))}
                  <button className={styles.btn} onClick={addPackage}>
                    Dodaj następną datę
                  </button>
                </>
              )}

              {currentStep === 2 && (
                <DeliveryForm
                  formData={deliveryData}
                  onChange={(name, value) =>
                    setDeliveryData((prev) => ({ ...prev, [name]: value }))
                  }
                  onSubmit={handleDeliverySubmit}
                  onBack={() => setCurrentStep(1)}
                />
              )}

              {currentStep === 3 && (
                <OrderSummary order={order} onBack={() => setCurrentStep(2)} />
              )}
            </div>

            <div className={styles.pageGridAside}>
              <OrderTotal
                order={order}
                currentStep={currentStep}
                onNextStep={goNextStep}
                onPrevStep={goPrevStep}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuSelectionPage;
