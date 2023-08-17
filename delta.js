let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let btn = ["red", "yellow", "green", "blue"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(start==false){
        console.log("Game is started");
        start = true;
        levelUp();
    }
})
function gameflash(btn){
     btn.classList.add("flash");
      setTimeout(function(){
        btn.classList.remove("flash");
      },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;
    let randIndx = Math.floor(Math.random()*3);
    let randcolor = btn[randIndx];
    let randbtn = document.querySelector(`.${randcolor}`);
    //console.log(randbtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameflash(randbtn);
}

function checkseq(idx){
  //console.log(level);
  //let idx = level-1;
  if(gameSeq[idx]==userSeq[idx]){
     if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
     }
  }

  else{
    h2.innerHTML = `Game over! Your score was <b>${level} </b> <br>Please press any other key to continue`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor= "white"; 
    },150);
    reset();
  }
}
function btnpress(){
   // console.log(this);
   let btn = this;
    //console.log(btn);
   userflash(btn);

  userColor = btn.getAttribute("id");
  //console.log(userColor);
  userSeq.push(userColor);
  checkseq(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".box");
for(btns of allbtn){
    btns.addEventListener("click",btnpress);
}

function reset(){
    start = false;
    level =0;
    gameSeq =[];
    userSeq= [];

}