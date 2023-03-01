//backtotop button
let btnGo = document.querySelector('.contGo');

window.addEventListener('scroll' , () => {
    if(window.scrollY > 200){
        btnGo.style.display = "block";
        btnGo.style.animation = "scale-in-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    } else{
        btnGo.style.animation = "scale-out 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both"
    }
})

function onTop(){
    window.scrollTo(0,0);
}

//navbar
let btnNav = document.querySelector('#burger');
let navActive = document.querySelector('.navLinks')

btnNav.addEventListener('click' , () => {
    navActive.classList.toggle('navLinks-active');
})
