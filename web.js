
//DOM AREA
var DOMhello = document.getElementById('hello');
var DOMbtn = document.getElementsByClassName('btnn');
var delaback = document.getElementById('bg');

// console.log(DOMhello);

var audio = new Audio('audio_file.mp3');

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
                    document.querySelector("#btn2").remove();
                    document.querySelector("#btn1").remove();
                    document.querySelector("#btn4").remove();
                    document.querySelector("#btn3").remove();
                    DOMhello.innerText = "";
                    if (e.target.id=="btn1"){ 
                        delaback.style.backgroundImage ="url('http://vuing.com/wp-content/uploads/2016/07/beautiful-landscape-galaxy-salar-de-uyuni-milky-way-bolivia-2-800x565.jpg')";
                        var audio = document.getElementById("AudioForDepression");
                        audio.play();
                        
                        var crediv = document.createElement("button")
                        crediv.setAttribute("id", "btnd");
                        crediv.setAttribute("class", "button")
                        
                        var content = document.createTextNode("Depression");
                        crediv.appendChild(content);

                        crediv.addEventListener("click", function() {
                            var particles = new Particles('#btnd');
                            particles.disintegrate();
                        });

                        // Initialize a new instance of Particles to disintegrate/integrate the button
                        // var particles = new Particles('.button');

                        // // Disintegrate the button into particles
                        // particles.disintegrate();
                        
                        // var particles = new Particles('#btn_depression');
                        // Disintegrate the button into particles
                        // particles.disintegrate();

                        var element = document.getElementById("bg");
                        element.appendChild(crediv);
                        var btnda = document.getElementById("btnd");
                        console.log(btnda);
                        
                    // //     btnda.addEventListener('click', function(e){
                    // //         btnda.setAttribute("class", 'animated fadeOut');
                    // //         console.log('hhugu');
                    // //         console.log(btnda);
                            
                    // // }
                    //     );




                    }
                    else if (e.target.id=="btn2")
                    {
                        var audio = document.getElementById("AudioForHeartBroken");
                        audio.play();
                    }
                    else if (e.target.id=="btn3")
                    {
                        var audio = document.getElementById("AudioForSad");
                        audio.play();
                    }
                    else if (e.target.id=="btn4")
                    {
                        var audio = document.getElementById("AudioForStress");
                        audio.play();
                    }
               
                    
                         
                })
            }
        }, 4000)
    }, 2000)
}, 3000)
