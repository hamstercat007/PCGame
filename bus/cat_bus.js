



function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:50%;left:60%;background-color:white; font-size:32px; max-width:150px; text-align:center"
    );
    $(el).addClass('speech');
	el.innerHTML = msg;
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, 3000);
	document.body.appendChild(el);
}

function showPurrCoins() {
    var el = document.createElement("div");
    $(el).addClass('purrCoin');
	el.innerHTML = localStorage.purrCoins;
	document.body.appendChild(el);
}


$(document).ready(function() {
    setTimeout(catSpeaks, 3000, "You are allocated 7 purr coins");
    localStorage.setItem("purrCoins", 7);
    showPurrCoins();
    setTimeout(catSpeaks, 6000, "The bus fare is 1 purr coin");
    setTimeout(catSpeaks, 9000, "Please place your paw over the card reader to pay your fare");
    

$("#Map").on("click", function(e){
    e.preventDefault();
    setTimeout(catSpeaks, 3000, "You now have 6 purr coins left");
        localStorage.purrCoins-=1;
        showPurrCoins();
        setTimeout(catSpeaks, 6000, "Sit down and enjoy the ride to Purr City!")
        setTimeout("$('#bus').attr('src','bootcamp.png');", 9000);
        setTimeout(catSpeaks, 9000, "Cats like to work out in Purr City");
        setTimeout("$('#bus').attr('src','catwalk.png');", 12000);
        setTimeout(catSpeaks, 12000, "Cats also like to look good!");
        setTimeout("$('#bus').attr('src','homeless.png');", 15000);
        setTimeout(catSpeaks, 15000, "Cats look to help others in need!");
        setTimeout(function() {
            window.location.href = "../science/science.html";
        }, 19000);
    });
});
  
  

    