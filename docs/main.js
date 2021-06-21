(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/muhamadsyahierul/Documents/Interview Documents/redOne/project/redOne-web-app/src/main.ts */"zUnb");


/***/ }),

/***/ "6s3Y":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/authentication/login/login.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n    <div class=\"form-section\">\n\n        <div class=\"form-content\">\n            <div class=\"icon\">\n                <h1> <span>Red</span> One</h1>\n            </div>\n            <form [formGroup]=\"loginForm\" autocomplete=\"off\" >\n\n                    <div class=\"input-container\">\n                        <span class=\"p-float-label\" style=\"display: unset;\">\n                            <input id=\"float-input\" type=\"text\" pInputText formControlName=\"username\">\n                            <label for=\"float-input\" class=\"float-label\">USERNAME</label>\n                        </span>\n                    </div>\n                    <div class=\"input-container\">\n                        <span class=\"p-float-label\" style=\"display: unset; \">\n                            <input id=\"float-input\" type=\"password\" pInputText formControlName=\"password\">\n                            <label for=\"float-input\" class=\"float-label\">PASSWORD</label>\n                        </span>\n                    </div>\n\n                    <p-button class=\"submit-btn\" type=\"submit\" label=\"LOGIN\" (click)=\"onLogin()\"></p-button>\n\n            </form>\n\n        </div>\n\n    </div>\n</div>\n\n<p-toast position=\"bottom-center\" key=\"bc\"></p-toast>");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "BDe2":
/*!*******************************************************!*\
  !*** ./src/app/view/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "KRyU");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ "Osb9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.ctorParameters = function () { return []; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "Dwei":
/*!********************************************************!*\
  !*** ./src/app/site-header/site-header.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".std-ta-center {\n  text-align: center;\n}\n\n.c-container {\n  padding: 0 5vw;\n}\n\n.g-container {\n  padding-left: 2vw;\n  padding-right: 2vw;\n}\n\n.g-show-for-desktop {\n  display: none;\n}\n\n.g-show-for-mobile {\n  display: unset;\n}\n\n.container .section-module {\n  padding: 5px;\n}\n\n@media (min-width: 768px) {\n  .g-show-for-desktop {\n    display: unset;\n  }\n\n  .g-show-for-mobile {\n    display: none;\n  }\n\n  .g-container {\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n\n  .g-section-module {\n    padding: 35px 0;\n    text-align: center;\n  }\n  .g-section-module .g-section-title {\n    display: block;\n    font-size: 44px;\n    font-weight: 600;\n  }\n  .g-section-module .g-section-desc {\n    display: block;\n    font-size: 23px;\n    margin-top: 5px;\n    font-weight: 200;\n  }\n}\n\n@media (min-width: 992px) {\n  .g-container {\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n}\n\n:host ::ng-deep .p-menubar {\n  position: fixed;\n  width: 100%;\n  border: none;\n  padding: 0;\n  background: none !important;\n  color: white;\n  z-index: 200;\n}\n\n:host ::ng-deep .p-menubar-welcome {\n  position: fixed;\n  width: 100%;\n  border: none;\n  padding: 15px;\n  background: white !important;\n  z-index: 200;\n}\n\n.nav-link:hover {\n  cursor: pointer;\n  font-weight: 300;\n}\n\n.white-color {\n  color: white !important;\n}\n\n.c-start-container {\n  position: relative;\n  padding: 10px 5vw;\n  font-size: 30px;\n  color: black;\n}\n\n.c-start-container .nav-link {\n  font-size: 20px;\n  margin-left: 50px;\n  text-decoration: none;\n}\n\n.c-start-container .title {\n  cursor: pointer;\n}\n\n.c-start-container .title span {\n  font-weight: bolder;\n}\n\n.navbar-container {\n  display: flex;\n  justify-content: space-between;\n  width: 100vw;\n  position: fixed;\n  z-index: 999;\n  background-color: white;\n}\n\n.navbar-container .bar-icon {\n  cursor: pointer;\n}\n\n.navbar-container .bar-icon .label {\n  cursor: pointer;\n  font-size: 20px;\n  margin-left: 10px;\n}\n\n.mobile-link-container {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  width: 100vw;\n  height: 110px;\n  background-color: white;\n  transition: all 0.4s ease-in;\n  padding-top: 10px;\n  top: -100px;\n  z-index: 998;\n}\n\n.mobile-link-container .nav-link {\n  padding: 10px 5vw;\n  font-size: 20px;\n  margin-left: 50px;\n  margin: 0;\n}\n\n.open-mobile-link-container {\n  top: 50px;\n  background-color: whitesmoke;\n}\n\n@media (min-width: 768px) {\n  .c-start-container {\n    position: relative;\n    padding: 20px 10vw;\n    font-size: 30px;\n    color: black;\n  }\n  .c-start-container .nav-link {\n    font-size: 20px;\n    margin-left: 50px;\n  }\n  .c-start-container .title {\n    cursor: pointer;\n  }\n  .c-start-container .title span {\n    font-weight: bolder;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9jdXN0b20tc3R5bGUuc2NzcyIsIi4uLy4uLy4uL3NpdGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGtCQUFBO0FDSko7O0FET0E7RUFDSSxjQUFBO0FDSko7O0FET0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0FDSko7O0FET0E7RUFDSSxjQUFBO0FDSko7O0FEUUk7RUFDSSxZQUFBO0FDTFI7O0FDaEJJO0VGMEJBO0lBQ0ksY0FBQTtFQ05OOztFRFFFO0lBQ0ksYUFBQTtFQ0xOOztFRFFFO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQ0xOOztFRFFFO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VDTE47RURPTTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNMVjtFRFFNO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNOVjtBQUNGOztBQ3pDSTtFRnNEQTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUNWTjtBQUNGOztBQXpESTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0FBMERSOztBQXZESTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSw0QkFBQTtFQUVBLFlBQUE7QUF1RFI7O0FBbERBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBcURKOztBQW5EQTtFQUNJLHVCQUFBO0FBc0RKOztBQXBEQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQXVESjs7QUF0REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQXdEUjs7QUF0REk7RUFDSSxlQUFBO0FBd0RSOztBQXZEUTtFQUNJLG1CQUFBO0FBeURaOztBQWpEQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBb0RKOztBQWxESTtFQUNJLGVBQUE7QUFvRFI7O0FBbkRRO0VBQ0EsZUFBQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQW9EWjs7QUEvQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWtESjs7QUFqREk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDSSxpQkFBQTtFQUNKLFNBQUE7QUFtRFI7O0FBaERBO0VBR0ksU0FBQTtFQUNBLDRCQUFBO0FBaURKOztBQzFJSTtFRDZGQTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQWlETjtFQWhETTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQWtEVjtFQWhETTtJQUNJLGVBQUE7RUFrRFY7RUFqRFU7SUFDSSxtQkFBQTtFQW1EZDtBQUNGIiwiZmlsZSI6InNpdGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xuXG4vLyBnIHN0YW5kIGZvciBnbG9iYWxcblxuLy9mb3IgbW9iaWxlXG4uc3RkLXRhLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgNXZ3O1xufVxuXG4uZy1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMnZ3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJ2dztcbn1cblxuLmctc2hvdy1mb3ItZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmctc2hvdy1mb3ItbW9iaWxlIHtcbiAgICBkaXNwbGF5OiB1bnNldDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgLnNlY3Rpb24tbW9kdWxlIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbn1cbi8vZm9yIHRhYmxldFxuQGluY2x1ZGUgc2NyZWVuLXRhYmxldCB7XG4gICAgLmctc2hvdy1mb3ItZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgIH1cbiAgICAuZy1zaG93LWZvci1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5nLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTB2dztcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTB2dztcbiAgICB9XG5cbiAgICAuZy1zZWN0aW9uLW1vZHVsZSB7XG4gICAgICAgIHBhZGRpbmc6IDM1cHggMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5nLXNlY3Rpb24tdGl0bGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgICAgfVxuICAgICAgICAuZy1zZWN0aW9uLWRlc2N7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy9mb3IgZGVza3RvcFxuQGluY2x1ZGUgc2NyZWVuLWRlc2t0b3Age1xuICAgIC5nLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTB2dztcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTB2dztcbiAgICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGUvZ2xvYmFscy5zY3NzJztcblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAucC1tZW51YmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMjAwO1xuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgICB9XG4gICAgLnAtbWVudWJhci13ZWxjb21lIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAvLyBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDgwcHg7XG4gICAgfVxufVxuXG4ubmF2LWxpbms6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ud2hpdGUtY29sb3J7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uYy1zdGFydC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDV2dztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgLm5hdi1saW5rIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vL25ld1xuXG4ubmF2YmFyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgIC5iYXItaWNvbntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAubGFiZWx7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbi5tb2JpbGUtbGluay1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAgYWxsIDAuNHMgZWFzZS1pbjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB0b3A6IC0xMDBweDtcbiAgICB6LWluZGV4OiA5OTg7XG4gICAgLm5hdi1saW5re1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDV2dztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxufVxuLm9wZW4tbW9iaWxlLWxpbmstY29udGFpbmVye1xuICAgIC8vIGhlaWdodDogMTUwcHg7XG5cbiAgICB0b3A6NTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG5AaW5jbHVkZSBzY3JlZW4tdGFibGV0e1xuICAgIC5jLXN0YXJ0LWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHZ3O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiQG1peGluIHNjcmVlbi1tb2JpbGUge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgICAgICBAY29udGVudFxuICAgIH1cbn07XG5cbkBtaXhpbiBzY3JlZW4tdGFibGV0IHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgQGNvbnRlbnRcbiAgICB9XG59O1xuXG5AbWl4aW4gc2NyZWVuLWRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59OyJdfQ== */");

