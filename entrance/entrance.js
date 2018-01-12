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
		"position:absolute;top:50%;left:55%;background-color:white; font-size:22px; max-width:150px; text-align:center"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, 3000);
	document.body.appendChild(el);
}

function narratorSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:20%;left:15%;background-color:orange; font-size:30px; max-width:200px; text-align:center"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, 2000);
	document.body.appendChild(el);
}






$(document).ready(function() {
  let audio = new Audio('magic-spells.mp3');
  audio.play();
  setTimeout(narratorSpeaks, 500, "Congratulations, you have reached the gates of Purr City")
  setTimeout(narratorSpeaks, 3500, "But the gates are locked, and guarded by the vigilent Pawkeeper")
  setTimeout(narratorSpeaks, 6500, "You have a chicken drumstick and some milk in your satchel")

	setTimeout(catSpeaks, 9500, "Oh, you're not a cat!");
	setTimeout(catSpeaks, 12000, "You can't come through");
	setTimeout(catSpeaks, 15000, "Hmmmm, I can smell food");
	setTimeout("$('#cat_licking').attr('src','gate_cat_sideways_short.png');", 4000);
  $("#courses_table .show_more").click(function() {
    $(this)
      .next(".hidden")
      .slideToggle(500);
    return false;
  });


  $("#entrance").submit(function(event) {
    event.preventDefault();
    catSpeaks($("input[name=option]:checked").val());
    let audio = new Audio('../click-effect.mp3');
    audio.play();

    if ($("input[name=option]:checked").val() == "The cat likes it and purrs, but looks at you expectantly") {
      let audio = new Audio('purring.mp3');
      audio.play();
    }

    if ($("input[name=option]:checked").val() == "The cat eats it and smiles") {
      pickedChicken();
    }
    if (
      $("input[name=option]:checked").val() == "The cat drinks it and smiles"
    ) {
      pickedMilk();
    }
    if (milk == true && chicken == true) {
      setTimeout("$('#cat_licking').attr('src','gate_cat_back_short.png');", 3000);
			setTimeout(catSpeaks, 5000, "Yum, I think I will have a nap now");
      setTimeout(catSpeaks, 8000, "Take the key from the cat and go unlock the gates to Purr City");
      setTimeout(function() {
        window.location.href = "../key/key.html";
      }, 9000);
    }
  });
});
