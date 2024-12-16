// Skriv en funktion replaceValues som tar en array med siffror och byter ut alla värden som är mindre än 10 mot
// "small" och alla värden som är större än 50 mot "large". Returnera den uppdaterade arrayen.

function replaceValues(arr) {
  return arr.map((num) => {
    if (num < 10) {
      return "small";
    } else if (num > 50) {
      return "large";
    } else {
      return num;
    }
  });
}

const newNumbers = [2, 77, 4, 2, 5, 0, 8, 6, 25, 100];
replaceValues(newNumbers);
console.log(replaceValues(newNumbers));
// let updatedNumbers = replaceValues(numbers);
// console.log(updatedNumbers);
