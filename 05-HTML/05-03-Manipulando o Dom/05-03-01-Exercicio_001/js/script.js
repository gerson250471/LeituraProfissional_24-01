function buscarIP(){
    const apiKey = "apikey aqui"
    const ip = document.getElementById('txtIP').value;
    const paragrafo = document.getElementById('paragrafo');

    fetch(`http://api.ipstack.com/${ip}?access_key=${apiKey}&format=1`)
    .then(req => req.json())
    .then(json => paragrafo.innerText=json.country_name)
    .catch(err => paragrafo.innerText = err);
}