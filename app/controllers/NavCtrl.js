"use strict";

app.controller("NavCtrl", function($scope, $window, SearchTermData){
	$scope.searchText = SearchTermData;
	$scope.isLoggedIn = false;

	firebase.auth().onAuthStateChanged(function(user){
		if (user) {
			$scope.isLoggedIn = true;
		} else	{
			$scope.isLoggedIn = false;
			$window.location.href = "#!/login";
		}
	});
});
