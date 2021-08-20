import React from 'react';
import './App.css';
import ButtonPanel from '../buttonPanel';
import Display from '../Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick = (buttonName) => {
      // eslint-disable-next-line react/no-access-state-in-setstate
      const res = calculate(this.state, buttonName);
      this.setState({ total: res.total, next: res.next, operation: res.operation });
    };
  }

  render() {
    return (
      <>
        <Display result={this.total} />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
