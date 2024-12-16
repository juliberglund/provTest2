// (2p) Skapa en funktion `findMax` som tar en array av siffror och returnerar det största talet i arrayen.

function largestNum(lArr) {
  let max = [0];

  for (let i = 0; i < lArr.length; i++) {
    if (lArr[i] > max) {
    }
    max = lArr[i];
  }
  return max;
}

let Arr = [10, 324, 45, 90, 9808];
console.log("Largest in given array is " + largestNum(Arr));
console.log(`Largest in given array is ${largestNum(Arr)}`);
