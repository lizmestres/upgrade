$(document).ready(function() {

if ( $("#news-ticker").length > 0 ) {
var options = {
newsList: "#news-ticker",
startDelay: 10,
placeHolder1: " _"
}
$().newsTicker(options);
}

});