// ### 9. **Uppdatera En Egenskap i Ett Objekt**

// (2p) Skapa ett objekt `car` med egenskaperna `model`, `color`, och `speed`. Skriv en
// funktion `updateSpeed` som tar en hastighet som argument och uppdaterar egenskapen `speed` i objektet.

const car = {
  model: "Mazda",
  color: "Blue",
  speed: 87,
};

const updateSpeed = (nyHastighet) => {
  car.speed = nyHastighet;
  console.log(car);
};

updateSpeed(90);
