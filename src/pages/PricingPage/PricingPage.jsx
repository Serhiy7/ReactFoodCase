import React from "react";
import styles from "./PricingPage.module.css";
import PriceTable from "@components/Pricing/PriceTable/PriceTable.jsx";
import CalorieCalculator from "../../components/HomePageFeatures/CalorieCalculator/PriceCalculator";

const PricingPage = () => {
  const prices = [
    // This would come from your API/backend
    { name: "1200", price: 85, image: "/1200-cal.jpg" },
    { name: "1500", price: 90, image: "/1500-cal.jpg" },
    { name: "1800", price: 95, image: "/1800-cal.jpg" },
    { name: "2000", price: 100, image: "/2000-cal.jpg" },
    { name: "2500", price: 110, image: "/2500-cal.jpg" },
  ];

  const discounts = {
    20: 4,
    24: 5,
    28: 7,
  };

  return (
    <>
      <main className={styles.pageMain}>
        <h1 className={styles.pageTitle}>Cennik usług cateringowych</h1>

        <div className={styles.priceList}>
          <div className={styles.container}>
            <PriceTable prices={prices} discounts={discounts} />

            <a href="/order" className={styles.orderButton}>
              Złóż zamówienie
            </a>
          </div>
        </div>

        <section className={styles.sectionWhite}>
          <div className={styles.container}>
            <CalorieCalculator />
          </div>
        </section>
      </main>
    </>
  );
};

export default PricingPage;
