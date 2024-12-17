// ### 2. **Sammanfoga Två Objekt**

// (3p) Skapa två objekt, `person` och `address`. Använd spread operatorn för att skapa ett nytt objekt
//  `fullProfile` som innehåller alla egenskaper från
// både `person` och `address`. Se till att om det finns en överlappande egenskap
//  (t.ex. `name`), så ska den från `address`-objektet användas.

const person = {
  name1: "Ida",
  name2: "Mia",
  name3: "Pia",
};

const address = {
  //   name1: "Moa", om jag vill overlapa ska jag sätta ...adress bakom person
  Adress1: "Falkvägen",
  Adress2: "Hornsgatan",
  Adress3: "Magalufgatan",
};

const fullProfile = { ...person, ...address };

console.log(fullProfile);
