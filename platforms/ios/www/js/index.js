// index.js

console.log('index.js load');

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoadedイベントが発火しました');
}, false);

document.addEventListener('load', function () {
  console.log('loadイベントが発火しました');
}, false);


document.addEventListener('deviceready', function () {
  console.log('devicereadyイベントが発火しました');
}, false);


var app = angular.module("hello", []);

app.controller("IndexController", ['$timeout', function($timeout) {
  var self = this;

  document.addEventListener('deviceready', function() {
    console.log('deviceready event in angularjs');
    $timeout(function() {

      self.received = true;

    }, 0);
  }, false);

  this.count = 0;
  this.click = function() {
    this.count = this.count + 1;
  };

  console.log('angularjs controller');
}]);


