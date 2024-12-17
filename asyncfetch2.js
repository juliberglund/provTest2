// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

async function getPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  const imgContainer = document.createElement("div");
  imgContainer.setAttribute("id", "imgHolder");

  const firstTenPhotos = data.slice(0, 10);

  firstTenPhotos.forEach((photo) => {
    const img = document.createElement("img");
    img.setAttribute("id", "imgID");
    img.src = photo.url;
    img.alt = photo.title;
    img.style.width = "140px";
    img.style.margin = "10px";

    img.onclick = () => alert(photo.title);

    imgContainer.appendChild(img);
  });
  document.body.appendChild(imgContainer);
}

getPhotos();
