chrome.extension.onMessage.addListener(function (request, sender) {
	if (request == "show-page-action")
		chrome.pageAction.show(sender.tab.id);
});