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