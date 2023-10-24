const generuj = document.getElementById('b1')
const wynik = document.getElementById('h1')

generuj.addEventListener('click',function (){
    const min = 1;
    const max = 30;
    const losuj = Math.floor(Math.random() * (max -min +1)) + min;
    wynik.textContent = losuj;
    console.log(losuj)
})
if (losuj < 20) {
    console.log("Wylosowana liczba jest mniejsza lub równa 20");
    console.log(losuj < 20);
} else if (losuj << 5){
    console.log("liczba jest większa lub równa 5");
    console.log(losuj <= 6)
} else {
    console.log("Wylosowana liczba jest liczbą parzystą");
    console.log(losuj)
}
