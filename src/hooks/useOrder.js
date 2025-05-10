import { useState, useEffect } from "react";

const useOrder = () => {
  const [order, setOrder] = useState({
    packages: [],
    totalPrice: 0,
    discount: 0,
    totalWithDiscount: 0,
  });

  const addPackage = (packageData) => {
    setOrder((prevOrder) => {
      const newPackages = [...prevOrder.packages, packageData];
      const totalPrice = newPackages.reduce((sum, pkg) => sum + pkg.price, 0);
      const discount = calculateDiscount(newPackages.length);
      const totalWithDiscount = totalPrice - (totalPrice * discount) / 100;

      return {
        ...prevOrder,
        packages: newPackages,
        totalPrice,
        discount,
        totalWithDiscount,
      };
    });
  };

  const removePackage = (index) => {
    setOrder((prevOrder) => {
      const newPackages = prevOrder.packages.filter((_, i) => i !== index);
      const totalPrice = newPackages.reduce((sum, pkg) => sum + pkg.price, 0);
      const discount = calculateDiscount(newPackages.length);
      const totalWithDiscount = totalPrice - (totalPrice * discount) / 100;

      return {
        ...prevOrder,
        packages: newPackages,
        totalPrice,
        discount,
        totalWithDiscount,
      };
    });
  };

  const calculateDiscount = (packageCount) => {
    if (packageCount >= 28) return 7;
    if (packageCount >= 24) return 5;
    if (packageCount >= 20) return 4;
    return 0;
  };

  return { order, addPackage, removePackage };
};

export default useOrder;
