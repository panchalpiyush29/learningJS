convertToCelsius = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32) + " C";
}

let value = convertToCelsius(177);
console.log(value);

toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32 + " F";
}

let val = toFahrenheit(35.2);
console.log(val);