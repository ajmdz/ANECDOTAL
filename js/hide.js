$(document).ready(function(){

	var backScroll = window.pageYOffset;

	window.onscroll = function() {
		var currentScroll = window.pageYOffset;

		if(backScroll > currentScroll) {
			document.getElementById("navbarhide").style.top = "0";
		} else {
			document.getElementById("navbarhide").style.top = "-100px";
		}

		backScroll = currentScroll;
	}

});