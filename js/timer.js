window.onload = function()
{
    var start = document.querySelector("#startButton");
    var pause = document.querySelector("#pauseButton");    
    var seconds = document.querySelector("#seconds");
    var reset = document.querySelector("#resetButton");

    var timer = new MultiTimer(seconds);

    start.onclick = function()
    {
        var startValue = document.querySelector("#seconds").value; 
        timer.start(startValue);
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

function MultiTimer(seconds)
{
    this.seconds = seconds;
    this.startValue;
    this.timeOutRef;

    start = function(startValue)
                                {
                                    this.startValue = startValue;
                                    if (this.timeOutRef)
                                        this.pause();										        
                                    this.startStoper();
                                };
    this.startStoper = function()
                                {
                                    if (this.startValue < 0)
                                    return;                                    
                                    this.seconds.value = this.startValue--;                                    
                                    var self = this;                                    
                                    this.timeOutRef = setTimeout(function()
                                    {
                                        self.startStoper();
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
