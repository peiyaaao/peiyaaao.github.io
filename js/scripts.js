var slideIndex = 0

document.addEventListener('DOMContentLoaded', function() {
    showSlide(slideIndex)
}, false);

function showSlide(index) {
	var slides = document.getElementsByClassName("slide")
	for(var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"
	}

	slides[index].style.display = "block"
}

function changeSlide(direction) {
	var slides = document.getElementsByClassName("slide")
	const index = slideIndex += direction
	if (index < slides.length && index >= 0) {
		showSlide(index)
	} 
}

