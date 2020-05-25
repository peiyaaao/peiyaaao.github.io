var typeWrite = function(text, element, speed) {
	const letter = text.charAt(0);
	element.innerHTML += letter;
	if (text.length == 1) {
		return
	} else {
		setTimeout(() => {
			typeWrite(text.slice(1), element, speed)
		}, speed); 
	}
};

var randomColour = function(colours) {
	var index = Math.floor((Math.random() * colours.length)); 
	return colours[index];
}

var growCircle = function(finalSize, currentSize, colours, element) {
	currentSize += 1;
	element.style.backgroundColor = randomColour(colours)
	element.style.height = currentSize + "vh";
	element.style.width =  currentSize + "vh";
	if(currentSize == finalSize ) {
		launchScreen()
		return
	} else {
		setTimeout(() => {
			growCircle(finalSize, currentSize, colours, element);
		}, 25);
	}
} 

var typeHeader = function() {
 	const titleText =  "Hi, I'm Peiyao";
 	const subTitleText = "/pay - yow/";
 	const title = document.getElementById("header-title");
 	const subTitle = document.getElementById("header-subtitle");
 	typeWrite(titleText, title, 100);
 	typeWrite(subTitleText, subTitle, 150);
};

var launchScreen = function() {
	var preloadScreen = document.getElementById("preload");
	if (preloadScreen.style.display != "none") {
		preloadScreen.style.display = "none";
		document.getElementById("landing").style.visibility ="visible";
		document.getElementById("postload").style.display = "flex";
		typeHeader()
	}
};

var loadingAnimation = function() {
	var preloadScreen = document.getElementById("preload");
	preloadScreen.style.display = "block";
	var circle = document.getElementById("loader");
	var colours = ["#ffaa77", "#ef9689", "#df97a0", "#cfa2b3", "#bfaab7"];
	growCircle(40, 0, colours, circle);
};

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

 document.addEventListener("DOMContentLoaded", loadingAnimation);
