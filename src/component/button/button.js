import propTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ name }) => <button type="button" className={styles.btn}>{name}</button>;

Button.propTypes = {
  name: propTypes.string.isRequired,
};

export default Button;
