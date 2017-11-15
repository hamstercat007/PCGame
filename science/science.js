

/*
1. Electrons.  Well done - electrons form part of protons and neutrons

2. Roe - close, these are fish eggs.  Very tasty!

3. Moons - close, there are some planets which have several moons. For example, Jupiter has 67 moons!  
*/

// Questions is an array of objects.


$(document).ready(function() {
    
    let questions=[
        {key:"Electrons", value:"Well done - electrons form part of protons and neutrons", correct:true},
        {key:"Roe", value:"Close, these are fish eggs.  Very tasty!", correct:false},
        {key:"Moons", value:"Close, there are some planets which have several moons. For example, Jupiter has 67 moons!", correct:false}
    ]
    $(".questions").append("<div class='options'></div>")
    for (let i=0; i<questions.length; i++) {
        console.log(questions[i].key);
        $(".questions").append("<input type='radio' value="+questions[i].key+">")
    }
})
