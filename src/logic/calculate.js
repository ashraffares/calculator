/* eslint-disable no-console */
import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

const calculate = (total, setTotal, next, setNext, operation, setOperation, buttonName) => {
  if (buttonName === 'AC') {
    setTotal(null);
    setNext(null);
    setOperation(null);
    return true;
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && next === '0') {
      return true;
    }
    // If there is an operation, update next
    if (operation) {
      if (next) {
        return setNext(next + buttonName);
      }

      return setNext(buttonName);
    }
    // If there is no operation, update next and clear the value
    if (next) {
      setNext(next + buttonName);
      return true;
    }
    setNext(buttonName);
    return true;
  }

  if (buttonName === '.') {
    if (next) {
      if (next.includes('.')) {
        return true;
      }
      return setNext(`${next}.`);
    }
    if (operation) {
      return setNext('0.');
    }
    if (total) {
      if (total.includes('.')) {
        return true;
      }
      return setTotal(`${total}.`);
    }
    return setTotal('0.');
  }

  if (buttonName === '=') {
    if (next && operation) {
      if (total === 'Error') {
        setTotal(operate('0', next, operation));
        setNext(null);
        setOperation('');
        return true;
      }
      console.log(total, next, operation);
      if (total !== null) {
        console.log('------------------total-------------');
        console.log(total);
        setTotal(operate(total, next, operation));
        setNext(null);
        setOperation('');
        return true;
      }
    }
    // '=' with no operation, nothing to do
    return true;
  }

  if (buttonName === '+/-') {
    if (next) {
      return setNext((-1 * parseFloat(next)).toString());
    }
    if (total) {
      return setTotal((-1 * parseFloat(total)).toString());
    }
    return true;
  }

  // User pressed an operation button and there is an existing operation
  if (operation) {
    if (total && !(next)) {
      return setOperation(buttonName);
    }
    setTotal(operate(total, next, operation));
    setNext(null);
    setOperation(buttonName);
    return true;
  }

  // The user hasn't typed a number yet, just save the operation
  if (!next) {
    return setOperation(buttonName);
  }

  // save the operation and shift 'next' into 'total'
  setTotal(next);
  setNext(null);
  setOperation(buttonName);
  return true;
};

export default calculate;
