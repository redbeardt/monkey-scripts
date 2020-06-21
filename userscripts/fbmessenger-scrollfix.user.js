// ==UserScript==
// @name			Messenger.com: Fix autoscroll
// @namespace		redbeardt::monkey-scripts
// @homepageURL		https://github.com/redbeardt/monkey-scripts
// @match			http*://*.messenger.com/*
// @updateURL		http://localhost:8080/fbmessenger-scrollfix.user.js
// @downloadURL		http://localhost:8080/fbmessenger-scrollfix.user.js
// @version			0.0.5
// @author			redbeardt
// @description		6/13/2020 3:30:45 PM
// ==/UserScript==

var messages_aria = 0;

// get the scrollbox with the messages
var messages_scrollbox = document.body.querySelectorAll('.uiScrollableAreaContent').forEach(el => {
	messages_aria = el.querySelector('div[aria-label=\'Messages\']');

	if (selected) {
		return el;
	}
});

var content_area = messages_aria.querySelector('div[id]');

// if we got it, observe content for changes and continuously move scrollbox down
if (messages_scrollbox) {

	// create mutation observer on content area
	const obs = new MutationObserver(scroll_to_end)
	obs.observe(content_area);
}

// testing auto-update

function scroll_to_end() {
	content_area.scrollTo(0, content_area.scrollHeight);
}
