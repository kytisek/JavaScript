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
const tre = document.getElementById("z3");
tre.addEventListener("click", function() {
    const tra = document.querySelector("#z3");
    console.log(tra);



    tre.style.border = "10px dotted green";

})
