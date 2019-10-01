// my var

var numberToGuess = "";
var wins = 0;
var losses = 0;
var counter = 0;
var sesameImages = ["./assets/images/strasse.jpg", "./assets/images/ONEWAY.jpg", "./assets/images/NYC63.jpg", "./assets/images/broadway.jpg"];

// Functions

	function randomNumberToGuess () {
		numberToGuess = Math.floor(Math.random() * 102) + 19;
	}

	function restartGame () {
		for (var i = 0; i < sesameImages.length; i++) {
			var strasse = $("<img>");
			strasse.addClass("strasse");
			strasse.attr("src", sesameImages[i]);
		  strasse.attr("value", (Math.floor(Math.random() * 12) + 1));
			strasse.attr("height", "100");
			$(".strasse-images").append(strasse);
		}
	}

	function restartValues () {
		$(".goal-number").html(numberToGuess);
		$(".points-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-goal").html(counter);
		$(".strasse-images").empty();
	}

	function totalCeroCounter  () {
		randomNumberToGuess ();
		counter = 0;
		restartValues ();
		restartGame ();
	}

  randomNumberToGuess();
	restartValues ();
	restartGame ();
	
// Click Function
function strasseClick () {
  
  counter += parseInt($(this).attr("value"));
  $(".score-goal").html(counter);
  if (counter == numberToGuess) {
    wins++;
    totalCeroCounter();
  } else if (counter > numberToGuess) {
    losses++;
    totalCeroCounter();
  };
};

$(document).on("click", ".strasse", strasseClick);