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
		"position:absolute;top:30%;left:63%;background-color:white; font-size:40px; max-width:250px; text-align:center"
    );
    $(el).addClass("speech");
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 3000);
	document.body.appendChild(el);
}

function showQuestion(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:2%;left:2%;background-color:orange; font-size:30px; max-width:350px; text-align:left; padding-left:15px"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	document.body.appendChild(el);
}

$(document).ready(function() {
    showPurrCoins();
    setTimeout(catSpeaks, 2000, "Pawsome! It's time to take a break. You've reached the start of Level 4. Rest against this tree for a break!");
    setTimeout(catSpeaks, 5000, "Suddenly an apple tumbles on your head");
    let audio = new Audio('fall_and_bang1.wav');
    setTimeout(function() {
        audio.play();
    }, 5000);
    
    setTimeout(catSpeaks, 8000, "Things in this world seem to fall in one direction, towards the earth");
    setTimeout(catSpeaks, 13000, "I wonder what this is called?");


    showQuestion("Level 4 - Resting against a tree");
    let questions=[
        {answer:"Momentum", response:"Not quite, Venus was the Roman goddess of beauty", note: "her Greek counterpart is known as Aphrodite", correct:false, },
        {answer:"Force", response:"Almost, this is certainly a downward force", note: "but there's a special name for this", correct:false},
        {answer:"Gravity", response:"Yes, Nike means victory in Greek, she is the Greek goddess of victory", note:"She carries a wreath in her hand, ready to crown a victor", correct:true}
    ]
   
            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
        $(".questions").append("<input type='radio' id="+questions[i].answer+" value="+questions[i].answer+"><label for="+questions[i].answer+">"+questions[i].answer+"</label><br>") 
        $("#"+questions[i].answer).on("click", function() {
            $(this).css("color", "blue");
            console.log(this);
            $(this).prop('checked', true);

            let val = $(this).val()
            
                if (val === 'Nike') {
                    if(localStorage.level_newton != "yes") {
                        localStorage.level_newton = "yes";    
                        localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                        setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                        setTimeout(function() {
                        window.location.href = "../roman/roman.html";
                        }, 8000);
                     }
                }
                        showPurrCoins();
            
            setTimeout(catSpeaks, 1000, questions[i].response)
            setTimeout(catSpeaks, 4000, questions[i].note)
            console.log("Hello");
            setTimeout(function () {
                $("input:radio").each(function () {  
                    $(this).removeAttr('checked');
                    $('input[type="radio"]').prop('checked', false);
                   })
            }, 750)
        })
    }
})
