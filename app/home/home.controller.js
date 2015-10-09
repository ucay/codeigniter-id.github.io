/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// awards.controller.js
(function () {
    'use strict';
    angular.module('codeigniterIdApp')
            .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {

        $scope.$on('animIn', function () {
            console.log('Page1Ctrl: animIn');
        });

        $scope.$on('animOut', function () {
            console.log('Page1Ctrl: animOut');
        });

    }

})();

