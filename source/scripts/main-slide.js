export function mainSlide() {
  let mainSlideLink = document.querySelectorAll(".main-slide__radio"); 
  let mainSlidePopup = document.querySelectorAll(".main-slide");
  let maimSlide1 = document.querySelector(".main-slide--1");

  if (mainSlidePopup[0]) {
      mainSlidePopup[0].classList.add("modal-show");
      for (let i = 0; i<mainSlidePopup.length; i++) {
          mainSlideLink[i].addEventListener("click", function(evt) {             
                mainSlidePopup[0].classList.remove("modal-show");
                mainSlidePopup[mainSlidePopup.length-1].classList.remove("modal-show");
                mainSlidePopup[i].classList.add("modal-show");
                if (mainSlidePopup[i-1]) {
                  mainSlidePopup[i-1].classList.remove("modal-show");
                }
                if (mainSlidePopup[i+1]) {
                  mainSlidePopup[i+1].classList.remove("modal-show");
                } 
          });
      }
  }
  
}
