import { NavigationEntriesCtrl } from './navigationEntriesCtrl'

export class NavigationEntries {
    public link: ($scope, element, $attrs) => void;
    public template = require("./navigationEntries.html");
    public scope = {
        model: "=",
        classes: "=",
        dropdownId: "="
    };

    public controller = NavigationEntriesCtrl;;
    public restrict = 'E';
    public replace = true;
    static $inject = [];

    constructor() {
        // It's important to add `link` to the prototype or you will end up with state issues.
        // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
        NavigationEntries.prototype.link = ($scope, $elm, $attrs) => {


        }
    }

    public static Factory() {
        var directive = () => {
            return new NavigationEntries();
        };

        directive['$inject'] = [];

        return directive;
    }
}


