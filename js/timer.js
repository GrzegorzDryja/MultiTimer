"use strict"

//Unforutnetly global tables --> to change
let timers = []; //Issue removeing div timers don't clean timers table
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
        let check0 = document.querySelector("#timer0");

        if(!check0){
            timers[i] = {
                div: new TimerDiv(i),
                timer: new Timer(i)
            }
        }else if (i < timers.length){ 
            i = timers.length;
            timers[i] = {
                div: new TimerDiv(i),
                timer: new Timer(i)
            }; 
        }else{
            i++
            timers[i] = {
                div: new TimerDiv(i),
                timer: new Timer(i)
            }
        }
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
        this.minutes = document.querySelector("#minutes" + i);
        this.seconds = document.querySelector("#seconds" + i);
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

        this.start.addEventListener("click", () => {
            this.min = document.querySelector("#minutes" + i).value;
            this.sec = document.querySelector("#seconds" + i).value;
                
                this.count(this.min, this.sec); //Thank you fat arrow, lambda stabilize the this keyword, without fat arrow I couldn't call count function             
            });

        this.pause.addEventListener("click", () => {
            this.stop();
        });
        this.reset.addEventListener("click", () => {
            document.querySelector("#minutes" + i).value = "00";
            document.querySelector("#seconds" + i).value = "00";
            this.stop();
        });
        this.add.addEventListener("click", function () {
            newTimer(i);
            this.add = document.querySelector("#addButton" + i);
        });
        this.remove.addEventListener("click", () => {
            this.stop();
            removeTimer(i);
        });
        this.stop = function () {
            clearTimeout(this.timeOut);
        };

        this.twoChars = function (n) {
            this.n = n;
            return (this.n < 10 && this.n.length < 2 ? '0' : '') + this.n;
        };
        
        this.countSeconds = () => {        
            this.timeOut = setTimeout(() => {                
                this.count(this.min, --this.sec); //Can't put count() function here - it dosn't work, will work on to make it with some good pattern - => :D
            }, 1000);
        };

        this.count = (min, sec) => {
            this.min = this.twoChars(min);
            this.sec = this.twoChars(sec);
            this.seconds.value = this.twoChars(this.sec); //something is leaking that I have to use twoChars function here also
            this.minutes.value = this.twoChars(this.min);      

            if (this.sec == 0 && this.min > 0) {
                this.sec = 60;
                --this.min;
                this.countSeconds();
            }
            else if (this.sec > 0 && this.min >= 0) {
                this.countSeconds();
            }
            else if (this.sec == 0 && this.min == 0) {
                return new Promise(resolve => {
                    setTimeout(() => {
                      resolve('resolved');
                    }, 0);
                });
            }  
        }
    }
}
