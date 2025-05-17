import { Link, useLocation } from "react-router-dom";
import { FOOTER_LINKS } from "../../../../constants/footerData";
import styles from "./Footer.module.css";

const FooterNavigation = () => {
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" || location.pathname.endsWith("/index.php");

  return (
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
  );
};

export default FooterNavigation;
