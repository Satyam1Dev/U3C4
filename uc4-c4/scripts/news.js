import sidebar from "../components/sidebar.js";

let data = JSON.parse(localStorage.getItem("user"));
let side = document.getElementById("sidebar");
side.innerHTML = sidebar(data);

let getData = JSON.parse(localStorage.getItem("news"));

console.log(getData);
let append = (data) => {
  let app = document.getElementById("detailed_news");
  app.innerHTML = null;

  let div = document.createElement("div");

  let title = document.createElement("h2");
  title.innerText = data.title;
  title.addEventListener("click", () => {
    storeData(el);
  });
  let author = document.createElement("h4");
  author.innerText = data.author;
  let image = document.createElement("img");
  image.src = data.urlToImage;
  let div2 = document.createElement("div");
  div2.classList = "text-deco";
  div2.append(title, author);
  div.append(image, div2);
  app.append(div);
};
append(getData);