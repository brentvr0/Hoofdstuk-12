const setup = () => {
    window.alert("Dit is een mededeling");
    window.confirm("Weet u het zeker?");
    window.prompt('wat is u naam ', 'Brent');
}
window.addEventListener("load", setup);