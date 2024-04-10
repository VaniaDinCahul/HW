const KEY = `5nUYq8OIzUshz04lq4EOyD8p4nY8v9y3`
const endpoint = `https://api.currencybeacon.com/v1/latest`

const fromCurrency = document.querySelector('.fromCurrency')
const toCurrency = document.querySelector('.toCurrency')
const inputAmount = document.querySelector('.inputAmount')
const outputAmount = document.querySelector('.outputAmount')
let rates = {}

const getCurrencies = (base = 'USD') => {
    let xhr = new XMLHttpRequest()
    xhr.open(
        "GET", 
        endpoint + `?api_key=${KEY}&base=${base}`
    )
xhr.onload = () => {
    let response = xhr.responseText
    let data = JSON.parse(response)
    console.log(data.rates)
    rates = {
        MDL: data.rates.MDL,
        EUR: data.rates.EUR,
        USD: data.rates.USD,
    }
    fromCurrency.innerHTML = ''
    toCurrency.innerHTML = ''
    Object.keys(rates).forEach( code => {
        let option = document.createElement('option')
        option.innerText = code
        fromCurrency.appendChild(option)

        option = document.createElement('option')
        option.innerText = code
        toCurrency.appendChild(option)
    })
    fromCurrency.value = base
}

    xhr.send()
}

const changeDisplay = () => {
    if (Number(inputAmount.value)) {
        if (Number(inputAmount.value) >= 0) {
            if (fromCurrency.value != '0' && toCurrency.value != '0') {
                let amount = parseInt(inputAmount.value)
                let resultAmount = amount * rates[toCurrency.value]
                outputAmount.innerText = resultAmount.toFixed(2)
            } else if (fromCurrency.value != '0' && toCurrency.value === '0') {
                outputAmount.innerText = 'Second value was not selected'
            }
        }
    } else {
        outputAmount.innerText = 'Number not detected'
    }
}

inputAmount.addEventListener(`keyup`, () => {
    changeDisplay()
})


fromCurrency.addEventListener('change', () => {
    getCurrencies(fromCurrency.value)
    changeDisplay()
})
toCurrency.addEventListener('change', () => {
    getCurrencies(fromCurrency.value)
    changeDisplay()
})

getCurrencies()