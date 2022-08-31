

const COINS_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
const coinNames = [];
let currentCoin = '';
let currentId = '';
let currentPrice = 0;
let currentPrices = [];

// Get the entire selection of coins on load
const select = document.querySelector('.coins');

// Creates drop down list
fetch(COINS_URL)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const coinsArr = data;
    for(let i = 0; i < coinsArr.length; i++) {
      const option = document.createElement('option');
      option.value = coinsArr[i].id;
      option.innerHTML = coinsArr[i].id;
      select.appendChild(option);
      coinNames.push(coinsArr[i].id);
      currentPrices.push(coinsArr[i].current_price);
    }
  })



//Get image for selected coin when we change selection

  const img = document.querySelector('#coin');

  const getCoinImg = (url, index) => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const coinsArr = data;
        img.src = coinsArr[index].image;
      })
  }



  // const getCurrentPrice = (index) => {
  //   console.log(currentPrices[index])
  //   return currentPrices[index];
  // }



  select.addEventListener('change', e => {
    getCoinImg(COINS_URL, coinNames.indexOf(e.target.value));
    
    fetch(COINS_URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        let index = data.findIndex(x => x.id === e.target.value);
        currentPrice = data[index].current_price;
        console.log(currentPrice);
      })
    currentCoin = e.target.value;
    currentId = e.target.value;
  })


  const calcButton = document.querySelector('#calculate');

  calcButton.addEventListener('click', getResult);

  function getResult() {
    const amountInvested = +document.querySelector('#amount').value;
    const date = document.querySelector('#date').value;
    displayResult(currentId, amountInvested, currentPrice, formatDate(date));
  }

  function displayResult(id, invested, currentPrice, date) {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}/history?date=${date}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        let coinPrice = data.market_data.current_price.usd;
        let coinAmount = invested / coinPrice;
        let total = (coinAmount * currentPrice);
        document.querySelector('#result').innerHTML = `If you had invested $${invested.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits : 2})} into ${id} on ${date}, then
                                                        today you would have $${total.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
      })
  }



  function formatDate(oldDate) {
    let retArr = [];
    const year =  oldDate.slice(0,4);
    const month = oldDate.slice(5,7);
    const day = oldDate.slice(8,10);
    retArr.push(day);
    retArr.push(month);
    retArr.push(year);
    return retArr.join('-');
  }

// IMPROVEMENTS TO MAKE:
// OUTPUT DATE FROM MM-DD-YYYY TO ENGLISH
// ALLOW OTHER CURRENCIES
// 