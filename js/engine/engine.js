class Engine {
    constructor() {
        this.labels = {};

        this.labelQueueName;
        
        this.count = -1;

        this.currentLabel;
        this.previousLabel;
        this.currentBackground = "";
        this.lastChoice = [];
        this.soundSaver = null;

        this.maxReturns = 5;
        this.currentReturns = this.maxReturns;

        this.gotoFlag = 0;
    }

    queue(callback) {
        this.labels[this.labelQueueName].push([callback, this.currentBackground]);

        if(this.soundSaver != null) {
            this.labels[this.labelQueueName][this.labels[this.labelQueueName].length-1].push(this.soundSaver);
            this.soundSaver = null;
        }
    }

    next(callback) {
        this.count++;

        if(callback) {
            callback(this.labels, this.currentLabel, this.count);
        }
    }

    previous(callback) {
        if(this.count > 0) {
            this.count--;

            if(callback) {
                callback(this.labels, this.currentLabel, this.count);
                
            }

            this.currentReturns--;
        } else {
            if(this.previousLabel != 444) {
                let temp = this.labels[this.previousLabel].length;

                if(this.gotoFlag) {
                    temp --;
                }

                this._goto(this.previousLabel, temp);
                wrapPrevious();
            }
        }
    }

    reset() {
        if(this.lastChoice.length != 0) {
            this._goto(this.lastChoice[0], this.lastChoice[1]);
            wrapNext();
        }
    }

    _label(name, callback) {
        if(!this.labels[name]) {
            this.labels[name] = [];
            this.labelQueueName = name;
            if(!this.previousLabel) {
                this.currentLabel = name;
                this.previousLabel = 444;
            }
            callback()
        } else {
            console.log('A code block with this label already exists!')
        }
    }

    _goto(label, countReset = -1) {
        this.previousLabel = this.currentLabel;
        this.currentLabel = label;
        this.count = countReset;
    }

    returns(num) {
        this.maxReturns = num;
        this.currentLabel = this.maxReturns;
    }
}

const engine = new Engine();