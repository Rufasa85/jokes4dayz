fetch('https://icanhazdadjoke.com/', {
  headers: {
    'Accept': 'application/json'
  }
})
  .then(function (res) {
    return res.json()
  })
  .then(function (data) {
    console.log(data)
  }).catch(function (err) {
    console.log(err)
  })