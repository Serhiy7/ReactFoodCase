import { SOCIAL_LINKS } from "../../../../constants/footerData";
// import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
// import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import styles from "./Footer.module.css";

const FooterContact = () => (
  <div className={styles.column}>
    <h3 className={styles.title}>Kontakt:</h3>
    <div className={styles.socials}>
      <a href={SOCIAL_LINKS.email} className={styles.socialLink}>
         {/* <EmailIcon className={styles.socialIcon} /> */}
  📧 Email
      </a>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        {/* <InstagramIcon className={styles.socialIcon} /> */}
         📧 InstagramIcon
      </a>
    </div>
  </div>
);

export default FooterContact;
