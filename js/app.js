const hamburgue = document.querySelector('.hamb');
const menuMobile = document.querySelector('.menu-mobile');
const hamburgueMob = document.querySelector('.hamb-mob');
const header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    if(this.scrollY > 300){
        header.style.backgroundColor = "rgba(0,0,0,0.8)";
    }else{
        header.style.backgroundColor = "";
    }
})

hamburgue.addEventListener('click',(e)=>{
    const active = document.querySelector('.hamb-active');
    if(active){
        hamburgue.classList.remove('hamb-active');
        //hamburgueMob.classList.add('hamb-active');
        menuMobile.style.display = "none";
    }else{
        hamburgue.classList.add('hamb-active')
        //hamburgueMob.classList.remove('hamb-active')
        menuMobile.style.display = "block";
    }
})