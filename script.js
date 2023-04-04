const dragAndDrop = document.querySelector(".js-drag-and-drop-box");
const img = document.querySelector(".js-img");
const sign = document.querySelector(".js-sign");
const defaultSign = sign.innerHTML;

const dragOver = function (e) {
	e.preventDefault();
	// console.log("ok");
};

const dragDrop = function (e) {
	e.preventDefault();
	let file = e.dataTransfer.files[0];

	let fileType = file.type;

	let validExtensions = ["image/jpeg", "image/jpg", "imahe/png"];

	if (validExtensions.includes(fileType)) {
		let fileReader = new FileReader();

		fileReader.onload = () => {
			let fileURL = fileReader.result;

			let imgTag = `<img src="${fileURL}" alt="">`;
			console.log(imgTag);
			this.innerHTML = imgTag;
		};
		fileReader.readAsDataURL(file);
	} else {
		this.classList.remove("drag-and-drop--active");
		sign.innerHTML = defaultSign;
		img.classList.remove("drag-and-drop__img--active");
		alert("This file is not an Image");
	}
};

const dragEnter = function (e) {
	this.classList.add("drag-and-drop--active");
	sign.textContent = "Realise to Upload";
	img.classList.add("drag-and-drop__img--active");
	console.log("ok Enter");
};
const dragLeave = function (e) {
	this.classList.remove("drag-and-drop--active");
	sign.innerHTML = defaultSign;
	img.classList.remove("drag-and-drop__img--active");
	console.log("ok Leave");
};

dragAndDrop.addEventListener("dragover", dragOver);
dragAndDrop.addEventListener("drop", dragDrop);
dragAndDrop.addEventListener("dragenter", dragEnter);
dragAndDrop.addEventListener("dragleave", dragLeave);
