
let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highestScore = 2;

let btns = ["red", "green", "blue", "yellow"];

let h2 = document.querySelector("h2");
let h3 = document.querySelector("#congrats-id");
let head3 = document.querySelector("#curr-high-score");
// let img = document.querySelector("img");
// let imgDiv = document.querySelector(".img-div");
let imgDiv = document.querySelector(".main-img-div");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    gameFlash(randBtn);
    highScore();
}

function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000)
        }
    } else {
        h2.innerHTML = `GAME OVER! Your score was <b>${level}</b> <br/> Press any key to start the game.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";  
        }, 150);

        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started  = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function highScore() {
    let checkLevel = level;
    if(checkLevel == highestScore){
        imgDiv.style.display = "block";
        h3.innerText = "Congratulation's! you reach the highest score.";
        head3.innerText = `Current highest score is ${checkLevel}.`;
        checkLevel++;
    }
}

