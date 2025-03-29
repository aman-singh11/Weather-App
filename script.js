const url = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=50c58893338a4267a2b94247252903&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
