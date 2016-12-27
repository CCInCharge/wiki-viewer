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
  search_results = data.query.search;
  $("#results").empty();
  for (i = 0; i < search_results.length; i++) {
    $("#results").append("<p>" + search_results[i].title + "</p>");
  }
}

$(document).ready(function(){
  $(".search-button").click(function(){
    searchData($(".search-form").val());
  });

  $(".search-form").keyup(function(event){
    if(event.keyCode == 13){
        $(".search-button").click();
    }
  });
});
