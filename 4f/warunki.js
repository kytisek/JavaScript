const a = 10;
const b = 20;

console.log('sprawdzam warunek: b > a');
console.log(b > a);

console.log('sprawdzam warunek: b < a');
console.log(b < a);

console.log('sprawdzam warunek: b === a');
console.log(b === a);

const nr = prompt("Podaj jakąś liczbę");

if (nr > 20) {
    console.log("Liczba jest większa od 20");
} else {
    console.log("liczba jest mniejsza lub równa 20");
}

if ("7" > 5) {
    console.log('Liczba 7 jest większa od 5');
}

console.log("ab" > "aa");
console.log("abc" > "acc");
console.log("abc" > "abcd");

const rand = Math.random() * 10;

if (rand < 3) {
    console.log("Liczba mniejsza od 3");
} else if (rand <= 6) {
    console.log("Liczba jest mniejsza lub równa 6");
} else {
    console.log("Liczba jest większa od 6");
}
console.log(rand);

const i = -11;
let sign = "";
if (i > 0) {
    sign = "dodatnia";
} else {
    sign = "ujemna";
}
console.log(sign);

const short = (i > 0) ? "dodatnia" : "niedodatnia";
console.log(short);

const x = 23;
const  isEven = (x % 2 === 0) ? "parzysta" : "nieparzysta";
console.log(isEven);