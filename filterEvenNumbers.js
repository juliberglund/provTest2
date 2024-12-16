// ### 3. **Filter för Even Numbers**

// (2p) Skapa en funktion, `filterEvenNumbers`, som tar en array av siffror
// och returnerar en ny array som endast innehåller de jämna siffrorna.
const arrayNbr = [2, 5, 9, 33, 90, 138, 60, 80, 22];

const filterEvenNumbers = arrayNbr.filter(function (x) {
  if (x % 2 === 0 || x === 0) {
    return x;
  }
});
console.log(filterEvenNumbers);
