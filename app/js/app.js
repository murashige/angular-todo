'use strict';

var app = angular.module('myApp', []);

app.factory('todoList', function() {
  return {
    todos: [],
    reverseFlg: false,

    add: function(text) {
      var todo = {
        text: text
      };
      this.todos.push(todo);
    },

    delete: function(index) {
      this.todos.splice(index, 1);
    },

    sort: function() {
      var self = this;
      this.todos.sort(function(a, b) {
        return self.reverseFlg ? b.text.length - a.text.length : a.text.length - b.text.length;
      });
      this.reverseFlg = !this.reverseFlg;
    }
  };
});

app.controller('TodoCtrl', function($scope, todoList) {
  $scope.todoList = todoList;

  $scope.postTodo = function() {
    if($scope.todoText) {
      todoList.add($scope.todoText);
      $scope.todoText = '';
    }
  }
});

