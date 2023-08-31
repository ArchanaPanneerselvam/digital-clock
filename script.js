function clock(){
    let date = new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    if(hours>12){
        hours=hours-12;
    }

console.log(hours,minutes,seconds);

let hrs=document.getElementById("hrs")
hrs.innerText=hours;
let mins=document.getElementById("mins")
mins.innerText=minutes;
let secs=document.getElementById("secs")
secs.innerText=seconds;
}
setInterval(()=>{
    clock()
},1000)
let date=new Date();
let hours=date.getHours();

if(hours>=12){
    let ampm=document.getElementById("ampm")
    ampm.innerText="PM";
}
else if(hours<12){
    let ampm=document.getElementById("ampm")
    ampm.innerText="AM"
}

let greeting=document.getElementById("greeting")
if(hours>=12 && hours<16){
    greeting.innerHTML="GOOD AFTERNOON!!"
}
if(hours>=16 && hours<20){
    greeting.innerHTML="GOOD EVENING"
}
 if(hours>=20 && hours<3){
    greeting.innerHTML="GOOD NIGHT"
}
let buttons=document.getElementById("button")
buttons.addEventListener('mouseover', function(){
    this.innerText="PARTY TIME..!"
})
buttons.addEventListener('mouseout', function(){
    this.innerText="SET ALARM.."
})

buttons.addEventListener("click",function(){
    let date = new Date();
    let hours=date.getHours();

    let wakeUp=document.getElementById('wakeUp')
    let lunchtime=document.getElementById('lunchtime')
    let nap=document.getElementById('nap')
    let night=document.getElementById('night')

    if(parseInt(wakeUp.value)===hours){
        document.getElementById('settime').innerHTML="GRAB SOME HEALTHY BREAKFAST!!!"
        document.getElementById('image').src="./img.svg"
    }
    if(parseInt(lunchtime.value)===hours){
        document.getElementById('settime').innerHTML="LET'S HAVE SOME LUNCH !!"
        document.getElementsById('image').src="./lunch.jpg"
    }
    if(parseInt(nap.value)===hours){
        document.getElementById('settime').innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        document.getElementById('image').src="./evng img.png"
    }
    if(parseInt(night.value)===hours){
        document.getElementById('settime').innerHTML="CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById('image').src="./nyt img.png"
    }

    let timing=document.getElementsByClassName('timing')
    timing[0].innerHTML=wakeUp.options[wakeUp.selectedIndex].text
    timing[1].innerHTML=lunchtime.options[lunchtime.selectedIndex].text
    timing[2].innerHTML=nap.options[nap.selectedIndex].text
    timing[3].innerHTML=night.options[night.selectedIndex].text
})