"use strict";

app.controller("ItemEditCtrl", function($scope, ItemStorage, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.title = "Edit Item";
	$scope.btnText = "Update";
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
		ItemStorage.updateItem($scope.newTask)
		.then(function(response){
			$location.url("items/list");
		});

		$scope.newTask = {};
	};
});