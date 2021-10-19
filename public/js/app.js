var cont = document.getElementById('container');
var content = document.getElementById('content');
var text = document.getElementById('Color');
var butt = document.getElementById('butt');
var Button = document.getElementById('Button');
var HeadText = document.getElementById('text');
function sum() {
    var x = Math.random()*256;
    var x = Math.round(x);

    var y = Math.random()*256;
    var y = Math.round(y);

    var z = Math.random()*256;
    var z = Math.round(z);

    var color= "rgb"+"("+x+","+y+","+z+")";
    cont.style.backgroundColor=color;
    text.innerHTML = color;
    if(x<=153&&y<=153&&z<=153){
        content.style.color="white";
        HeadText.style.color="white";
        butt.style.color="white";
        Button.style.color="white";
        butt.style.border="1px solid white";
        Button.style.border="1px solid white";
    }
    else{
        content.style.color="black";
        HeadText.style.color="black";
        butt.style.color="black";
        butt.style.border="1px solid black";
        Button.style.border="1px solid black";
        Button.style.color="black";
    }
}

