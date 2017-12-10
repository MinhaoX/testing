$(function() {
    $("#slider1").slider();
    $("#b1").button();
    $("#b2").button();
    $("#b3").button();
    $("#b4").button();
    $("#dialog1").dialog({
        autoOpen: false,
        buttons: {
            OK: function() 
            { 
                $(this).dialog("close");
            },
            "Done": function() 
            { 
                $(this).dialog("close");
            }
        },
        show: { effect: "blind", duration: 800 },
        hide: { effect: "blind", duration: 800 }
    });
    $("#launcher").click(function(){
        $("#dialog1").dialog("open");
    });

    $("#dp1").datepicker({
    	changeMonth: true,
    	changeYear: true
    })

    var searchDBString = [
    	"San Francisco",
        "San Jose",
        "Milpitas",
        "San Carlos",
        "Redwood City",
        "Santa Clara",
    ]
    $("#autocomplete-1").autocomplete({
    	source: searchDBString,
    });

    $("#accordion-1").accordion({
    	collapsible: true,
    	active: false
    });
    $("#menu1").menu();
});