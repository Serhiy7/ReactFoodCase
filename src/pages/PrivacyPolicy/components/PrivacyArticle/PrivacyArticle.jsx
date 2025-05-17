import styles from './PrivacyArticle.module.css';

const PrivacyArticle = () => {
  return (
    <article className={styles.article}>
      <p><span>Strona internetowa <a target="_blank" href="https://www.foodcasepl.com/">https://www.foodcasepl.com/</a> jest własnością FOODCASE ANDRII NOS...</span></p>
      
      <h2 id="1">Informacje osobiste, które zbieramy:</h2>
      <p><span>Kiedy odwiedzasz stronę <a target="_blank" href="https://www.foodcasepl.com/">https://www.foodcasepl.com/</a>, automatycznie zbieramy pewne informacje...</span></p>
      
      {/* Остальные разделы статьи */}
    </article>
  );
};

export default PrivacyArticle;