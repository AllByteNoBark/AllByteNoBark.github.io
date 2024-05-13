class Background {
    constructor() {
    }

    render(link, music = false) {
        engine.currentBackground = () => {
            document.getElementById('image').style.backgroundImage = `url(${link})`;
        }

        backgroundSound(music);
    }
}

const bground = new Background();

function bg(link, music = false) {
    bground.render(`./assets/img/${link}`, music);
}
