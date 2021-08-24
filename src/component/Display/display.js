import propTypes from 'prop-types';
import styles from './display.module.css';

const Display = ({ total, next }) => (
  <h1 className={styles.Display}>
    {next || total || '0'}
  </h1>
);

Display.propTypes = {
  total: propTypes.string,
  next: propTypes.string,
};

Display.defaultProps = {
  total: '0',
  next: '0',
};

export default Display;
