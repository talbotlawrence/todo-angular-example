"use strict";

var app = angular.module("TodoApp", ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  // console.log("running isAuth");
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
    console.log("userExists", userExists);
        if (userExists){
      console.log("Authenticated, go ahead.");
            resolve();
        }else {
      console.log("Authentication rejected, go away.");
            reject();
        }
    });
});

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/login.html',
		controller:"UserCtrl"
		// resolve: {isAuth}
	}).
	when('/login', {
		templateUrl: 'partials/login.html',
		controller:"UserCtrl"
		// resolve: {isAuth}
	}).
	when('/logout', {
		templateUrl: 'partials/login.html',
		controller:"UserCtrl"
		// resolve: {isAuth}
	}).
	when('/items/list',{
		templateUrl: "partials/item-list.html",
		controller: 'ItemListCtrl'
		// resolve: {isAuth}
	}).
	when('/items/new', {
		templateUrl: "partials/item-form.html",
		controller: 'ItemNewCtrl'
		// resolve: {isAuth}
	}).
	when('/items/:itemId', {
		templateUrl: "partials/item-details.html",
		controller: "ItemViewCtrl"
		// resolve: {isAuth}
	}).
	when('/items/:itemId/edit', {
		templateUrl: "partials/item-form.html",
		controller: "ItemEditCtrl"
		// resolve: {isAuth}
	}).
	otherwise('/items/list');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databseURL: creds.databaseURL
	};
	
	firebase.initializeApp(authConfig);
});