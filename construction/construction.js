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
		"position:absolute;top:15%;left:63%;background-color:white; font-size:40px; max-width:250px; text-align:center"
    );
    $(el).addClass("speech");
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 4000);
	document.body.appendChild(el);
}

function showQuestion(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:7%;left:1%;background-color:orange; font-size:28px; max-width:175px; text-align:left; padding:12px"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	document.body.appendChild(el);
}

$(document).ready(function() {
    showPurrCoins();
    showQuestion("Purr City - Under Construction");

            setTimeout(catSpeaks, 1000, "Purr City is under construction")
            setTimeout(catSpeaks, 3500, "Purr coins are needed to hire more paws")
            setTimeout(catSpeaks, 6000, "Donations are welcome, and an access code will be given to the first and second level")

        })


		
		





    
