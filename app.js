

const api_url = "https://api.coinranking.com/v2/coins";
const proxyUrl = "https://api.allorigins.win/raw?";
const apiKey = "coinranking9bb037a59144cfc42db83d682504213d6b05889f3e0a73a5"

const HTMLResponse = document.querySelector("#app");


fetch(`${proxyUrl}${api_url}`, {	
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': '${apiKey}',
        'Acces-Control-Allow-Origin': 'https://arellanof.github.io/',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        cors:{origin: '*', credentials: true}
    }
}).then((response) => {
    if (response.ok) {
        response.json().then((json) => {
            console.log(json.data.coins)
                    
            let coinsData = json.data.coins

            if (coinsData.length > 0) {
                var cryptoCoins = "";
            }
                    //For Loop Starts Here
                    coinsData.forEach((coin) => {
                        cryptoCoins += "<tr>"
                        cryptoCoins += `<td> ${coin.rank}</td>`;
                        cryptoCoins += `<td> ${coin.name}</td>`;
                        cryptoCoins += `<td> ${coin.uuid}</td>`;
                        cryptoCoins += `<td> ${coin.btcPrice}</td>`;	
                        cryptoCoins += `<td> ${ Math.round(coin.price)} $</td>`;
                        cryptoCoins += `<td> ${coin.symbol}</td>`;
                        "</tr>"
                    })
                document.getElementById("data").innerHTML = cryptoCoins;
            })
    }
}).catch((error) => {
    console.log(error)
        })