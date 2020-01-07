const words = ["masa", "casa", "Andra", "Ioachim", "birou", "Lagrange", "16"];

var text = words.sort()
     .filter(word => word.charAt(0)>="A" && word.charAt(0)<="Z")
     .join("<br/>");

document.getElementById("words").innerHTML = text;