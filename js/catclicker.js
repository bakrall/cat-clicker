'use strict'

document.addEventListener("click", countClicks);

function countClicks(event) {
	if(event.target.dataset.counter != undefined) {
		let countDisplay = event.target.parentNode.querySelector(".count-display");
		event.target.dataset.counter ++;
		countDisplay.innerHTML = event.target.dataset.counter;
	}
}