
const now =new Date();
let nowYear =now.getFullYear();
let nowMonth = 1 + now.getMonth();
let nowDay = now.getDate();

var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const iconBtn = document.querySelector('img');

let birthYear = document.querySelector('#year');
let birthMonth = document.querySelector('#month');
let birthDay = document.querySelector('#day');



let yearOutput = document.querySelector('#theYear h2');
let monthOutput = document.querySelector('#theMonth h2');
let daysOutput = document.querySelector('#thedays h2');

let YearDate ;
let MonthDate ;
let DayDate ;

const CalcTheAge = function(YearDate ,MonthDate, DayDate){
    let year ,month,day;
    year = (nowYear - YearDate);
    month = (nowMonth - MonthDate);
    day =(nowDay - DayDate);
    if(nowMonth < MonthDate){
        month = (nowMonth + 12 ) - MonthDate  ;
        year = year - 1;
    }
    if(nowDay < DayDate){
        day =(nowDay + 30) - DayDate;
        month= month - 1;
     }
   return {
    year: year,
    month: month,
    day:day
   }
}



const message = function(mess,elem){
    elem.innerHTML = mess;
}


const showTheAge = function(){
    
    YearDate = Number(birthYear.value);
    MonthDate = Number(birthMonth.value);
    DayDate = Number(birthDay.value);


    [...document.querySelectorAll('input')].forEach(ele=> {
      if (!ele.value){message("This field is required", ele.nextElementSibling)}
      else {message("", ele.nextElementSibling)};
    });
    if(birthMonth.value > 12){
        message("Must be a valid month", birthMonth.nextElementSibling);
    }
    if( birthYear.value > nowYear){
        message("Must be in the past",birthYear.nextElementSibling);
    }

    if( birthDay.value > month[birthMonth.value - 1]){
        message("Must be a valid day", birthDay.nextElementSibling);
    }
    
  


console.log(YearDate,MonthDate,DayDate);


console.log(nowYear ,YearDate);
console.log(nowMonth,MonthDate);

[...document.querySelectorAll('input')].forEach(ele =>{
    // if (!YearDate || !MonthDate||!DayDate){return;}
    if(!Number(ele.value)) return;
    else {
     let output= CalcTheAge(YearDate,MonthDate ,DayDate);
     console.log(output);
     daysOutput.innerHTML = output.day;
     monthOutput.innerHTML =output.month;
     yearOutput.innerHTML = output.year;
    };
})
    

 
}

iconBtn.addEventListener('click',showTheAge);

