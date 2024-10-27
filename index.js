const input = document.querySelector('#input');
const button = document.querySelector('#botao');

button.addEventListener('click', () => {
    
    carregAPI(input.value)
})


const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q='; //{cityname}
const apiKey = '8904d4be901d26397dc13689047a4666';

async function carregAPI(nomeCidade){
    const apiFetch = await fetch(`${apiURL}${nomeCidade}&appid=${apiKey}&units=metric`);
    const apiJson = await apiFetch.json();
    console.log(apiJson);
    atualizaInformacao(apiJson);
}

function atualizaInformacao(json){
    const cityHTML = document.querySelector('h2.city');
    cityHTML.innerText = json.name;

    const tempHTML = document.querySelector('h1.temp');
    tempHTML.innerText = `${json.main.temp.toFixed(0)}°C`;

    const umidade = document.querySelector('p.humidity');
    umidade.innerText = `${json.main.humidity}%`;
    

    const vento = document.querySelector('p.wind');
    vento.innerText = `${(Number(json.wind.speed) *3.6).toFixed(1)}km/h`

}
//weather, array[0] main
//tratamento de erros