/***/ }),

/***/ "KRyU":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/dashboard/dashboard.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<site-header></site-header>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "N0NM":
/*!******************************************************!*\
  !*** ./src/app/store/dashboard/dashboard.service.ts ***!
  \******************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data/data.json */ "WKMj");
var _shared_data_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/data/data.json */ "WKMj", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.getLov = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_shared_data_data_json__WEBPACK_IMPORTED_MODULE_3__);
    };
    DashboardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "Osb9":
/*!*********************************************************!*\
  !*** ./src/app/view/dashboard/dashboard.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin-top: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(primengConfig, route) {
        this.primengConfig = primengConfig;
        this.route = route;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.primengConfig.ripple = true;
    };
    AppComponent.ctorParameters = function () { return [
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeNGConfig"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeNGConfig"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "UebA":
/*!******************************************************!*\
  !*** ./src/app/site-header/site-header.component.ts ***!
  \******************************************************/
/*! exports provided: SiteHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteHeaderComponent", function() { return SiteHeaderComponent; });
/* harmony import */ var _raw_loader_site_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./site-header.component.html */ "dCia");
/* harmony import */ var _site_header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-header.component.scss */ "Dwei");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _store_auth_auth_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/auth/auth.action */ "pgBp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SiteHeaderComponent = /** @class */ (function () {
    function SiteHeaderComponent(router, store) {
        this.router = router;
        this.store = store;
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
    };
    SiteHeaderComponent.prototype.onLogout = function () {
        this.store.dispatch(new _store_auth_auth_action__WEBPACK_IMPORTED_MODULE_5__["LOGOUT"]);
        this.router.navigate(['login']);
    };
    SiteHeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    SiteHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'site-header',
            template: _raw_loader_site_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_site_header_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet ></router-outlet>\n");

