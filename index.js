"use strict";

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    const ul = document.createElement("ul");
    const myDiv = document.getElementById("root");
    myDiv.append(ul);

    for (let i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      li.textContent = data[i]["name"]["common"];
      ul.appendChild(li);
    }
  });
