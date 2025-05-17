import { Helmet } from "react-helmet";
import { Header, Footer } from "@/layouts";
import { RegulaminArticle, RegulaminNav } from "@regulamin";
import styles from "./RegulaminPage.module.css";

const NAV_ITEMS = [
  { id: "order-placing", text: "Złożenie i dostawa zamówienia" },
  { id: "menu-compliance", text: "Zgodność menu" },
  { id: "delivery-conditions", text: "Warunki dostawy" },
  { id: "delivery-guarantee", text: "Gwarancja dostawy" },
  { id: "delivery-issues", text: "Niemożność dostawy z przyczyn niezależnych" },
  { id: "order-receiving", text: "Przyjmowanie zamówień" },
  { id: "contact-info", text: "Informacje kontaktowe" },
];

const ARTICLE_SECTIONS = [
  {
    id: "order-placing",
    title: "Złożenie i dostawa zamówienia",
    content:
      "Zamówienie uważa się za złożone, a firma zobowiązuje się je dostarczyć dopiero po otrzymaniu płatności na wskazany numer konta lub poprzez system płatności na stronie internetowej. Po potwierdzeniu płatności otrzymasz potwierdzenie na e-mail lub SMS-em.",
  },
  // ... остальные секции
];

const RegulaminPage = () => {
  const metaData = {
    title: "Regulamin - Twoja Restauracja",
    description:
      "Regulamin zamówień w naszej restauracji. Zapoznaj się z zasadami i warunkami.",
    keywords: "regulamin, restauracja, zasady zamówień, dostawa",
    canonicalUrl: "https://twojarestauracja.pl/regulamin",
  };

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <link rel="canonical" href={metaData.canonicalUrl} />
      </Helmet>

      <Header />

      <main className={styles.pageMain}>
        <div className={styles.pageContainer}>
          <h1 className={styles.pageTitle}>Regulamin</h1>

          <div className={styles.contentGrid}>
            <article className={styles.mainContent}>
              <RegulaminArticle sections={ARTICLE_SECTIONS} />
            </article>

            <aside className={styles.sidebar}>
              <RegulaminNav items={NAV_ITEMS} />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegulaminPage;
