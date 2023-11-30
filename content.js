chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "resizeFont") {
      const fontSize = request.fontSize;
      document.body.style.fontSize = `${fontSize}px`;
    }
  });
  