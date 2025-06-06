// src/pages/MenuSelectionPage/MenuSelectionPage.jsx
import React, { useState, useMemo } from "react";
import styles from "./MenuSelectionPage.module.css";

import {
  StepsIndicator,
  DeliveryForm,
  OrderSummary,
  OrderTotal,
} from "../../components/MenuSelectionFeatures";

import PackageWidget from "../../components/MenuSelectionFeatures/PackageWidget/PackageWidget";

const MenuSelectionPage = () => {
  // --- currentStep: 1 = выбор меню/дат, 2 = данные доставки, 3 = сводка, 4 = оплата
  const [currentStep, setCurrentStep] = useState(1);

  // --- packages: массив объектов { date: string, sniad: null|{…}, obiad: null|{…}, kolacja: null|{…} }
  const [packages, setPackages] = useState([
    { date: "", sniad: null, obiad: null, kolacja: null },
  ]);

  // --- deliveryData заполняется на шаге 2
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

  // --- Формируем единый «order» объект для OrderSummary и OrderTotal
  const order = useMemo(() => {
    // Собираем все выбранные блюда (из каждого пакета — sniad, obiad, kolacja, если не null)
    const selectedMeals = packages
      .flatMap((pkg) => {
        const arr = [];
        if (pkg.sniad) arr.push(pkg.sniad);
        if (pkg.obiad) arr.push(pkg.obiad);
        if (pkg.kolacja) arr.push(pkg.kolacja);
        return arr;
      })
      .map((item) => ({
        id: item.id,
        name: item.name,
        weight: item.weight,
        price: item.price,
      }));

    // Считаем итоговую сумму
    const total = selectedMeals.reduce((sum, m) => sum + m.price, 0);

    // Список уникальных дат (без пустых)
    const selectedDates = Array.from(
      new Set(packages.map((pkg) => pkg.date).filter((d) => d !== ""))
    );

    return {
      packages,
      selectedMeals,
      delivery: deliveryData,
      total,
      selectedDates,
    };
  }, [packages, deliveryData]);

  // --- Добавить новый пустой пакет (дата + меню)
  const addPackage = () => {
    setPackages((prev) => [
      ...prev,
      { date: "", sniad: null, obiad: null, kolacja: null },
    ]);
  };

  // --- Удалить пакет по индексу
  const removePackage = (idx) => {
    setPackages((prev) => prev.filter((_, i) => i !== idx));
  };

  // --- Обновить один пакет (здесь updatedData = { date, sniad, obiad, kolacja })
  const updatePackage = (idx, updatedData) => {
    setPackages((prev) =>
      prev.map((pkg, i) => (i === idx ? updatedData : pkg))
    );
  };

  // --- Переключение шагов
  const goNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const goPrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // --- Обработчик сабмита формы доставки
  const handleDeliverySubmit = (formValues) => {
    setDeliveryData(formValues);
    setCurrentStep(3);
  };

  // --- Проверяем, можно ли перейти к шагу 2: у каждого пакета должна быть дата и хотя бы одно блюдо
  const isStep1Valid = useMemo(() => {
    if (packages.length === 0) return false;
    return packages.every((pkg) => {
      const hasDate = pkg.date !== "";
      const hasAnyMeal =
        pkg.sniad !== null || pkg.obiad !== null || pkg.kolacja !== null;
      return hasDate && hasAnyMeal;
    });
  }, [packages]);

  return (
    <div className={styles.page}>
      <main className={styles.pageMain}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Menu do wyboru</h1>

          {/* Шаги */}
          <StepsIndicator currentStep={currentStep} />

          <div className={styles.pageGrid}>
            <div className={styles.pageGridMain}>
              {/* =========================== ШАГ 1 =========================== */}
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

              {/* =========================== ШАГ 2 =========================== */}
              {currentStep === 2 && (
                <DeliveryForm
                  onSubmit={handleDeliverySubmit}
                  onBack={() => setCurrentStep(1)}
                  initialValues={deliveryData}
                />
              )}

              {/* =========================== ШАГ 3 =========================== */}
              {currentStep === 3 && (
                <OrderSummary order={order} onBack={() => setCurrentStep(2)} />
              )}
            </div>

            {/* Правая колонка с итогами */}
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
