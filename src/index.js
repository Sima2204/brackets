function check(str, bracketsConfig) {

  if (str.length % 2 != 0) {
      return false;
  };
  
  const brackets = {
      ")": "(",
      "]": "[",
      "}": "{"
  };
  
  const stack = [];
    for (let i = 0; i < str.length; i++) {
          if (isClosedBracket(str[i])) {
              if (brackets[str[i]] !== stack.pop()) 
              return false;
          } else {
              stack.push(str[i]);
          }
    }
  return stack.length === 0;
}
  
function isClosedBracket(ch) {
  return [")", "]", "}"].indexOf(ch) > -1;
}
