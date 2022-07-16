import sidebar from "../component/sidebar.js" 


let data = JSON.parse(localStorage.getItem("user"));

let country = data.country;
if (country == "India") {
  country = "in";
} else if (country == "China") {
  country = "ch";
} else if (country == "Newzeland") {
  country = "nz";
} else if (country == "USA") {
  country = "us";
} else {
  country = "uk";
}

let fetchData = async (country) => {
  let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`;
  let res = await fetch(url);
  let data = await res.json();
  append(data.articles);
  console.log(data.articles);
};
fetchData(country);
let ind = document.getElementById("in");
ind.addEventListener("click", () => {
  fetchData(ind.id);
});

let us = document.getElementById("us");
us.addEventListener("click", () => {
  fetchData(us.id);
});

let uk = document.getElementById("uk");
uk.addEventListener("click", () => {
  fetchData(uk.id);
});
let ch = document.getElementById("ch");
ch.addEventListener("click", () => {
  fetchData(ch.id);
});
let nz = document.getElementById("nz");
nz.addEventListener("click", () => {
  fetchData(nz.id);
});

let append = (data) => {
  let app = document.getElementById("news_result");
  app.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.classList = "news";
    let title = document.createElement("h2");
    title.innerText = el.title;
    title.addEventListener("click", () => {
      storeData(el);
    });
    let author = document.createElement("h4");
    author.innerText = el.author;
    let image = document.createElement("img");
    image.src = el.urlToImage;
    let div2 = document.createElement("div");
    div2.classList = "text-deco";
    div2.append(title, author);
    div.append(image, div2);
    app.append(div);
  });
};

let searchFun = async (inp) => {
  let url = `https://masai-mock-api.herokuapp.com/news?q=${inp}`;
  let res = await fetch(url);
  let data = await res.json();
  append(data.articles);
  console.log(data.articles);
};

let inp = document.getElementById("search_box");
inp.addEventListener("keydown", () => {
  searchFun(inp.value);
});

// sidebar
let side = document.getElementById("sidebar");
side.innerHTML = sidebar(data);

function storeData(el) {
  let data = el;
  localStorage.setItem("news", JSON.stringify(data));
  location.replace("news.html");
}
