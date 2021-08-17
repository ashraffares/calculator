import operate from './operate';

const calculate = (obj, btnName) => {
  if (btnName === '+/-') {
    (obj.total * (-1)).toString();
    (obj.next * (-1)).toString();
    return obj;
  }

  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: btnName,
    };
  }
  return obj;
};

export default calculate;
