chrome.tabs.query(
	{active: true, currentWindow: true},
	function(tabs) {
		chrome.tabs.sendMessage(
			tabs[0].id,
			"access-keys",
			buildPage
		);
	}
);

function buildPage(accessKeyInfo) {
	var template = document.getElementById("access-key-row");
	for(var i = 0; i < accessKeyInfo.length; i++) {
		var info = accessKeyInfo[i];
		var clone = template.content.cloneNode(true);
		clone.querySelector(".access-key-entry").setAttribute("data-key", info.key);
		clone.querySelector(".access-shortcut-key").textContent = info.key.toUpperCase();
		clone.querySelector(".access-info").textContent = info.text;
		template.parentNode.appendChild(clone);
	}
};