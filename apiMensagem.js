fetch('http://localhost:3000/frases')
    .then(response => response.json())
    .then(json => console.log(json))