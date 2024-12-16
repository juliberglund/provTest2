// ### **Kombinera Två Arrayer**

// (2p) Skapa en funktion `mergeArrays` som tar två arrayer
//  som argument och returnerar en ny array som är en sammanslagning av de två arrayerna utan att duplicera värden.

const arr1 = [2, 5, 6, 2, 5, 3];
const arr2 = [4, 7, 1, 89, 9, 3];
var sum = 0;

function mergeArrays(arr1, arr2) {
  const combinedArrays = arr1.concat(arr2);

  const array3 = [...new Set(combinedArrays)]; // tar bort dubletter genom  använda Set och konvertera tillbaka till en array

  return array3;
}
console.log(mergeArrays(arr1, arr2));
