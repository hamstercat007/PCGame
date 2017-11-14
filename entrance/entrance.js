var chicken = false;

function pickedChicken() {
	chicken = true;
}

var milk = false;

function pickedMilk() {
	milk = true;
}

function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:74%;left:60%;background-color:white; font-size:22px; max-width:150px; text-align:center"
	);
	el.innerHTML = msg;
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, 3000);
	document.body.appendChild(el);
}


$(document).ready(function() {
	setTimeout(catSpeaks, 5000, "Oh, you're not a cat!");
	setTimeout(catSpeaks, 7000, "You can't come through");
	setTimeout(catSpeaks, 9000, "Hmmmm, I can smell food");
	setTimeout("$('#cat_licking').attr('src','gate_cat_sideways.png');", 4000);
  $("#courses_table .show_more").click(function() {
    $(this)
      .next(".hidden")
      .slideToggle(500);
    return false;
  });


  $("#entrance").submit(function(event) {
    event.preventDefault();
    catSpeaks($("input[name=option]:checked").val());
    if ($("input[name=option]:checked").val() == "The cat eats it and smiles") {
      pickedChicken();
    }
    if (
      $("input[name=option]:checked").val() == "The cat drinks it and smiles"
    ) {
      pickedMilk();
    }
    if (milk == true && chicken == true) {
      setTimeout("$('#cat_licking').attr('src','gate_cat_back.png');", 3000);
			setTimeout(catSpeaks, 5000, "Yum, I think I will have a nap now");
      setTimeout(catSpeaks, 7000, "Take the key from the cat and go unlock the gates to Purr City");
      setTimeout(function() {
        window.location.href = "../gandalf/gandalf.html";
      }, 9000);
    }
  });
});
