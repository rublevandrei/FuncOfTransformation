'use strict';

angular.module('myApp', [])
    .controller('Main', MainController);

const testData = [
    {title: 'test1', value: 2},
    {title: 'test2', value: 3},
    {title: 'test1', value: 2},
    {title: 'test3', value: 5},
];

function MainController($scope) {

    $scope.testData = testData;

    $scope.output = function (data) {

        var output = {};

        for (var key in data) output[data[key].title] = data[key].value;

        return output;

    };;

}
