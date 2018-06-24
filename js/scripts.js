var showSlide = function (index = 0) {
	const slides = document.getElementsByClassName("slide");
	for(var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[index].style.display = "block";
};

var changeSlide = function (direction) {
	const slides = Array.from(document.getElementsByClassName("slide"));
	const currIndex = slides.findIndex(element => element.style.display == "block");
	const nextIndex = currIndex + direction;

	if (nextIndex < slides.length && nextIndex >= 0) {
		showSlide(nextIndex);
	}
};

var typeWrite = function(text, element, speed) {
	const letter = text.charAt(0);
	element.innerHTML += letter	
	if (text.length == 1) {
		return
	} else {
		setTimeout(() => {
			typeWrite(text.slice(1), element, speed)
		}, speed); 
	}
};

document.addEventListener('DOMContentLoaded', function() {
    showSlide();
}, false);

// Title text type write
 window.addEventListener("load", function(event) {
 	const titleText =  "Hi I'm Peiyao";
 	const subTitleText = "/pay - yow/";
 	const title = document.getElementById("header-title");
 	const subTitle = document.getElementById("header-subtitle");
 	typeWrite(titleText, title, 90);
 	typeWrite(subTitleText, subTitle, 150);
 });
