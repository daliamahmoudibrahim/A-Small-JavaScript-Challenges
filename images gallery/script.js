const imgsContainer = document.querySelector('.container');
const imgs = document.querySelectorAll('.img');
const overlay = document.querySelector('#overlay');
const imgOverlayBackground = document.querySelector('#imgOverlayBackground img');
const arrowleft =overlay.children[0];
const arrowRight = overlay.children[2];

let number_image;

const Appearance =(number_image)=>{
    imgOverlayBackground.src= `imgs/img${number_image}.jpeg`;
}

const ShowSlider = (e)=>{
    const img = e.target.matches('.img');
   if(img){
    number_image = +e.target.id;
    Appearance(number_image);
    overlay.style.visibility = 'visible';
}  
}

const SliderLeft = () =>{
    number_image--;
    if(number_image < 1){
        number_image = imgs.length;
    }
    Appearance(number_image);

}

const SliderRight = () =>{
    number_image++; 
    if(number_image > imgs.length){
        number_image = 1;
    }
    Appearance(number_image);
   
}

const hiddenOverlay = ()=>{
    overlay.style.visibility ='hidden';
    console.log(overlay)
    overlay.addEventListener('keydown' ,(e)=>{
        if(e.key==='Enter'){
            hiddenOverlay()
        }
    })
};

window.addEventListener('keydown' ,(e)=>{
    if(e.key==='ArrowLeft'){
        SliderLeft();
    }
    if(e.key == 'ArrowRight'){
        SliderRight();
    }
})
arrowRight.addEventListener('click' , ()=>{SliderRight(imgs[number_image])})
arrowleft.addEventListener('click' , ()=>{SliderLeft(imgs[number_image])})
imgsContainer.addEventListener('click', ShowSlider);
overlay.children[1].addEventListener('click', hiddenOverlay)











