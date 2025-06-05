// src/components/OrderFeatures/PackageWidget/PackageWidget.jsx
import React, { useState, useContext } from "react";
import MealCategorySection from "../../MenuSelectionFeatures/MealCategorySection/MealCategorySection";
import styles from "../../MenuSelectionFeatures/PackageWidget/PackageWidget.module.css";

// Получаем ModalContext и MODAL_TYPES:
import { ModalContext, MODAL_TYPES } from "../ModalManager/ModalManager";

const PackageWidget = ({ packages, isFirst, onRemove, onSelectionChange }) => {
  // Забираем openModal из контекста:
  const { openModal } = useContext(ModalContext);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setSelectedDates([]);
    const initialPriceInfo = calculatePriceInfo(pkg, []);
    onSelectionChange({
      packageId: pkg.id,
      dates: [],
      ...initialPriceInfo,
      packageData: pkg,
    });
  };

  const handleDateSelect = () => {
    if (!selectedPackage) return;
    openModal(MODAL_TYPES.DATE_PICKER, {
      packageId: selectedPackage.id,
      initialDates: selectedDates,
      onSelect: (dates) => {
        setSelectedDates(dates);
        const priceInfo = calculatePriceInfo(selectedPackage, dates);
        onSelectionChange({
          packageId: selectedPackage.id,
          dates,
          ...priceInfo,
          packageData: selectedPackage,
        });
      },
    });
  };

  const calculatePriceInfo = (pkg, dates) => {
    if (!pkg || dates.length === 0) return { price: 0, discount: 0, days: 0 };
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
  };

  return (
    <div className="widgetContainer" data-testid="package-widget">
      <div className="packageGrid">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`packageCard ${
              selectedPackage?.id === pkg.id ? "selected" : ""
            }`}
            onClick={() => handlePackageSelect(pkg)}
          >
            <div className="packageImageContainer">
              <img
                src={pkg.image}
                alt={`${pkg.name} kalorii`}
                className="packageImage"
                loading="lazy"
              />
            </div>
            <div className="packageInfo">
              <h3 className="packageName">{pkg.name} kalorii</h3>
              <div className="packagePrice">{pkg.price.toFixed(2)} zł</div>
            </div>
            <div className="selectButton">
              {selectedPackage?.id === pkg.id ? "Wybrany" : "Wybierać"}
            </div>
          </div>
        ))}
      </div>

      {selectedPackage && (
        <div className="selectedPackage">
          <div className="packageSummary">
            <div className="summaryImage">
              <img src={selectedPackage.image} alt="" loading="lazy" />
            </div>
            <div className="summaryDetails">
              <h4>{selectedPackage.name} kalorii</h4>
              <div className="summaryRow">
                <span>Ilość dni:</span>
                <strong>
                  {calculatePriceInfo(selectedPackage, selectedDates).days || 0}
                </strong>
              </div>
              <div className="summaryRow">
                <span>Data dostawy:</span>
                <div>
                  {selectedDates.length > 0
                    ? selectedDates.join(", ")
                    : "nie wybrano"}
                </div>
              </div>
              <div className="summaryRow">
                <span>Cena:</span>
                <div className="priceContainer">
                  {calculatePriceInfo(selectedPackage, selectedDates)
                    .discountPercent > 0 && (
                    <span className="originalPrice">
                      {calculatePriceInfo(
                        selectedPackage,
                        selectedDates
                      ).originalPrice.toFixed(2)}{" "}
                      zł
                    </span>
                  )}
                  <span className="finalPrice">
                    {calculatePriceInfo(
                      selectedPackage,
                      selectedDates
                    ).price.toFixed(2)}{" "}
                    zł
                  </span>
                  {calculatePriceInfo(selectedPackage, selectedDates)
                    .discountPercent > 0 && (
                    <span className="discountBadge">
                      -
                      {
                        calculatePriceInfo(selectedPackage, selectedDates)
                          .discountPercent
                      }
                      %
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleDateSelect}
            className="datePickerButton"
            aria-label="Wybierz daty dostawy"
          >
            Wybierz daty
          </button>
        </div>
      )}

      {!isFirst && (
        <button
          onClick={onRemove}
          className="removeButton"
          aria-label="Usuń pakiet"
        >
          Usuń pakет
        </button>
      )}
    </div>
  );
};

export default React.memo(PackageWidget);
