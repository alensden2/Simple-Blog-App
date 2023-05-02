import styles from './Home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.landingPage}>
      <h1 className={styles.title}>Welcome to Blog it!</h1>
      <img src="assets/blogIt.png" alt="Example Image" />
      <p className={styles.description}>
        This is the landing page for my app. This is a blog website, users can log in and post blogs.
        これは私のアプリのランディング ページです。これはブログ Web サイトで、ユーザーはログインしてブログを投稿できます。
      </p>
      <div className={styles.buttons}>
        <Link className={styles.button} to="/login">
          Log In
        </Link>
        <Link className={styles.button} to="/registration">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
