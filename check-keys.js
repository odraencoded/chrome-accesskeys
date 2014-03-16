accessibleElements = document.querySelectorAll("[accesskey]");

if(accessibleElements.length > 0) {
	accessKeyInfo = [];
	for(var i=0; i<accessibleElements.length; i++) {
		var e = accessibleElements[i];
		accessKeyInfo.push({
			key: e.getAttribute("accesskey"),
			text: e.innerText
		});
	};
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request == "access-keys")
			sendResponse(accessKeyInfo);
	});
	chrome.extension.sendMessage("show-page-action");
}