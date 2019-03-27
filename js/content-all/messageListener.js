function yairMessageListener(request, sender, sendResponse) {
	console.log(request, sender, sendResponse);
	alert('Message received');
}
chrome.runtime.onMessage.addListener(yairMessageListener);