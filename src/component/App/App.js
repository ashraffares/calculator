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
  }

  render() {
    return (
      <>
        <Display />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
