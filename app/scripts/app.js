'use strict';

/**
 * @ngdoc overview
 * @name denglApp
 * @description
 * # denglApp
 *
 * Main module of the application.
 */
angular
  .module('denglApp', ["ui.router","ngCookies"]).constant("server","http://www.somenote.cn:1510").controller("app",["$scope","$http",function ($scope,$http,server) {
  }])
.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
	$stateProvider.state("a",{
		url:"/a",
		templateUrl:"views/about.html",
		controller:"one"
	}).state("b",{
		url:"/b",
		templateUrl:"views/zhuce.html",
		controller:"two"
	}).state("c",{
		url:"/c",
		templateUrl:"views/c.html",
		controller:"three"
	}).state("add",{
		url:"/add",
		templateUrl:"views/add.html",
		controller:"three"
	}).state("edit",{
		url:"/edit?id&title&content",
		templateUrl:"views/edit.html",
		controller:"three"
	})
	$urlRouterProvider.when('','/a');
}])
