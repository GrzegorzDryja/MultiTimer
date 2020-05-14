window.onload = function()
{
    var start = document.querySelector("#startButton"),
        pause = document.querySelector("#pauseButton"),
        minutes = document.querySelector("#minutes"),    
        seconds = document.querySelector("#seconds"),
        reset = document.querySelector("#resetButton"),
        name = document.querySelector("#nameInput"),
        timers = [];

    var timer = new Timer(minutes, seconds);

    name.addEventListener("click", function()
        {   
            var oldName = document.querySelector("#nameInput").innerHTML;
            console.log(oldName)
            name.value = "";            
        }
    );

    name.addEventListener("dblclick", function()
        {
            name.disabled=false;
        }
    );

    name.addEventListener("keypress", function()
        {
            if(e.key === 'Enter')
            {                                                
                timers.push(document.querySelector("#nameInput").innerHTML);
                console.log(timers[0]);
            }
        }
    );

    start.onclick = function()
        {
            var startMinutes = document.querySelector("#minutes").value,
                startSeconds = document.querySelector("#seconds").value;

            timer.start(startMinutes, startSeconds);
        };

    pause.onclick = function()
        {
            timer.pause();
        };

    reset.onclick = function()
        {
            timer.reset();
        };        
};

function Timer(minutes, seconds)
{
    this.minutes = minutes;
    this.seconds = seconds;
    this.startValue;
    this.timeOutRef;

    this.start = function(startValue)
        {
            this.startValue = startValue;
            if (this.timeOutRef)
                this.pause();										        
            this.startTimer();
        };

    this.startTimer = function()
        {
            if (this.startValue < 0)
            return;                                    
            this.seconds.value = this.startValue--;                                    
            var self = this;                                    
            this.timeOutRef = setTimeout(function()
            {
                self.startTimer();
            }, 1000);
        };

    this.pause = function()
        {
            clearTimeout(this.timeOutRef);
        };
        
    this.reset = function()
        {
            document.querySelector("#seconds").value = "00";
            clearTimeout(this.timeOutRef);
        };
}

var startButton = document.querySelector("#startButton");
var pauseButton = document.querySelector("#pauseButton");
var resetButton = document.querySelector("#resetButton");
var pauseBool = false;

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

function start(){
    var startValue = document.querySelector("#seconds").value;
    pauseBool = false
    if(startValue > 0){
        var timer = setInterval(function()
                {   
                    document.querySelector("#seconds").value = --startValue;                 
                    if (pauseBool || startValue <= 0)
                    {
                        clearInterval(timer);
                    }
                    
                }, 1000);

    };
};

function pause(){    
    pauseBool = true;
};

function reset(){    
    document.querySelector("#seconds").value = "00";
};
