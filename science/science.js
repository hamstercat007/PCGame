

/*
1. Electrons.  Well done - electrons form part of protons and neutrons

2. Roe - close, these are fish eggs.  Very tasty!

3. Moons - close, there are some planets which have several moons. For example, Jupiter has 67 moons!  
*/

// Questions is an array of objects.
function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:30%;left:60%;background-color:white; font-size:40px; max-width:200px; text-align:center"
	);
	el.innerHTML = msg;
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, 3000);
	document.body.appendChild(el);
}



$(document).ready(function() {
    
    let questions=[
        {answer:"Electrons", response:"Well done - electrons form part of protons and neutrons", correct:true},
        {answer:"Roe", response:"Close, these are fish eggs.  Very tasty!", correct:false},
        {answer:"Moons", response:"Close, there are some planets which have several moons. For example, Jupiter has 67 moons!", correct:false}
    ]
    $(".questions").append("<div class='options'></div>")
    for (let i=0; i<questions.length; i++) {
        console.log(questions[i].key);
        $(".questions").append("<input type='radio' id="+questions[i].answer+" value="+questions[i].answer+"><label for="+questions[i].answer+">"+questions[i].answer+"</label>") 
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
})
