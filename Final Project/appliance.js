class Appliance
{
    turn(obj){
            if (obj.style.backgroundColor=="coral") {
                obj.style.backgroundColor="rgb(148, 236, 148)";
               }else
               {
                obj.style.backgroundColor="coral";
               }
    
    }
}
class Bulb extends Appliance
{
}
class Air extends Appliance
{
    changeTemp()
    {
        let plus=document.getElementById("plus");
        let minus=document.getElementById("minus");
        let temp=document.getElementById("temp");
        let currentTemp=20;
        temp.innerHTML=currentTemp;
        plus.onclick=function () {
            currentTemp+=5;
            if (currentTemp>=50) {
                currentTemp=20;
            }
            temp.innerHTML=currentTemp;
        }
        minus.onclick=function () {
            currentTemp-=5;
            if (currentTemp<=0) {
                currentTemp=20;
            }
            temp.innerHTML=currentTemp;
        }

    }
}
class Alarm extends Appliance
{
}
class TV extends Appliance
{
    turn(obj){
        if (obj.style.backgroundColor=="coral") {
            obj.style.backgroundColor="rgb(148, 236, 148)";
            let channels=document.createElement("select");
            channels.id="channels";
            let ch1=document.createElement("option");
            ch1.innerHTML="Channel 1";
            let ch2=document.createElement("option");
            ch2.innerHTML="Channel 2";
            let ch3=document.createElement("option");
            ch3.innerHTML="Channel 3";
            let ch4=document.createElement("option");
            ch4.innerHTML="Channel 4";
            let ch5=document.createElement("option");
            ch5.innerHTML="Channel 5";
            channels.appendChild(ch1);
            channels.appendChild(ch2);
            channels.appendChild(ch3);
            channels.appendChild(ch4);
            channels.appendChild(ch5);
            channels.style.position="absolute";
            channels.style.marginLeft="310px";
            channels.style.marginTop="200px";
            channels.style.width="100px";
            channels.style.fontSize="2em";
            document.getElementById("TV").appendChild(channels);
           }else
           {
            obj.style.backgroundColor="coral";
            document.getElementById("channels").remove();
           }

}
}
class Washer extends Appliance
{
}
class Vacuum extends Appliance
{
}


let bulb=document.getElementById("Bulb");
let newBulb=new Bulb;
bulb.onclick=function () {
    newBulb.turn(bulb);
}

let air=document.getElementById("Air");
let newAir=new Air;
air.ondblclick=function () {
    newAir.turn(air);
}
newAir.changeTemp();

let alarm=document.getElementById("Alarm");
let newAlarm=new Alarm;
alarm.onclick=function () {
    newAlarm.turn(alarm);
}
let tv=document.getElementById("TV");
let newTV=new TV;
tv.onclick=function () {
 newTV.turn(tv);   
}

let washer=document.getElementById("Washer");
let newWasher=new Washer;
washer.onclick=function () {
    newWasher.turn(washer);
}

let vacuum=document.getElementById("Vacuum");
let newVacuum=new Vacuum;
vacuum.onclick=function () {
    newVacuum.turn(vacuum);
}

function deletion() {
    let index=document.querySelectorAll("select")[0].selectedIndex;
    if (document.querySelector("select").querySelectorAll("option")[index].value=="Bulb") {
        document.getElementById("Bulb").remove();
    }else if (document.querySelector("select").querySelectorAll("option")[index].value=="Air") {
        document.getElementById("Air").remove();
    }else if (document.querySelector("select").querySelectorAll("option")[index].value=="Alarm") {
        document.getElementById("Alarm").remove();
    }else if (document.querySelector("select").querySelectorAll("option")[index].value=="TV") {
        document.getElementById("TV").remove();
    }else if (document.querySelector("select").querySelectorAll("option")[index].value=="Washer") {
        document.getElementById("Washer").remove();
    }else if (document.querySelector("select").querySelectorAll("option")[index].value=="Vacuum") {
        document.getElementById("Vacuum").remove();
    }
}
let button1=document.getElementById("deletion");
button1.addEventListener("click",deletion);

