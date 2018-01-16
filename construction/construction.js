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
		"position:absolute;top:8%;left:63%;background-color:white; font-size:40px; max-width:250px; text-align:center"
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

            $(".button2").on("click", function() {
            	$(".access_code_block").show();
			});
			
			$(".button1").on("click", function() {
				$(".morePaws").submit();;
			})
			
            $(".access_code_button").on("click", function() {

                var access_code = $(".access_code").val();

                var data = {
                    'access_code': access_code
                };

                jQuery.post('db_connection.php',data, function(response) {
                    var result = JSON.parse(response);

                    if(result[3] == 1){
                        let audio = new Audio('wand.mp3');
                        audio.play();
                        $(".payment").fadeIn(1000);
                        setTimeout("$('#two_cats').attr('src','building.png');", 2000);
                        setTimeout(catSpeaks, 3000, "Paw Five! We just hired a couple of extra paws, thanks to you");
                        setTimeout(function() {
                            window.location.href = result[1];
                        }, 8000)
					}
					else {
                        alert("Please enter correct Access Code");
                    }
                });




            });
        })











