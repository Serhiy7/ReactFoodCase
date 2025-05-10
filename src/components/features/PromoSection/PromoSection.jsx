import React from "react";

const PromoSection = () => {
  return (
    <div
      className="promo"
      style={{ paddingTop: "25px", paddingBottom: "30px" }}
    >
      <div className="container promo__container">
        <div className="promo__inner">
          <h1 className="promo__title">Dostawa gotowych posiłków</h1>
          <div className="promo__text">
            <p>Wygodne posiłki na twój aktywny dzień.</p>
            <p className="accent">
              <span>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG code here */}
                </svg>
              </span>
              Nasze opakowanie nie szkodzi nature.
            </p>
          </div>
        </div>
        <img src="../assets/img/promo/1.png" alt="Promo food" />
      </div>
    </div>
  );
};

export default PromoSection;
