// INITILIZE DIRECTIVE
// ============================================================
angular.module("rmaes").directive('headerDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/header/headerTmpl.html',
    controller: 'headerCtrl'
  };
});
