// <!-- ### 1. **Remove Duplicates från en Array**
// (3p) Skapa en funktion, `removeDuplicates`,
// som tar en array med element och returnerar en ny array
// där alla duplicerade element har tagits bort, så att bara unika element finns kvar. -->

const arr = ["Mamma", "Pappa", "Son", "Dotter", "Mamma", "Son"];
function duplicatesRemove(arr) {
  return [...new Set(arr)];
}
console.log(duplicatesRemove(arr));
