var application = angular.module('ionic-starter', ['ionic','ngRoute'])
// Start ionic app
.run(function($ionicPlatform, $rootScope, $templateCache) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $rootScope.$on('$viewContentLoaded', function(){
      $templateCache.removeAll();
    });
  });

})

.config(function($routeProvider) {

	$routeProvider
  .when('/', {
    templateUrl: "app/partials/home-partial.html"
  }).when('/test', {
    controller: "testCtrl",
    templateUrl: "app/partials/test-partial.html"
  });

})




;
