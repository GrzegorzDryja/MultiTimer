"use strict";

var i = 0;

window.onload = function()
    {
        add();
    }

var GreenDiv = {
    greenDiv: (i) => {        

        function div(){
            return document.createElement("div");}
        function input(){
            return document.createElement("input");
        }    
            let timerDiv = div();
                timerDiv.className = "timer";
                timerDiv.id = "timer"+i;
    
            let nameDiv = div();
                nameDiv.className = "main";
                nameDiv.title = "Name it and click enter";
    
            let inputName = input();
                inputName.type="text";
                inputName.className="name";
                inputName.id="nameInput"+i;
                inputName.defaultValue="Name it here...";
                inputName.maxLength="10";
    
            let counterDiv = div();
                counterDiv.className = "main";
                counterDiv.title = "Timer";
    
            let inputMinutes = input();
                inputMinutes.type="text";
                inputMinutes.className="name";
                inputMinutes.id="minutes"+i;
                inputMinutes.title="Minutes";
                inputMinutes.maxLength="2";
                inputMinutes.defaultValue="00";
                inputMinutes.size="2";
                inputMinutes.pattern="[0-9]{2}";
                
            let colonNode = document.createTextNode(":");    
    
            let inputSeconds = input();
                inputSeconds.type="text";
                inputSeconds.className="name";
                inputSeconds.id="seconds"+i;
                inputSeconds.title="Seconds";
                inputSeconds.maxLength="2";
                inputSeconds.defaultValue ="00";
                inputSeconds.size="2";
                inputSeconds.pattern="[0-6.0-9]{2}";
    
            let startButtonDiv = div();
            	startButtonDiv.className="main button";
            	startButtonDiv.id="startButtonDiv"+i;
            	startButtonDiv.title="Start";
    
            let startButton = input();
            	startButton.type="button";
            	startButton.value="Start";
            	startButton.id="startButton"+i;
    
            let pauseButtonDiv = div();
            	pauseButtonDiv.className="main button";
            	pauseButtonDiv.id="pauseButtonDiv"+i;
            	pauseButtonDiv.title="Pause";
    
            let	pauseButton = input();
            	pauseButton.type="button";
            	pauseButton.value="Stop";
            	pauseButton.id="pauseButton"+i;
    
            let	resetButtonDiv = div();
            	resetButtonDiv.className="main button";
            	resetButtonDiv.id="resetButton"+i;
            	resetButtonDiv.title="Reset";
    
            let	resetButton = input();
            	resetButton.type="button";
            	resetButton.value="Reset";
            	resetButton.id="resetButton"+i;
    
            let	addButtonDiv = div()
            	addButtonDiv.className="main button";
            	addButtonDiv.id="addButton"+i;
            	addButtonDiv.title="Add";
    
            let	addButton = input();
            	addButton.type="button";
            	addButton.value="Add";
            	addButton.id="addButton"+i;
                    
            let	removeButtonDiv = div()
            	removeButtonDiv.className="main button";
            	removeButtonDiv.id="removeButton"+i;
            	removeButtonDiv.title="Remove";
    
            let	removeButton = input();
            	removeButton.type="button";
            	removeButton.value="Remove";
            	removeButton.id="removeButton"+i;
    
            document.body.appendChild(timerDiv);
                timerDiv.appendChild(nameDiv);
                timerDiv.appendChild(nameDiv);
                timerDiv.appendChild(counterDiv);
                timerDiv.appendChild(startButtonDiv);
                timerDiv.appendChild(pauseButtonDiv);
                timerDiv.appendChild(resetButtonDiv);
                timerDiv.appendChild(addButtonDiv);
                timerDiv.appendChild(removeButtonDiv);
                nameDiv.appendChild(inputName);
                counterDiv.appendChild(inputMinutes);
                counterDiv.appendChild(colonNode);    
                counterDiv.appendChild(inputSeconds);
                startButtonDiv.appendChild(startButton);
                pauseButtonDiv.appendChild(pauseButton);
                resetButtonDiv.appendChild(resetButton);
                addButtonDiv.appendChild(addButton);
                removeButtonDiv.appendChild(removeButton);
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
