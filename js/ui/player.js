function _newChoices(choice1, choice2) {
    const button1 = document.createElement('div');
    button1.classList.add('choice1');
    button1.id = 'btn1';

    const p1 = document.createElement('p');
    p1.innerText = choice1;

    const button2 = document.createElement('div');
    button2.classList.add('choice2');
    button2.id = 'btn2';
    
    const p2 = document.createElement('p');
    p2.innerText = choice2;

    button1.appendChild(p1);
    button2.appendChild(p2);

    document.body.appendChild(button1);
    document.body.appendChild(button2);
}

class Player {
    constructor(name){
        this.name = name;
        this.character = new Character(name);
    }

    say(phrase, link = false) {
        this.character.say(phrase, link);
    }

    makeChoice(choice, option1, option2) {
        wrapQueue(() => {
            _print(choice);
            _newChoices(option1[0], option2[0]);

            engine.lastChoice = [engine.currentLabel, engine.count-1];
            engine.gotoFlag = false;

            document.getElementById('btn1').addEventListener("click", () => {   
                clearScene(false, false, true);
                engine._goto(option1[1]);
                wrapNext()
            }, true);
            
            document.getElementById('btn2').addEventListener("click", () => {
                clearScene(false, false, true);
                engine._goto(option2[1]);
                wrapNext()
            }, true);
        })
    }
}