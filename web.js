var DOMhello = document.getElementById('hello');
var DOMbtn = document.getElementsByClassName('btnn');
// console.log(DOMhello);
console.log(DOMbtn);


function Text1() {
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
                DOMbtn[i].style.opacity = "1";
            }
            
        }, 2000)
    }, 1000)
}, 1000)



