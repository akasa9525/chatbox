var app=angular.module('myApp',[]);
console.log("inside app.js");
app.controller('mainController',['$scope', function($scopr){
	var socket = io.connect();
	$scope.send = function(){
		socket.emit('chat message', $scope.message);
		$scope.message="";
	}
	
	socket.on('chat message', fucntion(msg){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(msg));
		document.getElementById("messages").appendChild(li);
	});
}]);