import { PAYMENT_METHODS } from "../../../../constants/footerData";
import styles from "./Footer.module.css";

const FooterPayments = () => (
  <div className={styles.column}>
    <h3 className={styles.title}>Metody płatności:</h3>
    <div className={styles.paymentMethods}>
      {PAYMENT_METHODS.map((method) => (
        <div key={method.alt} className={styles.paymentMethod}>
          <img src={method.image} alt={method.alt} />
        </div>
      ))}
    </div>
  </div>
);

export default FooterPayments;
