import React from 'react';
import propTypes from 'prop-types';
import Button from '../button';
import styles from './buttonPanel.module.css';

const ButtonPanel = ({ clickHandler }) => (
  <div className="mainCalc">
    <div className={styles.group}>
      <Button handleClick={clickHandler} name="AC" />
      <Button handleClick={clickHandler} name="+/-" />
      <Button handleClick={clickHandler} name="%" />
      <Button handleClick={clickHandler} name="÷" />
    </div>
    <div className={styles.group}>
      <Button handleClick={clickHandler} name="7" />
      <Button handleClick={clickHandler} name="8" />
      <Button handleClick={clickHandler} name="9" />
      <Button handleClick={clickHandler} name="X" />
    </div>
    <div className={styles.group}>
      <Button handleClick={clickHandler} name="4" />
      <Button handleClick={clickHandler} name="5" />
      <Button handleClick={clickHandler} name="6" />
      <Button handleClick={clickHandler} name="-" />
    </div>
    <div className={styles.group}>
      <Button handleClick={clickHandler} name="1" />
      <Button handleClick={clickHandler} name="2" />
      <Button handleClick={clickHandler} name="3" />
      <Button handleClick={clickHandler} name="+" />
    </div>
    <div className={styles.group}>
      <Button handleClick={clickHandler} name="0" />
      <Button handleClick={clickHandler} name="." />
      <Button handleClick={clickHandler} name="=" />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};

// Export ButtonPanel Component.
export default ButtonPanel;
