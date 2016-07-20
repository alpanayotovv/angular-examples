(function() {
	'use strict';

	angular
		.module('app.core')
		.service('storageService', storageService);

	function storageService() {
		var storateServices = {
			setWeatherData : setWeatherData,
			getWeatherData : getWeatherData
		}

		return storateServices;

		function setWeatherData(data) {
			localStorage.setItem('weatherAppData', JSON.stringify(data));
		}

		function getWeatherData() {
			return JSON.parse(localStorage.getItem('weatherAppData'));
		}
	}
})();