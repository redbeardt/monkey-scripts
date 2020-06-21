// ==UserScript==
// @name			AlternativeTo.net: redbeardt's twerks
// @namespace		redbeardt::monkey-scripts
// @homepageURL		https://github.com/redbeardt/monkey-scripts/
// @downloadURL		http://localhost:8080/alto_rm-unwanted.user.js
// @updateURL		http://localhost:8080/alto_rm-unwanted.user.js
// @match			http*://alternativeto.net/software/*
// @grant			GM_getValue
// @version			0.0.6
// @author			redbeardt
// @description		6/3/2020, 5:38:10 PM
// ==/UserScript==

filterResults();

// if no query string detected defining license and platform, default to Windows/Free
if (document.URL.match(/.*\/software\/[^/]+\/$/i)) {
	window.location.href += '?license=free&platform=windows';
}

// if user clicks to load more apps, observe for when DOM changes occur so we can zap the new "Discontinued" apps
$('.btn-load-more').click(function () {
	const obs = new MutationObserver(filterResults)
	obs.observe(document.getElementById('alternativeList'), { childList: true });
});

// remove Discontinued, Freemium, and blacklisted apps from results
function filterResults() {
	$('.custom-icon-discontinued').closest('li[id^="item-"]').remove();

	/*$('span.pricing-free').each(function(i, e) {
	if(e.innerText == 'Freemium') {
		$(e).closest('li[id^="item-"]').remove();
	}
	});*/

	// remove blacklisted entries
	var blacklist_value = GM_getValue('app-blacklist', '').replace(/ /g, '');
	var blacklist = blacklist_value.toLowerCase().split(',');

	if (!!blacklist[0]) {
		for (entry of blacklist) {
			$('li#item-' + entry).remove();
		}
	}

}
