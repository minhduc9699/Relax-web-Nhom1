
//DOM AREA
var DOMhello = document.getElementById('hello');
var DOMbtn = document.getElementsByClassName('btnn');
var delaback = document.getElementById('bg');


function Text1() {
    DOMhello.classList.remove('fadeInRight');
    DOMhello.classList.add('fadeOut');
}

function createnewbut() {
    var crediv = document.createElement("button")
    crediv.setAttribute("id", "btnd");                                      
    //var content = document.createTextNode("Depression");
    //crediv.appendChild(content);                 
    var element = document.getElementById("bg");
    element.appendChild(crediv);
    var ac = document.createElement("button")
    ac.setAttribute("id", "btnda");
    ac.setAttribute("class", "button");                    
    var content = document.createTextNode("DEPRESSION");
    //ac.appendChild(content);
    ac.addEventListener("click", function() {
        var particles = new Particles('#btnda');
        particles.disintegrate();
        crediv.addEventListener("click", function() {
            var particles = new Particles('#btnd');
            particles.disintegrate();
        });
        crediv.click();
    });               
    var element = document.getElementById("bg");
    element.appendChild(ac);
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
                        //delaback.style.backgroundImage ="url('http://img.youtube.com/vi/zrhaPkI3zyg/maxresdefault.jpg')";
                        var audio = document.getElementById("AudioForDepression");
                        audio.play();
                        // NEW PAGE
                        var crediv = document.createElement("div");
                        crediv.setAttribute("id", "but3");
                        crediv.setAttribute("class", "fadeIn animated");
                        var content = document.createTextNode("...");
                        crediv.appendChild(content);
                        var element = document.getElementById("bg");
                        element.appendChild(crediv);
                        DOMdepress = document.getElementById("but3");
                        setTimeout(function(){
                            DOMdepress.classList.remove('fadeIn');
                            DOMdepress.classList.add('fadeOut');
                            setTimeout(function(){
                                DOMdepress.innerText = "Hey";
                                DOMdepress.classList.remove('fadeOut');
                                DOMdepress.classList.add('fadeIn');
                                setTimeout(function(){
                                    DOMdepress.classList.remove('fadeIn');
                                    DOMdepress.classList.add('fadeOut');
                                    setTimeout(function(){
                                        DOMdepress.innerText = "Life is short, right?";
                                        DOMdepress.classList.remove('fadeOut');
                                        DOMdepress.classList.add('fadeIn');
                                        setTimeout(function(){
                                            DOMdepress.classList.remove('fadeIn');
                                            DOMdepress.classList.add('fadeOut');
                                            setTimeout(function(){
                                                DOMdepress.innerText = "So please enjoy our life...";
                                                DOMdepress.classList.remove('fadeOut');
                                                DOMdepress.classList.add('fadeIn');
                                                setTimeout(function(){
                                                    DOMdepress.classList.remove('fadeIn');
                                                    DOMdepress.classList.add('fadeOut');
                                                    setTimeout(function(){
                                                        DOMdepress.innerText = "and stop wasting time for your sadness!";
                                                        DOMdepress.classList.remove('fadeOut');
                                                        DOMdepress.classList.add('fadeIn');
                                                        setTimeout(function(){
                                                            DOMdepress.classList.remove('fadeIn');
                                                            DOMdepress.classList.add('fadeOut');
                                                            setTimeout(function(){
                                                                DOMdepress.innerText = "You don't need to care what people say.";
                                                                DOMdepress.classList.remove('fadeOut');
                                                                DOMdepress.classList.add('fadeIn');
                                                                setTimeout(function(){
                                                                    DOMdepress.classList.remove('fadeIn');
                                                                    DOMdepress.classList.add('fadeOut');
                                                                    setTimeout(function(){
                                                                        DOMdepress.innerText = "You need to BELIEVE and LOVE yourself!";
                                                                        DOMdepress.classList.remove('fadeOut');
                                                                        DOMdepress.classList.add('fadeIn');
                                                                        setTimeout(function(){
                                                                            DOMdepress.classList.remove('fadeIn');
                                                                            DOMdepress.classList.add('fadeOut');
                                                                            setTimeout(function(){
                                                                                DOMdepress.innerText = "So let's take a deep breath...";
                                                                                DOMdepress.classList.remove('fadeOut');
                                                                                DOMdepress.classList.add('fadeIn');
                                                                                setTimeout(function(){
                                                                                    DOMdepress.classList.remove('fadeIn');
                                                                                    DOMdepress.classList.add('fadeOut');
                                                                                    setTimeout(function(){
                                                                                        DOMdepress.innerText = "close your eyes...";
                                                                                        DOMdepress.classList.remove('fadeOut');
                                                                                        DOMdepress.classList.add('fadeIn');
                                                                                        setTimeout(function(){
                                                                                            DOMdepress.classList.remove('fadeIn');
                                                                                            DOMdepress.classList.add('fadeOut');
                                                                                            setTimeout(function(){
                                                                                                DOMdepress.innerText = "and let your soul free!";
                                                                                                DOMdepress.classList.remove('fadeOut');
                                                                                                DOMdepress.classList.add('fadeIn');
                                                                                                setTimeout(function(){
                                                                                                    DOMdepress.classList.remove('fadeIn');
                                                                                                    DOMdepress.classList.add('fadeOut');
                                                                                                },4000)
                                                                                            },4000)
                                                                                        },4000)
                                                                                    },4000)
                                                                                },4000)
                                                                            },4000)
                                                                        },4000)
                                                                    },4000)
                                                                },4000)
                                                            },4000)
                                                        },4000)
                                                    },4000)
                                                },4000)
                                            },4000)
                                        },4000)
                                    },4000)
                                },4000)
                            },4000)
                        }, 4000)
                    }
                    else if (e.target.id=="btn2")
                    {
                        // HeartBroken
                        //delaback.style.backgroundImage ="url('http://img.youtube.com/vi/zrhaPkI3zyg/maxresdefault.jpg')";
                        var audio = document.getElementById("AudioForHeartBroken");
                        audio.play();
                        var crediv = document.createElement("div");
                        crediv.setAttribute("id", "but3");
                        crediv.setAttribute("class", "fadeIn animated");
                        var content = document.createTextNode("...");
                        crediv.appendChild(content);
                        var element = document.getElementById("bg");
                        element.appendChild(crediv);
                        DOMdepress = document.getElementById("but3");
                        setTimeout(function(){
                            DOMdepress.classList.remove('fadeIn');
                            DOMdepress.classList.add('fadeOut');
                            setTimeout(function(){
                                DOMdepress.innerText = "First, take a deep breathe in...";
                                DOMdepress.classList.remove('fadeOut');
                                DOMdepress.classList.add('fadeIn');
                                setTimeout(function(){
                                    DOMdepress.classList.remove('fadeIn');
                                    DOMdepress.classList.a1dd('fadeOut');
                                    setTimeout(function(){
                                        DOMdepress.innerText = "and breathe out";
                                        DOMdepress.classList.remove('fadeOut');
                                        DOMdepress.classList.add('fadeIn');
                                        setTimeout(function(){
                                            DOMdepress.classList.remove('fadeIn');
                                            DOMdepress.classList.add('fadeOut');
                                            setTimeout(function(){
                                                DOMdepress.innerText = "Don't be so sad";
                                                DOMdepress.classList.remove('fadeOut');
                                                DOMdepress.classList.add('fadeIn');
                                                setTimeout(function(){
                                                    DOMdepress.classList.remove('fadeIn');
                                                    DOMdepress.classList.add('fadeOut');
                                                    setTimeout(function(){
                                                        DOMdepress.innerText = "Every thing will be okay";
                                                        DOMdepress.classList.remove('fadeOut');
                                                        DOMdepress.classList.add('fadeIn');
                                                        setTimeout(function(){
                                                            DOMdepress.classList.remove('fadeIn');
                                                            DOMdepress.classList.add('fadeOut');
                                                            setTimeout(function(){
                                                                DOMdepress.innerText = "And you can overcome it!";
                                                                DOMdepress.classList.remove('fadeOut');
                                                                DOMdepress.classList.add('fadeIn');
                                                                setTimeout(function(){
                                                                    DOMdepress.classList.remove('fadeIn');
                                                                    DOMdepress.classList.add('fadeOut');
                                                                },4000)
                                                            },4000)
                                                        },4000)
                                                    },4000)
                                                },4000)
                                            },4000)
                                        },4000)
                                    },4000)
                                },4000)
                            },4000)
                        }, 4000)
                    }
                    else if (e.target.id=="btn3")
                    {
                        // NEW PAGE
                        //elaback.style.backgroundImage ="url('http://img.youtube.com/vi/zrhaPkI3zyg/maxresdefault.jpg')";
                        var audio = document.getElementById("AudioForSad");
                        audio.play();
                        var crediv = document.createElement("div");
                        crediv.setAttribute("id", "but3");
                        crediv.setAttribute("class", "fadeIn animated");
                        var content = document.createTextNode("...");
                        crediv.appendChild(content);
                        var element = document.getElementById("bg");
                        element.appendChild(crediv);
                        DOMdepress = document.getElementById("but3");
                        setTimeout(function(){
                            DOMdepress.classList.remove('fadeIn');
                            DOMdepress.classList.add('fadeOut');
                            setTimeout(function(){
                                DOMdepress.innerText = "At first, take a deep breath in...";
                                DOMdepress.classList.remove('fadeOut');
                                DOMdepress.classList.add('fadeIn');
                                setTimeout(function(){
                                    DOMdepress.classList.remove('fadeIn');
                                    DOMdepress.classList.add('fadeOut');
                                    setTimeout(function(){
                                        DOMdepress.innerText = "and breath out!";
                                        DOMdepress.classList.remove('fadeOut');
                                        DOMdepress.classList.add('fadeIn');
                                        setTimeout(function(){
                                            DOMdepress.classList.remove('fadeIn');
                                            DOMdepress.classList.add('fadeOut');
                                            setTimeout(function(){
                                                DOMdepress.innerText = "Every thing is okay";
                                                DOMdepress.classList.remove('fadeOut');
                                                DOMdepress.classList.add('fadeIn');
                                                setTimeout(function(){
                                                    DOMdepress.classList.remove('fadeIn');
                                                    DOMdepress.classList.add('fadeOut');
                                                    setTimeout(function(){
                                                        DOMdepress.innerText = "Your life is okay..";
                                                        DOMdepress.classList.remove('fadeOut');
                                                        DOMdepress.classList.add('fadeIn');
                                                        setTimeout(function(){
                                                            DOMdepress.classList.remove('fadeIn');
                                                            DOMdepress.classList.add('fadeOut');
                                                            setTimeout(function(){
                                                                DOMdepress.innerText = "and it's much grander than your sadness";
                                                                DOMdepress.classList.remove('fadeOut');
                                                                DOMdepress.classList.add('fadeIn');
                                                                setTimeout(function(){
                                                                    DOMdepress.classList.remove('fadeIn');
                                                                    DOMdepress.classList.add('fadeOut');
                                                                    setTimeout(function(){
                                                                        DOMdepress.innerText = " So relax and enjoy the music";
                                                                        DOMdepress.classList.remove('fadeOut');
                                                                        DOMdepress.classList.add('fadeIn');
                                                                        setTimeout(function(){
                                                                            DOMdepress.classList.remove('fadeIn');
                                                                            DOMdepress.classList.add('fadeOut');
                                                                            setTimeout(function(){
                                                                                DOMdepress.innerText = "Then you will feel better";
                                                                                DOMdepress.classList.remove('fadeOut');
                                                                                DOMdepress.classList.add('fadeIn');
                                                                                setTimeout(function(){
                                                                                    DOMdepress.classList.remove('fadeIn');
                                                                                    DOMdepress.classList.add('fadeOut');
                                                                                },4000)
                                                                            },4000)
                                                                        },4000)
                                                                    },4000)
                                                                },4000)
                                                            },4000)
                                                        },4000)
                                                    },4000)
                                                },4000)
                                            },4000)
                                        },4000)
                                    },4000)
                                },4000)
                            },4000)
                        }, 4000)
                    }
                    else if (e.target.id=="btn4")
                    {
                        //delaback.style.backgroundImage ="url('http://img.youtube.com/vi/zrhaPkI3zyg/maxresdefault.jpg')";
                        var audio = document.getElementById("AudioForStress");
                        var crediv = document.createElement("div");
                        crediv.setAttribute("id", "but3");
                        crediv.setAttribute("class", "fadeIn animated");
                        var content = document.createTextNode("...");
                        crediv.appendChild(content);
                        var element = document.getElementById("bg");
                        element.appendChild(crediv);
                        DOMdepress = document.getElementById("but3");
                        audio.play();
                        setTimeout(function(){
                            DOMdepress.classList.remove('fadeIn');
                            DOMdepress.classList.add('fadeOut');
                            setTimeout(function(){
                                DOMdepress.innerText = "First, take a deep breathe in...";
                                DOMdepress.classList.remove('fadeOut');
                                DOMdepress.classList.add('fadeIn');
                                setTimeout(function(){
                                    DOMdepress.classList.remove('fadeIn');
                                    DOMdepress.classList.add('fadeOut');
                                    setTimeout(function(){
                                        DOMdepress.innerText = "and breath out";
                                        DOMdepress.classList.remove('fadeOut');
                                        DOMdepress.classList.add('fadeIn');
                                        setTimeout(function(){
                                            DOMdepress.classList.remove('fadeIn');
                                            DOMdepress.classList.add('fadeOut');
                                            setTimeout(function(){
                                                DOMdepress.innerText = "Close your eyes and feel the music";
                                                DOMdepress.classList.remove('fadeOut');
                                                DOMdepress.classList.add('fadeIn');
                                                setTimeout(function(){
                                                    DOMdepress.classList.remove('fadeIn');
                                                    DOMdepress.classList.add('fadeOut');
                                                    setTimeout(function(){
                                                        DOMdepress.innerText = "Relax and you will feel better";
                                                        DOMdepress.classList.remove('fadeOut');
                                                        DOMdepress.classList.add('fadeIn');
                                                        setTimeout(function(){
                                                            DOMdepress.classList.remove('fadeIn');
                                                            DOMdepress.classList.add('fadeOut');
                                                        },4000)
                                                    },4000)
                                                },4000)
                                            },4000)
                                        },4000)
                                    },4000)
                                },4000)
                            },4000)
                        }, 4000)
                    }
                    if(e.target.id == "btn1") {
                         h.querySelector("#btn4").remove(); 
                        h.querySelector("#btn2").remove();
                        h.querySelector("#btn3").remove();
                        delaback.style.background='none';
                    }
                    
                         
                })
            }
        }, 3000)
    }, 3000)
}, 3000)
