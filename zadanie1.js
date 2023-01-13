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
const piat = document.createElement("p");
piat.innerHTML = 'Kebab na frytkach _-_';
console.log({piat});
const kolumna = document.querySelector(".main_column")
kolumna.appendChild(piat);

//6
