jQuery(function() {
  var bridgeHeader = jQuery("<div id='mw-osbridge-header' />");
  
  var yearMatch = window.location.pathname.match(new RegExp("^/wiki/(\\d{4})"));
  if(yearMatch) {
    bridgeHeader.load('/system/shared_fragments/header_' + yearMatch[1]);
  } else {
    bridgeHeader.load('/system/shared_fragments/header_current');
  }
  
  var bridgeStyles = jQuery( "<link rel='stylesheet' href='/common/osbp_common_v3.css' />");
  
  jQuery('head link').first().before(bridgeStyles);
  
  jQuery('body > *').wrapAll( "<div id='mw-whole-page' />");
  jQuery('#mw-whole-page').before(bridgeHeader);
});
