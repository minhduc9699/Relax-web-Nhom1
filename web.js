
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
                        delaback.style.backgroundImage ="url('http://img.youtube.com/vi/zrhaPkI3zyg/maxresdefault.jpg')";
                        var audio = document.getElementById("AudioForDepression");
                        audio.play();
                        // NEW PAGE
                        var crediv = document.createElement("div")
                        crediv.setAttribute("id", "but3");
                        crediv.setAttribute("class", "fadeIn animated")
                        var content = document.createTextNode("Lần 1")
                        crediv.appendChild(content);
                        var element = document.getElementById("bg");
                        element.appendChild(crediv);
                        DOMdepress = document.getElementById("but3")
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
                                        DOMdepress.classList.add('fadeIn');
                                        var crediv = document.createElement("button")
                                        crediv.setAttribute("id", "btnd");
                                        
                                        var content = document.createTextNode("Depression");
                                        crediv.appendChild(content);
                // important effect
                                   
                
                                        // Initialize a new instance of Particles to disintegrate/integrate the button
                                        // var particles = new Particles('.button');
                
                                        // // Disintegrate the button into particles
                                        // particles.disintegrate();
                                        
                                        // var particles = new Particles('#btn_depression');
                                        // Disintegrate the button into particles
                                        // particles.disintegrate();
                
                                        var element = document.getElementById("bg");
                                        element.appendChild(crediv);
                                        var ac = document.createElement("button")
                                        ac.setAttribute("id", "btnda");
                                        ac.setAttribute("class", "button")
                                        
                                        var content = document.createTextNode("clickme");
                                        ac.appendChild(content);
                // important effect
                                        ac.addEventListener("click", function() {
                                            var particles = new Particles('#btnda');
                                            particles.disintegrate();
                                            crediv.addEventListener("click", function() {
                                                var particles = new Particles('#btnd');
                                                particles.disintegrate();
                                            });
                                            crediv.click();
                                        });
                
                                        // Initialize a new instance of Particles to disintegrate/integrate the button
                                        // var particles = new Particles('.button');
                
                                        // // Disintegrate the button into particles
                                        // particles.disintegrate();
                                        
                                        // var particles = new Particles('#btn_depression');
                                        // Disintegrate the button into particles
                                        // particles.disintegrate();
                
                                        var element = document.getElementById("bg");
                                        element.appendChild(ac);
                                    },2000)
                                },2000)
                            },2000)
                        }, 2000)
                    }
                    else if (e.target.id=="btn2")
                    {
                        // HeartBroken
                        delaback.style.backgroundImage ="url('http://img.youtube.com/vi/zrhaPkI3zyg/maxresdefault.jpg')";
                        var audio = document.getElementById("AudioForHeartBroken");
                        audio.play();
                        var crediv = document.createElement("div")
                        crediv.setAttribute("id", "but3");
                        crediv.setAttribute("class", "fadeIn animated")
                        var content = document.createTextNode("Lần 1")
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
                        var content = document.createTextNode("1")
                        newbtn.appendChild(content);
                        element.appendChild(newbtn);
                    }
                    else if (e.target.id=="btn4")
                    {
                        delaback.style.backgroundImage ="url('http://img.youtube.com/vi/zrhaPkI3zyg/maxresdefault.jpg')";
                        var audio = document.getElementById("AudioForStress");
                        var crediv = document.createElement("div")
                        crediv.setAttribute("id", "but3");
                        crediv.setAttribute("class", "fadeIn animated")
                        var content = document.createTextNode("Lần 1!")
                        crediv.appendChild(content);
                        var element = document.getElementById("bg");
                        element.appendChild(crediv);
                        DOMsad = document.getElementById("but3")
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
