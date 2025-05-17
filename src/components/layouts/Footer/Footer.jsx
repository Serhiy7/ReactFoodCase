import styles from "./Footer.module.css";
import FooterNavigation from "./FooterNavigation";
import FooterPayments from "./FooterPayments";
import FooterContact from "./FooterContact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={styles.footer}
      itemScope
      itemType="http://schema.org/Organization"
    >
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logoWrapper}>
            <img
              src="/assets/img/logo-w.png"
              alt="FoodCase Logo"
              className={styles.logo}
            />
            <p className={styles.slogan}>
              Nasza firma zapewnia wygodną dostawę gotowych dań do Twojego domu
            </p>
          </div>
          <div className={styles.contact}>
            Email:{" "}
            <a href="mailto:biuro@foodcasepl.com">biuro@foodcasepl.com</a>
          </div>
        </div>

        <div className={styles.rightSection}>
          <FooterNavigation />
          <FooterPayments />
          <FooterContact />
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {currentYear} <span itemProp="name">FoodCase</span>. Wszelkie
        prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;
