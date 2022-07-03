
var nameOfWebsite = "Matt Radke";

window.onload = function()
{
    var AllTitles = document.getElementsByClassName("title"); 
    var counter = 0;
    
    while(counter < AllTitles.length)
    {
        AllTitles[counter].innerHTML = nameOfWebsite;
        counter ++; 
    }

   // document.getElementById("title").innerHTML = nameOfWebsite; 
}

function SendAlert()
{
    alert("test");
}