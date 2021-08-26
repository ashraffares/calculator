/* eslint-disable no-console */
import calculate from '../logic/calculate';

const obj = {
  total: null,
  next: null,
  operation: null,
};
const { total, next, operation } = obj;

const setTotal = (value) => {
  obj.total = value;
  return true;
};
const setNext = (value) => {
  obj.next = value;
  return true;
};
const setOperation = (value) => {
  obj.operation = value;
  return true;
};

describe('calculate functionality', () => {
  it('Button equal to AC return empty obj', () => {
    calculate(total, setTotal, next, setNext, operation, setOperation, 'AC');
    expect(obj).toStrictEqual({ total: null, next: null, operation: null });
  });

  it('Button name equal to +/- return obj with next equal -1', () => {
    calculate('1', setTotal, '1', setNext, operation, setOperation, '+/-');
    expect(obj).toStrictEqual({ total: null, next: '-1', operation: null });
  });

  it('Button name equal to + return the sum of total and next', () => {
    calculate('10', setTotal, '10', setNext, operation, setOperation, '+');
    expect(obj).toStrictEqual({ total: '10', next: null, operation: '+' });
  });

  it('Button name equal to - return the substracted value of total and next', () => {
    calculate('10', setTotal, '10', setNext, '-', setOperation, '=');
    expect(obj).toStrictEqual({ total: '0', next: null, operation: '' });
  });

  it('Button name equal to x return the multiplied value of total and next', () => {
    calculate('1', setTotal, '3', setNext, 'x', setOperation, '=');
    expect(obj).toStrictEqual({ total: '3', next: null, operation: '' });
  });

  it('Button name equal to ÷ return the divided value of total and next', () => {
    calculate('10', setTotal, '2', setNext, '÷', setOperation, '=');
    expect(obj).toStrictEqual({ total: '5', next: null, operation: '' });
  });

  it('Button name equal to % return the mod value of total and next', () => {
    calculate('2', setTotal, '2', setNext, '%', setOperation, '=');
    expect(obj).toStrictEqual({ total: '0', next: null, operation: '' });
  });
});
