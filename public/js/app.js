var cont = document.getElementById('container');
var text = document.getElementById('Color')

var x = Math.random()*256;
var x = Math.round(x);

var y = Math.random()*256;
var y = Math.round(y);

var z = Math.random()*256;
var z = Math.round(z);

var color= "rgb"+"("+x+","+y+","+z+")";

cont.style.backgroundColor=color;
text.innerHTML = color;