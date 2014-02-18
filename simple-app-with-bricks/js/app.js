document.addEventListener('DOMComponentsLoaded', function() { 
	// Run any code here that depends on Brick components being loaded first 
	// Very similar to jQuery's document.ready() 

	// Grab the x-deck and the two buttons found in our x-appbar and assign to local vars
	var deck = document.getElementById("views"),
	  nextButton = document.getElementById("view-next"),
	  prevButton = document.getElementById("view-prev"); 

	// Add event listeners so that when we click the buttons, our views transition between one another
	prevButton.addEventListener("click", function(){ deck.previousCard(); }); 
	nextButton.addEventListener("click", function(){ deck.nextCard(); });
});