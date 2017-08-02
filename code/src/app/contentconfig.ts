import { StaticPagesCtrl } from './controller/StaticPagesCtrl'


export class ContentConfig {
    static $inject = ["$routeProvider", "$httpProvider", "$locationProvider"];

    constructor($routeProvider, $httpProvider, $locationProvider, wordpressProvider) {
        $routeProvider.when('/',
            {
                template: require('./views/index.html'),
                controller: StaticPagesCtrl
            })
            .when('/notfound', {
                template: require('./views/notfound.html'),
                controller: StaticPagesCtrl
            });

      //  $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('httpRequestInterceptor');
    }
}