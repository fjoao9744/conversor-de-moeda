let coin1__value = document.getElementById("coin1__input");
let coin2__value = document.getElementById("coin2__input");

const getInput = () => {
    let coin1__option = document.getElementById("coin1__option").value;
    let coin2__option = document.getElementById("coin2__option").value;

    return [coin1__option, coin2__option]
}

document.getElementById("coin1__input").addEventListener("input", async () => {;
    let [coin1, coin2] = getInput();
    try {
        let conversion = await fetch(`https://economia.awesomeapi.com.br/json/last/${coin1}-${coin2}`)
        .then(res => res.json()).then(res => res[coin1 + coin2]);
    
        const price = (parseFloat(conversion.ask) + parseFloat(conversion.bid)) / 2;
    
        coin2__value.value = (coin1__value.value * price).toFixed(5);

    } catch {
        coin2__value.value = "Conversion invalid.";
    }
})

document.getElementById("coin2__input").addEventListener("input", async () => {;
    let [coin1, coin2] = getInput();
    try {
        let conversion = await fetch(`https://economia.awesomeapi.com.br/json/last/${coin2}-${coin1}`)
        .then(res => res.json()).then(res => res[coin2 + coin1]);
    
        const price = (parseFloat(conversion.ask) + parseFloat(conversion.bid)) / 2;
    
        coin1__value.value = (coin2__value.value * price).toFixed(5);

    } catch {
        coin2__value.value = "Conversion invalid.";
    }
})

