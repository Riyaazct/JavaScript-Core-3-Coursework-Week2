document
  .querySelector(".button-1")
  .addEventListener("click", (click) => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let listData = document.querySelector(".list");
        let ul = document.createElement("ul");
        listData.appendChild(ul);
        let li = document.createElement("li");
        ul.appendChild(li);
        let img = document.createElement("img");
        img.src = data.message;
        li.appendChild(img);
      })
      .catch((error) => console.log(error));
  });

document
  .querySelector(".button-2")
  .addEventListener("click", (click) => {
    document.querySelector(".list li:last-child").remove();
  });
