// The interval that holds to update notifications task
var updateNotificationsInterval = null;
var lastNotificationCount = 0;
var actions = {
	updateNotifications: function (request, callback) {
		$.ajax({
			type: 'GET'
			, url: 'https://www.reddit.com/message/unread.json'
		, }).done(function (data) {
			// Set the notifications and the current time
			localStorage.setItem('notifications', JSON.stringify(data));
			localStorage.setItem('lastUpdate', moment().format('X'));
			// Sets the notification count
			var nCount = 0;
			var messages = data.data.children;
			for (var i = 0; i < messages.length; i++) {
				if (messages[i].kind === "t4") nCount++;
			}
			if (nCount > 0) {
				localStorage.setItem('notificationCount', '' + nCount);
				chrome.browserAction.setBadgeBackgroundColor({
					color: [255, 123, 85, 255]
				});
				chrome.browserAction.setBadgeText({
					text: '' + nCount
				});
				lastNotificationCount = nCount;
			}
			else {
				localStorage.setItem('notificationCount', '0');
				chrome.browserAction.setBadgeText({
					text: ''
				});
				lastNotificationCount = 0;
			}
			if (callback) callback(data);
		});
	}
	, markAsRead: function (request, callback) {
		if (request.name.substring(0, 2) == "t4") {
			$.ajax({
				type: 'POST'
				, url: 'http://www.reddit.com/api/read_message'
				, data: {
					id: request.name
					, uh: request.modhash
				}
			}).done(function (data) {
				if (callback) callback();
			});
		}
		else {
			$.ajax({
				type: 'GET'
				, url: 'http://www.reddit.com/message/unread'
			, }).done(function (data) {
				if (callback) callback();
			});
		}
	}
	, initNotificationsInterval: function () {
		var inboxRefreshInterval = localStorage.getItem('inboxRefreshInterval');
		if(inboxRefreshInterval === null) {
			inboxRefreshInterval = 60000;
			localStorage['inboxRefreshInterval'] = inboxRefreshInterval;
		} else {
			inboxRefreshInterval = +inboxRefreshInterval;
		}
		if (updateNotificationsInterval) {
			clearInterval(updateNotificationsInterval);
		}
		updateNotificationsInterval = setInterval(actions.updateNotifications, inboxRefreshInterval);
	}
};
actions.initNotificationsInterval();

function onRequest(request, sender, callback) {
	if (actions.hasOwnProperty(request.action)) {
		actions[request.action](request, callback);
	}
}
// Wire up the listener.
chrome.extension.onRequest.addListener(onRequest);