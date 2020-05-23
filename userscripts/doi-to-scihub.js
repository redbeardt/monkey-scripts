// ==UserScript==
// @name        Clickable DOI & PMID PubMed links to Sci-Hub
// @homepageURL https://github.com/redbeardt/monkey-scripts
// @downloadURL https://github.com/redbeardt/userscripts/doi-to-scihub.js
// @namespace   Violentmonkey Scripts
// @match       http*://pubmed.ncbi.nlm.nih.gov/*
// @grant       none
// @version     1.0
// @author      redbeardt
// @description 5/20/2020, 12:15:56 PM
// ==/UserScript==

// replace DOI hrefs with Sci-Hub URL + DOI
$doi_value = $('.doi a.id-link').html().trim();
$('.doi a.id-link').attr('href', 'https://sci-hub.tw/' + $doi_value);

// convert PMID numbers into link posting request to Sci-Hub
/*$pmid_collection = $('span.identifier.pubmed strong.current-id');
$pmid_value = $pmid_collection.html();
$pmid_collection.html('<a href="javascript:jQuery.post(\'https://sci-hub.tw/\', \'sci-hub-plugin-check=&request=2071885\');">' + $pmid_value + '</a>');*/

// jQuery.post('https://sci-hub.tw/', 'sci-hub-plugin-check=&request=2071885')
/*
<span class="identifier pubmed">
  <span class="id-label">
      PMID:
  </span>
    <strong class="current-id" title="PubMed ID">6833194</strong>
</span>*/
