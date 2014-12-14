$( function() {

	
   		$('#search').animate(
			{
				width: 'toggle',
			}
		).focus();

/*
	$('#btn-search').on('click', function(e) {

		e.preventDefault();
		$('#search').animate(
			{
				width: 'toggle'
			}
		).focus();

	});
*/
});

$(function() {
	
	var atags = [
		"cars",
        "cartoon",
        "graphicdesign",
        "landscapes",
        "models",
        "monsters",
        "movies",
        "games"
    ];

    $("input[name=searchfield]").bind('keyup', function() {
    	var val = $(this).val().toLowerCase();

    	$('.img').hide();

    	$('.img').each(function() {
    		var text = $(this).name().toLowerCase();

    		if (text.indecOf(val) != -1){
    			$(this).show();
    		}
    	});
    });
 });