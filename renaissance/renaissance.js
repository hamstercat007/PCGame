function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:30%;left:60%;background-color:white; font-size:40px; max-width:200px; text-align:center"
	);
	el.innerHTML = msg;
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, 3000);
	document.body.appendChild(el);
}



$(document).ready(function(){
    setTimeout(catSpeaks, 2000, "At the heart of Purr City is innovation")
    setTimeout(catSpeaks, 5000, "Cats are encouraged to explore, be curious, and ask questions")
    setTimeout(catSpeaks, 8000, "You will be asked questions and awarded purr coins for correct answers")
    setTimeout(catSpeaks, 11000, "Knowledge is important to build Purr City")
    setTimeout(catSpeaks, 14000, "To build a legacy for future cat generations to come")
    setTimeout("$('#renaissance_cat').attr('src','playtime.png');", 17000);
    setTimeout(catSpeaks, 17000, "Don't forgot to enjoy yourself, we also like to live balanced lives")
    setTimeout(function() {
        window.location.href = "../bus/cat_bus.html";
    }, 20000);
})

