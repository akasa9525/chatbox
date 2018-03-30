var express = require('express');
var ip = require('ip');
var app = express();
var http =  require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
app.use(express.static(path.resolve(__dirname+"/views")));
app.use("/styles",  express.static(__dirname + '/views/css'));
app.use("/scripts", express.static(__dirname + '/views/js'));


app.get('/', function (req,res){
	res.sendFile(path.resolve(__dirname+"/views/index.html"));
});


io.on('connection', function(socket){
	console.log('user connceted');
	socket.on('chat message', function(msg){
		io.emit('chat message',msg);
	});
	
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

http.listen(8080, function(){
	console.log(ip.address());
	console.log('listening on *:8080');
});