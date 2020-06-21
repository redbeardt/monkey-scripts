// ==UserScript==
// @name			HumbleBundle.com: Remove CPU-cycle-eating background
// @namespace		redbeardt::monkey-scripts
// @homepageURL		https://github.com/redbeardt/monkey-scripts
// @downloadURL		http://localhost:8080/fix-humblebundle.user.js
// @updateURL		http://localhost:8080/fix-humblebundle.user.js
// @match			http*://*.humblebundle.com/*
// @grant			none
// @version			0.1.7
// @author			redbeardt
// @description		6/17/2020, 12:49:55
// ==/UserScript==

var tile_container_collection = document.body.getElementsByClassName('hr-hero-tile-container');
var tile_container = 0;

if (tile_container_collection) {
	tile_container = tile_container_collection[0];
}

tile_container.remove();
