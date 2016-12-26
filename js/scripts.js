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
}
