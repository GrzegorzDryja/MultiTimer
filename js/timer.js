var timeOutStoper;

function timer(visual, count)
{
    visual.innerHTML = count--;
    
    if (count < 0)
        return;
    timeOutStoper = setTimeout(function()
    {
        timer(visual, count);
    }, 1000);
}

function MultiTimer(time) //Klasa, przepis na obiekt, która będzie przyjmować time object, który składa się minut i sekund
{
    this.visual = time;
    this.startValue;
    this.timeOutRef = undefined;

    this.start = function(startValue)
    {
        this.startValue = startValue;
        if (this.timeOutRef)
            this.stop();
        
        this.startAgain();
    };


    this.stop = function()
    {
        if (this.startValue < 0)
            return;
        
        this.visual.innerHTML = this.startValue--;
        
        var self = this;
        
        this.timeOutRef = setTimeout(function()
        {
            self.startAgain();
        }, 1000);
    };
    
    this.stop = function()
    {
        clearTimeout(this.timeOutRef);
    };
    this.resume = function()
    {
        this.startAgain();
    };
}

window.onload = function()
{
    var startButton = document.querySelector("#startButton");
    var pauseButton = document.querySelector("#pauseButton");
    var startAfterPause = document.querySelector("#startButton");    
    
    var visual = document.querySelector("#time");
    
    var timer = new MultiTimer(visual);
    timer.start();
   
    
    startButton.onclick = function()
    { 
        var startValue = document.querySelector("#seconds").value; 
        console.log(startValue);        
        timer.start(startValue);
    };

    


    pauseButton.onclick = function()
    {
        timer.stop();
    };
    startAfterPause.onclick = function()
    {
        timer.startAfterPause();
    };
}
