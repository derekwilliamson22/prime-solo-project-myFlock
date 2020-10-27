function findFirstRepeat(stringToCheck) {
  for(let i = 0; i < stringToCheck.length; i++) {
    if(stringToCheck[i] === stringToCheck[i+1]) {
      return i + 1;
    }  
  }
  return -1;
};

module.exports = findFirstRepeat;