window.onload = function()
{
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
    add.addEventListener("click", function()
        {
            timer.reset();
        });
    remove.addEventListener("click", function()
        {
            timer.reset();
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
    var newTimer = new Timer(minutes, seconds);

    
}
