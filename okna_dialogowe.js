function fun(){
    alert("Możesz być z siebie dumny");
}
const two = document.querySelector("#dwa")
two.addEventListener('click',()=>{fun()})
console.log(two)