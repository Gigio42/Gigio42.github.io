/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/animation.js":
/*!********************************!*\
  !*** ./assets/js/animation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\r\ncamera.position.z = 0;\r\n\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ canvas: document.getElementById('canvas') });\r\nrenderer.setSize(window.innerWidth, window.innerHeight);\r\n\r\n// Responsivo\r\nfunction resizeCanvas() {\r\n    const width = window.innerWidth;\r\n    const height = window.innerHeight;\r\n    \r\n    renderer.setSize(width, height);\r\n    \r\n    camera.aspect = width / height;\r\n    camera.updateProjectionMatrix();\r\n}\r\nwindow.addEventListener('resize', resizeCanvas);\r\nresizeCanvas();\r\n\r\n// Criando as partículas\r\nconst particleCount = 100000;\r\nconst particleGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\r\nconst positions = new Float32Array(particleCount * 3);\r\nconst velocities = new Float32Array(particleCount * 3);\r\nconst colors = new Float32Array(particleCount * 3);\r\n\r\nfor (let i = 0; i < particleCount; i++) {\r\n    const angle = Math.random() * Math.PI * 2; // Angulo aleatório\r\n    const radius = 100; // Raio aleatório entre 0 e 30\r\n\r\n    positions[i * 3] = Math.cos(angle) * radius;\r\n    positions[i * 3 + 1] = Math.sin(angle) * radius;\r\n    positions[i * 3 + 2] = (Math.random() - 0.5) * 100;\r\n    \r\n\r\n    // Velocidades tangenciais circulares para manter as partículas orbitando\r\n    const tangentVelocity = Math.sqrt(radius) / 200; // Ajuste conforme necessário\r\n    const radialVelocity = 1 / Math.sqrt(radius) / 500; // Reduzindo a velocidade radial\r\n    velocities[i * 3] = -Math.sin(angle) * tangentVelocity - Math.cos(angle) * radialVelocity;\r\n    velocities[i * 3 + 1] = Math.cos(angle) * tangentVelocity - Math.sin(angle) * radialVelocity;\r\n    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;\r\n\r\n    // Cor aleatória\r\n    colors[i * 3] = Math.random() + 0.5;\r\n    colors[i * 3 + 1] = Math.random() - 0.7;\r\n    colors[i * 3 + 2] = Math.random() - 0.8;\r\n}\r\n\r\nparticleGeometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));\r\nparticleGeometry.setAttribute('velocity', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(velocities, 3));\r\nparticleGeometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(colors, 3));\r\n\r\nconst particleMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({ \r\n    size: 0.1, \r\n    vertexColors: true \r\n});\r\n\r\n\r\nconst particleSystem = new three__WEBPACK_IMPORTED_MODULE_0__.Points(particleGeometry, particleMaterial);\r\nscene.add(particleSystem);\r\n\r\n//---------------------------------------------------------------------------------------------------\r\n\r\n// Limitando a distância máxima das partículas do centro\r\nconst maxDistance = 60;\r\n\r\n// Função de animação\r\nfunction animate() {\r\n    requestAnimationFrame(animate);\r\n\r\n    const positionAttribute = particleGeometry.getAttribute('position');\r\n    const velocityAttribute = particleGeometry.getAttribute('velocity');\r\n    const colorAttribute = particleGeometry.getAttribute('color');\r\n\r\n    for (let i = 0; i < particleCount; i++) {\r\n        positionAttribute.array[i * 3] += velocityAttribute.array[i * 3];\r\n        positionAttribute.array[i * 3 + 1] += velocityAttribute.array[i * 3 + 1];\r\n        positionAttribute.array[i * 3 + 2] += velocityAttribute.array[i * 3 + 2];\r\n\r\n        // Limitando a distância das partículas do centro\r\n        const distanceFromCenter = Math.sqrt(\r\n            Math.pow(positionAttribute.array[i * 3], 2) + \r\n            Math.pow(positionAttribute.array[i * 3 + 1], 2) +\r\n            Math.pow(positionAttribute.array[i * 3 + 2], 2)\r\n        );\r\n        if (distanceFromCenter > maxDistance) {\r\n            // Se a distância exceder o limite máximo, ajuste a posição da partícula\r\n            positionAttribute.array[i * 3] *= (maxDistance / distanceFromCenter);\r\n            positionAttribute.array[i * 3 + 1] *= (maxDistance / distanceFromCenter);\r\n            positionAttribute.array[i * 3 + 2] *= (maxDistance / distanceFromCenter);\r\n        }\r\n\r\n        // Rotaciona as partículas em torno dos eixos x e y\r\n        var rotationSpeedX = Math.random() / 1000; // Velocidade de rotação em torno do eixo x\r\n        var rotationSpeedY = Math.random() / 1000; // Velocidade de rotação em torno do eixo y\r\n        // Alterna a direção da rotação para diferentes partículas\r\n        const direction = i % 2 === 0 ? 1 : -1;\r\n\r\n        const x = positionAttribute.array[i * 3];\r\n        const y = positionAttribute.array[i * 3 + 1];\r\n        const rotatedX = x * Math.cos(direction * rotationSpeedX) - y * Math.sin(direction * rotationSpeedX);\r\n        const rotatedY = x * Math.sin(direction * rotationSpeedY) + y * Math.cos(direction * rotationSpeedY);\r\n        positionAttribute.array[i * 3] = rotatedX;\r\n        positionAttribute.array[i * 3 + 1] = rotatedY;\r\n\r\n        // Mudança de cor a cada 100 partículas\r\n        if (i % 100 === 0) {\r\n            const hueShift = 0.001; // Ajuste de mudança de cor\r\n            for (let j = i; j < i + 100 && j < particleCount; j++) {\r\n                const hue = (colorAttribute.array[j * 3] + hueShift) % 4; // Rotaciona o componente de matiz\r\n                colorAttribute.array[j * 3] = hue;\r\n            }\r\n        }\r\n    }\r\n\r\n    positionAttribute.needsUpdate = true;\r\n    colorAttribute.needsUpdate = true;\r\n\r\n    renderer.render(scene, camera);\r\n}\r\n\r\nanimate();\r\n\r\n\n\n//# sourceURL=webpack://gigio42-website/./assets/js/animation.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/animation.js");
/******/ 	
/******/ })()
;