// (4p) Skapa en lista med objekt som representerar böcker, där varje bok har egenskaper som
// `title`, `author`, och `year`. Skriv funktioner för att:

// - **Create**: Lägg till en ny bok.
// - **Read**: Läs alla böcker.
// - **Update**: Uppdatera en bok med ny titel eller författare.
// - **Delete**: Ta bort en bok baserat på dess titel.

//Array object
// var list = [
//     { name: "book1", title: "A sunny day", author: "Madelein", year: 2000 },
//     { name: "book2", title: "Mondays", author: "Ally", year: 2015 },
//     { name: "book3", title: "Cats", author: "Penny", year: 2020 }
//   ];

// object CREATE
var list = {
  book1: {
    title: "A sunny day",
    author: "Madelein",
    year: 2000,
  },
  book2: {
    title: "Mondays",
    author: "Ally",
    year: 2015,
  },
  book3: {
    title: "Cats",
    author: "Penny",
    year: 2020,
  },
};

console.log(list);

console.log(list.book2); //Läs upp en bok READ
//------------------------------ UPDATE------------------------
const newList = {
  ...list,
  Book4: { title: "MAgical", author: "Mahima", year: 2021 }, // UPDATE
};
console.log(newList); // READ

list.book1.author = "Anna"; // UPDATE
console.log(list.book1); // READ

// ------------------------Delete

delete list.book2.year;
console.log(list.book2);

// Arrays CRUD

crudArray = ["mom", "julie", "india", "sweden"];

// Read
console.log(crudArray[0]);

//Delete
crudArray.splice(1, 1); // tar bort julie
console.log(crudArray);

// --------------------------- Nested Objects and Arrays ---------------
const engelskaSkolan = {
  Gata: "Margaretavägen 1",
  Stad: "Stockholm",
  Land: "Sverige",
  Byggnadsår: "2015",
  Årskullar: [4, 5, 6, 7, 8, 9],
};

//read
console.log(engelskaSkolan.Årskullar[1]);

//Update
engelskaSkolan.Årskullar[2] = 80;
console.log(engelskaSkolan);

// Delete
delete engelskaSkolan.Årskullar[0];
delete engelskaSkolan.Land;
console.log(engelskaSkolan);
