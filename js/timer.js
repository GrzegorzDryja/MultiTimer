"use strict";

var i = 0;

window.onload = function()
    {
        add();
    }

var GreenDiv = {
    greenDiv: function(i) {        

        function div(){
            return document.createElement("div");}
        function input(){
            return document.createElement("input");
        }    
            this.timerDiv = div();
            this.timerDiv.className = "timer";
            this.timerDiv.id = "timer"+i;
    
            this.nameDiv = div();
            this.nameDiv.className = "main";
            this.nameDiv.title = "Name it and click enter";
    
            this.inputName = input();
            this.inputName.type="text";
            this.inputName.className="name";
            this.inputName.id="nameInput"+i;
            this.inputName.defaultValue="Name it here...";
            this.inputName.maxLength="10";
    
            this.counterDiv = div();
            this.counterDiv.className = "main";
            this.counterDiv.title = "Timer";
    
            this.inputMinutes = input();
            this.inputMinutes.type="text";
            this.inputMinutes.className="name";
            this.inputMinutes.id="minutes"+i;
            this.inputMinutes.title="Minutes";
            this.inputMinutes.maxLength="2";
            this.inputMinutes.defaultValue="00";
            this.inputMinutes.size="2";
            this.inputMinutes.pattern="[0-9]{2}";
                
            this.colonNode = document.createTextNode(":");    
    
            this.inputSeconds = input();
            this.inputSeconds.type="text";
            this.inputSeconds.className="name";
            this.inputSeconds.id="seconds"+i;
            this.inputSeconds.title="Seconds";
            this.inputSeconds.maxLength="2";
            this.inputSeconds.defaultValue ="00";
            this.inputSeconds.size="2";
            this.inputSeconds.pattern="[0-6.0-9]{2}";
    
            this.startButtonDiv = div();
            this.startButtonDiv.className="main button";
            this.startButtonDiv.id="startButtonDiv"+i;
            this.startButtonDiv.title="Start";
    
            this.startButton = input();
            this.startButton.type="button";
            this.startButton.value="Start";
            this.startButton.id="startButton"+i;
    
            this.pauseButtonDiv = div();
            this.pauseButtonDiv.className="main button";
            this.pauseButtonDiv.id="pauseButtonDiv"+i;
            this.pauseButtonDiv.title="Pause";
    
            this.pauseButton = input();
            this.pauseButton.type="button";
            this.pauseButton.value="Stop";
            this.pauseButton.id="pauseButton"+i;
    
            this.resetButtonDiv = div();
            this.resetButtonDiv.className="main button";
            this.resetButtonDiv.id="resetButton"+i;
            this.resetButtonDiv.title="Reset";
    
            this.resetButton = input();
            this.resetButton.type="button";
            this.resetButton.value="Reset";
            this.resetButton.id="resetButton"+i;
    
            this.addButtonDiv = div()
            this.addButtonDiv.className="main button";
            this.addButtonDiv.id="addButton"+i;
            this.addButtonDiv.title="Add";
    
            this.addButton = input();
            this.addButton.type="button";
            this.addButton.value="Add";
            this.addButton.id="addButton"+i;
                    
            this.removeButtonDiv = div()
            this.removeButtonDiv.className="main button";
            this.removeButtonDiv.id="removeButton"+i;
            this.removeButtonDiv.title="Remove";
    
            this.removeButton = input();
            this.removeButton.type="button";
            this.removeButton.value="Remove";
            this.removeButton.id="removeButton"+i;
    
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

//Function bellow trigger first div with a little help from window.onload at the begining,
//create new timer with addButton click and count them via global i variable.
function add() {
    GreenDiv.greenDiv.call(GreenDiv, i);
    i++;
}

function removeTimer(i)
    {
        var removeElement = document.querySelector("#timer"+i);
            removeElement.parentNode.removeChild(removeElement);
    }


function Timer(i)
    {        
        this.name = document.querySelector("#nameInput"+i);
        this.min = document.querySelector("#minutes"+i);
        this.sec = document.querySelector("#seconds"+i);
        this.start = document.querySelector("#startButton"+i);
        this.pause = document.querySelector("#pauseButton"+i);
        this.reset = document.querySelector("#resetButton"+i);
        this.add = document.querySelector("#addButton"+i);
        this.remove = document.querySelector("#removeButton"+i);
        this.timeOut = undefined;

        this.name.addEventListener("click", function()
            {   
                this.oldName = document.querySelector("#nameInput"+i);
                this.oldName.value = "";                                                //Remember that cleans data
                console.log("clean name "+i)          
            });

        this.name.addEventListener("keypress", function(e)
            {
                if(e.key === 'Enter')
                {                                                
                this.name = document.querySelector("#nameInput"+i).value;
                console.log(this.name+i)
                }
            });
        
        this.start.addEventListener("click", function()
            {   
                this.min = document.querySelector("#minutes"+i).value;
                this.sec = document.querySelector("#seconds"+i).value;
                timers[i].count();                                                   //Have to call count function via object
            });

        this.pause.addEventListener("click", function()
            {   
                timers[i].stop();
                console.log("pause"+i);
            });

        this.reset.addEventListener("click", function()
            {            
                document.querySelector("#minutes"+i).value = "00";
                document.querySelector("#seconds"+i).value = "00";
                timers[i].stop();
                
            });

        this.add.addEventListener("click", function()
            {
                newTimer(++i);
                --i;
                this.add = document.querySelector("#addButton"+i);
                this.add.style.visibility = "hidden";

            });

        this.remove.addEventListener("click", function()
            {
                removeTimer(i);
            });
        
        this.stop = function()
            {
                clearTimeout(this.timeOut);
            }    

        this.countSeconds = function()
            {            
                --this.sec.value
                this.timeOut = setTimeout(function()
                    {
                        timers[i].seconds()                             //Can't put count() function here - it dosn't work
                    }
                , 1000);
            }

        this.seconds = function()
            {
                timers[i].count();
            }

        this.count = function()    
            {                   
                if(this.sec.value > 0)
                {   
                    this.countSeconds();                
                }   
                if(this.sec.value < 1 && this.min.value > 0)
                {
                    this.sec.value = 60;
                    --this.min.value;
                    this.countSeconds();                                                                              
                };              

         
            }
    };
