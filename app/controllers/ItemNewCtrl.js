"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.title = "New Todo";
	$scope.btnText = "Submit";
	$scope.newText = {};


	$scope.newTask = {
		assignedTo: "",
		dependencies: "",
		dueDate: "",
		isCompleted: false,
		location: "",
		task: "",
		urgency: "",
		uid: user
	};

	$scope.addNewItem = function(){
		ItemStorage.postNewItem($scope.newTask)
		.then(function(response){
			$location.url("items/list");
		});

		$scope.newTask = {};
	};
});
