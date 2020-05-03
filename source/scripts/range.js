// import $ from "jquery";
export function range() {

// let line = document.querySelector(".filters__range-controls");
// if (line) {
//     let bar = document.querySelector(".filters__range-bar");
//       let minPrice = document.querySelector("input[name='min-price']");
//       let maxPrice = document.querySelector("input[name='max-price']");
//       let point1 = document.querySelector(".filters__range-toggle--min");
//       let point2 = document.querySelector(".filters__range-toggle--max");
//       let coordsLine = line.getBoundingClientRect();
//       let maxPriceValue = 9e3;
//       let pixelPriceValue = maxPriceValue / line.clientWidth;
//       let downTarget = "";
//       let mouseDown = function(evt) {
//         downTarget = evt.target;
//         let r = evt.clientX - downTarget.getBoundingClientRect().left;
//           let t = function(evt) {
//             minPrice.style.pointerEvents = "none",
//             maxPrice.style.pointerEvents = "none";
//             let t = point1.getBoundingClientRect();
// 			let o = point2.getBoundingClientRect();
// 			let s = coordsLine.left - t.width / 2;
// 			let i = s - coordsLine.left;
// 			let a = o.left - t.width;
// 			let l = t.left + t.width;
// 			let n = l - coordsLine.left;
// 			let c = coordsLine.right - o.width / 2;
// 			let u = evt.clientX - r;
// 			let d = function(evt, r, o, s) {
//                 u >= evt && u <= o && (downTarget.style.left = u - coordsLine.left + "px"),
//                 u < evt && (downTarget.style.left = r + "px"),
//                 u > o && (downTarget.style.left = o - coordsLine.left - 2 + "px"),
//                 bar.style.left = point1.offsetLeft + t.width / 2 + "px",
//                 bar.style.width = point2.offsetLeft - point1.offsetLeft + "px"
//             };
//             downTarget.classList.contains("filters__range-toggle--min") && d(s, i, a),
//             downTarget.classList.contains("filters__range-toggle--max") && d(l, n, c),
//             minPrice.value = (point1.offsetLeft - i) * pixelPriceValue,
//             maxPrice.value = (point2.offsetLeft + point2.offsetWidth / 2) * pixelPriceValue
//         };
//         document.addEventListener("mousemove", t),
//         document.addEventListener("mouseup", function() {
//             downTarget = "",
//             document.removeEventListener("mousemove", t),
//             minPrice.style.pointerEvents = "auto",
//             maxPrice.style.pointerEvents = "auto"
//         })
//     };
//     line.addEventListener("mousedown", mouseDown),
//     line.ondragstart = function() {
//         return !1
//     }
// }



}
