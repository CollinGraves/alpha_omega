function handleButtonClick() {
  chrome.tabs.create({
    index: 0,
    url: 'http://northlabsmn.com'
  }, function(tab) {
    console.log(tab);
  });
}

chrome.runtime.onMessage.addListener(function(message, sender, response) {
  response({status: 'success!'});
});

chrome.runtime.onConnect.addListener(function(messagePort) {
  messagePort.onMessage.addListener(function(message) {
    messagePort.postMessage({ status: 'received!'});
  });
});