/***/ }),

/***/ "WKMj":
/*!***************************************!*\
  !*** ./src/app/shared/data/data.json ***!
  \***************************************/
/*! exports provided: lov, user, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"lov\":{\"rewardType\":[{\"type\":1,\"desc\":\"Birthday Reward\",\"img\":\"assets/image/c-birthdy.png\"},{\"type\":2,\"desc\":\"Sales Reward\",\"img\":\"assets/image/c-sales.png\"},{\"type\":3,\"desc\":\"Bonus Reward\",\"img\":\"assets/image/c-bonus.jpeg\"}]},\"user\":[{\"username\":\"admin\",\"password\":\"password\",\"token\":\"jwpToken1\"},{\"username\":\"user\",\"password\":\"password\",\"token\":\"jwpToken2\"}]}");

/***/ }),

/***/ "WLxP":
/*!****************************************************************!*\
  !*** ./src/app/view/authentication/login/login.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".std-ta-center {\n  text-align: center;\n}\n\n.c-container {\n  padding: 0 5vw;\n}\n\n.g-container {\n  padding-left: 2vw;\n  padding-right: 2vw;\n}\n\n.g-show-for-desktop {\n  display: none;\n}\n\n.g-show-for-mobile {\n  display: unset;\n}\n\n.container .section-module {\n  padding: 5px;\n}\n\n@media (min-width: 768px) {\n  .g-show-for-desktop {\n    display: unset;\n  }\n\n  .g-show-for-mobile {\n    display: none;\n  }\n\n  .g-container {\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n\n  .g-section-module {\n    padding: 35px 0;\n    text-align: center;\n  }\n  .g-section-module .g-section-title {\n    display: block;\n    font-size: 44px;\n    font-weight: 600;\n  }\n  .g-section-module .g-section-desc {\n    display: block;\n    font-size: 23px;\n    margin-top: 5px;\n    font-weight: 200;\n  }\n}\n\n@media (min-width: 992px) {\n  .g-container {\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n}\n\n.body {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #243438;\n  background: linear-gradient(90deg, #243438 0%, #5f8789 100%, #fcb045 100%);\n}\n\n.form-section {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.form-section .form-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: calc(100% - 30vw);\n}\n\n.form-section .form-content .icon {\n  color: white;\n  margin-bottom: 30px;\n}\n\n.form-section .form-content .icon h1 span {\n  font-weight: 600;\n}\n\n.form-section .form-content .input-container {\n  border-top: 1px solid #a7a4a445;\n  padding: 25px 0;\n  text-align: center;\n}\n\n:host::ng-deep input:-webkit-autofill:hover,\n:host::ng-deep input:-webkit-autofill:focus,\n:host::ng-deep input:-webkit-autofill:active {\n  color: white !important;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n  -webkit-text-fill-color: white;\n  background-color: transparent;\n}\n\n:host::ng-deep .p-button {\n  text-align: center;\n  width: 300px !important;\n  padding: 15px;\n  font-weight: bolder;\n  color: #536d70;\n  background-color: white;\n}\n\n:host::ng-deep .p-button:enabled:hover {\n  background: white;\n  color: grey;\n}\n\n:host::ng-deep .p-inputtext .p-component ng-dirty ng-touched p-filled ng-valid {\n  background: transparent !important;\n}\n\n.p-inputtext {\n  background-color: transparent;\n  border: none;\n  width: 280px;\n  color: white;\n}\n\n.float-label {\n  font-weight: 500;\n  color: #b1b1b1;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9jdXN0b20tc3R5bGUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGtCQUFBO0FDSko7O0FET0E7RUFDSSxjQUFBO0FDSko7O0FET0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0FDSko7O0FET0E7RUFDSSxjQUFBO0FDSko7O0FEUUk7RUFDSSxZQUFBO0FDTFI7O0FDaEJJO0VGMEJBO0lBQ0ksY0FBQTtFQ05OOztFRFFFO0lBQ0ksYUFBQTtFQ0xOOztFRFFFO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQ0xOOztFRFFFO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VDTE47RURPTTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNMVjtFRFFNO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNOVjtBQUNGOztBQ3pDSTtFRnNEQTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUNWTjtBQUNGOztBQTFEQTtFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwRUFBQTtBQTJESjs7QUF4REE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUEyREo7O0FBekRJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQTJEUjs7QUExRFE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUE0RFo7O0FBMURnQjtFQUVJLGdCQUFBO0FBMkRwQjs7QUF2RFE7RUFDSSwrQkFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQXdEWjs7QUE3Q0k7OztFQUdBLHVCQUFBO0VBQ0EseURBQUE7RUFBQSxpREFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUFnREo7O0FBN0NJO0VBRUksa0JBQUE7RUFFQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQTZDUjs7QUEzQ0k7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUE2Q1I7O0FBeENJO0VBQ0ksa0NBQUE7QUEwQ1I7O0FBdENBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUF5Q0o7O0FBdkNBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQTBDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcblxuLy8gZyBzdGFuZCBmb3IgZ2xvYmFsXG5cbi8vZm9yIG1vYmlsZVxuLnN0ZC10YS1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDV2dztcbn1cblxuLmctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJ2dztcbiAgICBwYWRkaW5nLXJpZ2h0OiAydnc7XG59XG5cbi5nLXNob3ctZm9yLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5nLXNob3ctZm9yLW1vYmlsZSB7XG4gICAgZGlzcGxheTogdW5zZXQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIC5zZWN0aW9uLW1vZHVsZSB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG59XG4vL2ZvciB0YWJsZXRcbkBpbmNsdWRlIHNjcmVlbi10YWJsZXQge1xuICAgIC5nLXNob3ctZm9yLWRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICB9XG4gICAgLmctc2hvdy1mb3ItbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuZy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XG4gICAgfVxuXG4gICAgLmctc2VjdGlvbi1tb2R1bGUge1xuICAgICAgICBwYWRkaW5nOiAzNXB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuZy1zZWN0aW9uLXRpdGxle1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAgIH1cbiAgICAgICAgLmctc2VjdGlvbi1kZXNje1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vZm9yIGRlc2t0b3BcbkBpbmNsdWRlIHNjcmVlbi1kZXNrdG9wIHtcbiAgICAuZy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9nbG9iYWxzLnNjc3NcIjtcblxuLmJvZHkge1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDUyLCA1Nik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDM2LCA1MiwgNTYsIDEpIDAlLCByZ2JhKDk1LCAxMzUsIDEzNywgMSkgMTAwJSwgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDEwMCUpO1xufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5mb3JtLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzB2dyk7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhN2E0YTQ0NTtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC5zdWJtaXQtYnRue1xuICAgICAgICAvLyAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG46aG9zdDo6bmctZGVlcHtcblxuICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4gICAgLnAtYnV0dG9ue1xuICAgICAgICAvLyBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGNvbG9yOiByZ2IoODMsMTA5LDExMik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAucC1idXR0b246ZW5hYmxlZDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgLy8gYm9yZGVyLWNvbG9yOiAjMTE2ZmJmO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAucC1pbnB1dHRleHQgLnAtY29tcG9uZW50IG5nLWRpcnR5IG5nLXRvdWNoZWQgcC1maWxsZWQgbmctdmFsaWR7XG4gICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG5cbn1cbi5wLWlucHV0dGV4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uZmxvYXQtbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNiMWIxYjE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuIiwiQG1peGluIHNjcmVlbi1tb2JpbGUge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgICAgICBAY29udGVudFxuICAgIH1cbn07XG5cbkBtaXhpbiBzY3JlZW4tdGFibGV0IHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgQGNvbnRlbnRcbiAgICB9XG59O1xuXG5AbWl4aW4gc2NyZWVuLWRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59OyJdfQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _view_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/dashboard/dashboard.component */ "BDe2");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var _site_header_site_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./site-header/site-header.component */ "UebA");
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/skeleton */ "jeV5");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var _shared_module_store_store_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/module/store/store.module */ "dcdz");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _view_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view/authentication/login/login.component */ "czWC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__["InputNumberModule"],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__["InputSwitchModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_17__["MenubarModule"],
                primeng_skeleton__WEBPACK_IMPORTED_MODULE_16__["SkeletonModule"],
                _shared_module_store_store_module__WEBPACK_IMPORTED_MODULE_18__["StoreModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"]
            ],
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_9__["PrimeNGConfig"],
                primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _view_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _view_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _site_header_site_header_component__WEBPACK_IMPORTED_MODULE_15__["SiteHeaderComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "czWC":
/*!**************************************************************!*\
  !*** ./src/app/view/authentication/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "6s3Y");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ "WLxP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_store_auth_auth_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/auth/auth.action */ "pgBp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, store, fb, messageService, action) {
        this.router = router;
        this.store = store;
        this.fb = fb;
        this.messageService = messageService;
        this.action = action;
        this.unsubsribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    LoginComponent.prototype.initForm = function () {
        this.loginForm = this.fb.group({
            username: [''],
            password: ['']
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var payload = {
            username: this.loginForm.controls.username.value,
            password: this.loginForm.controls.password.value
        };
        this.store.dispatch(new src_app_store_auth_auth_action__WEBPACK_IMPORTED_MODULE_8__["LOGIN"](payload)).subscribe(function (state) {
            console.log('state; ', state);
            if (state.AuthState.isLoggedIn) {
                _this.router.navigate(['/']);
            }
            else {
                _this.messageService.add({ key: 'bc', severity: 'error', summary: 'Login failed', detail: 'Incorrect username or password' });
            }
        });
    };
    LoginComponent.prototype.showBottomCenter = function () {
        this.messageService.add({ key: 'bc', severity: 'error', summary: 'Info', detail: 'Message Content' });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.unsubsribe$.next();
        this.unsubsribe$.complete();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Actions"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Actions"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "dCia":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/site-header/site-header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar-container c-start-container p-shadow-7\" >\n    <div class=\"p-d-flex\">\n        <label class=\"title\" (click)=\"backToWelcome()\"> <span> Red</span> One </label>\n        <div class=\"g-show-for-desktop\">\n            <a routerLink='./home' class=\"nav-link\">Home</a> \n            <a  routerLink='./reward' class=\"nav-link\">Reward</a> \n        </div>\n    </div>\n    <div class=\"bar-icon\" (click)=\"onLogout()\" >\n        <i class=\"pi pi-sign-out\"  style=\"font-size: 1rem\">\n        </i>\n        <label class=\"label\">Logout</label>\n    </div>\n</div>\n");

/***/ }),

/***/ "dcdz":
/*!*****************************************************!*\
  !*** ./src/app/shared/module/store/store.module.ts ***!
  \*****************************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/logger-plugin */ "/wON");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/storage-plugin */ "2jgc");
