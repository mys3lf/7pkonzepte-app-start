/**
 * IMPORTS
 */

import { ComponentBase } from '../shared/componentbase'
import { ScopeMethod } from '../shared/componentbase'
import { ContentConfig } from './contentconfig'
import { HttpRequestInterceptor } from '../shared/interceptors/httprequestinterceptor'

import '../shared/directives/directives';
/**J
 * CSS
 */
import './main.scss';
import { Injectable, IDirectiveFactory } from "angular";

class AppCtrl extends ComponentBase {
    static $inject = ["$rootScope", "$scope", "$interval", "$routeParams", "$http", "$q", "$location", "$timeout", "$window"];

    constructor($rootScope, $scope, private $interval, private $routeParams, $http, $q, $location, private $timeout, $window) {
        super($scope);
    }
}

export class App {
    public link: ($scope, element, $attrs) => void;
    public template = require("./main.html");

    public controller = AppCtrl;
    static $inject = [];
    public replace = true;

    public scope = {
        text: "="
    };

    constructor() {
        // It's important to add `link` to the prototype or you will end up with state issues.
        // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
        App.prototype.link = ($scope, $elm, $attrs) => {
            if (window["AOS"]) {
                window["AOS"].init();
            }
        }
    }

    public static Factory(): Injectable<IDirectiveFactory> {
        var directive = () => {
            return new App();
        };

        directive['$inject'] = [];

        return directive;
    }
}


var module = angular.module("app", ['custom-directives', 'ngRoute', 'ngMap', 'ngSanitize', 'ngAnimate'])
    .config(ContentConfig)
    .directive('app', App.Factory())
    .service("httpRequestInterceptor", ["$location", HttpRequestInterceptor]);
