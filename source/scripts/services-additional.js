export function servicesAdditional() {
	let servicesButtonLink = document.querySelectorAll(".services__button");
	let servicesAdditionalPopup = document.querySelectorAll(".services-additional");
	let servicesAdditional1 = document.querySelector(".services-additional--1");

	if (servicesAdditional1) {
		servicesAdditionalPopup[0].classList.add("modal-show");
		servicesButtonLink[0].classList.add("js-button-service");
		for (let i = 0; i < servicesButtonLink.length; i++) {
			servicesButtonLink[i].addEventListener("click", function(evt) {
				evt.preventDefault();
				servicesButtonLink[0].classList.remove("js-button-service");
				servicesAdditionalPopup[0].classList.remove("modal-show");
				servicesAdditionalPopup[servicesButtonLink.length - 1].classList.remove("modal-show");
				servicesAdditionalPopup[i].classList.add("modal-show");
				if (servicesAdditionalPopup[i+1]) {
					servicesAdditionalPopup[i+1].classList.remove("modal-show");
				}
				if (servicesAdditionalPopup[i-1]) {
					servicesAdditionalPopup[i-1].classList.remove("modal-show");
				}
				
			})
		}
	}
	
}
