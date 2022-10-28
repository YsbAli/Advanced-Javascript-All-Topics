let queue = ["swanand", "maya", "bob", "ronaldo"];
function register() {
   let name = document.getElementById("name").value;

  queue.push(name);
  console.log("queue:", queue);

  let message = `${name} your registration is succesfull. Please wait for your turn.`;

  alert(message);

  let promise = new Promise(function (resolve, reject) {
    setInterval(function () {
      if (queue[0] == name) {
        resolve(`${name} its your turn now`);

        //clearInterval(interval);
      }
    }, 5000);
  });

  promise.then(function (res) {
    alert(res);

  });

}

function startVaccination() {
  queue.shift(name);
  if (queue.length === 0) {
    clearInterval(interval);
  }
}

var interval = setInterval(startVaccination, 2000);
