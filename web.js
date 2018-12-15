
//DOM AREA
var DOMhello = document.getElementById('hello');
var DOMbtn = document.getElementsByClassName('btnn');
var delaback = document.getElementById('bg');


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
                    console.log(e.target.id);
                    DOMbtnID.style.height = "100%";
                    DOMbtnID.style.width = "100%";
                    document.querySelector("#btn1").remove();
                    document.querySelector("#btn2").remove();
                    document.querySelector("#btn3").remove();
                    document.querySelector("#btn4").remove();
                    DOMhello.innerText = "";
                    if (e.target.id=="btn1"){ 
                        // Depression
                        // SONG
                        delaback.style.backgroundImage ="url('http://vuing.com/wp-content/uploads/2016/07/beautiful-landscape-galaxy-salar-de-uyuni-milky-way-bolivia-2-800x565.jpg')";
                        var audio = document.getElementById("AudioForDepression");
                        audio.play();
                        // NEW PAGE
                        var crediv = document.createElement("div")
                        crediv.setAttribute("id", "but1");
                        var content = document.createTextNode("Depression")
                        crediv.appendChild(content);
                        var element = document.getElementById("bg");
                        element.appendChild(crediv);
                        DOMdepress = document.getElementById("but1")
                        setTimeout(function(){
                            DOMdepress.classList.remove('fadeIn');
                            DOMdepress.classList.add('fadeOut');
                            setTimeout(function(){
                                DOMdepress.innerText = "Lần 2";
                                DOMdepress.classList.remove('fadeOut');
                                DOMdepress.classList.add('fadeIn');
                                setTimeout(function(){
                                    DOMdepress.classList.remove('fadeIn');
                                    DOMdepress.classList.add('fadeOut');
                                    setTimeout(function(){
                                        DOMdepress.innerText = "Lần 3";
                                        DOMdepress.classList.remove('fadeOut');
                                        DOMsad.classList.add('fadeIn');
                                    },2000)
                                },2000)
                            },2000)
                        }, 2000)
                    }
                    else if (e.target.id=="btn2")
                    {
                        // HeartBroken
                        var audio = document.getElementById("AudioForHeartBroken");
                        audio.play();
                        setTimeout(function(){
                            DOMsad.classList.remove('fadeIn');
                            DOMsad.classList.add('fadeOut');
                            setTimeout(function(){
                                DOMsad.innerText = "Lần 2";
                                DOMsad.classList.remove('fadeOut');
                                DOMsad.classList.add('fadeIn');
                                setTimeout(function(){
                                    DOMsad.classList.remove('fadeIn');
                                    DOMsad.classList.add('fadeOut');
                                    setTimeout(function(){
                                        DOMsad.innerText = "Lần 3";
                                        DOMsad.classList.remove('fadeOut');
                                        DOMsad.classList.add('fadeIn');
                                    },2000)
                                },2000)
                            },2000)
                        }, 2000)
                    }
                    else if (e.target.id=="btn3")
                    {
                        // NEW PAGE
                        delaback.style.backgroundImage ="url('http://img.youtube.com/vi/zrhaPkI3zyg/maxresdefault.jpg')";
                        var audio = document.getElementById("AudioForDepression");
                        audio.play();
                        var crediv = document.createElement("div")
                        crediv.setAttribute("id", "but3");
                        crediv.setAttribute("class", "fadeIn animated")
                        var content = document.createTextNode("Lần 1!")
                        crediv.appendChild(content);
                        var element = document.getElementById("bg");
                        element.appendChild(crediv);
                        DOMsad = document.getElementById("but3")
                        setTimeout(function(){
                            DOMsad.classList.remove('fadeIn');
                            DOMsad.classList.add('fadeOut');
                            setTimeout(function(){
                                DOMsad.innerText = "Lần 2";
                                DOMsad.classList.remove('fadeOut');
                                DOMsad.classList.add('fadeIn');
                                setTimeout(function(){
                                    DOMsad.classList.remove('fadeIn');
                                    DOMsad.classList.add('fadeOut');
                                    setTimeout(function(){
                                        DOMsad.innerText = "Lần 3";
                                        DOMsad.classList.remove('fadeOut');
                                        DOMsad.classList.add('fadeIn');
                                    },2000)
                                },2000)
                            },2000)
                        }, 2000)
                        // BUTTON 1
                        var newbtn = document.createElement("button");
                        newbtn.setAttribute("id", "btn5");
                        newbtn.setAttribute("class", "border size w3-padding w3-display-bottomleft btnn2");
                        var content = document.createTextNode(" I want to feel better  ")
                        newbtn.appendChild(content);
                        element.appendChild(newbtn);
                        // BUTTON 2
                        var newbtn = document.createElement("button");
                        newbtn.setAttribute("id", "btn6");
                        newbtn.setAttribute("class", "border size w3-padding w3-display-bottomright btnn2");
                        var content = document.createTextNode("dm")
                        newbtn.appendChild(content);
                        element.appendChild(newbtn);
                    }
                    else if (e.target.id=="btn4")
                    {
                        var audio = document.getElementById("AudioForStress");
                        audio.play();
                        setTimeout(function(){
                            DOMsad.classList.remove('fadeIn');
                            DOMsad.classList.add('fadeOut');
                            setTimeout(function(){
                                DOMsad.innerText = "Lần 2";
                                DOMsad.classList.remove('fadeOut');
                                DOMsad.classList.add('fadeIn');
                                setTimeout(function(){
                                    DOMsad.classList.remove('fadeIn');
                                    DOMsad.classList.add('fadeOut');
                                    setTimeout(function(){
                                        DOMsad.innerText = "Lần 3";
                                        DOMsad.classList.remove('fadeOut');
                                        DOMsad.classList.add('fadeIn');
                                    },2000)
                                },2000)
                            },2000)
                        }, 2000)
                    }
                    if(e.target.id == "btn1") {
                         h.querySelector("#btn4").remove(); 
                        h.querySelector("#btn2").remove();
                        h.querySelector("#btn3").remove();
                        delaback.style.background='none';
                    }
                    
                         
                })
            }
        }, 1000)
    }, 1000)
}, 1000)
