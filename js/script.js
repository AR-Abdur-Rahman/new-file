// text change 
function textChange(){
    document.getElementById('t_c').innerHTML="Hello world"
}
// style color change
function colorChange(){
    document.getElementById('s_c').style.color="red";
}
// Bulb on/off
function bulbOn(){
    document.getElementById('b_m').src="img/on.gif";
}
function bulbOff(){
    document.getElementById('b_m').src="img/off.gif";
}
// show date
function shoeDate(){
    document.getElementById("s_d").innerHTML= Date();
}
// show hide display
function showText(){
    document.getElementById('s_t').style.display="block";
}
function hideText(){
    document.getElementById('s_t').style.display="none";
}
// document.write
function dWrite(){
    document.write("Hello world");
}
// window.alert
function winAlert(){
    window.alert("Hello world")
}
// shoe into console.log
function cLog(){
    console.log("Hello world")
}
// print page
function pPage(){
    window.print();
}
// show the result

let number1, number2;
number1 = 4;
number2 =5;

number1 += number2;
function reSult(){
    document.getElementById('r_s').innerHTML= number1;
}