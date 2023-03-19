'use strict';

let btn_check=document.querySelector('.check');
let btn_Again = document.querySelector('.again');
let Random_number=document.querySelector('.number');
let message = document.querySelector('.message');
let Score=document.querySelector('.score');

let guess_number=+document.querySelector('.guess').value;
let Random=Math.floor(Math.random()*20)+1;
let highscore=document.querySelector('.highscore');
console.log(guess_number);
console.log(Random);

let score=20;
btn_check.addEventListener('click',()=>{ 
    score--;
 let guess_number=+document.querySelector('.guess').value;
    console.log(guess_number);
    console.log(Random);
   //1. compare  and change ui
    if(guess_number > Random){
       message.textContent='Too High';
    }else if(guess_number<Random){
        message.textContent='Too Low';
    }else{
        highscore.textContent=score;
        Random_number.textContent=Random;
        message.textContent='Correct Number';
        document.querySelector('body').style.backgroundColor='green';
    }
    //2.update score
     Score.textContent=score;
})

btn_Again.addEventListener('click',()=>{
    message.textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    Score.textContent=20;
    highscore.textContent=0;
    Random_number.textContent='?';
  document.querySelector('.guess').value='';
})