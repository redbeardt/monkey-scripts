// ==UserScript==
// @name			Mozilla.org: Remove 'marked' items in JS reference
// @namespace		redbeardt::monkey-scripts
// @homepageURL		https://github.com/redbeardt/monkey-scripts/
// @downloadURL		http://localhost:8080/moz-msdn-min.user.js
// @updateURL		http://localhost:8080/moz-msdn-min.user.js
// @match			http*://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/*
// @grant			none
// @version			0.1.34
// @author			redbeardt
// @description		11/06/2020, 13:30:52 PM
// ==/UserScript==

// Removes links to obsolete, non-standard, experimental, and deprecated links in reference sidebar.
Array.from(document.body.querySelectorAll('div.quick-links ol li li')).filter((el, i, arr) => {
	let found = el.querySelector('i.icon-trash, i.icon-warning-sign, i.icon-beaker, i.icon-thumbs-down-alt');
	if (found) el.remove();
});
