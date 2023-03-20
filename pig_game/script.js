'use strict';
let btn_roll = document.querySelector('.btn--roll');
let btn_new = document.querySelector('.btn--new');
let btn_hold = document.querySelector('.btn--hold');

let total_Score_Player1 = document.querySelector('#score--0');
let total_Score_Player2 = document.querySelector('#score--1');
 total_Score_Player1.textContent = 0;
 total_Score_Player2.textContent = 0;


let current_Score_player1 = document.querySelector('#current--0');
let current_Score_player2 = document.querySelector('#current--1');

let playerEl0 = document.querySelector('.player--0');
let playerEl1 = document.querySelector('.player--1');
let activeplayer = 0;
let Scores = [0,0];
let currentScore = 0;
let diceImage;

function SwitchPlayer(){
    (activeplayer == 0) ? activeplayer=1 : activeplayer=0;
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');
    currentScore = 0;
    document.getElementById(`current--${activeplayer}`).textContent = currentScore;
    current_Score_player1.textContent = 0;
    current_Score_player2.textContent = 0;
}

let Roll=function(){
   diceImage=document.querySelector('.dice');
    //1.generate random  dice roll
    let Random_number_dice = Math.floor(Math.random() * 6) + 1;
    //2. display  dice roll
    diceImage.classList.remove('hidden');
    diceImage.src = `imgs/dice-${Random_number_dice}.png`;

    //3.check value of random dice
   if(Random_number_dice !== 1){
        currentScore += Random_number_dice;
        document.getElementById(`current--${activeplayer}`).textContent = currentScore ;
     
   }else{
       SwitchPlayer();
   }
}

let hold=function(){
    
  Scores[activeplayer] += currentScore;
  document.querySelector(`#score--${activeplayer}`).textContent=Scores[activeplayer];
  currentScore=0;
  document.getElementById(`current--${activeplayer}`).textContent = currentScore;

  if(Scores[activeplayer] >= 100){
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
    diceImage.classList.add('hidden');
  }else{
    SwitchPlayer();
  }
}

let New = function(){
 Scores[0,0];
 playerEl0.classList.add('player--active');
 playerEl1.classList.remove('player--active');
 diceImage.classList.add('hidden');
 current_Score_player1.textContent = 0;
 current_Score_player2.textContent = 0;
 total_Score_Player1.textContent = 0;
 total_Score_Player2.textContent = 0;
 playerEl0.classList.remove('player--winner');
 playerEl1.classList.remove('player--winner');
}

btn_roll.addEventListener('click',Roll);
btn_hold.addEventListener('click',hold);
btn_new.addEventListener('click',New);