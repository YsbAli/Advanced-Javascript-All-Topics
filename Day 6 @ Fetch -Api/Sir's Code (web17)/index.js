let container = document.getElementById("data");

let data = [];

fetch("https://reqres.in/api/users")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    data = res.data;

      appendProducts(data)
  });

function appendProducts(d) {
  d.forEach(function (el) {
    let div = document.createElement("div");

    let avatar = document.createElement("img");

    avatar.src = el.avatar;

    let name = document.createElement("p");

    name.innerText = `${el.first_name} ${el.last_name}`

    let email = document.createElement("p");

    email.innerText = el.email;

      div.append(avatar,name, email)

      container.appendChild(div);

  });
}
