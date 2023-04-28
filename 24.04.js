const misiaczek = prompt('Podaj liczbe liczbę')
const spannumbers = document.getElementsByClassName("jeden");
document.getElementsByClassName('mnms' + misiaczek)
for (const num of spannumbers){
    num.innertext=misiaczek;
}
for (const num of spannumbers){
    document.getElementsByClassName('sp1').innerText = Math.abs(spannumbers)
    document.getElementsByClassName('sp2').innerText = Math.ceil(spannumbers)
    document.getElementsByClassName('sp3').innerText = Math.floor(spannumbers)
    document.getElementsByClassName('sp4').innerText = Math.max(spannumbers)
    document.getElementsByClassName('sp5').innerText = Math.min(spannumbers)
    document.getElementsByClassName('sp6').innerText = Math.pow(spannumbers)
    document.getElementsByClassName('sp7').innerText = Math.round(spannumbers)
    document.getElementsByClassName('sp8').innerText = Math.sqrt(spannumbers)
}
