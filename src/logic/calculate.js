import operate from './operate';

const calculate = (obj, btnName) => {
  let { total, next, operation } = obj;

  if (btnName === 'AC') {
    return {
      total: '',
      next: '',
      operation: '',
    };
  }

  if (btnName === '+/-') {
    total = (obj.total * (-1)).toString();
    next = (obj.next * (-1)).toString();
    return {
      total,
      next,
      operation,
    };
  }

  if (obj.operation) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: btnName,
    };
  }
  return obj;
};

export default calculate;
