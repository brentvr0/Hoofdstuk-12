const setup = () => {
    let button=document.getElementById("button");
    button.addEventListener("click",click)
}
const click = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);