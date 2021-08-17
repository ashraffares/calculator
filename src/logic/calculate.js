import operate from './operate';

const calculate = (obj, btnName) => {
  if (btnName === 'AC') {
    return {
      total: '',
      next: '',
      operation: '',
    };
  }

  if (btnName === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (obj.operation) {
    if (obj.total && !(obj.next)) {
      return {
        operation: btnName,
      };
    }
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: btnName,
    };
  }

  if (!obj.next) {
    return { operation: btnName };
  }

  return {
    total: obj.next,
    next: null,
    operation: btnName,
  };
};

export default calculate;
