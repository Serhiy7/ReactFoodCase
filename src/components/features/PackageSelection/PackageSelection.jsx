import React from "react";
import useOrder from "../../../hooks/useOrder";

const PackageSelection = ({ packages }) => {
  const { addPackage } = useOrder();

  const handleSelectPackage = (pkg) => {
    addPackage(pkg);
  };

  return (
    <div className="pay-widget__grid">
      {packages.map((pkg, index) => (
        <div
          key={index}
          className="pay-item"
          onClick={() => handleSelectPackage(pkg)}
        >
          <div className="pay-item__photo">
            <img src={pkg.image} alt={`${pkg.name} kalorii`} />
          </div>
          <div className="pay-item__title">{pkg.name} kalori</div>
          <div className="price pay-item__price">{pkg.price} zł</div>
          <div className="btn pay-item__btn">Wybierać</div>
        </div>
      ))}
    </div>
  );
};

export default PackageSelection;
