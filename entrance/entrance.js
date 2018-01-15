var chicken = false;

function pickedChicken() {
	chicken = true;
}

var milk = false;

function pickedMilk() {
	milk = true;
}

function Wrapper(mp3,count,catSpeaksDelay,catSpeaks,catSpeaksStyle,flag,elapsed) {
    var interval = MyObject.Myconditions(flag);
    let audio = new Audio(mp3);

    audio.currentTime = 0;
    setTimeout(catSpeaks, interval - elapsed, $("input[name=option]:checked").val(),catSpeaksDelay,catSpeaksStyle);
    setTimeout(function(){audio.play(),
        myInterval =  MyObject.myInterval(3,audio);
    },interval - elapsed);
}

function Speaks(msg,style,delay){
    var el = document.createElement("div");
    el.setAttribute(
        "style",
        style
    );
    $(el).addClass('speech');
    el.innerHTML = msg;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, delay);
    document.body.appendChild(el);
}
function catSpeaks(msg,style,delay) {
    Speaks(msg,delay,style);
}

function narratorSpeaks(msg,style,delay) {
    Speaks(msg,delay,style);
}


var MyObject = {
    myInterval: function(time,audio) {
        setInterval(function () {
            if(audio.currentTime > time){
                audio.pause();
            }
        },1000)
    },
    Myconditions: function (flag) {
        var interval = 0
        if(flag == 1)
             interval = 18000;
        if(flag == 2)
             interval = 22000;
        if(flag == 3)
             interval = 26000;
        return interval;
    }

}


$(document).ready(function() {


    var countStart = new Date().getTime();
    var count = parseInt(0);
    var start = new Date().getTime();
    var catSpeaksStyle = "position:absolute;top:50%;left:55%;background-color:white; font-size:22px; max-width:150px; text-align:center";
    var naratorSpeaskStyle = "position:absolute;top:20%;left:15%;background-color:orange; font-size:30px; max-width:200px; text-align:center";
    var catSpeaksDelay = 3000;
    var naratorSpeaksDelay = 2000;

    let audio = new Audio('magic-spells.mp3');


  audio.play();

    var myInterval =  MyObject.myInterval(2,audio);


      setTimeout(narratorSpeaks, 500, "Congratulations, you have reached the gates of Purr City",naratorSpeaksDelay,naratorSpeaskStyle)
      setTimeout(narratorSpeaks, 3500, "But the gates are locked, and guarded by the vigilent Pawkeeper",naratorSpeaksDelay,naratorSpeaskStyle)
      setTimeout(narratorSpeaks, 6500, "You have a chicken drumstick and some milk in your satchel",naratorSpeaksDelay,naratorSpeaskStyle)

        setTimeout(catSpeaks, 9500, "Oh, you're not a cat!",catSpeaksDelay,catSpeaksStyle);
        setTimeout(catSpeaks, 12000, "You can't come through",catSpeaksDelay,catSpeaksStyle);
        setTimeout(catSpeaks, 15000, "Hmmmm, I can smell food",catSpeaksDelay,catSpeaksStyle);
        setTimeout("$('#cat_licking').attr('src','gate_cat_sideways_short.png');", 4000);
  $("#courses_table .show_more").click(function() {
    $(this)
      .next(".hidden")
      .slideToggle(500);
    return false;
  });

    var flag = 0;
  $("#entrance").submit(function(event) {
    event.preventDefault();
      var elapsed = new Date().getTime() - start;

      var arrayOfSeTime = [];

      let audio = new Audio('../click-effect.mp3');
      audio.play();

      if ($("input[name=option]:checked").val() == "The cat likes it and purrs, but looks at you expectantly") {
        flag++;
        Wrapper('purring.mp3',count,catSpeaksDelay,catSpeaks,catSpeaksStyle,flag,elapsed);
        count+= parseInt(catSpeaksDelay);
      }

    if ($("input[name=option]:checked").val() == "The cat eats it and smiles") {
        flag++;
        pickedChicken();
        Wrapper('cat-eating.mp3',count,catSpeaksDelay,catSpeaks,catSpeaksStyle,flag,elapsed);
        count+= parseInt(catSpeaksDelay);
    }
    if ($("input[name=option]:checked").val() == "The cat drinks it and smiles") {
        flag++;
        pickedMilk();
        Wrapper('milk.mp3',count,catSpeaksDelay,catSpeaks,catSpeaksStyle,flag,elapsed);
        count+= parseInt(catSpeaksDelay);
    }

    if (milk == true && chicken == true) {

        var t = new Date().getTime() - countStart;

        if(t > 18455){
            var interval2 = 3000;
        }else{
            var interval2 = count - t + 18000;
        }
        setTimeout(function() {
            let audio = new Audio('cat-yawn.mp3');
            audio.play();
        }, 3000 + interval2);
        
            setTimeout("$('#cat_licking').attr('src','gate_cat_back_short.png');",   3000 + interval2);
			setTimeout(catSpeaks,  5000 + interval2, "Yum, I think I will have a nap now",catSpeaksDelay,catSpeaksStyle);
			

      setTimeout(catSpeaks,  9000 + interval2 , "Take the key from the cat and go unlock the gates to Purr City",catSpeaksDelay,catSpeaksStyle);
      setTimeout(function() {
        window.location.href = "../key/key.html";
      },   8000 + interval2  );
      start = new Date().getTime();
    }
  });
});
