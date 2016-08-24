(function() {
  'use strict';
  var h1 = document.getElementsByTagName('h1')[0];
  if (h1) {
    chrome.runtime.sendMessage({
      firstHeading: h1.textContent
    }, function(response) {
    });
  }

  var messagePort = chrome.runtime.connect({ name: 'newsDivs' });

  var newsDivs = Array.prototype.slice.call(document.getElementsByClassName('news'));
  newsDivs.forEach(function(nd) {
    messagePort.postMessage({ nd: nd.textContent });
  });

  messagePort.onMessage.addListener(function(message) {
    console.log('received');
  });
}());
