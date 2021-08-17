import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const ONE = Big(numberOne);
  const TWO = Big(numberTwo);

  if (operation === '+') {
    return ONE.plus(TWO).toString();
  } if (operation === '-') {
    return ONE.minus(TWO).toString();
  } if (operation === '÷') {
    return ONE.div(TWO).toString();
  } if (operation === 'x') {
    return ONE.times(TWO).toString;
  } if (operation === '%') {
    return ONE.mod(TWO).toString();
  }
  throw Error(`failing operation: ${operation}`);
};

export default operate;
