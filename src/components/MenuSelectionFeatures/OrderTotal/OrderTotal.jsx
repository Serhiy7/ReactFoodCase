import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./OrderTotal.module.css";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");

const OrderTotal = ({ order, currentStep, onNextStep, onPrevStep }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const calculateTotal = () => {
    return order.selectedMeals.reduce((sum, meal) => sum + meal.price, 0);
  };

  const handlePayment = async () => {
    if (!termsAccepted) return;

    setIsProcessing(true);
    try {
      const stripe = await stripePromise;

      // 1. Сохраняем заказ
      const saveOrderResponse = await fetch("/api/save-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: order,
          csrf_token: document.querySelector('meta[name="csrf-token"]')
            ?.content,
        }),
      });

      const saveOrderResult = await saveOrderResponse.json();

      if (!saveOrderResult.success) {
        throw new Error(
          saveOrderResult.message || "Błąd podczas zapisywania zamówienia"
        );
      }

      // 2. Создаем сессию оплаты Stripe
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_id: saveOrderResult.order_id,
          total_amount: calculateTotal(),
          customer_email: order.delivery.email,
          items: order.selectedMeals.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: 1,
          })),
        }),
      });

      const session = await response.json();

      // 3. Перенаправляем на страницу оплаты Stripe
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error("Błąd płatności:", error);
      alert(`Wystąpił błąd: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={styles.orderTotal}>
      <div className={styles.totalItem}>
        <b>Wybrane daty:</b>
        <span>{order.selectedDates?.length || 1}</span>
      </div>

      <div className={styles.totalItem}>
        <b>Liczba dań:</b>
        <span>{order.selectedMeals.length}</span>
      </div>

      <div className={styles.totalItem}>
        <b>Razem do zapłaty:</b>
        <span className={styles.totalPrice}>
          {calculateTotal().toFixed(2)} zł
        </span>
      </div>

      <label className={styles.termsCheckbox}>
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        <span>
          Zapoznałem się z zasadami strony i{" "}
          <a href="/regulamin/" target="_blank">
            Regulamin
          </a>
          .
        </span>
      </label>

      {currentStep < 3 && (
        <button
          className={styles.nextButton}
          onClick={onNextStep}
          disabled={!termsAccepted || isProcessing}
        >
          {currentStep === 1
            ? "Podaj adres dostawy"
            : "Podsumowanie zamówienia"}
        </button>
      )}

      {currentStep > 1 && (
        <button
          className={styles.backButton}
          onClick={onPrevStep}
          disabled={isProcessing}
        >
          {currentStep === 2 ? "Zmień kolejność" : "Edytuj dane"}
        </button>
      )}

      {currentStep === 3 && (
        <button
          className={styles.payButton}
          onClick={handlePayment}
          disabled={!termsAccepted || isProcessing}
        >
          {isProcessing ? "Przetwarzanie..." : "Płatność"}
        </button>
      )}
    </div>
  );
};

export default OrderTotal;
