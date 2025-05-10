import React from 'react';
import useOrder from '../../../hooks/useOrder';
import PaymentForm from '../PaymentForm/PaymentForm';

const Payment = () => {
  const { order } = useOrder();

  const handlePaymentSuccess = (paymentIntent) => {
    alert(`Оплата на сумму ${order.totalWithDiscount.toFixed(2)} zł успешно завершена!`);
    console.log('PaymentIntent:', paymentIntent);
  };

  return (
    <div className="pay-total">
      <div className="pay-total__item sum">
        <b>Razem do zapłaty:</b>
        <span style={{ color: '#006A23', fontWeight: 'bold' }}>{order.totalWithDiscount.toFixed(2)} zł</span>
      </div>
      <PaymentForm onSuccess={handlePaymentSuccess} />
    </div>
  );
};

export default Payment;
