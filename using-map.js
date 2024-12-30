
function citiesOnly(arr) {
    const city = arr.map(key => key.city)
    return city
}

function upperCasingStates(arr) {
    const letter = arr.map(key => cap(key))
    return letter
}

function cap(str) {
    const cap = str.split(" ")
    const ar=cap.map(key => key[0].toUpperCase() + key.slice(1))
    return ar.join(" ")
    
}

function fahrenheitToCelsius(arr) {
    const fahrenheit = arr.map(key => trans(key))
    return fahrenheit
}

function trimTemp(arr) {
    arr.map(key => (key.temperature = key.temperature.replaceAll(" ", "")))
    return arr
}

function tempForecasts(arr) {
    const array = arr.map(key => trans(key.temperature) + "elsius in " + key.city + ", " + cap(key.state))
    return array
}
function trans(nb) {
    return (Math.floor((parseInt(nb) - 32) * 5 / 9)) + '°C'

}

