"use strict"

//Unforutnetly global variable, timer count for add id
let divs = [];
let timers = [];                                                        //Here I put timer counting object
let i = 0;
let names = [];

window.onload = function()
    {
        newTimer(0);
    }
document.addEventListener("keydown", (e) => {
    if(e.keyCode == 81 && e.ctrlKey)
        newTimer(i);
});

function newTimer(i)
    {
        divs[i] = new TimerDiv(i);
        timers[i] = new Timer(i);
    }

function removeTimer(i)
    {
        let leftDivs = document.querySelectorAll("div.timer").length;
        let removeElement = document.querySelector("#timer"+i);
            if(leftDivs == 1){
                let remove = prompt("Do you realy want to remove las timer? Y/y for confirm.");
                    if(remove == 'y' || remove == 'Y'){
                        removeElement.parentNode.removeChild(removeElement);
                        alert("I warned you!");
                        alert("Ok... Tap ctrl+q for new timer! ;)");  
                    };         
            }else{
                removeElement.parentNode.removeChild(removeElement);
            }            
    }   

class TimerDiv {
    constructor(i) {
        function div() {
            return document.createElement("div");
        }
        function input() {
            return document.createElement("input");
        }
        this.timerDiv = div();
        this.timerDiv.className = "timer";
        this.timerDiv.id = "timer" + i;
        this.nameDiv = div();
        this.nameDiv.className = "main";
        this.nameDiv.title = "Name it and click enter";
        this.inputName = input();
        this.inputName.type = "text";
        this.inputName.className = "name";
        this.inputName.id = "nameInput" + i;
        names[i] = "Name it here...";
        this.inputName.value = names[i];
        this.inputName.maxLength = "10";
        this.counterDiv = div();
        this.counterDiv.className = "main";
        this.counterDiv.title = "Timer";
        this.inputMinutes = input();
        this.inputMinutes.type = "text";
        this.inputMinutes.className = "name";
        this.inputMinutes.id = "minutes" + i;
        this.inputMinutes.title = "Minutes";
        this.inputMinutes.maxLength = "2";
        this.inputMinutes.defaultValue = "00";
        this.inputMinutes.size = "2";
        this.inputMinutes.pattern = "[0-9]{2}";
        this.colonNode = document.createTextNode(":");
        this.inputSeconds = input();
        this.inputSeconds.type = "text";
        this.inputSeconds.className = "name";
        this.inputSeconds.id = "seconds" + i;
        this.inputSeconds.title = "Seconds";
        this.inputSeconds.maxLength = "2";
        this.inputSeconds.defaultValue = "00";
        this.inputSeconds.size = "2";
        this.inputSeconds.pattern = "[0-6.0-9]{2}";
        this.startButtonDiv = div();
        this.startButtonDiv.className = "main button";
        this.startButtonDiv.id = "startButtonDiv" + i;
        this.startButtonDiv.title = "Start";
        this.startButton = input();
        this.startButton.type = "button";
        this.startButton.value = "Start";
        this.startButton.id = "startButton" + i;
        this.pauseButtonDiv = div();
        this.pauseButtonDiv.className = "main button";
        this.pauseButtonDiv.id = "pauseButtonDiv" + i;
        this.pauseButtonDiv.title = "Pause";
        this.pauseButton = input();
        this.pauseButton.type = "button";
        this.pauseButton.value = "Stop";
        this.pauseButton.id = "pauseButton" + i;
        this.resetButtonDiv = div();
        this.resetButtonDiv.className = "main button";
        this.resetButtonDiv.id = "resetButton" + i;
        this.resetButtonDiv.title = "Reset";
        this.resetButton = input();
        this.resetButton.type = "button";
        this.resetButton.value = "Reset";
        this.resetButton.id = "resetButton" + i;
        this.addButtonDiv = div();
        this.addButtonDiv.className = "main button";
        this.addButtonDiv.id = "addButton" + i;
        this.addButtonDiv.title = "Add";
        this.addButton = input();
        this.addButton.type = "button";
        this.addButton.value = "Add";
        this.addButton.id = "addButton" + i;
        this.removeButtonDiv = div();
        this.removeButtonDiv.className = "main button";
        this.removeButtonDiv.id = "removeButton" + i;
        this.removeButtonDiv.title = "Remove";
        this.removeButton = input();
        this.removeButton.type = "button";
        this.removeButton.value = "Remove";
        this.removeButton.id = "removeButton" + i;
        document.body.appendChild(this.timerDiv);
        this.timerDiv.appendChild(this.nameDiv);
        this.timerDiv.appendChild(this.nameDiv);
        this.timerDiv.appendChild(this.counterDiv);
        this.timerDiv.appendChild(this.startButtonDiv);
        this.timerDiv.appendChild(this.pauseButtonDiv);
        this.timerDiv.appendChild(this.resetButtonDiv);
        this.timerDiv.appendChild(this.addButtonDiv);
        this.timerDiv.appendChild(this.removeButtonDiv);
        this.nameDiv.appendChild(this.inputName);
        this.counterDiv.appendChild(this.inputMinutes);
        this.counterDiv.appendChild(this.colonNode);
        this.counterDiv.appendChild(this.inputSeconds);
        this.startButtonDiv.appendChild(this.startButton);
        this.pauseButtonDiv.appendChild(this.pauseButton);
        this.resetButtonDiv.appendChild(this.resetButton);
        this.addButtonDiv.appendChild(this.addButton);
        this.removeButtonDiv.appendChild(this.removeButton);
    }
}

