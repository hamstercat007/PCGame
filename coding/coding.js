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
		"position:absolute;top:25%;left:4%;background-color:orange; font-size:40px; max-width:225px; text-align:center"
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
    setTimeout(narratorSpeaks, 0, "Q1. What does HTML stand for?");
    let questions=[
        {answer:"Hypertext Markup", response:"Yes, it stands for Hypertext Markup Language", correct:true},
        {answer:"Hickory Tickory Miaow Land", response:"Not quite, good try though!", correct:false},
    ]
   
            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
            $(".questions").append("<input type='radio' id="+questions[i].answer.replace(' ', '') + " value="+questions[i].answer+"><label for="+questions[i].answer.replace(' ', '')+">"+questions[i].answer+"</label><br>") 
            $("#"+questions[i].answer.replace(' ', '')).one ("click", function() {
                $(this).css("color", "blue");
                console.log(this);
                $(this).prop('checked', true);
                let val = $(this).val()  
                
                if (questions[i].answer === "Hypertext Markup") {
                    if(localStorage.level < 6) {
                        localStorage.level++;    
                        localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                        setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                        setTimeout(function() {
                            window.location.href = "../pamper/pamper.html";
                        }, 8000);
                    }
                }
                        showPurrCoins();
            
            setTimeout(catSpeaks, 1000, questions[i].response)
            setTimeout(function () {
                $("input:radio").each(function () {  
                    $(this).removeAttr('checked');
                    $('input[type="radio"]').prop('checked', false);
                   })
            }, 750)
        })
    }
})