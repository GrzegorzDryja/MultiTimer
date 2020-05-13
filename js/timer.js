
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
