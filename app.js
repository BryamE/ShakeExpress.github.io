const body = document.querySelector('body')
document.addEventListener('DOMContentLoaded',()=>{
    iniciarApp();


})


function iniciarApp(){
    desplegarNav()
    quitarSpin();

}


function quitarSpin(){
    const spin= document.querySelector('.spin')
    body.style.overflowY="scroll"
    setTimeout(()=>{
        spin.classList.add('remover')
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