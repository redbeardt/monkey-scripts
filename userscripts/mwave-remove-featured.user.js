// ==UserScript==
// @name			Mwave.com.au: Remove "Featured Products"
// @namespace		redbeardt::monkey-scripts
// @homepageURL		https://github.com/redbeardt/monkey-scripts
// @downloadURL		http://localhost:8080/mwave-remove-featured.user.js
// @updateURL		http://localhost:8080/mwave-remove-featured.user.js
// @match			http*://*.mwave.com.au/*
// @grant			GM_addStyle
// @version			0.0.42
// @author			redbeardt
// @description		06/21/2020, 04:41:12
// ==/UserScript==

GM_addStyle(`

h1.title, 
#top-bar,
img[src$='narrowchoices.png'], 
.productList p.button, 
#divSubCategorySLIData { 
	display: none !important;
}

img { 
	vertical-align: middle !important;
}

#header { 
	height: auto;
}

.subCatBox .productList li {
	height: 310px !important;
}

.productList .normalTips, .productList .preOrderTips {
	padding-top: 0;
}

.productList .imageProd {
	margin-bottom: 10px !important;
	margin-top: 10px !important;
}

.productList .price {
	margin-bottom: 0;
}

#ProductResults .productList .price {
	height: 35px;
}

`);
