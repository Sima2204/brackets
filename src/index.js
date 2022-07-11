module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 != 0) {
    return false;
  };
  
  let OPENED_BRACKETS = [];
  let CLOSED_BRACKETS = [];
  let SAME_BRACKETS = [];

  for (let item of bracketsConfig) {

    if (item[0] === item[1]) {
        SAME_BRACKETS.push(item[0]);
    } else {
        CLOSED_BRACKETS.push(item[1]);
        OPENED_BRACKETS.push(item[0]);
    };
  };

  let stack = [];

  for (let i = 0; i < str.length; i++) {

    let currentSymbol = str[i];
    let topStackElement = stack[stack.length - 1];

    if (OPENED_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else if (SAME_BRACKETS.includes(currentSymbol)) {
      if (currentSymbol === topStackElement) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if (OPENED_BRACKETS[CLOSED_BRACKETS.indexOf(currentSymbol)] === topStackElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}