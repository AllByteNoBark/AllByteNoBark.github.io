class Background {
    constructor() {
    }

    render(link) {
        engine.currentBackground = () => {
            document.getElementById('image').style.backgroundImage = `url(${link})`;
        }
    }
}

const bground = new Background();

function bg(link) {
    bground.render(link);
}