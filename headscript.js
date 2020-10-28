var latest = document.getElementById("latest");
var last = document.getElementById("last");
var oldmessage = latest.innerHTML;
latest.innerHTML = oldmessage + "<p>Added a extra paragraph using JQuery</p>";
latest.style.backgroundColor= "#5e82ba";
latest.style.borderwidth = "3px";
last.style.backgroundColor= "#5e82ba";

var alerttext = document.getElementById("infotext");
document.addEventListener("Script Test", function(event)){
	alert( "JavaScript runnning" + event.target.tagName);
});

let event = new event ("Script Test", {bubbles:true});
alerttext.dispatchEvent(event);

var alertbtn = document.getElementById("alertbtn");
document.addEventListener("Alert Test", function(event)){
	
	
});

let event = new event ("Alert Test", {bubbles:false});

window.onscroll = function() {stickyHeader()};
var header = document.getElementById("div_header");

var sticky = header.offsetTop;

function stickyHeader()
{
	if (window.pageYOffset > sticky)
	{
		header.classlist.add('sticky');
	}else{
		header.classlist.remove('sticky');
	}
}

window.onscroll = function() {stickyNavbar()};
var navbar = document.getElementById("div_navbar");

var sticky2 = navbar.offsetTop;

function stickyNavbar()
{
	if (window.pageYOffset > sticky2)
	{
		navbar.classlist.add('sticky2');	
	}else{
		header.classlist.remove('sticky2');
	}
	
}

const textarea = document.querySelector("textArea");
const textlog = document.getElementById("textlog")
textarea.onscroll = logScroll;

function logScroll(e) {
	log.textContent = `Scroll Position ${e.target.scrollTop}`;
}

/* for (var i = 0, i <= 100, i++)
	var divisibleBy3 = i % 3 == 0;
	var divisibleBy5 = i % 5 == 0;
	
	if (divisibleBy3 && divisibleBy5){
		alert('FizzBuzz');
	}
	else if (divisibleBy3){
		alert('Fizz');
	}
	else if (divisibleBy3){
		alert('Buzz');
	}
	else (divisibleBy3){
		alert(i);
	} */

alert( new Date().(getTimezoneOffset());

let date1 = new Date(2020, 7, 20, 3, 12);
alert( getWeekday(date1));