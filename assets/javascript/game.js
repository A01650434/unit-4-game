


var wins = 0;
var losses = 0;
var numberToGuess = "";
var counter = 0;




$(document).ready(function() {

    // Notice I didn't set $(".jumbotron") to a var this time?
    // If you only plan to use that selector once it doesn't need to be a var
    $("#goal-btn").on("click", function() {

      // ... we generate a random number
    var random = Math.floor(Math.random() * 100) + 19;

      // ... and then dump the goal number into our goal-number div.
     $("#goal-number").text(random);

    });

     });

$(document).ready(function() {
    var list = $('li').hide();
     var i = 0;
     (function showImg() {
         list.eq(i++).fadeIn(400, showImg);
            })();
    });
