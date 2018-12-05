
//DOM AREA
var DOMhello = document.getElementById('hello');
var DOMbtn = document.getElementsByClassName('btnn');
var delaback = document.getElementById('bg');

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
                    document.querySelector("#btn2").remove();
                    document.querySelector("#btn1").remove();
                    document.querySelector("#btn4").remove();
                    document.querySelector("#btn3").remove();
                    DOMhello.innerText = "";
                    if (e.target.id=="btn1"){ 
                        delaback.style.backgroundImage ="url('http://vuing.com/wp-content/uploads/2016/07/beautiful-landscape-galaxy-salar-de-uyuni-milky-way-bolivia-2-800x565.jpg')";
                    }
                    if (e.target.id=="btn2"){ 
                        delaback.style.backgroundImage ="url('http://vuing.com/wp-content/uploads/2016/07/beautiful-landscape-galaxy-salar-de-uyuni-milky-way-bolivia-2-800x565.jpg')";
                    }
                    if (e.target.id=="btn3"){ 
                        delaback.style.backgroundImage ="url('http://vuing.com/wp-content/uploads/2016/07/beautiful-landscape-galaxy-salar-de-uyuni-milky-way-bolivia-2-800x565.jpg')";
                    }
                    if (e.target.id=="btn4"){ 
                        delaback.style.backgroundImage ="url('http://vuing.com/wp-content/uploads/2016/07/beautiful-landscape-galaxy-salar-de-uyuni-milky-way-bolivia-2-800x565.jpg')";
                    }

                         
                })
            }
        }, 4000)
    }, 2000)
}, 3000)
