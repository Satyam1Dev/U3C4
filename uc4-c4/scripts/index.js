let getData = (event) => {
    event.preventDefault();
    let data = {
      name: form.user_name.value,
      image: form.user_pic.value,
      email: form.user_email.value,
      country: form.user_country.value,
    };
  
    localStorage.setItem("user", JSON.stringify(data));
    location.replace("worldNews.html");
  };
  
  let form = document.querySelector("form");
  form.addEventListener("submit", getData);
  