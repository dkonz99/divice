export function itemHover() {
	let photoProductsLink = document.querySelectorAll(".js-photo-products");
	let photoproductsPopup = document.querySelectorAll(".in-basket");
	let buttonPopup = document.querySelectorAll(".in-basket__button");

	if (photoProductsLink) {
		let arr = [];
		for (let i=0; i<photoProductsLink.length; i++) {
			photoProductsLink[i].addEventListener("mouseover", function(evt) {
			evt.preventDefault();
			photoproductsPopup[i].classList.add("modal-show");	
			});
			photoProductsLink[i].addEventListener("mouseout", function(evt) {
			evt.preventDefault();
			photoproductsPopup[i].classList.remove("modal-show");	
			});
			buttonPopup[i].addEventListener("click", function(evt) {
				evt.preventDefault();
				arr.push(photoProductsLink[i]);
			})
		}
		
	}
	
}
