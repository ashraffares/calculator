import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */

export default function calculate(obj, buttonName) {
  const { total, next, operation } = obj;

  // if buttonName is AC return empty obj
  if (buttonName === 'AC') {
    return {
      total: '',
      next: '',
      operation: '',
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {};
      }
      return { next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: `${obj.total}.` };
    }
    return { total: '0.' };
  }

  // if buttonName is '+/-'  multiply total and next by -1 to make it negative or positive.
  if (buttonName === '+/-') {
    const newobj = {
      total: '',
      next: '',
      operation: buttonName,
    };

    if (isNumber(next) && isNumber(total)) {
      return {
        total: (-1 * parseFloat(total).toString()),
        next: (-1 * parseFloat(next).toString()),
        operation,
      };
    }
    if (isNumber(next)) {
      newobj.next = (-1 * parseFloat(next).toString());
    }

    if (isNumber(total)) {
      newobj.total = (-1 * parseFloat(total).toString());
    }

    return newobj;
  }

  // call operate and do basics calculation
  if (buttonName === '=') {
    if (isNumber(total) && !isNumber(next)) {
      return {
        operation: buttonName,
      };
    }
    return {
      total: operate(total, next, operation),
      next: null,
      operation: '',
    };
  }

  return {
    total: next,
    next: null,
    operation: buttonName,
  };
}
