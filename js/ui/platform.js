const title = document.createElement('title');
title.innerText = "Base";
title.id = "title";

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
link.type = 'text/css';

const meta = document.createElement('meta');
meta.charset = 'UTF-8';

const backg = document.createElement('div');
backg.classList.add('background');
backg.id = 'image';

const namePlate = document.createElement('div');
namePlate.classList.add('name');
namePlate.id = 'name';

const nameText = document.createElement('div');
nameText.classList.add('nameText');
nameText.id = 'nT';

const dialogBox = document.createElement('div');
dialogBox.classList.add('dialog-box');
dialogBox.id = 'bT';

const dialogText = document.createElement('div');
dialogText.classList.add('dialog-text');
dialogText.id = 'tB';

const arrowLeft1 = document.createElement('div');
arrowLeft1.classList.add('arrow-left1');
arrowLeft1.id = 'back1';

const img1 = document.createElement('img');
img1.src = './assets/img/back.png';
img1.alt = 'BACK 1';

const back1 = document.createElement('div');
back1.classList.add('back1');
back1.id = 'tries';

const arrowLeft2 = document.createElement('div');
arrowLeft2.classList.add('arrow-left2');
arrowLeft2.id = 'back2';

const img2 = document.createElement('img');
img2.src = './assets/img/back.png';
img2.alt = 'BACK FULL';

const back2 = document.createElement('div');
back2.classList.add('back2');
back2.innerHTML = 'Reset';

namePlate.appendChild(nameText);
dialogBox.appendChild(dialogText);
arrowLeft1.appendChild(img1);
arrowLeft2.appendChild(img2);
arrowLeft1.appendChild(back1);
arrowLeft2.appendChild(back2);

document.head.appendChild(title);
document.head.appendChild(link);
document.head.appendChild(meta);

document.body.appendChild(backg);
document.body.appendChild(namePlate);
document.body.appendChild(dialogBox);
document.body.appendChild(arrowLeft1);
document.body.appendChild(arrowLeft2);

document.getElementById("back1").addEventListener("click", () => {
    wrapPrevious();
}, true);

document.getElementById("back2").addEventListener("click", () => {
    wrapReset();
}, true);

function clearScene(text = false, background = false, choices = false, audio = false) {
    if(text) {
        if(document.getElementById('bT')) {
            document.getElementById('bT').remove();
        }
    }
    if(background) {
        if(document.getElementById('image')) {
            document.getElementById('image').remove();
        }
    }
    if(choices) {
        if(document.getElementById('btn1')) {
            document.getElementById('btn1').remove();
            document.getElementById('btn2').remove();
        }
    }
    if(audio) {
        if(document.getElementById('audio')) {
            document.getElementById('audio').remove();
        }
    }
}

function gameTitle(name) {
    document.getElementById('title').innerText = name;
}

function _sound(link) {
    const audio = document.createElement('audio');
    audio.autoplay = true;
    audio.loop = true;
    audio.src = link;
    audio.id = 'audio';
    document.body.appendChild(audio);
}

function sound(link) {
    engine.soundSaver = () => {
        const audio = document.createElement('audio');
        audio.autoplay = true;
        audio.loop = true;
        audio.src = link;
        audio.id = 'audio';
        document.body.appendChild(audio);
    }
}