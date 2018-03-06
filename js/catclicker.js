'use strict'

const listCats = document.querySelector(".cat-list");

document.addEventListener("click", countClicks);
listCats.addEventListener("click", selectCat);

function selectCat(event) {
	let thumbnail = event.target,
	catName = thumbnail.dataset.name,
	imageSrc = thumbnail.src,
	altText = thumbnail.alt;

	displayCat(imageSrc, altText, catName);
	event.preventDefault();
}

function displayCat(imgSrc, title, name) {
	let displayArea = document.querySelector(".image-display"),
	displayedImage = displayArea.querySelector("img");

	displayArea.querySelector(".cat-name").innerHTML = name;
	displayArea.querySelector(".count-display").innerHTML = "";
	displayedImage.src = imgSrc;
	displayedImage.alt = title;
	reset();
}

function countClicks(event) {
	let count = parseInt(event.target.dataset.counter) || 0;
		
	if(event.target.dataset.counter != undefined) {
		event.target.dataset.counter = ++count;
	}

	displayClicks(count);
}


function displayClicks(count) {
	let countDisplay = event.target.closest(".count-display") || event.target.parentNode.querySelector(".count-display");

	if(!countDisplay) return;
	countDisplay.textContent = count;
}

function reset() {
	let counterElement = document.querySelector("[data-counter]");

	counterElement.dataset.counter = 0;
}