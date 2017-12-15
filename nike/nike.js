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
		"position:absolute;top:30%;left:63%;background-color:white; font-size:40px; max-width:200px; text-align:center"
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
		"position:absolute;top:1%;left:2%;background-color:orange; font-size:40px; max-width:325px; text-align:center"
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
    setTimeout(narratorSpeaks, 0, "Q3. Who is the goddess driving the chariot?");
    let questions=[
        {answer:"Venus", response:"Not quite, Venus was the Roman goddess of beauty", correct:false},
        {answer:"Athena", response:"Not quite, Athena was the Greek goddess of wisdom and war, and the patron of the Greek city of Athens", correct:false},
        {answer:"Nike", response:"Yes, Nike means victory in Greek, she is the Greek goddess of victory", correct:true}
    ]
   
            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
        $(".questions").append("<input type='radio' id="+questions[i].answer+" value="+questions[i].answer+"><label for="+questions[i].answer+">"+questions[i].answer+"</label><br>") 
        $("#"+questions[i].answer).one ("click", function() {
            $(this).css("color", "blue");
            console.log(this);
            $(this).prop('checked', true);

            let val = $(this).val()
            
                        if (val === 'Nike') {
                            localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                            setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                            setTimeout(function() {
                                window.location.href = "../earth/earth.html";
                            }, 8000);
                        }
                        
                        showPurrCoins();
            


            setTimeout(catSpeaks, 1000, questions[i].response)
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
