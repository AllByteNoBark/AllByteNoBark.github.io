class Character {
    constructor(name) {
        this.name = name;
    }
    
    say(phrase, link = false) {
        if(link != false) {
            sound(link)
        }
        
        wrapQueue(() => _print(phrase, this.name));
    }
}