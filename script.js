var h1El = document.querySelector("h1")
var newJokeBtn = document.querySelector("#new-joke")


function fetchAndDisplayJoke() {

  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      h1El.textContent = data.joke
    }).catch(function (err) {
      console.log(err)
    })

}

newJokeBtn.addEventListener("click", fetchAndDisplayJoke)

fetchAndDisplayJoke()