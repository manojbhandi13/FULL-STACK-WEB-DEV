function countVowels(str) {
  let count = 0;
  for (let char of str) {
    char = char.toLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

//Arrow Function
const countVowel = (str) => {
  let count = 0;
  for (let char of str) {
    char = char.toLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowel("abcDEFGhIJ0"));
