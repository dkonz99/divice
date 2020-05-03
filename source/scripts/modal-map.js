export function modalMap() {
	let mapLink = document.querySelector(".contacts__map-button");
	let mapPopup = document.querySelector(".modal-map");
	let mapClose = document.querySelector(".modal-map__close");

	if (mapLink) {
		mapLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
		});

		mapClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
		});
		window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (mapPopup.classList.contains("modal-show")) {
				mapPopup.classList.remove("modal-show");
			}
		}
		});
	}
	
}
