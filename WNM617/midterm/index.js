$(function() {
    $("#accordion-1").accordion({
    	collapsible: true,
    	active: false
    });

    $( "#dblclick" ).dblclick(function() {
  		alert( "You just Double Clicked this text" );
	});


	$('#test_btn').click(function(){
    	$( "video" ).toggle( "blind" );
	});

});