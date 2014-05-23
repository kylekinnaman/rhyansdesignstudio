angular
  .module('app', ['ui.router', 'ngAnimate'])
  .config(
    [
      '$urlRouterProvider',
      '$stateProvider',
      function(a, b) {
        a.otherwise('/');
        b.state('home', {
          url: '/',
          views: {
            'main': {
              templateUrl: 'templates/home.html',
              controller: postCtrl('home')
            }
          }
        }).state('menu', {
          views: {
            'menu': {
              templateUrl: 'templates/menu.html'
            }
          }
        }).state('services', {
          url: '/services',
          abstract: true,
          views: {
            'main': {
              templateUrl: 'templates/services.html'
            }
          }
        }).state('services.index', {
          url: '/',
          views: {
            'services': {
              templateUrl: 'templates/services.index.html',
              controller: postCtrl('services.index')
            }
          },
        }).state('services.custom', {
          url: '/custom',
          views: {
            'services': {
              templateUrl: 'templates/services.custom.html',
              controller: postCtrl('services.custom')
            }
          }
        }).state('services.repairs', {
          url: '/repairs',
          views: {
            'services': {
              templateUrl: 'templates/services.repairs.html',
              controller: postCtrl('services.repairs')
            }
          }
        }).state('services.redesign', {
          url: '/redesign',
          views: {
            'services': {
              templateUrl: 'templates/services.redesign.html',
              controller: postCtrl('services.redesign')
            }
          }
        }).state('about', {
          url: '/about',
          views: {
            'main': {
              templateUrl: 'templates/about.html',
              controller: postCtrl('about')
            }
          },
        })
      }
    ]
  );
