window.onload = function()
{
    var timer2 = new CreateTimerDiv(2);
    timer2.buttonsSupport(2);

    var timer3 = new CreateTimerDiv(3);
    timer3.buttonsSupport(3);
};

function CreateTimerDiv(id){    

    function div(){
        return document.createElement("div");
    }
    function input(){
        return document.createElement("input");
    }

    var timerDiv = div();
        timerDiv.className = "timer";

    var nameDiv = div();
        nameDiv.className = "main";
        nameDiv.title = "Name it and click enter";

    var inputName = input();
        inputName.type="text";
        inputName.className="name";
        inputName.id="nameInput"+id;
        inputName.defaultValue="Name it here...";
        inputName.maxLength="10";

    var counterDiv = div();
        counterDiv.className = "main";
        counterDiv.title = "Timer";

    var inputMinutes = input();
        inputMinutes.type="text";
        inputMinutes.className="name";
        inputMinutes.id="minutes"+id;
        inputMinutes.title="Minutes";
        inputMinutes.maxLength="2";
        inputMinutes.defaultValue="00";
        inputMinutes.size="2";
        inputMinutes.pattern="[0-9]{2}";
        
    var colonNode = document.createTextNode(":");    

    var inputSeconds = input();
        inputSeconds.type="text";
        inputSeconds.className="name";
        inputSeconds.id="seconds"+id;
        inputSeconds.title="Seconds";
        inputSeconds.maxLength="2";
        inputSeconds.defaultValue ="00";
        inputSeconds.size="2";
        inputSeconds.pattern="[0-6.0-9]{2}";

    var startButtonDiv = div();
        startButtonDiv.className="main button";
        startButtonDiv.id="startButtonDiv"+id;
        startButtonDiv.title="Start";

    var startButton = input();
        startButton.type="button";
        startButton.value="Start";
        startButton.id="startButton"+id;

    var pauseButtonDiv = div();
        pauseButtonDiv.className="main button";
        pauseButtonDiv.id="pauseButtonDiv"+id;
        pauseButtonDiv.title="Pause";

    var pauseButton = input();
        pauseButton.type="button";
        pauseButton.value="Stop";
        pauseButton.id="pauseButton"+id;

    var resetButtonDiv = div();
        resetButtonDiv.className="main button";
        resetButtonDiv.id="resetButton"+id;
        resetButtonDiv.title="Reset";

    var resetButton = input();
        resetButton.type="button";
        resetButton.value="Reset";
        resetButton.id="resetButton"+id;

    var addButtonDiv = div()
        addButtonDiv.className="main button";
        addButtonDiv.id="addButton"+id;
        addButtonDiv.title="Add";

    var addButton = input();
        addButton.type="button";
        addButton.value="Add";
        addButton.id="addButton"+id;
            
    var removeButtonDiv = div()
        removeButtonDiv.className="main button";
        removeButtonDiv.id="removeButton"+id;
        removeButtonDiv.title="Remove";

    var removeButton = input();
        removeButton.type="button";
        removeButton.value="Remove";
        removeButton.id="removeButton"+id;

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

CreateTimerDiv.prototype.buttonsSupport = function(id){
    this.name = document.querySelector("#nameInput"+id);
    this.start = document.querySelector("#startButton"+id);
    this.pause = document.querySelector("#pauseButton"+id);
    this.reset = document.querySelector("#resetButton"+id);
    this.name = document.querySelector("#nameInput"+id);
    this.add = document.querySelector("#addButton"+id);
    this.remove = document.querySelector("#removeButton"+id);

    this.minutesCount;
    this.secondsCount;
    this.timeOutRef;

    function startCount(min, sec)
        {               
            this.minutesCount = min;
            this.secondsCount = sec; 
            
            if (this.timeOutRef)
                pauseCount();	
            if(this.secondsCount <= 0 && this.minutesCount <= 0)
            return;

            if(this.secondsCount == 0 && this.minutesCount >= 0)
                {
                    this.secondsCount = 60;
                    --this.minutesCount                                                                             
                };                     
            countSeconds(); 

            this.minutes = document.querySelector("#minutes"+id);  
            this.seconds = document.querySelector("#seconds"+id);

            this.minutes.value = this.minutesCount;
            this.seconds.value = this.secondsCount;                      
        };
         
    function countSeconds()
        {  
            --this.secondsCount;
            this.timeOutRef = setTimeout(function()
                {
                    startCount(this.minutesCount, this.secondsCount);
                }, 50);                                                              // Note: 1000!
        };
    function pauseCount()
        {
            clearTimeout(this.timeOutRef);
        };        
    function resetCount()
        {
            document.querySelector("#minutes"+id).value = "00";
            document.querySelector("#seconds"+id).value = "00";
            clearTimeout(this.timeOutRef);
        };
    this.name.addEventListener("click", function()
        {   
            this.oldName = document.querySelector("#nameInput"+id).innerHTML;
            name.value = ""; //Remember that cleans data           
        });
    this.name.addEventListener("dblclick", function()
        {
            name.disabled=false;
        });
    this.name.addEventListener("keypress", function(e)
        {
            if(e.key === 'Enter')
            {                                                
            this.name = document.querySelector("#nameInput"+id).value;
            console.log(this.name)
            }
        });
    this.start.addEventListener("click", function()
        {
            this.minutesValue = document.querySelector("#minutes"+id).value;
            this.secondsValue = document.querySelector("#seconds"+id).value;
            startCount(this.minutesValue, this.secondsValue);
        });
    this.pause.addEventListener("click", function()
        {
            console.log("pause"+id);
            pauseCount();
        });
    this.reset.addEventListener("click", function()
        {
            console.log("reset"+id);
            resetCount();
        });
    this.add.addEventListener("click", function()
        {
            console.log("add"+id);
        });
    this.remove.addEventListener("click", function()
        {
            console.log("remove"+id);
        });   
};
