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
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 4000);
	document.body.appendChild(el);
}


function questionStyle (msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:10%;left:0%;background-color:orange; font-size:40px; max-width:175px; text-align:center"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	document.body.appendChild(el);
}

$(document).ready(function() {
    showPurrCoins();
    setTimeout(questionStyle, 250,  "Q3 What is the scientific (binomial) name for cat?" );
    let questions=[
        {answer:"Feline", response:"Very close, a feline is a member of the cat family", correct:false},
        {answer:"Felis_Catus", response:"Yes, bi means two, nomen means name.  Carl Linnaeus gave all species a latin name to classify them", correct:true},
        {answer:"Felix", response:"Close, lots of cats are called Felix, it is a popular name", correct:false}
    ]

    $(".questions").append("<div class='options'></div>")
    for (let i=0; i<questions.length; i++) {
    $(".questions").append("<input type='radio' id="+questions[i].answer+" value="+questions[i].answer+"><label for="+questions[i].answer+">"+questions[i].answer+"</label><br>") 
    $("#"+questions[i].answer).click (function() {
        $(this).css("color", "blue");
        console.log(this);
        $(this).prop('checked', true);

        let val = $(this).val()
        
                    if (val === 'Felis_Catus') {
                        localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                        setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                        setTimeout(function() {
                            window.location.href = "../naptime/naptime.html";
                        }, 8000);
                    }
                    
                    showPurrCoins();
        



        setTimeout(catSpeaks, 1000, questions[i].response);
        setTimeout(function () {
            $("input:radio").each(function () {  
                $(this).removeAttr('checked');
                $('input[type="radio"]').prop('checked', false);
               })
        }, 750)
        })    
    }
})

