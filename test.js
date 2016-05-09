var http = require('http');
var websocket = require('websocket');

var server = http.createServer(function(req, res) {
	// Nothing to see here
});
server.listen(42069);

var clients = [];

var socketServer = new websocket.server({
	httpServer: server
});

socketServer.on('request', function(request) {
	var connection = request.accept(null, request.origin);

	clients.push(connection);

	connection.on('message', function(message) {
		if (message.type === 'utf8') {
			console.log(message);
			var text = message.utf8Data;
			for (var i = 0; i < clients.length; i++) clients[i].sendUTF(text);
		}
	});
});
