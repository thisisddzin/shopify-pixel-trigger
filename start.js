document.querySelector('.spt-fire').addEventListener('click', function () {
  chrome.runtime.sendMessage({greeting: "hello 22"}, function(response) {
    console.log(response.farewell);
  });
})