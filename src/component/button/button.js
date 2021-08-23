import propTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ name, handleClick }) => {
  const clickHandler = () => handleClick(name);
  return (
    <button type="button" className={styles.btn} onClick={clickHandler}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Button;
