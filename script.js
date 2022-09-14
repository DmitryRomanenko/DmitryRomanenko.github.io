/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  ? document.removeEventListener('mousemove', parallax)
  : document.addEventListener('mousemove', parallax);
function parallax(e) {
  document.querySelectorAll('.promo__img').forEach((item) => {
    let movingVal = item.getAttribute('data-value');
    item.style.transform = `translateX(${(e.clientX * movingVal) / 250}px)
    translateY(${(e.clientY * movingVal) / 250}px)`;
  });
}
document.querySelector('.menu__block').addEventListener('change', (e) => {
  document.querySelector('.categories').classList.toggle('categories__active');
});

/******/ })()
;
//# sourceMappingURL=script.js.map