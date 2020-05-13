window.onload = function(){

    var name = document.querySelector("#nameInput");
    
    name.addEventListener("keypress",
        function(e)
        {
            if(e.key === 'Enter')
            {
                name.innerHTML = this.name;
                name.disabled=true;
            }
        }
    );
}