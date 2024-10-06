import config from "./config.js";

async function buscaMoedas(selecionarCripto) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': config.ACESS_TOKEN
    },
  };
  const buscaMoeda = await fetch('https://api.coinranking.com/v2/coins', options).then(response => response.json()).then(result => result.data.coins)
  const nomeMoeda = buscaMoeda.map(coin => coin.symbol)

  nomeMoeda.forEach(moeda => {
    const option = document.createElement("option")

    option.textContent = `${moeda}`
    selecionarCripto.appendChild(option)
  })
}

export default buscaMoedas