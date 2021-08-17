import React from 'react';
import './App.css';
import ButtonPanel from '../buttonPanel';
import Display from '../Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../../logic/calculate';

function App() {
  return (
    <React.Fragment className="App">
      <Display />
      <ButtonPanel />
    </React.Fragment>
  );
}

export default App;
