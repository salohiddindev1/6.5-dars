let cards = document.querySelector("#cards");

fetch("https://fakestoreapi.com/products?limit=20")
  .then((response) => response.json())
  .then((data) => domUI(data));

function domUI(fetchData) {
  console.log(fetchData);

  fetchData.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-head">
        <img src=${element.image} alt="jpg"/>
      </div>

      <div class="card-body">
        <h2>${element.title.slice(0, 20)}...</h2>
        <p>${element.description.slice(0, 100)}...</p>
        <h3>${element.price} $</h3>
        <button class='btn'>Read More</button>
      </div>
  `;

    cards.appendChild(card);
  });
}
