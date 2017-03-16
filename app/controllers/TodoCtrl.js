"use strict";

app.controller('TodoCtrl', function($scope, $location){
	$scope.welcome = "hello";
	$scope.showListView = true;
//	$scope.newTask = {};

	$scope.newItem = function(){
		// console.log("you clicked on new item");
		$location.url("/items/new");
	};

	$scope.allItem = function(){
		// console.log("you clicked on show all items");
		$location.url("/items/list");
	};
});
