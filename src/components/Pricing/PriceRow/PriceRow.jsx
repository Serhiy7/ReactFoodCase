import React from "react";
import styles from "./PriceRow.module.css";
import PriceCell from "@components/Pricing/PriceCell/PriceCell";

const PriceRow = ({ price, discounts }) => {
  const { name, price: pricePerDay, image } = price;

  // Calculate prices with discounts
  const calculateDiscountedPrice = (days, discountPercent) => {
    const originalPrice = pricePerDay * days;
    const discountedPrice = originalPrice * (1 - discountPercent / 100);
    return { original: originalPrice, discounted: discountedPrice };
  };

  const price20Days = calculateDiscountedPrice(20, discounts[20]);
  const price24Days = calculateDiscountedPrice(24, discounts[24]);
  const price28Days = calculateDiscountedPrice(28, discounts[28]);

  return (
    <tr>
      <td>
        <span>
          <img src={`/uploads_img${image}`} alt={`${name} kalorii`} />
          {name} Kalorii
        </span>
      </td>

      <PriceCell price={pricePerDay} />

      <PriceCell
        price={price20Days.discounted}
        originalPrice={price20Days.original}
      />

      <PriceCell
        price={price24Days.discounted}
        originalPrice={price24Days.original}
      />

      <PriceCell
        price={price28Days.discounted}
        originalPrice={price28Days.original}
      />
    </tr>
  );
};

export default PriceRow;
