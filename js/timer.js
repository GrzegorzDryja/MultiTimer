window.onload = function()
{
    createTimer(); 
    
    var start = document.querySelector("#startButton"),
        pause = document.querySelector("#pauseButton"),
        minutes = document.querySelector("#minutes"),    
        seconds = document.querySelector("#seconds"),
        reset = document.querySelector("#resetButton"),
        name = document.querySelector("#nameInput"),
        add = document.querySelector("#addButton"),
        remove = document.querySelector("#removeButton"),
        timers = [];
    
    var timer = new Timer(minutes, seconds);

    name.addEventListener("click", function()
        {   
            var oldName = document.querySelector("#nameInput").innerHTML;
            name.value = ""; //Remember that cleans data           
        });

    name.addEventListener("dblclick", function()
        {
            name.disabled=false;
        });

    name.addEventListener("keypress", function(e)
        {
            if(e.key === 'Enter')
            {                                                
               var name = document.querySelector("#nameInput").value;
            }
        });

    start.addEventListener("click", function()
        {
            var startMinutes = document.querySelector("#minutes").value,
                startSeconds = document.querySelector("#seconds").value;

            timer.start(startMinutes, startSeconds);
        });

    pause.addEventListener("click", function()
        {
            timer.pause();
        });

    reset.addEventListener("click", function()
        {
            timer.reset();
        });
    add.addEventListener("click", createTimer);
    remove.addEventListener("click", function()
        {
            remove();
        });   
};

function Timer(minutes, seconds)
{
    this.minutes = minutes;
    this.seconds = seconds;
    this.startMinutes;
    this.startSeconds;
    this.timeOutRef;

    this.start = function(startMinutes, startSeconds)
        {
            this.startMinutes = startMinutes;
            this.startSeconds = startSeconds;
            if (this.timeOutRef)
                this.pause();										        
            this.startTimer();
        };

    this.startTimer = function()
        {   if(this.startSeconds <= 0 && this.startMinutes <= 0)
            return;

            if(this.startSeconds == 0 && --this.startMinutes >= 0)
            this.startSeconds = 60;
            this.countSeconds();
            this.countMinutes();
        };

     this.countMinutes = function()
        {   
            this.minutes.value = this.startMinutes;                                    
        };

    this.countSeconds = function()
        {  
            this.seconds.value = --this.startSeconds; 
            var self = this;                                    
            this.timeOutRef = setTimeout(function()
            {
                self.startTimer();
            }, 50);            // Note: 1000!
        };         

    this.pause = function()
        {
            clearTimeout(this.timeOutRef);
        };
        
    this.reset = function()
        {
            document.querySelector("#minutes").value = "00";
            document.querySelector("#seconds").value = "00";
            clearTimeout(this.timeOutRef);
        };
};

function add(){
    createTimer();
}

function createTimer(){    

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
        inputName.id="nameInput";
        inputName.defaultValue="Name it here...";
        inputName.maxLength="10";

    var counterDiv = div();
        counterDiv.className = "main";
        counterDiv.title = "Timer";

    var inputMinutes = input();
        inputMinutes.type="text";
        inputMinutes.className="name";
        inputMinutes.id="minutes";
        inputMinutes.title="Minutes";
        inputMinutes.maxLength="2";
        inputMinutes.defaultValue="00";
        inputMinutes.size="2";
        inputMinutes.pattern="[0-9]{2}";
        
    var colonNode = document.createTextNode(":");    

    var inputSeconds = input();
        inputSeconds.type="text";
        inputSeconds.className="name";
        inputSeconds.id="seconds";
        inputSeconds.title="Seconds";
        inputSeconds.maxLength="2";
        inputSeconds.defaultValue ="00";
        inputSeconds.size="2";
        inputSeconds.pattern="[0-6.0-9]{2}";

    var startButtonDiv = div();
        startButtonDiv.className="main button";
        startButtonDiv.id="startButtonDiv";
        startButtonDiv.title="Start";

    var startButton = input();
        startButton.type="button";
        startButton.value="Start";
        startButton.id="startButton";

    var pauseButtonDiv = div();
        pauseButtonDiv.className="main button";
        pauseButtonDiv.id="pauseButtonDiv";
        pauseButtonDiv.title="Pause";

    var pauseButton = input();
        pauseButton.type="button";
        pauseButton.value="Stop";
        pauseButton.id="pauseButton";

    var resetButtonDiv = div();
        resetButtonDiv.className="main button";
        resetButtonDiv.id="resetButton";
        resetButtonDiv.title="Reset";

    var resetButton = input();
        resetButton.type="button";
        resetButton.value="Reset";
        resetButton.id="resetButton";

    var addButtonDiv = div()
        addButtonDiv.className="main button";
        addButtonDiv.id="addButton";
        addButtonDiv.title="Add";

    var addButton = input();
        addButton.type="button";
        addButton.value="Add";
        addButton.id="addButton";
            
    var removeButtonDiv = div()
        removeButtonDiv.className="main button";
        removeButtonDiv.id="removeButton";
        removeButtonDiv.title="Remove";

    var removeButton = input();
        removeButton.type="button";
        removeButton.value="Remove";
        removeButton.id="removeButton";

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
