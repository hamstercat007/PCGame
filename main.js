function catSpeaks(msg, top, left) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:"+top+"%;left:"+left+"%;background-color:white; font-size:40px; max-width:200px; text-align:center"
	);
    el.innerHTML = msg;
    $(el).addClass('speech');
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, 3000);
	document.body.appendChild(el);
}

