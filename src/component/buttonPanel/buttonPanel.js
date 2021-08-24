import React from 'react';
import propTypes from 'prop-types';
import Button from '../button';
import styles from './buttonPanel.module.css';

const ButtonPanel = ({ clickHandler }) => (
  <div className={styles.mainCalc}>
    <div className={styles.group}>
      <Button handleClick={clickHandler} color="gray" name="AC" />
      <Button handleClick={clickHandler} color="gray" name="+/-" />
      <Button handleClick={clickHandler} color="gray" name="%" />
      <Button handleClick={clickHandler} name="÷" />
    </div>
    <div className={styles.group}>
      <Button handleClick={clickHandler} color="gray" name="7" />
      <Button handleClick={clickHandler} color="gray" name="8" />
      <Button handleClick={clickHandler} color="gray" name="9" />
      <Button handleClick={clickHandler} name="x" />
    </div>
    <div className={styles.group}>
      <Button handleClick={clickHandler} color="gray" name="4" />
      <Button handleClick={clickHandler} color="gray" name="5" />
      <Button handleClick={clickHandler} color="gray" name="6" />
      <Button handleClick={clickHandler} name="-" />
    </div>
    <div className={styles.group}>
      <Button handleClick={clickHandler} color="gray" name="1" />
      <Button handleClick={clickHandler} color="gray" name="2" />
      <Button handleClick={clickHandler} color="gray" name="3" />
      <Button handleClick={clickHandler} name="+" />
    </div>
    <div className={styles.group}>
      <Button handleClick={clickHandler} color="gray" wide="DoupleSize" name="0" />
      <Button handleClick={clickHandler} color="gray" name="." />
      <Button handleClick={clickHandler} name="=" />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};

// Export ButtonPanel Component.
export default ButtonPanel;
