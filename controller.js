angular.module('Pokemon').controller("Controller", function($scope, Service) {
console.log('controller working');
$scope.displayPokemon = function(num) {
    Service.getPokemon($scope.num).then(function(response) {
        // console.log(response);
        $scope.response = response;
    });
};

});  // Closing controller tag.
