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