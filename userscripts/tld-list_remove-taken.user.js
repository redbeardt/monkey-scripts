// ==UserScript==
// @name			TLD-List: Hide Taken Domains
// @namespace		redbeardt::monkey-scripts
// @homepageURL		https://github.com/redbeardt/monkey-scripts
// @downloadURL		http://localhost:8080/tld-list_remove-taken.user.js
// @updateURL		http://localhost:8080/tld-list_remove-taken.user.js
// @match			http*://tld-list.com/*
// @grant			none
// @version			0.0.19
// @author			redbeardt
// @description 	18/06/2020, 17:50:00
// ==/UserScript==

hideTakenDomains();

function hideTakenDomains() {
	document.body.querySelectorAll('tr[itemType="https://schema.org/Product"]').forEach(el => {
		if (el.firstChild.classList.contains('danger')) {
			el.remove();
		}
	});
}

const obs = new MutationObserver(hideTakenDomains)
obs.observe(document.getElementById('mainlist'), { 
	childList: true,
	subtree: true,
	attributes: true,
	attributeFilter: [ 'class' ]
});
