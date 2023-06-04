
let leads =[];
const inputEl =document.getElementById('input-el');
const SaveBtn = document.getElementById('input-btn');
let ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
let savetabBtn = document.getElementById('SaveTab');


let myLeadsFromStorage =JSON.parse(localStorage.getItem('myleads'));

if(myLeadsFromStorage){
    leads = myLeadsFromStorage;
    render(leads);
}
///////HelpFul Functions//////////
function render(leads){
    let itemsLI ='';
    leads.forEach(item=>{
        itemsLI += `<li><a target="_blank" href="${item}">${item}</a></li>` 
    })
    ulEl.innerHTML = itemsLI;
}

function SaveTabs(){
  
       chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
               leads.push(tabs[0].url);
               localStorage.getItem("myleads", JSON.stringify(leads));
               render(leads);
           })
}




///////////EVENTS Functions//////////////////
function SaveItems(){
    if(inputEl.value !== ' '){
        leads.push(inputEl.value);
      
        localStorage.setItem('myleads', JSON.stringify(leads));
        render(leads);
    
        inputEl.value =" ";
    }
}

function DeleteItems(){
  localStorage.clear();
  leads = [];
  ulEl.innerHTML = ' ';
console.log("Doubled");
}


///////////////Events///////////////
SaveBtn.addEventListener("click",SaveItems);
deleteBtn.addEventListener("dblclick",DeleteItems);
savetabBtn.addEventListener('click',SaveTabs)



