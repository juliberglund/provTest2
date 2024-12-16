//Räkna Antal Förekomster av Ett Element
//) Skriv en funktion countOccurrences,
//som tar en array och ett element som input och returnerar antalet gånger det elementet förekommer i arrayen.

const countArrray = [10, 30, 87, 9, 0, 9, 7, 5, 9];
const colutElement = 9;

const countOccurrences = (arr, element) => {
  return arr.filter((item) => item === element).length;
};

const result = countOccurrences(countArrray, colutElement);
console.log(result);
