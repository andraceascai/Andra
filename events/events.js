var button = document.querySelector("input");
var element = document.getElementById("time");

function showTime()  {
    element.innerText = Date();
    
}

function changeStyle(){
    element.className = "newStyle";
}

// showTime();
// button.onclick = swohTime;
// button.onclick = changeStyle;

// button.onclick = function() {
//     showTime();
//     changeStyle();
// }

button.addEventListener( "click", showTime);
button.addEventListener( "click",changeStyle);

//button.removeEventListener("click",  changeStyle);
