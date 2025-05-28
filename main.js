let counter=document.getElementById("clock-h1")
let secend=0;
let minute=0;
let hour=0;

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
})

let pausebutton=document.getElementById("pause-button")
pausebutton.addEventListener("click",function(){
   clearInterval(clock1);
})

let resumebutton=document.getElementById("resume-button")
resumebutton.addEventListener("click",function(){
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
})