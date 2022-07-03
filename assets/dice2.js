function roll(){
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var angleArray = [[0,0,0],[-310,-362,-38],[-133,-360,-60],[-47,-219,-81],[135,-217,-88],[-400,-320,-10],[-224,-317,5]];
    
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomAngle1 = angleArray[randomNumber1];
    
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var randomAngle2 = angleArray[randomNumber2];

    dice1.style.animation = "animate 1s 3 linear";
    dice2.style.animation = "animate2 1s 3 linear";

    dice1.style.transform = "rotateX("+randomAngle1[0]+"deg) rotateY("+randomAngle1[1]+"deg) rotateZ("+randomAngle1[2]+"deg";
    dice2.style.transform = "rotateX("+randomAngle2[0]+"deg) rotateY("+randomAngle2[1]+"deg) rotateZ("+randomAngle2[2]+"deg";

    dice1.style.transition = ".5s";  
    dice2.style.transition = ".5s";  

    dice1.addEventListener('animationend',function(e){
        dice1.style.animation = '';
        dice1.id.add = 'dice1-1';
    });

    dice2.addEventListener('animationend',function(e){
        dice2.style.animation = '';
    });

    dare(randomNumber1, randomNumber2);
    
}

function dare(dice1, dice2) {
    document.querySelector(".container").addEventListener("click", function(){
    document.getElementById("dice1").style.display ="none";
    document.getElementById("dice2").style.display ="none";
    document.querySelector(".dare").style.display = "block";

        if((dice1 === 1 & dice2 === 2) || (dice1 === 2 & dice2 === 1)){
            document.querySelector(".dare").innerHTML = "Take a Shot with no hands";
        }else if((dice1 === 1 & dice2 === 4) || (dice1 === 4 & dice2 === 1)){
            document.querySelector(".dare").innerHTML = "Sing lyrics with word money. Otherwise, drink 2 shot!";
        }else if(dice1+dice2 === 7){
            document.querySelector(".dare").innerHTML = "Count 7 to your left. That person will take a shot!";
        }else if(dice1+dice2 === 6){
            document.querySelector(".dare").innerHTML = "Take 2 shot!";
        }else if(dice1+dice2 === 9){
            document.querySelector(".dare").innerHTML = "Count 7 to your right. That person will take a shot!";
        }else if(dice1 === 2 & dice2 === 2){
            document.querySelector(".dare").innerHTML = "Choose someone to take 2 shots!";
        }else if(dice1 === 4 & dice2 === 4){
            document.querySelector(".dare").innerHTML = "Choose 2 person to take 2 shots!";
        }else{
            document.querySelector(".dare").innerHTML = "Take 1 shot"
        }
    });

   setInterval(function(){
    document.getElementById("dice1").style.display ="block";
    document.getElementById("dice2").style.display ="block";
    document.querySelector(".dare").style.display = "none";
   }, 5000);

   console.log(document.querySelector("#dice1").style.animation);
    
}