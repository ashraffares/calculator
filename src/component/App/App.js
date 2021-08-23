/* eslint-disable react/no-unused-state */
import React from 'react';
import './App.css';
import ButtonPanel from '../buttonPanel';
import Display from '../Display';
import calculate from '../../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState((prevState) => calculate(prevState, buttonName));
  };

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display total={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
