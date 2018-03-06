// 'use strict'

document.addEventListener("click", countClicks);

function countClicks(event) {
	let count = parseInt(event.target.dataset.counter) || 0,
		countDisplay = event.target.parentNode.querySelector(".count-display");
		
	if(event.target.dataset.counter != undefined) {
		event.target.dataset.counter = ++count;
		countDisplay.innerHTML = count;
	}
}