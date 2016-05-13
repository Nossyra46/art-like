app.controller('contestController', function($scope){
	/*
		players: tableau d'objets 'participants'

		{
			nom
			photo_url
			nbr_votes
		}
	*/
	$scope.players = players;
	console.log($scope.players[0]);
	$scope.name = '';
	$scope.artwork = '';

	$scope.subscribe = function() {
		var player = {};
		player.name = $scope.name;
		player.url = "../img/"+$scope.artwork+".jpeg";
		player.nbrVotes = 0;
		console.log(player);
		$scope.players.push(player);
	}

	$scope.isFirst = function(player){
		return players.indexOf(player) % 3 === 0;
	}

});

var players = [
	{
		"name": "yoann56",
		"url": "../img/pic.jpg",
		"nbrVotes": 0
	},
	{
		"name": "celia91",
		"url": "../img/pic2.jpg",
		"nbrVotes": 0
	}];