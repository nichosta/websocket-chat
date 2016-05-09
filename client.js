var page = {
    messages: document.getElementById('messages'),
    input: document.getElementById('input')
};

var connection = new WebSocket('ws://127.0.0.1:40065');

page.input.addEventListener('keydown', function(e) {
	if (e.keyCode === 13) {
		connection.send(page.input.value);
		page.input.value = '';
	}
});

connection.onmessage = function(message) {
	var bubble = document.createElement('p');
	bubble.appendChild(document.createTextNode(message.data));
	page.messages.appendChild(bubble);
};

document.body.onscroll = function() {
    document.body.scrollTop = document.body.height;
};

// Debug
setInterval(function() {
	var bubble = document.createElement('p');
	bubble.appendChild(document.createTextNode('this is a testy test'));
	page.messages.appendChild(bubble);
}, 100);