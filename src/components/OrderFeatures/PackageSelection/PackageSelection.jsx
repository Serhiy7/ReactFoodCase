import React, { useState, useCallback, useEffect } from "react";
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
  // widgets — это список “слотов” для выбора пакета (один или больше)
  const [widgets, setWidgets] = useState([{ id: Date.now() }]);
  // selections — объект вида { [widgetId]: { packageId, dates, price, packageData, … } }
  const [selections, setSelections] = useState({});

  // 1. При любом изменении selections мы обновляем родителя
  useEffect(() => {
    if (onOrderUpdate) {
      // преобразуем объект { id1: {...}, id2: {...} } в массив [ {...}, {...} ]
      const arrayOfPackages = Object.values(selections);
      onOrderUpdate(arrayOfPackages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selections]); // <-- будем вызывать onOrderUpdate после того, как selections изменился

  // 2. При выборе (или изменении) одного виджета сохраним в локальный стейт
  const handleSelectionChange = useCallback((widgetId, selection) => {
    setSelections((prev) => {
      return {
        ...prev,
        [widgetId]: selection,
      };
    });
  }, []);

  // 3. Добавить новый “слот” для выбора пакета
  const addPackageWidget = useCallback(() => {
    const newId = Date.now();
    setWidgets((prev) => [...prev, { id: newId }]);
    // По умолчанию для нового виджета ещё нет selections[newId] — поле будет добавлено,
    // когда пользователь впервые выберет пакет либо при автоподборе первого пакета в PackageWidget.
  }, []);

  // 4. Удалить “слот” и очистить его selection
  const removePackageWidget = useCallback(
    (id) => {
      if (widgets.length > 1) {
        setWidgets((prev) => prev.filter((widget) => widget.id !== id));
        setSelections((prev) => {
          const copy = { ...prev };
          delete copy[id];
          return copy;
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
