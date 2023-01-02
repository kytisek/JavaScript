console.log("Witaj Świecie");
console.log(window);
console.log("Witaj", window, 100);
console.table([1, 2, 3, 4, 5]); //tabelka
console.group("elkomando"); // tworzenie grupy
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); //konczenie grupy
console.groupCollapsed("elkomando"); //grupa domyslnie zwinieta
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); //konczenie grupy
console.time("test 1"); //rozpoczyna test-zaczyna liczyć czas
for (let i = 0; i < 100000; i++) {
    ;
}
console.timeEnd( "test 1"); //konczy test