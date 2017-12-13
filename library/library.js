function showPurrCoins() {
    var el = document.createElement("div");
    $(el).addClass('purrCoin');
	el.innerHTML = localStorage.purrCoins;
	document.body.appendChild(el);
}

function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:30%;left:60%;background-color:white; font-size:40px; max-width:200px; text-align:center"
    );
    $(el).addClass("speech");
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 4000);
	document.body.appendChild(el);
}


function narratorSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:0%;left:0%;background-color:orange; font-size:40px; max-width:175px; text-align:center"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	//setTimeout(function() {
	//	el.parentNode.removeChild(el);
	//}, 2000);
	document.body.appendChild(el);
}


$(document).ready(function() {
    showPurrCoins();
    setTimeout(narratorSpeaks, 0, "Q1. What does the word 'libri' mean?");
})
