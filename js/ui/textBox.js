function _newTextBox(phrase) {
    const dialog = document.createElement("div");
    dialog.classList.add("dialog-box");
    dialog.id = "bT";

    const text = document.createElement("p");
    text.classList.add("dialog-text");

    text.innerText = phrase;

    dialog.appendChild(text);

    document.body.appendChild(dialog);
}

function _print(phrase, name = '*') {
    let nameBox = document.getElementById("name");
    let nText = document.getElementById("nT");

    if(name == "*") {
        nameBox.style.opacity = 0;
        nText.innerHTML = "";
    } else {
        nameBox.style.opacity = 100;
        nText.innerHTML = name;
    }

    if(document.getElementById('bT')) {
        clearScene(true);
    }

    _newTextBox(phrase);

    document.getElementById("bT").addEventListener("click", wrapNext, true);
} 

function print(phrase, link = false) {
    if(link != false) {
        sound(link)
    }
    
    wrapQueue(() => _print(phrase))
}