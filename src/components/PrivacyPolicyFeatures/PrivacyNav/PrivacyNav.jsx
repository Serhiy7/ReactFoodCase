import styles from "./PrivacyNav.module.css";

const navItems = [
  { id: "1", text: "Informacje osobiste, które zbieramy" },
  { id: "2", text: "Dlaczego przetwarzamy Twoje dane?" },
  { id: "3", text: "Twoje prawa:" },
  // ... остальные пункты
];

const PrivacyNav = () => {
  return (
    <nav className={styles.nav}> {/* Используем CSS Module */}
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <a href={`#${item.id}`} className={styles.link}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PrivacyNav;