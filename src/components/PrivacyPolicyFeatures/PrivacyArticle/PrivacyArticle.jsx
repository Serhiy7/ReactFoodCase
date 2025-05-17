import styles from "./PrivacyArticle.module.css";

const PrivacyArticle = () => {
  return (
    <article className={styles.article}>
      <section className={styles.section}>
        <p className={styles.text}>
          <span>
            Strona internetowa{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.foodcasepl.com/"
            >
              https://www.foodcasepl.com/
            </a>{" "}
            jest własnością FOODCASE ANDRII NOS...
          </span>
        </p>
      </section>

      <section id="1" className={styles.section}>
        <h2 className={styles.title}>Informacje osobiste, które zbieramy:</h2>
        <p className={styles.text}>
          <span>
            Kiedy odwiedzasz stronę{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.foodcasepl.com/"
            >
              https://www.foodcasepl.com/
            </a>
            , automatycznie zbieramy pewne informacje...
          </span>
        </p>
      </section>

      {/* Остальные разделы */}
    </article>
  );
};

export default PrivacyArticle;
