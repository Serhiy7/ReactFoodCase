import { Header, Footer } from "@/layouts/index.js";
import { PrivacyArticle, PrivacyNav } from "@/components/PrivacyPolicyFeatures";
import styles from "./PrivacyPolicy.module.css"; // Импорт стилей

const PrivacyPolicy = () => {
  const metaData = {
    title: "Polityka prywatności - Twoja Restauracja",
    description: "Zasady przetwarzania danych osobowych w naszej restauracji",
    keywords: "polityka prywatności, ochrona danych, RODO",
  };

  return (
    <>
      {/* Для мета-тегов в обычном React (без Next.js) */}
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />

      <Header />

      <main className={styles["page-main"]}>
        <div className={styles.container}>
          <h1 className={styles["page-title"]}>Polityka prywatności</h1>

          <div className={`${styles["page-grid"]} ${styles.revert}`}>
            <div className={styles["page-grid__main"]}>
              <PrivacyArticle />
            </div>

            <div
              className={`${styles["page-grid__aside"]} ${styles["hidden-mob"]}`}
            >
              <PrivacyNav />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
