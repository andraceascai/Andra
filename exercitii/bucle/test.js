var money=1;
var choco=0;
var chocoPrice=2;

do{
    money-=chocoPrice;
    choco++;
}while(money>=chocoPrice);

document.write("I have "+ choco + " chocolates");
document.write("<br>");
document.write("I have " +money+ "$ left");