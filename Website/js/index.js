//Opening the login box
$(document).ready(function() {
	$("a.loginLink").click(function(event){

		if(this.text !== "Profile") {
			event.preventDefault();
    		$(".overlay").fadeToggle("fast");
    	}

		
  	});

//Clinking the close button on the pop-up
	$(".close").click(function(){
		event.preventDefault();
		$(".overlay").fadeToggle("fast");
	});

	// When clicking login button
	$("#loginBTN").click(function() {
	    $(".loginLink").text = "Profile";
	});

});

//User can hit the ESC key to close the pop-up
$(document).ready(function() {
	$(document).keyup(function(e) {
		if(e.keyCode === 27 && $(".overlay").css("display") !== "none" ) { 
			event.preventDefault();
			$(".overlay").fadeToggle("fast");
		}
	});
});

