import React from "react";
import PropTypes from "prop-types";
// import styles from "./Advantages.module.css";

const AdvantageItem = ({ icon, text }) => (
  <div className={styles.item}>
    <div className={styles.icon}>{icon}</div>
    <div className={styles.text}>{text}</div>
  </div>
);

AdvantageItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default AdvantageItem;
