(function getPosts() {
  var	xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var posts = JSON.parse(xhr.response);
      for(var i in posts.posts) {
        path = posts.posts[i].name; 
        pages[path] = {
          'content' : posts.posts[i].content_display,
          'gallery' : posts.posts[i].excerpt_display.split(',')
        };
        for (var image in pages[path].gallery ) {
          pages[path].gallery[image] = parseInt(pages[path].gallery[image], 10);
        }
//         getImages(path);
      }
      angular
        .module('app', ['ui.router', 'ngAnimate'])
        .config(
          [
            '$urlRouterProvider',
            '$stateProvider',
            '$locationProvider',
            function(a, b, c) {
              c.html5Mode(true);
              a.otherwise('/');
              b.state('home', {
                url: '/',
                views: {
                  'main': {
                    templateUrl: '/templates/home.html',
                    controller: function($scope){
                      postCtrl('home');
                    }
                  }
                }
              }).state('menu', {
                views: {
                  'menu': {
                    templateUrl: '/templates/menu.html'
                  }
                }
              }).state('services', {
                url: '/services',
                abstract: true,
                views: {
                  'main': {
                    templateUrl: '/templates/services.html'
                  }
                }
              }).state('services.index', {
                url: '/',
                views: {
                  'services': {
                    templateUrl: '/templates/services.index.html',
                    controller: function($scope){
                      postCtrl('services_index');
                    }
                  }
                },
              }).state('services.custom', {
                url: '/custom',
                views: {
                  'services': {
                    templateUrl: '/templates/services.custom.html',
                    controller: function($scope){
                      postCtrl('services_custom');
                    }
                  }
                }
              }).state('services.repairs', {
                url: '/repairs',
                views: {
                  'services': {
                    templateUrl: '/templates/services.repairs.html',
                    controller: function($scope){
                      postCtrl('services_repairs');
                    }
                  }
                }
              }).state('services.redesign', {
                url: '/redesign',
                views: {
                  'services': {
                    templateUrl: '/templates/services.redesign.html',
                    controller: function($scope){
                      postCtrl('services_redesign');
                    }
                  }
                }
              }).state('about', {
                url: '/about',
                views: {
                  'main': {
                    templateUrl: '/templates/about.html',
                    controller: function($scope){
                      postCtrl('about');
                    }
                  }
                },
              }
            );
          }
        ]
      );
    }
  };
  xhr.open('GET', 'http://www.rhyansdesignstudio.com/wp_api/v1/posts?post_type=page', false);
  xhr.send();
}());

(function getMedia() {
  var	xhr_gallery = new XMLHttpRequest();
  xhr_gallery.onreadystatechange = function() {
    if (xhr_gallery.readyState === 4 && xhr_gallery.status === 200) {
      var posts = JSON.parse(xhr_gallery.response);
      for(var i in posts.posts) {
        media[posts.posts[i].id] = posts.posts[i].content;
      }
    }
  };
  xhr_gallery.open('GET', 'http://www.rhyansdesignstudio.com/wp_api/v1/posts', false);
  xhr_gallery.send();
}());