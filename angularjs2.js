var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var angularjs2Component = (function () {
    function angularjs2Component() {
        this.name = "World";
    }
    angularjs2Component = __decorate([
        angular2_1.Component({
            selector: 'angularjs2'
        }),
        angular2_1.View({
            template: '<h1>Hello {{name}}<h1>'
        })
    ], angularjs2Component);
    return angularjs2Component;
})();
angular2_1.bootstrap(angularjs2Component);
