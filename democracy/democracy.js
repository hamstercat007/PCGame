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
	 }, 4000);
	document.body.appendChild(el);
}


function showQuestion(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:18%;left:0%;background-color:orange; font-size:28px; max-width:175px; text-align:left; padding:12px"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	document.body.appendChild(el);
}



$(document).ready(function() {
    showPurrCoins();
    showQuestion("Level 3  Q2. Where does the word 'democracy' come from?");
    let questions=[
        {answer:"demos", response:"Yes, demos means 'people' in Greek, democracy means rule by the people", correct:true, note:"To vote means you can express your opinion and influence the decision"},
        {answer:"daring", response:"Not quite", correct:false, note:"Cats are quite daring though"}
    ]
            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
        $(".questions").append("<input type='radio' id="+questions[i].answer+" value="+questions[i].answer+"><label for="+questions[i].answer+">"+questions[i].answer+"</label><br>") 
        $("#"+questions[i].answer).on("click", function() {
            $(this).css("color", "blue");
            console.log(this);
            $(this).prop('checked', true);

            console.log(localStorage.level);

            let val = $(this).val()
            if (val === 'demos') {
                
                    if(localStorage.level < 14) {
                        localStorage.level++;
                        localStorage.purrCoins = Number(localStorage.purrCoins) + 1;

                        setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                        setTimeout(function() {
                            window.location.href = "../male_vote/male_vote.html";
                        }, 7000);

                    }
                }


            setTimeout(catSpeaks, 1000, questions[i].response)
            setTimeout(catSpeaks, 3500, questions[i].note)

                 
            setTimeout(function () {
                $("input:radio").each(function () {  
                    $(this).removeAttr('checked');
                    $('input[type="radio"]').prop('checked', false);
                   })
            }, 750)
        })
    }
 })





    




   
 