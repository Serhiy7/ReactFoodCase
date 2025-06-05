// src/components/OrderFeatures/DeliveryForm/DeliveryForm.jsx
import React, { useState } from "react";

const DeliveryForm = ({ onSubmit, onBack, initialValues = {} }) => {
  const [formData, setFormData] = useState({
    email: initialValues.email || "",
    phone: initialValues.phone || "",
    fullname: initialValues.fullname || "",
    street: initialValues.street || "",
    house_number: initialValues.house_number || "",
    klatka: initialValues.klatka || "",
    floor: initialValues.floor || "",
    apartment: initialValues.apartment || "",
    gate_code: initialValues.gate_code || "",
    notes: initialValues.notes || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="page-grid__tab active">
      {/* Кнопка «Назад» (Change order) */}
      <div
        className="btn pay-total__prev"
        onClick={onBack}
        style={{ cursor: "pointer" }}
      >
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.70679 0.292787C5.89426 0.480314 5.99957 0.734622 5.99957 0.999786C5.99957 1.26495 5.89426 1.51926 5.70679 1.70679L2.41379 4.99979L5.70679 8.29279C5.88894 8.48139 5.98974 8.73399 5.98746 8.99619C5.98518 9.25838 5.88001 9.5092 5.6946 9.6946C5.5092 9.88001 5.25838 9.98518 4.99619 9.98746C4.73399 9.98974 4.48139 9.88894 4.29279 9.70679L0.292787 5.70679C0.105316 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105316 4.48031 0.292787 4.29279L4.29279 0.292787C4.48031 0.105316 4.73462 0 4.99979 0C5.26495 0 5.51926 0.105316 5.70679 0.292787V0.292787Z"
            fill="black"
          />
        </svg>
        Zmień kolejność
      </div>

      {/* Форма самих полей «Данные доставки» */}
      <form className="delivery-widget" onSubmit={handleSubmit}>
        {/* === Блок «Dane kontaktowe» === */}
        <div className="delivery-widget__row">
          <div className="delivery-widget__title">Dane kontaktowe:</div>

          <div className="delivery-widget__grid">
            {/* E-mail */}
            <div className="delivery-widget__field large">
              <div className="delivery-widget__label">E-mail</div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="delivery-widget__input email-input"
                placeholder="E-mail"
              />
            </div>

            {/* Numer telefonu */}
            <div className="delivery-widget__field">
              <div className="delivery-widget__label">Numer telefonu</div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="delivery-widget__input phone-input"
                placeholder="Numer telefonu"
              />
            </div>

            {/* Pełne imię i nazwisko */}
            <div className="delivery-widget__field">
              <div className="delivery-widget__label">
                Pełne imię i nazwisko
              </div>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="delivery-widget__input fullname-input"
                placeholder="Pełne imię i nazwisko"
              />
            </div>
          </div>
        </div>

        {/* === Блок «Dane dostawy» === */}
        <div className="delivery-widget__row">
          <div className="delivery-widget__title">Dane dostawy:</div>

          <div className="delivery-widget__grid">
            {/* Ulica */}
            <div className="delivery-widget__field">
              <div className="delivery-widget__label">Ulica</div>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
                className="delivery-widget__input street-input"
                placeholder="Ulica"
              />
            </div>

            {/* Dom */}
            <div className="delivery-widget__field">
              <div className="delivery-widget__label">Dom</div>
              <input
                type="text"
                name="house_number"
                value={formData.house_number}
                onChange={handleChange}
                required
                className="delivery-widget__input house-number-input"
                placeholder="Dom"
              />
            </div>

            {/* Klatka */}
            <div className="delivery-widget__field">
              <div className="delivery-widget__label">Klatka</div>
              <input
                type="text"
                name="klatka"
                value={formData.klatka}
                onChange={handleChange}
                className="delivery-widget__input klatka-input"
                placeholder="Klatka"
              />
            </div>

            {/* Piętro */}
            <div className="delivery-widget__field">
              <div className="delivery-widget__label">Piętro</div>
              <input
                type="text"
                name="floor"
                value={formData.floor}
                onChange={handleChange}
                required
                className="delivery-widget__input floor-input"
                placeholder="Piętro"
              />
            </div>

            {/* Mieszkanie */}
            <div className="delivery-widget__field">
              <div className="delivery-widget__label">Mieszkanie</div>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
                required
                className="delivery-widget__input apartment-input"
                placeholder="Mieszkanie"
              />
            </div>

            {/* Kod do klatki */}
            <div className="delivery-widget__field">
              <div className="delivery-widget__label">Kod do klatki</div>
              <input
                type="text"
                name="gate_code"
                value={formData.gate_code}
                onChange={handleChange}
                required
                className="delivery-widget__input gate-code-input"
                placeholder="Kod do klatki"
              />
            </div>

            {/* Uwagi */}
            <div className="delivery-widget__field large">
              <div className="delivery-widget__label">Uwagi</div>
              <input
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="delivery-widget__input notes-input large"
                placeholder="Uwagi"
              />
            </div>
          </div>
        </div>

        {/* Кнопки «Wstecz» и «Dalej» */}
        <div className="delivery-widget__buttons">
          <button
            type="button"
            className="btn pay-total__prev"
            onClick={onBack}
            style={{ marginRight: "1rem" }}
          >
            Wstecz
          </button>
          <button type="submit" className="btn pay-total__send">
            Dalej
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryForm;
