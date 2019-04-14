"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng_chosen_1 = require('modules/ng-chosen/ng-chosen');
var strat_data_service_1 = require('modules/strat.data.service/strat.data.service');
var FilterPanel = (function () {
    function FilterPanel(data) {
        this.data = data;
        this.selects = [
            {
                label: "Issues",
                placeholder_text_multiple: "Select Issues",
                stop: true
            },
            {
                label: "Reporters",
                placeholder_text_multiple: "Select Reporters"
            },
            {
                label: "Publications",
                placeholder_text_multiple: "Select Publications"
            },
            {
                label: "Targets",
                placeholder_text_multiple: "Select Targets"
            },
            {
                label: "Clients",
                placeholder_text_multiple: "Select Clients"
            }
        ];
        this.data = data;
    }
    FilterPanel.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getOptions().subscribe(function (res) {
            _this.selects[0].options = res.Issue;
            _this.selects[1].options = res.Reporter;
            _this.selects[2].options = res.Source_Publication;
            _this.selects[3].options = res.Research_Subject;
            _this.selects[4].options = res.Client;
        });
    };
    __decorate([
        core_1.ViewChild(ng_chosen_1.NgChosen), 
        __metadata('design:type', (typeof (_a = typeof ng_chosen_1.NgChosen !== 'undefined' && ng_chosen_1.NgChosen) === 'function' && _a) || Object)
    ], FilterPanel.prototype, "chosen", void 0);
    FilterPanel = __decorate([
        core_1.Component({
            selector: 'filter-panel',
            template: "\n\t\t<div class=\"filter-panel\"><ng-chosen *ngFor=\"let select of selects\" [config]=\"select\" [options]=\"select.options\"></ng-chosen></div>\n\t",
            directives: [ng_chosen_1.NgChosen],
            styles: ["\n\t\t.filter-panel {padding-top: 10px;}\n\t"]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof strat_data_service_1.StratDataService !== 'undefined' && strat_data_service_1.StratDataService) === 'function' && _b) || Object])
    ], FilterPanel);
    return FilterPanel;
    var _a, _b;
}());
exports.FilterPanel = FilterPanel;
//# sourceMappingURL=filter-panel.js.map