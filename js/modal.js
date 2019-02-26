
function closeModal() {
	document.getElementsByTagName("html")[0].style.overflow = "auto";
	document.getElementById("modal-item").style.display = "none";
	
}

function openModal(id){
	var item = pocoes.potions[id + ""];
	document.getElementById("image-item").innerHTML = '<img src="img/' + item.image + '" alt="">';
	document.getElementById("name-item").innerHTML = item.name;
	document.getElementById("effect-item").innerHTML = item.effect;
	var ingredients = "";
	for (var i = 0; i < item.ingredients.length; i++) {
		ingredients += "<p>" + item.ingredients[i] + "</p>";
	}
	document.getElementById("ingredients-item").innerHTML = ingredients;
	document.getElementById("price-item").innerHTML = '$' + item.price;
	document.getElementsByTagName("html")[0].style.overflow = "hidden";
	document.getElementById("modal-item").style.display = "block";
}
