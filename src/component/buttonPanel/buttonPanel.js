import Button from '../button/button';
import styles from './buttonPanel.module.css';

const ButtonPanel = () => (
  <div>
    <input className={styles.group} type="text" disabled />
    <div className={styles.group}>
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" />
    </div>
    <div className={styles.group}>
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" />
    </div>
    <div className={styles.group}>
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" />
    </div>
    <div className={styles.group}>
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" />
    </div>
    <div className={styles.group}>
      <Button name="0" />
      <Button name="." />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;