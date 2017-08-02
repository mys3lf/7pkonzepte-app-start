import { ScopeMethod, ComponentBase } from '../../shared/componentbase'


export class StaticPagesCtrl extends ComponentBase {
    static $inject = ["$rootScope", "$scope", "$routeParams", "$http", "$q", "$location", "$interval", "$document"];

    private _id: string[];

    constructor($rootScope, $scope, $routeParams, $http, $q, $location, $interval, $document) {
        super($scope);
    }
}
