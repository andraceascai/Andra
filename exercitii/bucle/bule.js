var scores = [78, 56, 19, 48, 89, 24, 10, 45, 98, 46];
var fruits = ["portocale", "mandarine","mere", "nuci", "banane", "kiwi"];


var max=0;
var poz;

for(var i=0;i< scores.length; i++)
{
    if(scores[i]>max)
    {
        max=scores[i];
        poz=i;
    }
}
document.write(max + " bule pe pozitia " + poz);
document.write("<br>");

max=fruits[0];

for(var i=0;i< fruits.length; i++)
{
    if(fruits[i]>max)
    {
        max=fruits[i];
    }
}

document.write("cele mai mari fructe sunt " + max);

fruits.sort

