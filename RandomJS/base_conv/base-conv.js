let base10toAlphaHash = [
  {0: "0"},
  {1: "1"},
  {2: "2"},
  {3: "3"},
  {4: "4"},
  {5: "5"},
  {6: "6"},
  {7: "7"},
  {8: "8"},
  {9: "9"},
  {10: "A"},
  {11: "B"},
  {12: "C"},
  {13: "D"},
  {14: "E"},
  {15: "F"}
];

// The final Base 12 string
let finalNum = "";

function baseTenConv(baseTenNum, baseToInt) {
  let quotient = Math.floor(baseTenNum / baseToInt);
  let remainder = baseTenNum % baseToInt;
    for (hash of base10toAlphaHash) {
      if (remainder == Object.keys(hash)) {
        finalNum = hash[Object.keys(hash)] + finalNum;
        if (quotient != 0) {
          baseTenConv(quotient, baseToInt);
        }
      }
    }
  return finalNum;
}

// Example - first argument is the base 10 number you want to convert, second argument is the base you want to convert to (e.g. base 12)
console.log(baseTenConv(10, 2));