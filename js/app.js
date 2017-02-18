$(document).foundation();


var updateHash = function() {
	var highlightElement;
	var highlightClassName = 'hash-highlight';
	var highlights = document.querySelectorAll('.' + highlightClassName);

	for (var i = 0; i < highlights.length; ++i) {
		highlights[i].classList.remove('.' + highlightClassName);
	}
	if (location.hash) {
		highlightElement = document.querySelector(location.hash);
		highlightElement.classList.add(highlightClassName);
		setTimeout(function() {
			scrollTo(0, highlightElement.offsetTop - 100);
		}, 1);
	}
}

addEventListener('hashchange', updateHash);
addEventListener('DOMContentLoaded', updateHash);
addEventListener('load', updateHash);
