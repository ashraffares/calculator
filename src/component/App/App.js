import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Quate from '../quate';
import ButtonPanel from '../buttonPanel';
import Display from '../Display';
import calculate from '../../logic/calculate';
import styles from './App.module.css';
import Navbar from '../navbar';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    calculate(total, setTotal, next, setNext, operation, setOperation, buttonName);
  };

  return (
    <main className={styles.App}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/quate" component={Quate} />
        <Route path="/calculator">
          <Navbar />
          <Display total={total} next={next} />
          <ButtonPanel clickHandler={handleClick} />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
