class Label {
    constructor(pLabel, name) {
        this.previousLabel = pLabel;
        this.name = name;
    }
}

class Engine {
    constructor() {
        this.labels = {};
        this.labelQueueName;
        this.count = -1;

        this.currentLabel;

        this.currentBackground;
        this.currentBackgroundMusic;
        this.isCurrentBackgroundMusic = false;
        this.soundSaver = null;

        this.lastChoice;

        this.maxReturns = 10;
        this.currentReturns = this.maxReturns;

        this.gotoFlag = 0;
    }

    queue(callback) {
        this.labels[this.labelQueueName].push([callback, this.currentBackground, this.currentBackgroundMusic]);

        if(this.soundSaver != null) {
            this.labels[this.labelQueueName][this.labels[this.labelQueueName].length-1].push(this.soundSaver);
            this.soundSaver = null;
        }
    }

    next(callback) {
        this.count++;

        if(callback) {
            if(this.currentLabel.previousLabel == null && this.count == 1) {
                this.labels[this.currentLabel.name][0][2]()
            } 
            callback(this.labels, this.currentLabel.name, this.count);
        }
    }

    previous(callback) {
        if(this.count > 0) {
            this.count--;

            if(callback) {
                callback(this.labels, this.currentLabel.name, this.count);
                
            }

            this.currentReturns--;
        } else {
            if(this.currentLabel.previousLabel != null) {
                let temp = this.labels[this.currentLabel.previousLabel.name].length;

                if(this.gotoFlag) {
                    temp --;
                }

                this.count = temp;
                this._goto(this.currentLabel.previousLabel.name, this.count, true);
                wrapPrevious();
            }
        }
    }

    reset() {
        this._goto(this.lastChoice[0], this.lastChoice[1]);
        wrapNext();
    }

    _label(name, callback) {
        if(!this.labels[name]) {
            this.labels[name] = [];
            this.labelQueueName = name;
            if(!this.currentLabel) {
                this.currentLabel = new Label(null, name);
                this.lastChoice = [this.currentLabel.name, -1];
            }
            callback()
        } else {
            console.log('A code block with this label already exists!')
        }
    }

    _goto(label, countReset = -1, isBack = false) {
        clearScene(false, false, false, false, true);
        
        if(!isBack) {
            this.currentLabel = new Label(this.currentLabel, label);
        } else {
            this.currentLabel = this.currentLabel.previousLabel;
        }

        this.count = countReset;

        this.labels[this.currentLabel.name][0][2]()
    }

    returns(num) {
        this.maxReturns = num;
        this.currentLabel = this.maxReturns;
    }
}

const engine = new Engine();