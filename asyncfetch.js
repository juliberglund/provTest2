// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

async function responsivePosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("id", "containerDiv");

  data.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.setAttribute("class", "postDiv");

    const postTitle = document.createElement("h3");
    postTitle.textContent = post.title;

    const postBody = document.createElement("p");
    postBody.textContent = post.body;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postBody);

    containerDiv.appendChild(postDiv);
  });
  document.body.appendChild(containerDiv);
}

responsivePosts();
