export class ComponentBase {
    constructor(protected $scope) {
        this.registerScopeFunctions();
    }

    @ScopeMethod()
    public makeid(n: number) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < n; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    private registerScopeFunctions() {
        var callbackFunctions = { };

        for (let item in this) {
            if (typeof this[item] == "function") {
                if (this[item]["__registerScope"] === true) {

                    this.$scope[item] = (...args: any[]) => {
                        return this[item]["apply"](this, args);
                    };
                }
            }
        }
    }
}

export function ScopeMethod() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        target[propertyKey].__registerScope = true;
    }
}

if (!String.prototype["format"]) {
    String.prototype["format"] = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[0] != "undefined" && args[0][number] != 'undefined'
                ? args[0][number]
                : match
                ;
        });
    };
}