/* harmony import */ var src_app_store_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/dashboard/dashboard.service */ "N0NM");
/* harmony import */ var src_app_store_dashboard_dashboard_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/dashboard/dashboard.state */ "eD2F");
/* harmony import */ var src_app_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/auth/auth.state */ "eL2y");
/* harmony import */ var src_app_store_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/auth/auth.service */ "hlQT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"].forRoot([
                    src_app_store_dashboard_dashboard_state__WEBPACK_IMPORTED_MODULE_6__["DashboardState"],
                    src_app_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_7__["AuthState"]
                ]),
                _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_3__["NgxsLoggerPluginModule"].forRoot(),
                _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsStoragePluginModule"].forRoot()
            ],
            exports: [
                _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"],
                _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_3__["NgxsLoggerPluginModule"],
            ],
            providers: [
                src_app_store_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"],
                src_app_store_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
            ]
        })
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "eD2F":
/*!****************************************************!*\
  !*** ./src/app/store/dashboard/dashboard.state.ts ***!
  \****************************************************/
/*! exports provided: DashboardStateModel, DashboardState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardStateModel", function() { return DashboardStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardState", function() { return DashboardState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dashboard_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.action */ "uvpQ");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.service */ "N0NM");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





var DashboardStateModel = /** @class */ (function () {
    function DashboardStateModel() {
    }
    return DashboardStateModel;
}());

