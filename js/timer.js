var q=0; //Unforutnetly global variable, timer count for add id
var timers = [];

window.onload = function()
{
    newTimer(0);
}

function newTimer(q){
    var greenDiv = new TimerDiv(q);
    greenDiv.buttonsSupport(q);
    startTimer(q);
}

function removeTimer(i){
    var removeElement = document.querySelector("#timer"+i);
        removeElement.parentNode.removeChild(removeElement);
}

function startTimer(q){    
    timers[q] = new Timer(0, 0, 0);
    console.dir(timers[q]);
}

function TimerDiv(i){    

    function div(){
        return document.createElement("div");
    }
    function input(){
        return document.createElement("input");
    }

    var timerDiv = div();
        timerDiv.className = "timer";
        timerDiv.id = "timer"+i;

    var nameDiv = div();
        nameDiv.className = "main";
        nameDiv.title = "Name it and click enter";

    var inputName = input();
        inputName.type="text";
        inputName.className="name";
        inputName.id="nameInput"+i;
        inputName.defaultValue="Name it here...";
        inputName.maxLength="10";

    var counterDiv = div();
        counterDiv.className = "main";
        counterDiv.title = "Timer";

    var inputMinutes = input();
        inputMinutes.type="text";
        inputMinutes.className="name";
        inputMinutes.id="minutes"+i;
        inputMinutes.title="Minutes";
        inputMinutes.maxLength="2";
        inputMinutes.defaultValue="00";
        inputMinutes.size="2";
        inputMinutes.pattern="[0-9]{2}";
        
    var colonNode = document.createTextNode(":");    

    var inputSeconds = input();
        inputSeconds.type="text";
        inputSeconds.className="name";
        inputSeconds.id="seconds"+i;
        inputSeconds.title="Seconds";
        inputSeconds.maxLength="2";
        inputSeconds.defaultValue ="00";
        inputSeconds.size="2";
        inputSeconds.pattern="[0-6.0-9]{2}";

    var startButtonDiv = div();
        startButtonDiv.className="main button";
        startButtonDiv.id="startButtonDiv"+i;
        startButtonDiv.title="Start";

    var startButton = input();
        startButton.type="button";
        startButton.value="Start";
        startButton.id="startButton"+i;

    var pauseButtonDiv = div();
        pauseButtonDiv.className="main button";
        pauseButtonDiv.id="pauseButtonDiv"+i;
        pauseButtonDiv.title="Pause";

    var pauseButton = input();
        pauseButton.type="button";
        pauseButton.value="Stop";
        pauseButton.id="pauseButton"+i;

    var resetButtonDiv = div();
        resetButtonDiv.className="main button";
        resetButtonDiv.id="resetButton"+i;
        resetButtonDiv.title="Reset";

    var resetButton = input();
        resetButton.type="button";
        resetButton.value="Reset";
        resetButton.id="resetButton"+i;

    var addButtonDiv = div()
        addButtonDiv.className="main button";
        addButtonDiv.id="addButton"+i;
        addButtonDiv.title="Add";

    var addButton = input();
        addButton.type="button";
        addButton.value="Add";
        addButton.id="addButton"+i;
            
    var removeButtonDiv = div()
        removeButtonDiv.className="main button";
        removeButtonDiv.id="removeButton"+i;
        removeButtonDiv.title="Remove";

    var removeButton = input();
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

TimerDiv.prototype.buttonsSupport = function(i){
       
    this.name = document.querySelector("#nameInput"+i);
    this.start = document.querySelector("#startButton"+i);
    this.pause = document.querySelector("#pauseButton"+i);
    this.reset = document.querySelector("#resetButton"+i);
    this.name = document.querySelector("#nameInput"+i);
    this.add = document.querySelector("#addButton"+i);
    this.remove = document.querySelector("#removeButton"+i);

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
            this.minutesValue = document.querySelector("#minutes"+i).value;
            this.secondsValue = document.querySelector("#seconds"+i).value;          
            timers[i].start(this.minutesValue, this.secondsValue, i);
            console.dir(timers[i]);
            console.log("start"+i);
        });

    this.pause.addEventListener("click", function()
        {   
            timers[i].pause();
            console.log("pause"+i);
        });

    this.reset.addEventListener("click", function()
        {            
            document.querySelector("#minutes"+i).value = "00";
            document.querySelector("#seconds"+i).value = "00";
            timers[i].reset();
            console.log("reset"+i);
        });

    this.add.addEventListener("click", function()
        {
            newTimer(++q); // go at the beginnig if you wondering what is q
            console.log("add"+i);
        });

    this.remove.addEventListener("click", function()
        {
            removeTimer(i);
            console.log("remove"+i);
        });
};

function Timer(min, sec, i)
{    
    this.min = min;
    this.sec = sec;
    this.timeOutRef = 0;

    this.pause = function()
    {
        clearTimeout(this.timeOutRef);
    };

    this.reset = function()
    {
        clearTimeout(this.timeOutRef);
    };

    this.start = function(min, sec, i)
        {
            this.min = min;
            this.sec = sec;
                                    
            if (this.timeOutRef || this.sec == 0 || this.min == 0)
                {
                    clearTimeout(this.timeOutRef);
                    this.pause();
                }
                
            this.count();
        }

    this.count = function(min, sec, i)
        {            this.min = min;
            this.sec = sec;
            if(this.sec <= 0 && this.min <= 0)
                this.secCount();

            if(this.sec == 0 && this.min > 0)
                {
                    this.sec = 60;
                    --this.min;                                                                             
                };     
            this.secCount(min, sec, i);
        };

    this.secCount = function(min, sec, i)
        {               this.min = min;
            this.sec = sec;
            this.timeOutRef = setTimeout(
                --this.sec
            , 1000);
            console.log(this.min + ":" + this.sec + "/" + i + "/" + this.timeOutRef);

        }      


                                /*             this.minutes = document.querySelector("#minutes"+i);  
                                            this.seconds = document.querySelector("#seconds"+i);
                                    
                                            this.minutes.value = min;
                                            this.seconds.value = sec;      */
};
