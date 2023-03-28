function wrapQueue(callback) {
    engine.queue(callback);

    if(engine.count == -1) {
        wrapNext();
        document.getElementById("tries").innerHTML = `Back<br>${engine.currentReturns}/${engine.maxReturns}`;
    }
}

function wrapNext() {
    if((engine.count < engine.labels[engine.currentLabel].length - 1) && (engine.labels[engine.currentLabel].length > 0)) {
        clearScene(true, false, true, true);

        const callback = function(map, key, index) {
            map[key][index][1]()
            if(map[key][index][2]) {
                map[key][index][2]()
            }
            map[key][index][0]()
        }

        engine.next(callback);
    }
}

function wrapPrevious() {
    if((engine.labels[engine.currentLabel].length > 0) && (engine.currentReturns > 0)) {
        if(!document.getElementById('btn1')) {
            clearScene(true, false, true, true);

            const callback = function(map, key, index) {
                map[key][index][1]()
                if(map[key][index][2]) {
                    map[key][index][2]()
                }
                map[key][index][0]()
            }

            engine.previous(callback)

            document.getElementById("tries").innerHTML = `Back<br>${engine.currentReturns}/${engine.maxReturns}`
        }
    }
}

function wrapReset() {
    if(!document.getElementById('btn1')) {
        engine.reset();
    }
}

function label(name, callback) {
    engine._label(name, callback);
}

function goto(label) {
    engine.queue(function() {
        engine._goto(label);
        wrapNext();
        engine.gotoFlag = true;
    })
}