var DashboardState = /** @class */ (function () {
    function DashboardState(dashboardService) {
        this.dashboardService = dashboardService;
    }
    DashboardState.rewardType = function (state) {
        var _a;
        return ((_a = state.lov) === null || _a === void 0 ? void 0 : _a.rewardType) ? state.lov.rewardType : [];
    };
    DashboardState.rewardList = function (state) {
        return state.rewardList ? state.rewardList : [];
    };
    DashboardState.prototype.getLov = function (_a) {
        var getState = _a.getState, patchState = _a.patchState, dispatch = _a.dispatch;
        return this.dashboardService.getLov().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            patchState({
                lov: res ? res.lov : null
            });
        }));
    };
    DashboardState.prototype.addReward = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var _state = getState();
        var uid = Math.floor(Math.random() * 9999);
        payload = __assign(__assign({}, payload), { id: uid });
        var _rewardList = _state.rewardList ? _state.rewardList : [];
        _rewardList.length < 0 ? __spreadArrays(_rewardList, [payload]) : _rewardList.push(payload);
        return patchState({
            rewardList: _rewardList
        });
    };
    DashboardState.prototype.deleteReward = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState, dispatch = _a.dispatch;
        var id = _b.id;
        var _state = getState();
        var _rewardList = _state.rewardList.filter(function (item) { return item.id != id; });
        return patchState({
            rewardList: _rewardList
        });
    };
    DashboardState.prototype.editReward = function (_a, _b) {
        var _c;
        var getState = _a.getState, patchState = _a.patchState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var _state = getState();
        var selectedType = ((_c = _state.lov) === null || _c === void 0 ? void 0 : _c.rewardType) ? _state.lov.rewardType.find(function (item, i) { return item.type == payload.type; }) : null;
        payload = __assign(__assign({}, payload), { img: selectedType.img, typeDesc: selectedType.desc });
        var _rewardIndex = _state.rewardList.findIndex(function (item) { return item.id == payload.id; });
        var _newRewardList = _state.rewardList;
        _newRewardList[_rewardIndex] = payload;
        return patchState({
            rewardList: _newRewardList
        });
    };
    DashboardState.ctorParameters = function () { return [
        { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] }
    ]; };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["GET_LOV"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DashboardState.prototype, "getLov", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["ADD_REWARD"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _dashboard_action__WEBPACK_IMPORTED_MODULE_3__["ADD_REWARD"]]),
        __metadata("design:returntype", void 0)
    ], DashboardState.prototype, "addReward", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["DELETE_REWARD"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _dashboard_action__WEBPACK_IMPORTED_MODULE_3__["DELETE_REWARD"]]),
        __metadata("design:returntype", void 0)
    ], DashboardState.prototype, "deleteReward", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["EDIT_REWARD"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _dashboard_action__WEBPACK_IMPORTED_MODULE_3__["EDIT_REWARD"]]),
        __metadata("design:returntype", void 0)
    ], DashboardState.prototype, "editReward", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DashboardStateModel]),
        __metadata("design:returntype", void 0)
    ], DashboardState, "rewardType", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DashboardStateModel]),
        __metadata("design:returntype", void 0)
    ], DashboardState, "rewardList", null);
    DashboardState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'DashboardState',
            defaults: {
                lov: null,
                rewardList: []
            }
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]])
    ], DashboardState);
    return DashboardState;
}());



