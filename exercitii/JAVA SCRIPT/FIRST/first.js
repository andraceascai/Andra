var name = "Andra";
var message = "Hello " + name + "!";
var timeout = 3000;
var isNight = false;
var isMorning = false;
var nothing;

var date = new Date();
var hour = date.getHours();

if(hour==0){
    alert("happy new year");
}else if(hour>=20 || hour<=6){
    alert ("Noapte buna!");
} else if(hour<=11){
    alert("buna dimineata");
}else if(hour<=15){
    alert("buna ziua!");
} else{
    alert("buna seara");
}



// if(isNight) {
//     alert("noapte buna");
//     alert("somn usor");
// } else if(isMorning){
//     alert("buna dimineata");
// }
// else {
//     alert("buna ziua!");
// }

setTimeout(sayHello,timeout);
function sayHello(){
// alert(message);
console.log(message);
}


