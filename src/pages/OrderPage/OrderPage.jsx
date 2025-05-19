import React, { useState, useCallback, useMemo } from "react";
import styles from "./OrderPage.module.css";

import {
  MultiStepForm,
  PackageSelection,
  DeliveryForm,
  OrderSummary,
  OrderTotal,
  ModalProvider,
} from "../../components/OrderFeatures";

const OrderPage = () => {
  const [orderState, setOrderState] = useState({
    packages: [],
    delivery: {},
  });

  // Вынесем расчеты в отдельную функцию для лучшей читаемости
  const calculateOrderTotals = (packages) => {
    const totalDays = packages.reduce(
      (sum, pkg) => sum + (pkg.dates?.length || 0),
      0
    );

    const subtotal = packages.reduce(
      (sum, pkg) => sum + (pkg.price || 0) * (pkg.dates?.length || 0),
      0
    );

    // Определяем скидку на основе количества дней
    const getDiscountPercent = (days) => {
      if (days >= 28) return 7;
      if (days >= 24) return 5;
      if (days >= 20) return 4;
      return 0;
    };

    const discountPercent = getDiscountPercent(totalDays);
    const discountAmount = (subtotal * discountPercent) / 100;
    const total = subtotal - discountAmount;

    return {
      totalDays,
      subtotal,
      discountPercent,
      discountAmount,
      total,
    };
  };

  // Мемоизированные значения заказа
  const { totalDays, subtotal, discountPercent, discountAmount, total } =
    useMemo(
      () => calculateOrderTotals(orderState.packages),
      [orderState.packages]
    );

  // Обработчики изменений состояния
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
  }, []);

  // Проверка готовности заказа
  const isOrderValid = useMemo(() => {
    const hasPackages = orderState.packages.length > 0;
    const allPackagesHaveDates = orderState.packages.every(
      (pkg) => pkg.dates?.length > 0
    );
    const hasDeliveryInfo = Object.keys(orderState.delivery).length > 0;

    return hasPackages && allPackagesHaveDates && hasDeliveryInfo;
  }, [orderState]);

  return (
    <ModalProvider>
      <div className={styles.orderPage}>

        <main className={styles.pageMain}>
          <div className={`${styles.container} ${styles.orderContainer}`}>
            <h1 className={styles.pageTitle}>Złóż zamówienie</h1>

            <MultiStepForm>
              {/* Шаг 1: Выбор пакетов */}
              <PackageSelection
                onOrderUpdate={handlePackageUpdate}
                className={styles.packageStep}
              />

              {/* Шаг 2: Данные доставки */}
              <DeliveryForm
                onSubmit={handleDeliverySubmit}
                className={styles.deliveryStep}
                initialValues={orderState.delivery}
              />

              {/* Шаг 3: Подтверждение заказа */}
              <OrderSummary
                packages={orderState.packages}
                delivery={orderState.delivery}
                totals={{
                  subtotal,
                  discount: discountAmount,
                  total,
                  discountPercent,
                }}
                className={styles.summaryStep}
              />
            </MultiStepForm>

            {/* Боковая панель с итогами */}
            <OrderTotal
              daysCount={totalDays}
              packageCount={orderState.packages.length}
              subtotal={subtotal}
              discountAmount={discountAmount}
              total={total}
              isValid={isOrderValid}
              className={styles.orderTotal}
            />
          </div>
        </main>
      
      </div>
    </ModalProvider>
  );
};

export default React.memo(OrderPage);
