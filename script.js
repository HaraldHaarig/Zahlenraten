let randNum = Math.floor(Math.random() * 100) + 1;
let guesscounter = 0;
console.log(randNum); //Nur zum schnellen Testen

const input = document.getElementById("input"); //Enter gilt als "Checkbutton"
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("check").click();
      }
    });

function checkGuess() 
{   
    guesscounter++;
    updateCounter();
    let userGuess = document.getElementById("input").value;
    if (userGuess == randNum) {
        document.getElementById("message").innerHTML = "Du bist einfach zu heftig! Die richtige Zahl war "+randNum+" und du hast "+guesscounter+" Versuche gebraucht";
        document.getElementById("gif").innerHTML = "<img src='https://media1.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif?cid=ecf05e471llw1tbaedsruvjbwfgn0vc3sznla5ie1gwv3mjo&rid=giphy.gif&ct=g'>";
        document.getElementById("check").disabled = true; 
    } 
    else if (userGuess > randNum) 
    {
        document.getElementById("message").innerHTML = "Zahl zu hoch!";
    } 
    else 
    {
        document.getElementById("message").innerHTML = "Zahl zu niedrig!";
    }
    if(guesscounter === 10)
    {
        document.getElementById("message").innerHTML = "Oh NEIN du hast es nicht geschafft! Die gesuchte Zahl war: "+randNum;
        document.getElementById("check").disabled = true;
        document.getElementById("gif").innerHTML = "<img src='https://media3.giphy.com/media/yoJC2Olx0ekMy2nX7W/giphy.gif?cid=ecf05e47kr3rulhspmf95h0q93ctakf1u7jbwn0mkrzclp3s&rid=giphy.gif&ct=g'>"; 
    } 
}
function updateCounter()
{
    document.getElementById("counternumber").innerHTML = guesscounter;
}

function newGame() {
    randNum = Math.floor(Math.random() * 100) + 1;
    guesscounter = 0;
    document.getElementById("input").value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("check").disabled = false;
    updateCounter();
    document.getElementById("gif").innerHTML = ""
    console.log(randNum); //Nur zum schnellen Testen
}

function enableDarkmode() {
    document.body.style.backgroundColor = "rgb(36, 36, 36)";
}
function enableWhitemode() {
    document.body.style.backgroundColor = "White";
}