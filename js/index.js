const btnNextPrev = document.querySelectorAll('.arrow');
const imgGaleria = document.querySelectorAll('.galeria img');
const galeria = document.querySelector('.galeria');
const sections = document.querySelectorAll('.sections');
const qtdImg = imgGaleria.length;
let posit = 0;
const heigthJanela = window.outerHeight;
console.log(heigthJanela)

//=============================== Carrocel===============================
function times() {
    posit += 1;
    if(posit >= qtdImg){posit = 0}
    if(posit < 0){posit = qtdImg - 1}
    addclass(posit);
};

let next = setInterval(times, 8000);

galeria.addEventListener('mouseover', ()=>{clearInterval(next);})

galeria.addEventListener('mouseout', ()=>{next = setInterval(times, 8000);});

function addclass(item){
    imgGaleria.forEach(e =>{
        e.classList.remove('img-visibilite');
    })

    imgGaleria[item].classList.add('img-visibilite');
}

btnNextPrev.forEach(e =>{
    e.addEventListener('click',() => {
        const isleft = e.classList.contains('arrow-left');
        if(isleft){
            posit -= 1;
        }else{
            posit += 1
        }        

        if(posit >= qtdImg){posit = 0}
        if(posit < 0){posit = qtdImg - 1}

        addclass(posit);

    })
})

//================================= efeito chegada===============================
sections.forEach(e =>{
    let heightSection = e.getBoundingClientRect();
    const inic = Math.round(heightSection.y) + 20;
    if(window.innerWidth >= 1024){
        if(inic < heigthJanela - 90){
            e.classList.add('animeSection');
        }
    }else{
        if(inic < heigthJanela){
            e.classList.add('animeSection');
        }
    }
})

function chegada(){
    sections.forEach(e =>{
        let heightSection = e.getBoundingClientRect();
        const inic = Math.round(heightSection.y) + 20;
        if(inic < heigthJanela){
            e.classList.add('animeSection');
        }
    })
}
document.addEventListener('scroll', chegada)