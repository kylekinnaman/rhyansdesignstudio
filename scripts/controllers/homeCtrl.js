menuBtn = document.querySelector('#menuBtn');
menuBtn.style.display = 'inline';
angular
	.module('app')
	.controller('homeCtrl', ['$scope', '$state', function($scope, $state, $interval) {
		if($state.current.name === 'menu') {
			menuBtn.style.opacity = 0;
		} else {
			menuBtn.style.opacity = 1;
		}
	}]);