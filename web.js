zconsole.log(DOMhello);
setTimeout(function(){
    DOMhello.classList.remove('fadeInRight');
    DOMhello.classList.add('fadeOut');
    DOMhello.style.left = '50%';
}, 2000)
