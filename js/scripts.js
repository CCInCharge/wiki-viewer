// Documentation: https://www.mediawiki.org/wiki/API:Search
function searchData(query) {
$.ajax({
  url: "https://en.wikipedia.org/w/api.php?",
  data: {format: "json", action: "query", list: "search", origin: "*", srsearch: query},
  success: showData
});
}

function showData(data) {
  console.log(data);
  results = data.query.search;
}

$(document).ready(function(){
  $(".search-button").click(function(){
    searchData($(".search-form").val());
  });
});
