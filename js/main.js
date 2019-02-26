var pocoes;
function loadJSON(callback) {
	var http = new XMLHttpRequest();
	http.overrideMimeType("application/json");
	http.open('GET', 'json/potions.json', true);
	http.onreadystatechange = function() {
		if (http.readyState == 4 && http.status == "200") {
			callback(http.responseText);
		}
	};
	http.send(null);
}

function init() {
	loadJSON(function(response) {
		pocoes = JSON.parse(response);
		var html = "<h1>Potions</h1>";
		for (pocao in pocoes.potions) {
			var item = pocoes.potions[pocao];
			html += '<div onclick="openModal(' + item.id + ')"><img src="img/' + item.image + '" alt=""><p>' + 
				item.name + ' - <span>$' + item.price + ' </span></p></div>';
		}
		document.getElementById("potions").innerHTML = html;
	});
}



