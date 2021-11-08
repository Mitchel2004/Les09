function click1() {
	document.body.style.backgroundColor = "rgb(48, 48, 48)";
	document.getElementById('1').style.visibility = "hidden";
	document.getElementById('2').style.visibility = "visible";
}

function click2() {
	document.body.style.backgroundColor = "rgb(255, 128, 0)";
	document.getElementById('2').style.visibility = "hidden";
	document.getElementById('3').style.visibility = "visible";
}

function click3() {
	document.body.style.backgroundColor = "rgb(48, 48, 48)";
	document.getElementById('3').style.visibility = "hidden";
	document.getElementById('4').style.visibility = "visible";
}

function click4() {
	document.body.style.backgroundColor = "rgb(255, 128, 0)";
	document.getElementById('4').style.visibility = "hidden";
	document.getElementById('5').style.visibility = "visible";
}

function click5() {
	document.body.style.backgroundColor = "rgb(48, 48, 48)";
	document.getElementById('5').style.visibility = "hidden";
	document.getElementById('6').style.visibility = "visible";
	var audio = new Audio('scream.mp3');
	audio.play();
}