// CONFIG
// ============================================================
angular.module("jmaes", ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    .state('home', {
      url: '/',
      templateUrl: './app/views/home/home.html',
      controller: 'homeCtrl'
    })
    // SHOP STATE
    .state('shop', {
      url: '/shop',
      templateUrl: './app/views/shop/shop.html',
      controller: 'shopCtrl'
    })
    // about STATE
    .state('about', {
      url: '/about',
      templateUrl: './app/views/about/about.html',
      controller: 'aboutCtrl'
    })
    // account STATE
    .state('account', {
      url: '/account',
      templateUrl: './app/views/account/account.html',
      controller: 'accountCtrl'
    });






  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
})
