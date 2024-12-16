//### **Hitta Objekt i En Lista**
//(3p) Skapa en lista av objekt, där varje objekt representerar en användare med egenskaperna `name`, `age`, och `email`.
// Skriv en funktion `findUserByEmail` som söker igenom listan och returnerar användaren som har en specifik e-postadress.
const list = [
  {
    name: "jojo",
    age: 13,
    email: "jojo@hotmail.com",
  },

  {
    name: "Mia",
    age: 34,
    email: "mia@hotmail.com",
  },
  {
    name: "Pernilla",
    age: 78,
    email: "pernilla@hotmail.com",
  },
];

// Funktion som söker användaren baserat på deras e-postadress
const findUserByEmail = (email) => {
  // Iterera genom alla användare i listan
  for (let user of list) {
    if (user.email === email) {
      return user; // Returnera användaren om e-postadressen matchar
    }
  }
  return null; // Om ingen användare matchade, returnera null
};

// Testa funktionen
const result = findUserByEmail("mia@hotmail.com");
if (result) {
  console.log("Hittad användare:", result);
} else {
  console.log("Användare inte funnen");
}
