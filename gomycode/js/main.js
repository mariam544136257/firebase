/*alert("Elyes is the best head of Leads ever"); 
var a = prompt("what's your name?");
alert(a)
confirm('can i have your name?');
//or
confirm('we use cookies for a better user experience');
document.querySelector("#hello").innerHTML = "Just Lose it";
document.querySelector("#hello").style.color = "blue";
document.querySelector("#hello").style.fontSize =  "40px";
document.querySelector("#image").setAttribute("src","res/ggg.jpg");
function yo(){
	alert('yo');
}
setTimeout(yo,3000);
function yooo(){
	alert('yooo');}
setInterval(yooo, 3000); */  /*means EACH 3 seconds the "name" function will be called*/

/*javascript*/
function badil(){
    document.getElementById("wa").innerHTML = "<h1>hello</h1>";
}
/*jquerry*/
$("button").click(function(){
	$("p").html(" paragraph changed !");
});
/*with javascript*/


//var site = document.getElementById('website');
//site.setAttribute('href','https://www.gomycode.tn');


/*jquerry*/
$("#change").click(function(){
    $("#website").attr("href", "https://www.gomycode.tn");
});
/*javascript*/

document.getElementById("change").style.background = "yellow";
/*jquerry*/

$("p").css("background-color", "skyblue")
/*javasc*/


/*document.getElementById("change").innerHTML = "New value";


/*jquerry*/
//change value with jquery
//on click on button we change the value of the element 
$("#change").click(function(){
    $("#here").html("New Value");
});