function addition(params) {
    let index=document.querySelectorAll("select")[1].selectedIndex;
    if (document.querySelector("select").querySelectorAll("option")[index].value=="Bulb") {
        let divBulb=document.createElement("div");
        divBulb.id="Bulb";
        divBulb.className="element";
        let imgBulb=document.createElement("img");
        imgBulb.className="elementImg";
        imgBulb.src="img/bulb.svg";
        divBulb.appendChild(imgBulb);
        divBulb.style.marginTop="0px";
        document.getElementById("appliance").appendChild(divBulb);
        let newBulb=new Bulb;
          divBulb.onclick=function () {
          newBulb.turn(divBulb);
        }
    }else if (document.querySelector("select").querySelectorAll("option")[index].value=="Air") {
        let divAir=document.createElement("div");
        divAir.id="Air";
        divAir.className="element";
        let imgAir=document.createElement("img");
        imgAir.className="elementImg";
        imgAir.src="img/air conditioning indoor.svg";
        divAir.appendChild(imgAir);
        divAir.style.marginTop="0px";
        document.getElementById("appliance").appendChild(divAir);
        let newAir=new Air;
          divAir.onclick=function () {
          newAir.turn(divAir);
        }
    }
    else if (document.querySelector("select").querySelectorAll("option")[index].value=="Alarm") {
        let divAlarm=document.createElement("div");
        divAlarm.id="Alarm";
        divAlarm.className="element";
        let imgAlarm=document.createElement("img");
        imgAlarm.className="elementImg";
        imgAlarm.src="img/alarm.svg";
        divAlarm.appendChild(imgAlarm);
        divAlarm.style.marginTop="0px";
        document.getElementById("appliance").appendChild(divAlarm);
        let newAlarm=new Alarm;
          divAlarm.onclick=function () {
          newAlarm.turn(divAlarm);
        }
    }else if (document.querySelector("select").querySelectorAll("option")[index].value=="TV") {
        let divTV=document.createElement("div");
        divTV.id="TV";
        divTV.className="element";
        let imgTV=document.createElement("img");
        imgTV.className="elementImg";
        imgTV.src="img/tv.svg";
        divTV.appendChild(imgTV);
        divTV.style.marginTop="0px";
        document.getElementById("appliance").appendChild(divTV);
        let newTV=new TV;
          divTV.onclick=function () {
          newTV.turn(divTV);
        }
    }else if (document.querySelector("select").querySelectorAll("option")[index].value=="Washer") {
        let divWasher=document.createElement("div");
        divWasher.id="Washer";
        divWasher.className="element";
        let imgWasher=document.createElement("img");
        imgWasher.className="elementImg";
        imgWasher.src="img/washer.svg";
        divWasher.appendChild(imgWasher);
        divWasher.style.marginTop="0px";
        document.getElementById("appliance").appendChild(divWasher);
        let newWasher=new Washer;
          divWasher.onclick=function () {
          newWasher.turn(divWasher);
        }
    }else if (document.querySelector("select").querySelectorAll("option")[index].value=="Vacuum") {
        let divVacuum=document.createElement("div");
        divVacuum.id="Vacuum";
        divVacuum.className="element";
        let imgVacuum=document.createElement("img");
        imgVacuum.className="elementImg";
        imgVacuum.src="img/vacuum cleaning robot.svg";
        divVacuum.appendChild(imgVacuum);
        divVacuum.style.marginTop="0px";
        document.getElementById("appliance").appendChild(divVacuum);
        let newVacuum=new Vacuum;
          divVacuum.onclick=function () {
          newVacuum.turn(divVacuum);
        }
    }
}
let button2=document.getElementById("addition");
button2.addEventListener("click",addition);
