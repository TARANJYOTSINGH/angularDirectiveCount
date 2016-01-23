(function() {
  'use strict';

  angular
    .module('app')
    .directive('irCount', irCount);

  irCount.$inject = [];

  /* @ngInject */
  function irCount() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      link: link,
      restrict: 'EA',
      scope: {
        count: '='
      },
      template: '<div> <button ng-click="addBox()">More Box</button>' +
        '<button ng-click="removeBox()">Less Box</button></div>' +
        '<p  class= "testdiv" ng-repeat="item in items track by $index">' +
        '{{$index + 1}}</p>'
    };
    return directive;

    function link(scope, element, attrs) {
      var total = scope.count;

      function init() {
        scope.items = new Array(scope.count);
      }

      init();

      scope.addBox = function() {
        scope.items.push(1)
      };

      scope.removeBox = function() {
        scope.items.pop();
      }
    }
  }


})();