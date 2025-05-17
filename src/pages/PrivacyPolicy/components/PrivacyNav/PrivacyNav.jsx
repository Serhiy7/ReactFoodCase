import styles from './PrivacyNav.module.css';

const navItems = [
  { id: '1', text: 'Informacje osobiste, które zbieramy' },
  { id: '2', text: 'Dlaczego przetwarzamy Twoje dane?' },
  { id: '3', text: 'Twoje prawa:' },
  // ... остальные пункты
];

const PrivacyNav = () => {
  return (
    <ul className={styles.pageNav}>
      {navItems.map(item => (
        <li key={item.id} className={styles.pageNavItem}>
          <a href={`#${item.id}`} className={styles.pageNavLink}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PrivacyNav;