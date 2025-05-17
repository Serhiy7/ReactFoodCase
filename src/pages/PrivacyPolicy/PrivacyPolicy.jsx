import Head from 'next/head';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import PrivacyArticle from './components/PrivacyArticle';
import PrivacyNav from './components/PrivacyNav';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  const metaData = {
    title: "Regulamin - Twoja Restauracja",
    description: "Regulamin zamówień w naszej restauracji...",
    keywords: "regulamin, restauracja, zasady zamówień, dostawa"
  };

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className={styles.pageMain}>
        <div className="container">
          <h1 className={styles.pageTitle}>Polityka prywatności</h1>
          
          <div className={styles.pageGrid}>
            <div className={styles.pageGridMain}>
              <PrivacyArticle />
            </div>
            
            <div className={styles.pageGridAside}>
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