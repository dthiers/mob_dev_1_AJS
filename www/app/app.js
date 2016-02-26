var application = angular.module('ionic-starter', ['ionic', 'ngRoute'])
// Start ionic app
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($routeProvider) {

	$routeProvider
	.when('/test' , {
		controller: "testCtrl",
		templateUrl: "app/partials/test.html"
	});

})




;
