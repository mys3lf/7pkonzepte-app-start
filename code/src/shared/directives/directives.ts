
import { Navigation } from './navigation/navigation';
import { NavigationEntries } from './navigation/navigationEntries';


var cmModule = angular.module("custom-directives", [])
    .directive('navigation', Navigation.Factory())
    .directive('navigationEntries', NavigationEntries.Factory())
    ;
 