let quote = 'Friday is a fun day like no other day.'

let count = 0;

let value = quote.indexOf('day');

while (value!== -1)
{
    count ++;
    value = quote.indexOf('day', value + 1);
}

console.log('number of occurences of day is ' + count);
