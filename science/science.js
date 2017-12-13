

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
		"position:absolute;top:10%;left:0%;background-color:orange; font-size:40px; max-width:175px; text-align:center"
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
    setTimeout(narratorSpeaks, 0, "Question 1 - Science Time");
    setTimeout(catSpeaks, 0, "Cats also like to learn!");
    let questions=[
        {answer:"Electrons", response:"Well done - electrons form part of atoms, the smallest particles possible", correct:true},
        {answer:"Roe", response:"Close, these are fish eggs.  Very tasty!", correct:false},
        {answer:"Moons", response:"Close, some planets have several moons orbiting them. For example, Jupiter has 67 moons!", correct:false}
    ]
   
            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
        console.log(questions[i].key);$(".questions").append("<input type='radio' id="+questions[i].answer+" value="+questions[i].answer+"><label for="+questions[i].answer+">"+questions[i].answer+"</label><br>") 
        $("#"+questions[i].answer).click (function() {
            $(this).css("color", "blue");
            console.log(this);
            $(this).prop('checked', true);
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
    if (questions.answer == "Electrons") {
           localstorage+=1;
            setTimeout(catSpeaks, 3500, "Great, you have been awarded 1 Purr Coin")
            setTimeout(catSpeaks, 5500, "You now have "+localStorage+" Purr coins")
          }
})




// if (questions.answer == "Electrons") {
//     localstorage+=1;
//     setTimeout(catSpeaks, 5000, "Great, you have been awarded 1 Purr Coin")
//     setTimeout(catSpeaks, 7500, "You now have "+localStorage+" Purr coins")
//  }
//  Have a next button? 
//Load - Where does the word science come from?  Use philosopher cat?
//Scire- which means to know
//Alpha beta,
//
// What is the scientific name for cat? 
// Felis Catus
// Feline
// Felix
//

// Spend grooming yourself - you decide to take a break, 
// Groom yourself or not?
// You decide to take a break for 2 purr coins
// You feel refreshed
// You decide to not take a break - you feel a bit tired... 
// You wish you had taken a break now. 

