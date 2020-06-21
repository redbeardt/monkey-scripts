// ==UserScript==
// @name			Facebook.com: Remove superfluous things
// @namespace		redbeardt::monkey-scripts
// @homepageURL		https://github.com/redbeardt/monkey-scripts
// @downloadURL		http://localhost:8080/fb-cleanup.user.js
// @updateURL		http://localhost:8080/fb-cleanup.user.js
// @match			http*://*.facebook.com/*
// @grant			GM_addStyle
// @version			0.0.15
// @author			redbeardt
// @description		21/06/2020
// ==/UserScript==

// remove extraneous elements that can be done away with via plain CSS
GM_addStyle(`

div[data-pagelet='VideoChatHomeUnit'], 
div[aria-label='Stories'] {
	display: none;
}

`);

/* remove "Rooms" box
/* strategy: try to match on h3 with "Rooms" text */

// get all h3 elements
// var allH3 = document.body.querySelectorAll('h3')
// var roomsElement = 0;

// allH3.forEach(el => { 
// 	if(el.innerText == 'Rooms') {
// 		roomsElement = el;
// 		break;
// 	}
// });

// // simply climb up the hierarchy and assassinate the wrapping element
// if (roomsElement) {
// 	roomsElement.parentElement().parentElement().parentElement()
// }
