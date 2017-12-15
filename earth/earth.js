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
		"position:absolute;top:30%;left:60%;background-color:white; font-size:40px; max-width:200px; text-align:center"
    );
    $(el).addClass("speech");
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 4000);
	document.body.appendChild(el);
}


function narratorSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:0%;left:0%;background-color:orange; font-size:40px; max-width:225px; text-align:center"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	//setTimeout(function() {
	//	el.parentNode.removeChild(el);
	//}, 2000);
	document.body.appendChild(el);
}





$(document).ready(function() {
    showPurrCoins();
    setTimeout(narratorSpeaks, 0, "Q3. Does the earth go round the sun, or does the sun go round the earth?");
    let questions=[
        {answer:"Earth", response:"Yes, it takes the Earth 365 1/4 days to orbit the sun", correct:true},
        {answer:"Sun", response:"Not quite, this is what they used to think centuries ago", correct:false},
    ]
   
            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
        $(".questions").append("<input type='radio' id="+questions[i].answer+" value="+questions[i].answer+"><label for="+questions[i].answer+">"+questions[i].answer+"</label><br>") 
        $("#"+questions[i].answer).one ("click", function() {
            $(this).css("color", "blue");
            console.log(this);
            $(this).prop('checked', true);

            let val = $(this).val()
            
                        if (val === 'Earth') {
                            if(localStorage.level < 6) {
                                localStorage.level++; 
                                console.log(localStorage.level)   
                                localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                                setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                                setTimeout(function() {
                                    window.location.href = "../pamper/pamper.html";
                                }, 8000);
                            }
                        }
                        showPurrCoins();
            

            setTimeout(catSpeaks, 1000, questions[i].response)
            console.log("Hello");
            setTimeout(function () {
                $("input:radio").each(function () {  
                    $(this).removeAttr('checked');
                    $('input[type="radio"]').prop('checked', false);
                   })
                   console.log("Time delay")
            }, 750)
        })
    }
})