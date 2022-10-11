function game(min, max)
{
    var num = Math.floor( Math.random() * (max - min + 1) + min );
    return num;
}

var rock = 0;
var paper = 1;
var sissors = 2;

var options = ["Rock", "Paper", "Sissors"];

var userOption;
var machineOption = game(0,2);

userOption= prompt("What do you choose?\nRock: 0\nPaper: 1\nSissors: 2", 0);

alert("You chose " + options[userOption]);
alert("Javascript chose " + options[machineOption]);

if(userOption == rock)
{
    if(machineOption == rock)
    {
        alert("Draw!");
    }
    else if(machineOption == paper)
    {
        alert("YOU LOSE!");
    }
    else if(machineOption == sissors)
    {
        alert("YOU WIN!");
    }
}
else if(userOption == paper)
{
    if(machineOption == rock)
    {
        alert("YOU WIN!");
    }
    else if(machineOption== paper)
    {
        alert("Draw!");
    }
    else if(machineOption == sissors)
    {
        alert("YOU LOSE!");
    }
}
else if(userOption == sissors)
{
    if(machineOption == rock)
    {
        alert("YOU LOSE!");
    }
    else if(machineOption == paper)
    {
        alert("YOU WIN!");
    }
    else if(machineOption == sissors)
    {
        alert("Draw!");
    }
}
