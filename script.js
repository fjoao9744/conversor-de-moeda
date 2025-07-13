async function conv() {
    let coin1 = document.getElementById("coin1__option").value;
    let coin2 = document.getElementById("coin2__option").value;

    let conversion = await fetch(`https://economia.awesomeapi.com.br/json/last/${coin1}-${coin2}`)
    .then(res => res.json()).then(res => res[coin1 + coin2]);
    
    const price = (parseFloat(conversion.ask) + parseFloat(conversion.bid)) / 2;
 
    console.log(price)
    
}

