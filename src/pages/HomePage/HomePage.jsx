import styles from './home-page.module.css';



const HomePage = () => {
  return (
    <div className={styles.div}>
      <h2 className={styles.title}>Welcome! 👍</h2>
      <p className={styles.text}>
        To get started, please login <span>🔑</span> or register📚
      </p>
    </div>
  );
};
export default HomePage;
