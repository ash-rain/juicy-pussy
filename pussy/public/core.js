var juicy = angular.module('juicy', []);

function mainController($scope, $http) {
	$scope.formData = {};
	$http.get('/api/dns/request')
		.success(function (data) {
			$scope.dnsRequests = data;
			console.log(data);
		})
		.error(function (data) { console.log('Error: ' + data); });

	$scope.createDNSRequest = function () {
		$http.post('/api/dns/request', $scope.formData)
			.success(function (data) {
				$scope.formData = {};
				$scope.dnsRequests = data;
				console.log(data);
			})
			.error(function (data) { console.log('Error: ' + data); });
	};
	$scope.deleteDNSRequest = function (id) {
		$http.delete('/api/dns/request/' + id)
		.success(function (data) {
			$scope.dnsRequests = data;
			console.log(data);
		})
		.error(function (data) { console.log('Error: ' + data); });
	};
}