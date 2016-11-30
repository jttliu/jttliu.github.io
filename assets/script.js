$(document).ready(function() {

	$("#navbar").hover(function() {
        $(this).css('background-color', '#e6005c')
    	}, function() {
        $(this).css('background-color', '')
	});

	$("#bone").click(function() {
		if ($("#bone").hasClass("sent")) {
			$("#bone").removeClass("sent")
		}
	else {
		$("#bone").addClass("sent")
	}
	})

});