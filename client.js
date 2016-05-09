 var connection = new WebSocket('ws://127.0.0.1:42069');

document.getElementById('input').addEventListener('keydown', function(e) {
	if (e.keyCode === 13) {
		connection.send(document.getElementById('input').value);
		document.getElementById('input').value = '';
	}
});

 connection.onmessage = function(message) {
	 document.getElementById('stuff').innerHTML += "<br>" + message.data;
 };
