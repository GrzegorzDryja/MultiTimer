window.onload = function()
{
    var timerDiv = new Timer();
};

function Timer(){    

    function div(){
        return document.createElement("div");
    }
    function input(){
        return document.createElement("input");
    }

    this.timerDiv = div();
    this.timerDiv.className = "timer";

    this.nameDiv = div();
    this.nameDiv.className = "main";
    this.nameDiv.title = "Name it and click enter";

    this.inputName = input();
    this.inputName.type="text";
    this.inputName.className="name";
    this.inputName.id="nameInput";
    this.inputName.defaultValue="Name it here...";
    this.inputName.maxLength="10";

    this.counterDiv = div();
    this.counterDiv.className = "main";
    this.counterDiv.title = "Timer";

    this.inputMinutes = input();
    this.inputMinutes.type="text";
    this.inputMinutes.className="name";
    this.inputMinutes.id="minutes";
    this.inputMinutes.title="Minutes";
    this.inputMinutes.maxLength="2";
    this.inputMinutes.defaultValue="00";
    this.inputMinutes.size="2";
    this.inputMinutes.pattern="[0-9]{2}";
        
    this.colonNode = document.createTextNode(":");    

    this.inputSeconds = input();
    this.inputSeconds.type="text";
    this.inputSeconds.className="name";
    this.inputSeconds.id="seconds";
    this.inputSeconds.title="Seconds";
    this.inputSeconds.maxLength="2";
    this.inputSeconds.defaultValue ="00";
    this.inputSeconds.size="2";
    this.inputSeconds.pattern="[0-6.0-9]{2}";

    this.startButtonDiv = div();
    this.startButtonDiv.className="main button";
    this.startButtonDiv.id="startButtonDiv";
    this.startButtonDiv.title="Start";

    this.startButton = input();
    this.startButton.type="button";
    this.startButton.value="Start";
    this.startButton.id="startButton";

    this.pauseButtonDiv = div();
    this.pauseButtonDiv.className="main button";
    this.pauseButtonDiv.id="pauseButtonDiv";
    this.pauseButtonDiv.title="Pause";

    this.pauseButton = input();
    this.pauseButton.type="button";
    this.pauseButton.value="Stop";
    this.pauseButton.id="pauseButton";

    this.resetButtonDiv = div();
    this.resetButtonDiv.className="main button";
    this.resetButtonDiv.id="resetButton";
    this.resetButtonDiv.title="Reset";

    this.resetButton = input();
    this.resetButton.type="button";
    this.resetButton.value="Reset";
    this.resetButton.id="resetButton";

    this.addButtonDiv = div()
    this.addButtonDiv.className="main button";
    this.addButtonDiv.id="addButton";
    this.addButtonDiv.title="Add";

    this.addButton = input();
    this.addButton.type="button";
    this.addButton.value="Add";
    this.addButton.id="addButton";
            
    this.removeButtonDiv = div()
    this.removeButtonDiv.className="main button";
    this.removeButtonDiv.id="removeButton";
    this.removeButtonDiv.title="Remove";

    this.removeButton = input();
    this.removeButton.type="button";
    this.removeButton.value="Remove";
    this.removeButton.id="removeButton";

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

    this.start = document.querySelector("#startButton");
    this.pause = document.querySelector("#pauseButton");
    this.minutes = document.querySelector("#minutes");  
    this.seconds = document.querySelector("#seconds");
    this.reset = document.querySelector("#resetButton");
    this.name = document.querySelector("#nameInput");
    this.add = document.querySelector("#addButton");
    this.remove = document.querySelector("#removeButton");
    //timers = [];    

    this.name.addEventListener("click", function()
    {   
        //var oldName = document.querySelector("#nameInput").innerHTML;
        this.name.value = ""; //Remember that cleans data           
    });

    this.name.addEventListener("dblclick", function()
    {
        this.name.disabled=false;
    });

    this.name.addEventListener("keypress", function(e)
    {
        if(e.key === 'Enter')
        {                                                
            this.name = document.querySelector("#nameInput").value;
        }
    });

    this.start.addEventListener("click", function()
    {
        this.startMinutes = document.querySelector("#minutes").value,
        this.startSeconds = document.querySelector("#seconds").value;

        start(this.startMinutes, this.startSeconds);
    });

    this.pause.addEventListener("click", function()
    {
        this.timer.pause();
    });

    this.reset.addEventListener("click", function()
    {
        this.timer.reset();
    });
    this.add.addEventListener("click", this.createTimer);
    this.remove.addEventListener("click", function()
    {
        remove();
    });
    
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
