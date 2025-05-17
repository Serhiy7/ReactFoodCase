import { useState, useEffect, useRef } from "react";
import luxon from "luxon";

export const usePackageWidget = (pkg) => {
  const [selected, setSelected] = useState(false);
  const [dates, setDates] = useState([]);
  const [discount, setDiscount] = useState(0);
  const datepickerRef = useRef(null);

  const handleSelect = () => {
    setSelected(!selected);
    if (!selected) {
      // Initialize datepicker when selected
      initDatepicker();
    }
  };

  const initDatepicker = () => {
    const today = new Date();
    const endOfYear = new Date(today.getFullYear(), 11, 31);
    const nextMonth = new Date(endOfYear);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const now = luxon.DateTime.local().setZone("Europe/Warsaw");

    datepickerRef.current = new AirDatepicker(".pay-widget__calendar", {
      inline: true,
      locale: AirDatepicker.locale.pl,
      minDate: today,
      maxDate: nextMonth,
      multipleDates: true,
      multipleDatesSeparator: " , ",
      onSelect: ({ date, formattedDate }) => {
        const selectedDates = Array.isArray(date) ? date : [date];
        setDates(selectedDates);
        calculateDiscount(selectedDates.length);
      },
      onRenderCell: ({ date }) => {
        const selectedDate =
          luxon.DateTime.fromJSDate(date).setZone("Europe/Warsaw");
        const dayOfWeek = selectedDate.weekday;

        if (luxon.DateTime.fromJSDate(date).hasSame(now, "day")) {
          return { disabled: true };
        }

        if (now.weekday === 5 && now.hour >= 21) {
          const weekStart = now.startOf("week");
          const weekEnd = now.endOf("week");
          if (
            selectedDate >= weekStart &&
            selectedDate <= weekEnd &&
            (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 7)
          ) {
            return { disabled: true };
          }
        }

        if (
          (now.weekday === 6 || now.weekday === 7) &&
          selectedDate >= now.startOf("week") &&
          selectedDate <= now.endOf("week") &&
          (dayOfWeek === 5 || dayOfWeek === 6)
        ) {
          return { disabled: true };
        }

        return {};
      },
    });
  };

  const calculateDiscount = (daysCount) => {
    let newDiscount = 0;
    if (daysCount >= 28) {
      newDiscount = 7;
    } else if (daysCount >= 24) {
      newDiscount = 5;
    } else if (daysCount >= 20) {
      newDiscount = 4;
    }
    setDiscount(newDiscount);
  };

  useEffect(() => {
    return () => {
      if (datepickerRef.current) {
        datepickerRef.current.destroy();
      }
    };
  }, []);

  return {
    selected,
    dates,
    discount,
    handleSelect,
    calculateDiscount,
    updateTotalCost,
  };
};
