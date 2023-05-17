const switchButton = document.querySelector('input[type="checkbox"]');
let nav = document.querySelector('#nav');
let toggleIcons = document.querySelector('#toggle-icon');
let img1 = document.querySelector('#image1');
let img2 = document.querySelector('#image2');
let img3 = document.querySelector('#image3');
let textBox=document.querySelector('#text-box')

function imageChange(color){
    img1.src=`img/undraw_proud_coder_${color}.svg` ;
    img2.src =`img/undraw_feeling_proud_${color}.svg`;
    img3.src =`img/undraw_conceptual_idea_${color}.svg`
}
function darkMode(){
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
    toggleIcons.children[0].textContent='Dark Mode';
    toggleIcons.children[1].classList.replace('fa-sun','fa-moon');

    imageChange('dark');
}


function lightMode(){
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
    toggleIcons.children[0].textContent='Light Mode';
    toggleIcons.children[1].classList.replace('fa-moon','fa-sun');

    imageChange('light');
}












//SwitchTheme function
const SwitchTheme =(e)=>{
    console.log(e.target.checked);
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}

//Event Listener

switchButton.addEventListener('change',SwitchTheme);

let currentTheme = localStorage.getItem('theme');
console.log(currentTheme);

if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
    if(currentTheme === 'dark'){
        switchButton.checked = true;
        darkMode();
    }
}