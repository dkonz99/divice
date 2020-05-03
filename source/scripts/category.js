export function category() {
	let categoryLink = document.querySelector(".js-header-category");
	let categoryPopup = document.querySelector(".category");

	if (categoryLink) {
		categoryLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		if (!categoryPopup.classList.contains("modal-show")) {
       	categoryPopup.classList.add("modal-show");
       
		}
		else {
			categoryPopup.classList.remove("modal-show");
		}
	
		});
	}

	
}

