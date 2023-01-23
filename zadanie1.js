//1
const pluszek = document.querySelector('header');
pluszek.style.backgroundColor='yellow';
console.log(pluszek);
//2
const drugie = document.querySelector('header h1');
console.log(drugie);
drugie.style.fontFamily = 'Arial Black';
drugie.innerHTML = 'Preambuła';
//3
const sections = document.querySelectorAll("section");
console.log(sections);
for (const section of sections){
    section.style.border = "2px solid brown";
    console.log(section);
}
//4
const czter = document.querySelector("section.main_column h1");
console.log(czter);
czter.innerHTML = 'Specjalność szefa';
//5
const piat = document.createElement("p"); //dodawanie elementów
piat.innerHTML = 'Kebab na frytkach _-_';
console.log({piat});
const kolumna = document.querySelector(".main_column")
kolumna.appendChild(piat);

//6
const szust = document.querySelectorAll( ".side_column");
console.log({szust});
szust[1].remove();

//7
const siud = document.createElement("div");
console.log({siud});
const foots = document.querySelector("footer");
foots.appendChild(siud);
const tykst = document.createElement("p");
console.log({tykst});
tykst.innerHTML = '&copy';
siud.appendChild(tykst);
siud.style.backgroundColor = "pink";

//8
const uno = document.createElement("p");

const dwo = document.createElement("p");

uno[0].innerHTML = 'Pochylony tekst';
console.log({uno});
console.log({dwo});
