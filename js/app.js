const hamburgue = document.querySelector('.hamb');
const menuMobile = document.querySelector('.menu-mobile');
const hamburgueMob = document.querySelector('.hamb-mob');
const header = document.querySelector('.header');

function scrool(){
    const line = hamburgue.querySelector('.hamb-line');
    const logo = header.querySelector('.logo');
    if(this.scrollY > 300){
        header.style.backgroundColor = "rgba(0,0,0,0.8)";
        header.style.position = 'fixed'
        line.classList.add('color-line-scroll');
        logo.style.color = '#fff'
        header.querySelectorAll('a').forEach((e)=>{e.style.color = '#fff'})
    }else{
        header.style.backgroundColor = "";
        header.style.position = 'relative'
        line.classList.remove('color-line-scroll')
        logo.style.color = '#000'
        header.querySelectorAll('a').forEach((e)=>{e.style.color = '#000'})
    }  
}
window.addEventListener('scroll', (e)=>{
    if(!document.querySelector('.hamb-active')){
        console.log('não existe')
        scrool();
    }else{
        console.log('Existe')
        header.style.position = 'fixed'
        header.style.backgroundColor = "";
    }
})

hamburgue.addEventListener('click',(e)=>{
    const active = document.querySelector('.hamb-active');
    if(active){
        hamburgue.classList.remove('hamb-active');
        menuMobile.style.display = "none";
    }else{
        hamburgue.classList.add('hamb-active')
        menuMobile.style.display = "block";
        header.style.backgroundColor = "";
    }
})

console.log('tela '+window.innerWidth)