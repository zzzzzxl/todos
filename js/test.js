(function(angular) {
    'use strict';

    var myApp = angular.module("myToDoMVC", []);

    myApp.controller("MainController", ["$scope", function($scope) {
        // 文本框模型变量
        $scope.text = "";
        $scope.textTemp = "";
        var count = 0;

        // 
        $scope.todos = [{
            id: count++,
            text: "吃饭",
            completed: false
        }, {
            id: count++,
            text: "睡觉",
            completed: true
        }, {
            id: count++,
            text: "打豆豆",
            completed: false
        }];

        $scope.currentEditing = -1;
        $scope.editing = function(id) {
            $scope.currentEditing = id;
            for (var i = 0; i < $scope.todos.length; i++) {
                if ($scope.todos[i].id === id) {
                    console.log($scope.textTemp);
                    $scope.textTemp = $scope.todos[i].text;
                    console.log($scope.todos[i].text);
                    console.log($scope.textTemp);
                    break;
                };
            };
        };
        $scope.save = function(id) {
            for (var i = 0; i < $scope.todos.length; i++) {
                if ($scope.todos[i].id === id) {
                    console.log($scope.textTemp);
                    $scope.todos[i].text = $scope.textTemp;
                    console.log($scope.textTemp);
                    console.log($scope.todos[i].text);
                    break;
                };
            };
            $scope.currentEditing = -1;
        };

        $scope.change = function() {
            console.log($scope.textTemp);
        }
    }]);

})(angular);