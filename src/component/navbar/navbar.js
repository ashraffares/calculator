import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <h1>Math Magicians</h1>
    <div className={styles.links}>
      <Link to="/" exact>Home </Link>
      <Link to="/quate" className={styles.middle_link}>Quate </Link>
      <Link to="/calculator">Calculator </Link>
    </div>
  </nav>
);

export default Navbar;
