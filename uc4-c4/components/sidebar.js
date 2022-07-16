function sidebar(data) {
    return ` <img id="user_image"
      src=${data.image}
    />
    <h2 id="user_name"> ${data.name}</h2>
    <p id ="user_email">${data.email}</p>
    <p id ="user_country">${data.country}</p>`;
  }
  export default sidebar;
  