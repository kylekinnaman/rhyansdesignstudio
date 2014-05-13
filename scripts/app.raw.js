var firstView = document.getElementById('firstView');
firstView.parentNode.removeChild(firstView);

angular
  .module('app', [
    'ui.router',
    'ngAnimate'
  ])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          "main": {
            templateUrl: 'templates/home.html'
          }
        }
      })
      .state('menu', {
        views: {
          "menu": {
            templateUrl: 'templates/menu.html'
          }
        }
      })
      .state('services', {
        url: '/services',
        abstract: true,
        views: {
          "main": {
            templateUrl: 'templates/services.html'
          }
        }
      })
      .state('services.index', {
        url: '/',
        views: {
          "services": {
            templateUrl: 'templates/services.index.html'
          }
        }
      })
      .state('services.custom', {
        url: '/custom',
        views: {
          "services": {
            templateUrl: 'templates/services.custom.html'
          }
        }
      })
      .state('services.repairs', {
        url: '/repairs',
        views: {
          "services": {
            templateUrl: 'templates/services.repairs.html'
          }
        }
      })
      .state('services.redesign', {
        url: '/redesign',
        views: {
          "services": {
            templateUrl: 'templates/services.redesign.html'
          }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          "main": {
            templateUrl: 'templates/about.html'
          }
        }
      });
    }]);