import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import PackageWidget from "../PackageWidget/PackageWidget";
import styles from "./PackageSelection.module.css";

const DEFAULT_PACKAGES = [
  {
    id: 1,
    name: "1200",
    price: 50.0,
    image: "/img/packages/1.png",
    discount1: 4,
    discount2: 5,
    discount3: 7,
  },
  {
    id: 2,
    name: "1500",
    price: 60.0,
    image: "/img/packages/2.png",
    discount1: 4,
    discount2: 5,
    discount3: 7,
  },
  {
    id: 3,
    name: "1800",
    price: 70.0,
    image: "/img/packages/3.png",
    discount1: 4,
    discount2: 5,
    discount3: 7,
  },
  {
    id: 4,
    name: "2100",
    price: 80.0,
    image: "/img/packages/4.png",
    discount1: 4,
    discount2: 5,
    discount3: 7,
  },
  {
    id: 5,
    name: "2400",
    price: 90.0,
    image: "/img/packages/5.png",
    discount1: 4,
    discount2: 5,
    discount3: 7,
  },
];

const PackageSelection = ({ onOrderUpdate, className }) => {
  const [widgets, setWidgets] = useState([{ id: 1 }]);
  const [selections, setSelections] = useState({});

  const handleSelectionChange = useCallback(
    (widgetId, selection) => {
      setSelections((prev) => {
        const newSelections = {
          ...prev,
          [widgetId]: selection,
        };

        // Вызываем обновление заказа
        if (onOrderUpdate) {
          onOrderUpdate(Object.values(newSelections));
        }

        return newSelections;
      });
    },
    [onOrderUpdate]
  );

  const addPackageWidget = useCallback(() => {
    const newId = Date.now();
    setWidgets((prev) => [...prev, { id: newId }]);
  }, []);

  const removePackageWidget = useCallback(
    (id) => {
      if (widgets.length > 1) {
        setWidgets((prev) => prev.filter((widget) => widget.id !== id));
        setSelections((prev) => {
          const newSelections = { ...prev };
          delete newSelections[id];
          return newSelections;
        });
      }
    },
    [widgets.length]
  );

  return (
    <div className={`${styles.container} ${className || ""}`}>
      {widgets.map((widget, index) => (
        <PackageWidget
          key={widget.id}
          packages={DEFAULT_PACKAGES}
          isFirst={index === 0}
          onRemove={() => removePackageWidget(widget.id)}
          onSelectionChange={(selection) =>
            handleSelectionChange(widget.id, selection)
          }
        />
      ))}

      <button
        onClick={addPackageWidget}
        className={styles.addButton}
        aria-label="Dodaj kolejny pakiet"
      >
        Dodaj kolejny pakiet
      </button>
    </div>
  );
};

PackageSelection.propTypes = {
  onOrderUpdate: PropTypes.func,
  className: PropTypes.string,
};

export default React.memo(PackageSelection);
