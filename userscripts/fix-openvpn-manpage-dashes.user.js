// ==UserScript==
// @name			OpenVPN.net: Fix OpenVPN manpage dashes
// @homepageURL		redbeardt::monkey-scripts
// @downloadURL		http://localhost:8080/fix-openvpn-manpage-dashes.user.js
// @updateURL		http://localhost:8080/fix-openvpn-manpage-dashes.user.js
// @namespace		https://github.com/redbeardt/monkey-scripts/
// @match			https://openvpn.net/community-resources/reference-manual-for-openvpn-2-4/
// @grant			none
// @version			0.1.7
// @author			redbeardt
// @description		5/18/2020, 10:15:09 AM
// ==/UserScript==

document.body.innerHTML = document.body.innerHTML.replace(/–/g, '--');
