// Documentation: https://www.mediawiki.org/wiki/API:Search
function searchData(query) {
$.ajax({
  url: "https://en.wikipedia.org/w/api.php?",
  data: {format: "json", action: "opensearch", origin: "*", search: query},
  success: showData
});
}

function showData(data) {
  console.log(data);
  searchTitles = data[1];
  searchExtracts = data[2];
  searchUrls = data[3];
  $("#results").empty();
  for (i = 0; i < searchTitles.length; i++) {
    var newContent = "<p>" + searchTitles[i] + "</p>" + "<p>" + searchExtracts[i] + "</p>";
    $("#results").append('<a href="' + searchUrls[i] + '"><div class="search-result col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">' + newContent + '</div></a>');
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
