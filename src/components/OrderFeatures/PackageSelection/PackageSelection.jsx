import React, { useState } from "react";
import styles from "./PackageSelection.module.css";
import PackageWidget from "../PackageWidget/PackageWidget";

const PackageSelection = ({ onPackageSelect }) => {
  const [packages] = useState([
    { id: 1, name: "1200", price: 59, image: "/assets/img/packages/1.png" },
    { id: 2, name: "1500", price: 69, image: "/assets/img/packages/2.png" },
    { id: 3, name: "1800", price: 79, image: "/assets/img/packages/3.png" },
    { id: 4, name: "2000", price: 89, image: "/assets/img/packages/4.png" },
  ]);

  const handleDatesSelected = (packageId, dates) => {
    // Обновляем состояние выбранных пакетов
    onPackageSelect({
      packageId,
      dates,
    });
  };

  return (
    <div className={styles.packageSelection}>
      <div className={styles.payWidgetGrid}>
        {packages.map((pkg) => (
          <PackageWidget
            key={pkg.id}
            package={pkg}
            onDatesSelected={handleDatesSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default PackageSelection;
