// function changeColor()
// {
// document.getElementById("1").setAttribute("class","element1");
// document.getElementById("2").setAttribute("class","element1");
// document.getElementById("3").setAttribute("class","element1");
// document.getElementById("4").setAttribute("class","element1");
// document.getElementById("5").setAttribute("class","element1");
// document.getElementById("6").setAttribute("class","element1");
// document.getElementById("7").setAttribute("class","element1");
// document.getElementById("8").setAttribute("class","element1");
// document.getElementById("9").setAttribute("class","element1");

//}

var colors = ["blue", "green", "orange", "red"];
var currentColor = 0; 

function changebackground()
{
    var outerdiv = document.getElementById("mainGrid");
    var cells = outerdiv.document.getElementsByTagName("div")

    for(i=0; i<cells.length; i++) 
    {
        cells[i].style.backgroundColor = colors[currentColor];
    }
        if(currentColor < colors.length - 1)
        {
        currentColor += 1; 
        }
        else 
        {
        currentColor = 0;
        }
}