angular
	.module('weatherApp')
	.directive('cityWeatherController', cityWeatherController);

function cityWeatherController(){
	var directive = {
		restrict: 'E', 
		scope: {
			city: '@'
		}, 
		templateUrl: '/templates/weather.html',
		replace: true,
		controllerAs: 'cityWeatherCtrl', 
		controller: ['$http', function($http){
			console.log(city);
			var vm = this;

			$http({
				method: 'GET', 
				url: "api.openweathermap.org/data/2.5/weather?q=SanFrancisco,usa&appid=dc948b7930dd19728a0a45d7a78c89f8"
			}).then(onWeatherIndexSuccess, onError)

			function onWeatherIndexSuccess(response){
				console.log('request for city weather', response.data);
				vm.city = response.data.city;
			}

			function onError(error){
				console.log('There was an error', error);
			}
		}]
	}
	return directive;
};

