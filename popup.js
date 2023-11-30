document.getElementById("resizeFont").addEventListener("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tab = tabs[0];
    const fontSizeInput = document.getElementById("fontSizeInput");
    const fontSize = parseInt(fontSizeInput.value);

    if (!isNaN(fontSize) && fontSize > 0) {
      resizeFont(tab.id, fontSize);
    } else {
      alert("Input a valid font size.");
    }
  });
});

function resizeFont(tabId, fontSize) {
  chrome.tabs.sendMessage(tabId, { action: "resizeFont", fontSize: fontSize });
}
