const setup = () => {

    const familieleden = ['Marnix', 'Tania', 'Banjer', 'Willy', 'Francine'];
    console.log(familieleden.length);
    console.log(familieleden[0], familieleden[2], familieleden[4]);
    let voegNaamToe = window.prompt('voeg naam toe', 'glenn');
    familieleden.push(voegNaamToe);
    console.log(familieleden);
    familieleden.toString();
    console.log(familieleden);
}
window.addEventListener("load", setup);