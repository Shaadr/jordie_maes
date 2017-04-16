// CONFIG
// ============================================================
angular.module("jmaes", ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './app/views/home/home.html',
      controller: 'homeCtrl'
    });

  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
})
