import styles from './About.module.css';
import './About.css';

const About = () => {
  return (
    <div>
      <h1 className={styles.fontxl}>About Page</h1>
      <h2 className={styles.primary}>About Page</h2>

      <h1 className={`${styles.primary} ${styles.fontxl}`}>Content 1</h1>
      <h1 className={`primary ${styles.fontxl}`}>Content 1</h1>
      <h1 className={`secondary ${styles.fontxl}`}>Content 1</h1>
    </div>
  );
};

export default About;