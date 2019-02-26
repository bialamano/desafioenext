function openMenu() {
	document.getElementById("menu").style.display = "block";
	document.getElementById("menu-top").style.display = "flex";
	document.getElementById("close").style.display = "block";
	var others = document.getElementsByClassName("header-al");
	for (var i = 0; i < others.length; i++) {
		others[i].style.display = "none";
	}
}

function closeMenu() {
	document.getElementById("menu").style.display = "none";
	document.getElementById("menu-top").style.display = "none";
	document.getElementById("close").style.display = "none";
	var others = document.getElementsByClassName("header-al");
	for (var i = 0; i < others.length; i++) {
		others[i].style.display = "block";
	}
}