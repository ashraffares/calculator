import { useState } from 'react';
import ButtonPanel from '../buttonPanel';
import Display from '../Display';
import calculate from '../../logic/calculate';
import styles from './App.module.css';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    calculate(total, setTotal, next, setNext, operation, setOperation, buttonName);
  };

  return (
    <div className={styles.App}>
      <Display total={total} next={next} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
