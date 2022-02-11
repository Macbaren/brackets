module.exports = function check(str, bracketsConfig) {
  const checkStr = [str[0]];
  const strToArr = str.split('');
  const configObj = Object.fromEntries(bracketsConfig);

  const isClosing = (br) => Object.values(configObj).includes(br);

  for (let i = 1; i < strToArr.length; i += 1) {
    checkStr.push(strToArr[i]);

    while (
      isClosing(checkStr[checkStr.length - 1]) &&
      configObj[checkStr[checkStr.length - 2]] === checkStr[checkStr.length - 1]
    ) {
      checkStr.splice(-2);
    }
  }
  return checkStr.length === 0;
};
