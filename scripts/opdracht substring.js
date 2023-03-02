const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", Substring);
}
const Substring = () => {
    let txtOutput = document.getElementById("txtOutput");
    let txtInput = document.getElementById("txtInput");
    let txtBegin = document.getElementById("txtBegin");
    let txtEinde = document.getElementById("txtEinde");

    let tekst = txtInput.value;
    let begin=parseInt(txtBegin.value, 10);
    let einde=parseInt(txtEinde.value, 10);

    txtOutput.innerHTML=tekst.substring(begin, einde);
}
window.addEventListener('load',setup);