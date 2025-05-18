import React, { useState, useCallback, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { useModal } from "../ModalManager/useModal";
import styles from "./PackageWidget.module.css";

// Выносим подкомпоненты в отдельные константы
const PackageCard = React.memo(({ package: pkg, isSelected, onSelect }) => (
  <div
    className={`${styles.packageCard} ${isSelected ? styles.selected : ""}`}
    onClick={() => onSelect(pkg)}
    role="button"
    tabIndex={0}
    aria-pressed={isSelected}
  >
    <div className={styles.packageImageContainer}>
      <img
        src={pkg.image}
        alt={`${pkg.name} kalorii`}
        className={styles.packageImage}
        loading="lazy"
      />
    </div>
    <div className={styles.packageInfo}>
      <h3 className={styles.packageName}>{pkg.name} kalorii</h3>
      <div className={styles.packagePrice}>{pkg.price.toFixed(2)} zł</div>
    </div>
    <div className={styles.selectButton}>
      {isSelected ? "Wybrany" : "Wybierać"}
    </div>
  </div>
));

const SelectedPackageDetails = React.memo(
  ({ package: pkg, dates, priceInfo, onDateSelect }) => (
    <div className={styles.selectedPackage}>
      <div className={styles.packageSummary}>
        <div className={styles.summaryImage}>
          <img src={pkg.image} alt="" loading="lazy" />
        </div>

        <div className={styles.summaryDetails}>
          <h4>{pkg.name} kalorii</h4>

          <div className={styles.summaryRow}>
            <span>Ilość dni:</span>
            <strong>{priceInfo.days || 0}</strong>
          </div>

          <div className={styles.summaryRow}>
            <span>Data dostawy:</span>
            <div>{dates.length > 0 ? dates.join(", ") : "nie wybrano"}</div>
          </div>

          <div className={styles.summaryRow}>
            <span>Cena:</span>
            <div className={styles.priceContainer}>
              {priceInfo.discount > 0 && (
                <span className={styles.originalPrice}>
                  {priceInfo.originalPrice?.toFixed(2)} zł
                </span>
              )}
              <span className={styles.finalPrice}>
                {priceInfo.price.toFixed(2)} zł
              </span>
              {priceInfo.discountPercent > 0 && (
                <span className={styles.discountBadge}>
                  -{priceInfo.discountPercent}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onDateSelect}
        className={styles.datePickerButton}
        aria-label="Wybierz daty dostawy"
      >
        Wybierz daty
      </button>
    </div>
  )
);

const PackageWidget = ({ packages, isFirst, onRemove, onSelectionChange }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);
  const { openModal } = useModal();

  // Автовыбор первого пакета при монтировании
  useEffect(() => {
    if (packages.length > 0 && !selectedPackage) {
      handlePackageSelect(packages[0]);
    }
  }, [packages]);

  const handlePackageSelect = useCallback(
    (pkg) => {
      setSelectedPackage(pkg);
      setSelectedDates([]);
      onSelectionChange?.({
        packageId: pkg.id,
        dates: [],
        price: 0,
        packageData: pkg,
      });
    },
    [onSelectionChange]
  );

  const handleDateSelect = useCallback(() => {
    if (!selectedPackage) return;

    openModal("date-picker", {
      packageId: selectedPackage.id,
      initialDates: selectedDates,
      onSelect: (dates) => {
        setSelectedDates(dates);
        const priceInfo = calculatePriceInfo(selectedPackage, dates);
        onSelectionChange?.({
          packageId: selectedPackage.id,
          dates,
          ...priceInfo,
          packageData: selectedPackage,
        });
      },
    });
  }, [selectedPackage, selectedDates, openModal, onSelectionChange]);

  const calculatePriceInfo = useCallback((pkg, dates) => {
    if (!pkg || dates.length === 0) return { price: 0, discount: 0 };

    const days = dates.length;
    let discountPercent = 0;

    if (days >= 28) discountPercent = pkg.discount3;
    else if (days >= 24) discountPercent = pkg.discount2;
    else if (days >= 20) discountPercent = pkg.discount1;

    const originalPrice = pkg.price * days;
    const discountAmount = (originalPrice * discountPercent) / 100;
    const finalPrice = originalPrice - discountAmount;

    return {
      price: finalPrice,
      originalPrice,
      discount: discountAmount,
      discountPercent,
      days,
    };
  }, []);

  const priceInfo = useMemo(
    () => calculatePriceInfo(selectedPackage, selectedDates),
    [selectedPackage, selectedDates, calculatePriceInfo]
  );

  return (
    <div className={styles.widgetContainer} data-testid="package-widget">
      <div className={styles.packageGrid}>
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            package={pkg}
            isSelected={selectedPackage?.id === pkg.id}
            onSelect={handlePackageSelect}
          />
        ))}
      </div>

      {selectedPackage && (
        <SelectedPackageDetails
          package={selectedPackage}
          dates={selectedDates}
          priceInfo={priceInfo}
          onDateSelect={handleDateSelect}
        />
      )}

      {!isFirst && (
        <button
          onClick={onRemove}
          className={styles.removeButton}
          aria-label="Remove package"
        >
          Usuń pakiet
        </button>
      )}
    </div>
  );
};

PackageWidget.propTypes = {
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      discount1: PropTypes.number,
      discount2: PropTypes.number,
      discount3: PropTypes.number,
    })
  ).isRequired,
  isFirst: PropTypes.bool,
  onRemove: PropTypes.func,
  onSelectionChange: PropTypes.func,
};

export default React.memo(PackageWidget);
