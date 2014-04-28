angular.module( 'app', [
  'templates-modules',
  // 'templates-common',
  'app.home',
  'ui.router',
  'ui.bootstrap'
])

.config( function appConfig ( $stateProvider, $urlRouterProvider, $locationProvider  ) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.tpl.html',
      data: {
        pageTitle: 'Home'
      }
    })
    ;

  $urlRouterProvider.otherwise( '/home' );

  $locationProvider.hashPrefix('!');
})

.run( function run () {
})

;