/***/ }),

/***/ "eL2y":
/*!******************************************!*\
  !*** ./src/app/store/auth/auth.state.ts ***!
  \******************************************/
/*! exports provided: AuthStateModel, AuthState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStateModel", function() { return AuthStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthState", function() { return AuthState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.action */ "pgBp");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "hlQT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthStateModel = /** @class */ (function () {
    function AuthStateModel() {
    }
    return AuthStateModel;
}());

var AuthState = /** @class */ (function () {
    function AuthState(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthState.isAuthenticated = function (state) {
        return state.token && state.userInfo ? true : false;
    };
    AuthState.prototype.login = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState, dispatch = _a.dispatch;
        var payload = _b.payload;
        return this.authService.login(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var userList = res ? res.user : [];
            var user = userList && userList.length > 0 ? userList.find(function (user) { return user.username == payload.username && user.password == payload.password; }) : null;
            patchState({
                token: user ? user.token : null,
                userInfo: user ? user.username : null,
                isLoggedIn: user ? true : false
            });
        }));
    };
    AuthState.prototype.logout = function (_a) {
        var getState = _a.getState, patchState = _a.patchState, dispatch = _a.dispatch;
        return patchState({
            token: null,
            userInfo: null,
            isLoggedIn: false
        });
    };
    AuthState.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_auth_action__WEBPACK_IMPORTED_MODULE_4__["LOGIN"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _auth_action__WEBPACK_IMPORTED_MODULE_4__["LOGIN"]]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "login", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_auth_action__WEBPACK_IMPORTED_MODULE_4__["LOGOUT"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "logout", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [AuthStateModel]),
        __metadata("design:returntype", void 0)
    ], AuthState, "isAuthenticated", null);
    AuthState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
            name: 'AuthState',
            defaults: {
                token: null,
                userInfo: null,
                isLoggedIn: false,
            }
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthState);
    return AuthState;
}());



