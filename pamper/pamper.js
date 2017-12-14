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
	 }, 2500);
	document.body.appendChild(el);
}


function narratorSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:10%;left:0%;background-color:orange; font-size:40px; max-width:175px; text-align:center"
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
    setTimeout(narratorSpeaks, 0, "Pamper time: 2 Purr Coins");
    setTimeout(catSpeaks, 2500, "Take a break!");
    setTimeout(catSpeaks, 5000, "Enjoy some fur treatments and having your fur groomed!");
    setTimeout(catSpeaks, 7500, "All cats deserve some relaxation time");
    localStorage.purrCoins-=2;
    showPurrCoins()
    setTimeout(catSpeaks, 10000, "You now have "+localStorage.purrCoins+" purr coins");
    setTimeout(catSpeaks, 12500, "When you're ready, click 'Next'");
})