class Timer {
    constructor(i) {
        this.name = document.querySelector("#nameInput" + i);
        this.min = document.querySelector("#minutes" + i);
        this.sec = document.querySelector("#seconds" + i);
        this.start = document.querySelector("#startButton" + i);
        this.pause = document.querySelector("#pauseButton" + i);
        this.reset = document.querySelector("#resetButton" + i);
        this.add = document.querySelector("#addButton" + i);
        this.remove = document.querySelector("#removeButton" + i);
        this.timeOut; //It is undefined
        this.name.addEventListener("click", function () {
            document.querySelector("#nameInput" + i).select();
        });
        this.name.addEventListener("change", function () {
            this.name = document.querySelector("#nameInput" + i).value;
        });
        this.start.addEventListener("click", function () {
            this.min = document.querySelector("#minutes" + i).value;
            this.sec = document.querySelector("#seconds" + i).value;      

  //Skończyłem tu, mam dostęp do n, n.end nie widzi jako funkcji, muszę nad tym popracować
            (async function (n) {
                console.log(n + "start" + i);
                n.end = timers[i].count(n.min, n.sec);
                // timers[i].count(min, sec);
                let value = await n.end();
                console.log(value);
            })(this);

        });
        this.pause.addEventListener("click", function () {
            timers[i].stop();
        });
        this.reset.addEventListener("click", function () {
            document.querySelector("#minutes" + i).value = "00";
            document.querySelector("#seconds" + i).value = "00";
            timers[i].stop();
        });
        this.add.addEventListener("click", function () {
            newTimer(timers.length);
            this.add = document.querySelector("#addButton" + i);
        });
        this.remove.addEventListener("click", function () {
            timers[i].stop();
            removeTimer(i);
        });
        this.stop = function () {
            clearTimeout(this.timeOut);
        };
        this.twoChars = function (n) {
            this.n = n;
            return (this.n < 10 && this.n.length < 2 ? '0' : '') + this.n;
        };
        this.countSeconds = function () {
            --this.sec.value;
            this.sec.value = this.twoChars(this.sec.value);
            this.timeOut = setTimeout(function () {
                timers[i].seconds(); //Can't put count() function here - it dosn't work, will work on to make it with some good pattern
            }, 1000);
        };
        this.seconds = function () {
            timers[i].count();
        };
        this.count = function () {
            if (this.sec.value == 0 && this.min.value > 0) {
                this.sec.value = 60;
                --this.min.value;
                this.min.value = this.twoChars(this.min.value);
                this.countSeconds();
            }
            else if (this.sec.value > 0 && this.min.value > 0) {
                this.min.value = this.twoChars(this.min.value);
                this.countSeconds();
            }
            else if (this.sec.value > 0 && this.min.value == 0) {
                this.min.value = this.twoChars(this.min.value);
                this.countSeconds();
            }
            else if (this.sec.value == 0 && this.min.value == 0) {
                return new Promise(resolve => {
                    setTimeout(() => {
                      resolve('resolved');
                    }, 0);
                });
            }        
        }
    }
}