/***/ }),

/***/ "hlQT":
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data/data.json */ "WKMj");
var _shared_data_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/data/data.json */ "WKMj", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (payload) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_shared_data_data_json__WEBPACK_IMPORTED_MODULE_3__);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "pgBp":
/*!*******************************************!*\
  !*** ./src/app/store/auth/auth.action.ts ***!
  \*******************************************/
/*! exports provided: LOGIN, LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
var PREFIX = "AUTH";
var LOGIN = /** @class */ (function () {
    function LOGIN(payload) {
        this.payload = payload;
    }
    LOGIN.type = "[" + PREFIX + "] LOGIN";
    return LOGIN;
}());

var LOGOUT = /** @class */ (function () {
    function LOGOUT() {
    }
    LOGOUT.type = "[" + PREFIX + "] LOGOUT";
    return LOGOUT;
}());



/***/ }),

/***/ "uvpQ":
/*!*****************************************************!*\
  !*** ./src/app/store/dashboard/dashboard.action.ts ***!
  \*****************************************************/
/*! exports provided: GET_LOV, ADD_REWARD, DELETE_REWARD, EDIT_REWARD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOV", function() { return GET_LOV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REWARD", function() { return ADD_REWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REWARD", function() { return DELETE_REWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_REWARD", function() { return EDIT_REWARD; });
var PREFIX = "DASHBOARD";
var GET_LOV = /** @class */ (function () {
    function GET_LOV() {
    }
    GET_LOV.type = "[" + PREFIX + "] GET LOV";
    return GET_LOV;
}());

var ADD_REWARD = /** @class */ (function () {
    function ADD_REWARD(payload) {
        this.payload = payload;
    }
    ADD_REWARD.type = "[" + PREFIX + "] ADD REWARD";
    return ADD_REWARD;
}());

var DELETE_REWARD = /** @class */ (function () {
    function DELETE_REWARD(id) {
        this.id = id;
    }
    DELETE_REWARD.type = "[" + PREFIX + "] DELETE REWARD";
    return DELETE_REWARD;
}());

