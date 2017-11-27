(function(angular) {
    'use strict';

    /**
     * myToDoMVC
     * 
     * 应用程序主模块
     */
    var myApp = angular.module("myToDoMVC", []);

    /**
     * 注册一个主要控制器
     */
    myApp.controller("MainController", ["$scope", function($scope) {
        // 文本框模型变量
        $scope.text = "";
        $scope.textTemp = "";
        var count = 0;

        $scope.filterCase = "";
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

        $scope.add = function() { // 添加任务
            if ($scope.text) { // 输入不为空时添加
                $scope.todos.push({
                    id: count++,
                    text: $scope.text,
                    completed: false
                });
                $scope.text = ""; // 清空输入框
            }
        };
        $scope.del = function(id) {
            for (var i = 0; i < $scope.todos.length; i++) {
                if ($scope.todos[i].id === id) {
                    $scope.todos.splice(i, 1);
                    break;
                }
            }
        };

        $scope.left = function() {
            var count = 0;
            for (var i = 0; i < $scope.todos.length; i++) {
                if (!$scope.todos[i].completed) {
                    count++;
                }
            };
            return count;
        };

        $scope.clearCompleted = function() {
            var arr = [];
            for (var i = 0; i < $scope.todos.length; i++) {
                if (!$scope.todos[i].completed) {
                    arr.push($scope.todos[i]);
                }
            };
            $scope.todos = arr;
        };

        $scope.existCompleted = function() {
            if ($scope.todos.length != $scope.left()) {
                return true;
            }
            return false;
        };

        $scope.currentEditing = -1;
        $scope.editing = function(id) {
            $scope.currentEditing = id;
            for (var i = 0; i < $scope.todos.length; i++) {
                if ($scope.todos[i].id === id) {
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

        $scope.toggleAll = function() {
            var flag = $scope.left() === 0 ? false : true;
            for (var i = 0; i < $scope.todos.length; i++) {
                $scope.todos[i].completed = flag;
            };
        };

        $scope.filterAll = function() {
            $scope.filterCase = "";
        };
        $scope.filterActive = function() {
            $scope.filterCase = { completed: false };
        };
        $scope.filterCompleted = function() {
            $scope.filterCase = { completed: true };
        };
    }]);


})(angular);