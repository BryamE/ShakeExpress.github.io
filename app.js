const body = document.querySelector('body')
document.addEventListener('DOMContentLoaded',()=>{
    iniciarApp();


})


function iniciarApp(){
    desplegarNav();
    quitarSpin();
    blurElementos();
    allLinks()

}

function allLinks(){
    const links = document.querySelectorAll('.smooth');
    
    links.forEach((link)=>{
        navegacionSmooth(link)
    })
  
}
function navegacionSmooth(link){
    link.addEventListener('click',(e)=>{
        e.preventDefault();
 
        const seccion = document.querySelector(e.target.attributes.href.value);
        seccion.scrollIntoView({behavior: 'smooth'});
    })
}

function blurElementos(){
    const heroText = document.querySelector('.hero-text');
    const heroImg=document.querySelector('.hero-img');
    aparecerElementos(heroText,2300)
   

}


function aparecerElementos(container,time){


    setTimeout(()=>{
        container.classList.add('aparecer')
    },time)
    return

}





function quitarSpin(){
    const spin= document.querySelector('.spin')

    setTimeout(()=>{
        spin.classList.add('remover')
        body.style.overflowY="scroll"
    },2000)
}

function desplegarNav(){
    const menu = document.querySelector('.menu');
    const containerHeader = document.querySelector('.container-header');
    const nav = document.querySelector('.navegacion')
    menu.addEventListener('click',()=>{
        nav.classList.toggle('visible')
        containerHeader.classList.toggle('width-100')
      
    })
}