import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Footer.module.css';
import { FOOTER_LINKS, PAYMENT_METHODS, SOCIAL_LINKS } from './constants';
import EmailIcon from '../../assets/icons/email.svg'; // Пример импорта SVG
import InstagramIcon from '../../assets/icons/instagram.svg';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname.endsWith('/index.php');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} itemScope itemType="http://schema.org/Organization">
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logoWrapper}>
            <img src="/assets/img/logo-w.png" alt="FoodCase Logo" className={styles.logo} />
            <p className={styles.slogan}>
              Nasza firma zapewnia wygodną dostawę gotowych dań do Twojego domu
            </p>
          </div>
          <div className={styles.contact}>
            Email: <a href="mailto:biuro@foodcasepl.com">biuro@foodcasepl.com</a>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.column}>
            <h3 className={styles.title}>Nawigacja:</h3>
            <ul className={styles.navList}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.path} className={styles.navItem}>
                  {link.isAnchor && isHomePage ? (
                    <a href={link.path} className={styles.navLink}>
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} className={styles.navLink}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

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

          <div className={styles.column}>
            <h3 className={styles.title}>Kontakt:</h3>
            <div className={styles.socials}>
              <a href="mailto:biuro@foodcasepl.com" className={styles.socialLink}>
                <EmailIcon className={styles.socialIcon} />
              </a>
              <a
                href="https://www.instagram.com/foodcase_krakow"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <InstagramIcon className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {currentYear} <span itemProp="name">FoodCase</span>. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;