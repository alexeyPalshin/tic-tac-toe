import angular from 'angular';

var app = angular.module('ticTacToe', []);

// require all .js files in components folder
var req = require.context('./components', true, /.*\.js$/);
req.keys().forEach(req);
//
// require all .js files in services folder
var req = require.context('./services', true, /.*\.js$/);
req.keys().forEach(req);
//
// app.config(['$stateProvider', '$urlRouterProvider', '$urlServiceProvider', '$compileProvider', function ($stateProvider, $urlRouterProvider, $urlServiceProvider, $compileProvider) {
//     'ngInject';
//
//     $compileProvider.preAssignBindingsEnabled(true);
//
//     var state = {
//         name: 'init',
//         component: 'initComponent',
//         resolve: {
//             yandexuid: ['ApiService', function (ApiService) {
//                 'ngInject';
//                 return ApiService.loadUserInfo().then((data) => {
//                     console.log(data);
//                     return data;
//                 });
//             }]
//         },
//     };
//
//     var loginState = {
//         name: 'login',
//         component: 'loginComponent'
//     };
//     $stateProvider.state(loginState);
//     $stateProvider.state(state);
//     $urlServiceProvider.rules.otherwise({ state: 'init' });
// }]);
