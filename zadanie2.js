//1
const uno = document.getElementById("b1")
uno.addEventListener("click", function(){
    document.getElementById('z1').innerHTML = "<i>Swietnie!</i>";
});
//2
const two = document.getElementById("b2");
two.addEventListener("click", function(){
    document.getElementById('z2').innerText = "<i>Swietnie!</i>";
});
//3
document.querySelector("#z3").addEventListener("click", function (){
    const tre = document.querySelector("#d3");
    const tra = tre.querySelectorAll("*");
    console.log(tra);

    for (const el of tra) {
        if (el.tagName === "STRONG") {
            el.style.border = "10px dotted green"
        }
    }

})
//4
document.querySelector("#z4").addEventListener("click", function (){
alert(document.querySelector("#p4").getAttribute('title'));

})

//5
const piate = document.querySelector("#z5")
piate.addEventListener("click", function() {
    const piece = document.querySelector("#p5");
    piece.setAttribute('cos', 'rtl');
    console.log(piece);
});

//6
document.querySelector("#z6").addEventListener("click", function (){
   const toggleEditButton = document.querySelector("#z6")
    const editElement = document.querySelector("#h6");
    if (editElement.hasAttribute("disabled")) {
        toggleEditButton.innerText =
    }
    suno.innerHTML = 'Można edytować'
})