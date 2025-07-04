let counter=document.getElementById("clock-h1")
let buttontoggle=document.getElementById('resume-pause-button')
let secend=0;
let minute=0;
let hour=0;

let welcome=document.getElementById("welcomeid");
let welcomebtn=document.getElementById("welcomebtnid");

function changeAllButtonsClass(toNew) {
    document.querySelectorAll('button').forEach(btn => {
      if (toNew) {
        btn.classList.replace('buttons', 'changebuttons');
      } else {
        btn.classList.replace('changebuttons', 'buttons');
      }
    });
  }



let isstarted=false;
buttontoggle.addEventListener('click',function(){
    if(!isstarted){
        clearInterval(clock1);
        isstarted=true;
        document.body.classList.add('changeblack')
        changeAllButtonsClass(true);
    }
    else{
        clock1=setInterval(function(){
            secend++;
            if(secend==60){
                secend=0;
                minute++;
                if(minute<10){
                    minute="0"+minute;
                }
            }
            if(minute==60){
                minute=0;
                hour++;
                if(hour<10){
                    hour="0"+hour;
                }
            }
            if(secend<10){
                secend="0"+secend;
            }
            if(minute==0){
                minute="00"
            }
            if(hour==0){
                hour="00"
            }
            counter.innerHTML= `${hour}:${minute}:${secend}`;
            
            console.log(hour,minute,secend)
            },1000 );
            isstarted=false;
            document.body.classList.remove('changeblack')
            changeAllButtonsClass(false);
    }
})


let clock1=setInterval(function(){
secend++;
if(secend==60){
    secend=0;
    minute++;
    if(minute<10){
        minute="0"+minute;
    }
}
if(minute==60){
    minute=0;
    hour++;
    if(hour<10){
        hour="0"+hour;
    }
}
if(secend<10){
    secend="0"+secend;
}
if(minute==0){
    minute="00"
}
if(hour==0){
    hour="00"
}
counter.innerHTML= `${hour}:${minute}:${secend}`;

console.log(hour,minute,secend)
},1000 );

let resetbutton=document.getElementById("reset-button")
resetbutton.addEventListener("click",function(){
    clearInterval(clock1);
    minute=0;
    secend=0;
    hour=0;
    counter.innerHTML = `00:00:00`;
    if(!isstarted){
        clock1=setInterval(function(){
            secend++;
            if(secend==60){
                secend=0;
                minute++;
                if(minute<10){
                    minute="0"+minute;
                }
            }
            if(minute==60){
                minute=0;
                hour++;
                if(hour<10){
                    hour="0"+hour;
                }
            }
            if(secend<10){
                secend="0"+secend;
            }
            if(minute==0){
                minute="00"
            }
            if(hour==0){
                hour="00"
            }
            counter.innerHTML= `${hour}:${minute}:${secend}`;
            
            console.log(hour,minute,secend)
            },1000 );
    }
    else{
        isstarted = true; 
    }
})

let pausebutton=document.getElementById("pause-button")
pausebutton.addEventListener("click",function(){
   clearInterval(clock1);
   isstarted=true;
   document.body.classList.add('changeblack')
   changeAllButtonsClass(true);
})

let resumebutton=document.getElementById("resume-button")
resumebutton.addEventListener("click",function(){
    if(isstarted==true){

        clock1=setInterval(function(){
            secend++;
            if(secend==60){
                secend=0;
                minute++;
                if(minute<10){
                    minute="0"+minute;
                }
            }
            if(minute==60){
                minute=0;
                hour++;
                if(hour<10){
                    hour="0"+hour;
                }
            }
            if(secend<10){
                secend="0"+secend;
            }
            if(minute==0){
                minute="00"
            }
            if(hour==0){
                hour="00"
            }
            counter.innerHTML= `${hour}:${minute}:${secend}`;
            
            console.log(hour,minute,secend)
            },1000 );
            isstarted=false;
            document.body.classList.remove('changeblack')
            changeAllButtonsClass(false);
    }

})
welcomebtn.addEventListener('click',function(){
    welcome.classList.remove('welcome');
    welcome.classList.add('hidden');
  
    welcomebtn.classList.remove('welcome');
    welcomebtn.classList.add('hidden');
    
    setTimeout(() => {
    welcome.style.display = "none";
  }, 1002);
  });