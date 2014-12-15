$( function() {
        var data = [
            "Landscapes",
            "Monsters",
            "Movies",
            "Games",
            "Models",
            "Graphic Design",
            "Cartoon",
            "Cars",
        ];

   		$('#search').animate(
			{
				width: 'toggle',
			}
		).focus();

		$('#btn-search').on('click', function() {

			window.alert(document.getElementById('search').value);
            var val = document.getElementById('search').value;

            source:data;

		})
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
	$( "#search" ).autocomplete(
	{
		source:data,
		//max:10,
		//minLength:3
		// source: function(request, response) {
		// 	var results = $.ui.autocomplete.filter(data, request.term);
		// 	response(results.slice(0, 10)); //For Limiting Suggestions Result Lists
		// }
	});
});
 