'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.hello = "Hello!!";
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
