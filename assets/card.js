var gamecard = [
    "Everyone will drink except you😉",
    "If you're single, you drink. If not, your partner will drink it for you!",
    "Get a piece of paper and balance this on one finger until it's your turn again. If you fail, drink 2 shots",
    "Start with you. Pick a song genre, and name a song with this genre. continue until someone hesitates or repeat a word. That person drinks",
    "Pick another player to drink as much as they ask you to drink.",
    "Everyone votes on who is the most attractive. That person drinks",
    "Everyone who posted a selfie on social media in the past month will drink.",
    "Pick an animal. Everyone must immitate the sound of the animal makes. the worst immitation has to drink",
    "Everyone who can't touch their toes without bending their knees will drink."
]

document.getElementById("dare").innerHTML = "Ready to get Tipsy?"
function add(){
    var input = document.querySelector("textarea").value;
    gamecard.push(input);
}

function play(){
    var interval =   setInterval(function(){
            var randomNumber = Math.floor(Math.random()*gamecard.length);
            var randomPick = gamecard[randomNumber];
            document.getElementById("dare").innerHTML = randomPick;
            }, 70); 

    setTimeout(function(){
        clearInterval(interval);
        }, 3000);
}

function showForm(){
    document.getElementById("turn").style.display = "none";
    document.querySelector("form").style.display = "flex";
    document.querySelector(".back").style.display = "inline";
    document.querySelector(".add").style.display = "none";  
}

function back() {
    document.getElementById("turn").style.display = "block";
    document.querySelector("form").style.display = "none";
    document.querySelector(".back").style.display = "none";
    document.querySelector(".add").style.display = "inline";
}

function start(){
    document.querySelector(".play").style.display = "none";
    document.querySelector(".started").style.display = "block";
}
