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
		"position:absolute;top:30%;left:63%;background-color:white; font-size:30px; max-width:3 00px; text-align:center"
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
		"position:absolute;top:1%;left:40%;background-color:white; font-size:40px; max-width:300px; text-align:center"
    );
    $(el).addClass("speech");
    el.innerHTML = msg;
    document.body.appendChild(el);
}


function narratorSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:1%;left:0%;background-color:orange; font-size:40px; max-width:280px; text-align:center"
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
    setTimeout(narratorSpeaks, 0, "Welcome to the Statue of Liberty");
    setTimeout(showQuestion, 1000, "Which was the first country to allow women to vote?");
    let questions=[
        {answer:"Great Britain", response:"Not quite, Great Britain passed this law in 1928, although women were allowed to vote in 1918 but had to own property and be over 30 years old", correct:false},
        {answer:"United States", response:"Not quite, the United States passed this law in 1920 ", correct:false},
        {answer:"Finland", response:"Not quite, Finland passed this in 1906", correct:false},
        {answer:"New Zealand", response:"Yes, New Zealand passed this in 1893", correct:true}
    ]
   
            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
            $(".questions").append("<input type='radio' id="+questions[i].answer.replace(/ /g, '') + " value="+questions[i].answer+"><label for="+questions[i].answer.replace(/ /g, '')+">"+questions[i].answer+"</label><br>") 
            $("#"+questions[i].answer.replace(/ /g, '')).on("click", function() {
            $(this).css("color", "blue");
            console.log(this);
            $(this).prop('checked', true);

            let val = $(this).val()
            
                        if (questions[i].answer === 'New Zealand') {
                            if(localStorage.level < 11) {  
                            localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                            setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                            setTimeout(function() {
                                window.location.href = "../nike/nike.html";
                            }, 8000);
                        }
                    }

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




