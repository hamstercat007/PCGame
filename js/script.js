$(document).ready(function(){
	$("#courses_table .show_more").click(function(){
		$(this).next(".hidden").slideToggle(500);
		return false;
	});

//if input = milk etc..do it in a way you understand.

	$( "#entrance" ).submit(function( event ) {
	  alert($('input[name=option]:checked').val());
		if ($('input[name=option]:checked').val() == "The cat eats it and smiles") {
			 pickedChicken()
		}
		if ($('input[name=option]:checked').val() == "The cat drinks it and smiles") {
			 pickedMilk()
		}
		if (milk == true && chicken == true) {
			alert("Yum, I think I will have a nap now");
      setTimeout("$('#cat_licking').attr('src','gate_cat_back.png');", 2000);
		}
	  event.preventDefault();
	});
});
	/*$.cookieBar();
});*/

function catSpeaks(msg)
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:74%;left:60%;background-color:white; font-size:22px; max-width:150px; text-align:center");
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 }, 2000);
 document.body.appendChild(el);
}


var chicken = false;
function pickedChicken() {
	chicken = true;
}

var milk = false;
function pickedMilk() {
	milk = true;
}

if (milk === true && chicken === true) {
	alert("You know my weak spots! Purrrrrr!");
}