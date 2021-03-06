"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var typeahead_component_1 = require("./typeahead.component");
var TypeaheadModule = (function () {
    function TypeaheadModule() {
    }
    return TypeaheadModule;
}());
TypeaheadModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            typeahead_component_1.Typeahead
        ],
        exports: [
            typeahead_component_1.Typeahead
        ],
        providers: [],
        bootstrap: []
    })
], TypeaheadModule);
exports.TypeaheadModule = TypeaheadModule;
//# sourceMappingURL=typeahead.module.js.map