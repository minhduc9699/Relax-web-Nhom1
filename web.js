zconsole.log(DOMhello);
setTimeout(function(){
    DOMhello.classList.remove('fadeInRight');
    DOMhello.classList.add('fadeOut');
}

setTimeout(function(){
    Text1();
    setTimeout(function(){
        DOMhello.innerText = "It seems that you are...";
        DOMhello.classList.remove('fadeOut');
        DOMhello.classList.add('fadeInRight');
        setTimeout(function(){
            for (var i = 0; i < DOMbtn.length; i ++) {
                var DOMbtnn = DOMbtn[i];
                DOMbtnn.style.opacity = "1";
                DOMbtnn.addEventListener('click', function(e){
                    console.log(e.target.id);
                    DOMbtnID = document.getElementById(e.target.id);
                    DOMbtnID.style.height = "100%";
                    DOMbtnID.style.width = "100%";
                })
            }
        }, 4000)
    }, 2000)
}, 3000)