var EDIT_REWARD = /** @class */ (function () {
    function EDIT_REWARD(payload) {
        this.payload = payload;
    }
    EDIT_REWARD.type = "[" + PREFIX + "] EDIT REWARD";
    return EDIT_REWARD;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _view_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/authentication/login/login.component */ "czWC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'login',
        component: _view_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: '',
        loadChildren: function () { return __webpack_require__.e(/*! import() | view-dashboard-dashboard-module */ "view-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./view/dashboard/dashboard.module */ "N8VF")).then(function (m) { return m.DashboardModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".std-ta-center {\n  text-align: center;\n}\n\n.c-container {\n  padding: 0 5vw;\n}\n\n.g-container {\n  padding-left: 2vw;\n  padding-right: 2vw;\n}\n\n.g-show-for-desktop {\n  display: none;\n}\n\n.g-show-for-mobile {\n  display: unset;\n}\n\n.container .section-module {\n  padding: 5px;\n}\n\n@media (min-width: 768px) {\n  .g-show-for-desktop {\n    display: unset;\n  }\n\n  .g-show-for-mobile {\n    display: none;\n  }\n\n  .g-container {\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n\n  .g-section-module {\n    padding: 35px 0;\n    text-align: center;\n  }\n  .g-section-module .g-section-title {\n    display: block;\n    font-size: 44px;\n    font-weight: 600;\n  }\n  .g-section-module .g-section-desc {\n    display: block;\n    font-size: 23px;\n    margin-top: 5px;\n    font-weight: 200;\n  }\n}\n\n@media (min-width: 992px) {\n  .g-container {\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n}\n\n.sizes .p-inputtext {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n\n.sizes .p-inputtext:last-child {\n  margin-bottom: 0;\n}\n\n.p-field * {\n  display: block;\n}\n\n.custom-height {\n  display: flex;\n  margin-bottom: 20px;\n}\n\n@media (min-width: 768px) {\n  .custom-height {\n    margin-bottom: 90px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9jdXN0b20tc3R5bGUuc2NzcyIsIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtBQ0pKOztBRE9BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksYUFBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtBQ0pKOztBRFFJO0VBQ0ksWUFBQTtBQ0xSOztBQ2hCSTtFRjBCQTtJQUNJLGNBQUE7RUNOTjs7RURRRTtJQUNJLGFBQUE7RUNMTjs7RURRRTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUNMTjs7RURRRTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQ0xOO0VET007SUFDSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDTFY7RURRTTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDTlY7QUFDRjs7QUN6Q0k7RUZzREE7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VDVk47QUFDRjs7QUExREk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUE0RFI7O0FBMURRO0VBQ0ksZ0JBQUE7QUE0RFo7O0FBdkRBO0VBQ0ksY0FBQTtBQTBESjs7QUF4REE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUEyREo7O0FDckVJO0VEY0E7SUFDSSxtQkFBQTtFQTJETjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcblxuLy8gZyBzdGFuZCBmb3IgZ2xvYmFsXG5cbi8vZm9yIG1vYmlsZVxuLnN0ZC10YS1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDV2dztcbn1cblxuLmctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJ2dztcbiAgICBwYWRkaW5nLXJpZ2h0OiAydnc7XG59XG5cbi5nLXNob3ctZm9yLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5nLXNob3ctZm9yLW1vYmlsZSB7XG4gICAgZGlzcGxheTogdW5zZXQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIC5zZWN0aW9uLW1vZHVsZSB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG59XG4vL2ZvciB0YWJsZXRcbkBpbmNsdWRlIHNjcmVlbi10YWJsZXQge1xuICAgIC5nLXNob3ctZm9yLWRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICB9XG4gICAgLmctc2hvdy1mb3ItbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuZy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XG4gICAgfVxuXG4gICAgLmctc2VjdGlvbi1tb2R1bGUge1xuICAgICAgICBwYWRkaW5nOiAzNXB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuZy1zZWN0aW9uLXRpdGxle1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAgIH1cbiAgICAgICAgLmctc2VjdGlvbi1kZXNje1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vZm9yIGRlc2t0b3BcbkBpbmNsdWRlIHNjcmVlbi1kZXNrdG9wIHtcbiAgICAuZy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XG4gICAgfVxufVxuIiwiQGltcG9ydCAnLi8uLi9hc3NldHMvc3R5bGUvZ2xvYmFscy5zY3NzJztcclxuLnNpemVzIHtcclxuICAgIC5wLWlucHV0dGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucC1maWVsZCAqIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jdXN0b20taGVpZ2h0e1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5AaW5jbHVkZSBzY3JlZW4tdGFibGV0e1xyXG4gICAgLmN1c3RvbS1oZWlnaHR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOTBweDtcclxuICAgIH1cclxufVxyXG4iLCJAbWl4aW4gc2NyZWVuLW1vYmlsZSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIEBjb250ZW50XG4gICAgfVxufTtcblxuQG1peGluIHNjcmVlbi10YWJsZXQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBAY29udGVudFxuICAgIH1cbn07XG5cbkBtaXhpbiBzY3JlZW4tZGVza3RvcCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn07Il19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map