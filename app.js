const body = document.querySelector('body')
document.addEventListener('DOMContentLoaded',()=>{
    iniciarApp();


})


function iniciarApp(){
    desplegarNav()
    quitarSpin();

    blurElementos()

}

function blurElementos(){
    const heroText = document.querySelector('.hero-text');
    const heroImg=document.querySelector('.hero-img');
    aparecerElementos(heroText,1000)
    aparecerElementos(heroImg,1500)

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
    },1000)
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