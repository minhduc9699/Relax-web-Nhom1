var DOMhello = document.getElementById('hello');
var DOMbtn = document.getElementsByClassName('btnn');
// console.log(DOMhello);


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
                var DOMbtnn = DOMbtn[i];
                DOMbtnn.style.opacity = "1";
                DOMbtnn.addEventListener('click', function(e){
                    DOMbtnID = document.getElementById(e.target.id);
                    DOMbtnID.style.height = "100%";
                    DOMbtnID.style.width = "100%";
                    if(e.target.id == "btn1") {
                        var h = e.target.parentNode;
                        h.querySelector("#btn4").remove();
                        h.querySelector("#btn2").remove();
                        h.querySelector("#btn3").remove();
                        var delaback = document.getElementById('bg');
                        delaback.style.background='none';
                    }
                    if(e.target.id == "btn2") {
                        var h = e.target.parentNode;
                        h.querySelector("#btn4").remove();
                        h.querySelector("#btn1").remove();
                        h.querySelector("#btn3").remove();
                        var delaback = document.getElementById('bg');
                        delaback.style.background='none';
                    }
                    if(e.target.id == "btn3") {
                        var h = e.target.parentNode;
                        h.querySelector("#btn2").remove();
                        h.querySelector("#btn1").remove();
                        h.querySelector("#btn4").remove();
                        var delaback = document.getElementById('bg');
                        delaback.style.background='none';
                    }
                    if(e.target.id == "btn4") {
                        var h = e.target.parentNode;
                        h.querySelector("#btn2").remove();
                        h.querySelector("#btn1").remove();
                        h.querySelector("#btn3").remove();
                        var delaback = document.getElementById('bg');
                        delaback.style.background='none';
                    }
                        
                        
                })
            }
        }, 4000)
    }, 2000)
}, 3000)