import { ScopeMethod, ComponentBase } from '../../componentbase'

export class NavigationEntriesCtrl extends ComponentBase  {
    static $inject = ["$scope"];

    private _id: string[];

    constructor($scope)  {
        super($scope);

        this._id = [];
        for (var i in $scope.model) {
            this._id.push(this.makeid(8));
        }
    }

    @ScopeMethod()
    public id(index) {
        return this._id[index];
    }
}

