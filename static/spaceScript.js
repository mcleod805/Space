$(document).ready(function() {
	$("#sun").click(function() { 
    $("#showSun").toggle(); 
	});
});
$(document).ready(function() {
	$("#M").click(function() { 
     var EarthWeight = parseFloat($("#inputM").val());
	 var MercWeight = EarthWeight * 0.38;
	 document.getElementById("outputM").innerHTML = MercWeight;

	});
});
$(document).ready(function() {
	$("#V").click(function() { 
     var EarthWeight = parseFloat($("#inputV").val());
	 var VenWeight = EarthWeight * 0.91;
	 document.getElementById("outputV").innerHTML = VenWeight;

	});
});
$(document).ready(function() {
	$("#Ma").click(function() { 
     var EarthWeight = parseFloat($("#inputMa").val());
	 var MaWeight = EarthWeight * 0.38;
	 document.getElementById("outputMa").innerHTML = MaWeight;

	});
});
$(document).ready(function() {
	$("#J").click(function() { 
     var EarthWeight = parseFloat($("#inputJ").val());
	 var JupWeight = EarthWeight * 2.34;
	 document.getElementById("outputJ").innerHTML = JupWeight;

	});
});
$(document).ready(function() {
	$("#S").click(function() { 
     var EarthWeight = parseFloat($("#inputS").val());
	 var SatWeight = EarthWeight * 1.06;
	 document.getElementById("outputS").innerHTML = SatWeight;

	});
});
$(document).ready(function() {
	$("#U").click(function() { 
     var EarthWeight = parseFloat($("#inputU").val());
	 var UrWeight = EarthWeight * 0.92;
	 document.getElementById("outputU").innerHTML = UrWeight;

	});
});
$(document).ready(function() {
	$("#N").click(function() { 
     var EarthWeight = parseFloat($("#inputN").val());
	 var NepWeight = EarthWeight * 1.19;
	 document.getElementById("outputN").innerHTML = NepWeight;

	});
});
$(document).ready(function() {
	$("#P").click(function() { 
     var EarthWeight = parseFloat($("#inputP").val());
	 var PWeight = EarthWeight * 0.06;
	 document.getElementById("outputP").innerHTML = PWeight;

	});
});
