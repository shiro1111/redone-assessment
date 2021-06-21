(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-dashboard-dashboard-module"],{

/***/ "+FhW":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/dashboard/home/home.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body g-container\">\n\n    <div class=\"g-section-module\">\n\n        <label class=\"g-section-title\">\n            Home\n        </label>\n        <label class=\"g-section-desc\">\n            Dashboard for all the products\n        </label>\n    </div>\n</div>");

/***/ }),

/***/ "+oTs":
/*!*************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-focustrap.js ***!
  \*************************************************************************/
/*! exports provided: FocusTrap, FocusTrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapModule", function() { return FocusTrapModule; });
/* harmony import */ var _Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ "YyRF");







var FocusTrap = /*#__PURE__*/function () {
  function FocusTrap(el) {
    Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FocusTrap);

    this.el = el;
  }

  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FocusTrap, [{
    key: "onkeydown",
    value: function onkeydown(e) {
      if (this.pFocusTrapDisabled !== true) {
        e.preventDefault();
        var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getFocusableElements(this.el.nativeElement);

        if (focusableElements && focusableElements.length > 0) {
          if (!focusableElements[0].ownerDocument.activeElement) {
            focusableElements[0].focus();
          } else {
            var focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);

            if (e.shiftKey) {
              if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
            } else {
              if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
            }
          }
        }
      }
    }
  }]);

  return FocusTrap;
}();

FocusTrap.ɵfac = function FocusTrap_Factory(t) {
  return new (t || FocusTrap)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
};

FocusTrap.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FocusTrap,
  selectors: [["", "pFocusTrap", ""]],
  hostBindings: function FocusTrap_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.tab", function FocusTrap_keydown_tab_HostBindingHandler($event) {
        return ctx.onkeydown($event);
      })("keydown.shift.tab", function FocusTrap_keydown_shift_tab_HostBindingHandler($event) {
        return ctx.onkeydown($event);
      });
    }
  },
  inputs: {
    pFocusTrapDisabled: "pFocusTrapDisabled"
  }
});

FocusTrap.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }];
};

FocusTrap.propDecorators = {
  pFocusTrapDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  onkeydown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['keydown.tab', ['$event']]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['keydown.shift.tab', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FocusTrap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[pFocusTrap]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }];
  }, {
    onkeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['keydown.tab', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['keydown.shift.tab', ['$event']]
    }],
    pFocusTrapDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();

var FocusTrapModule = function FocusTrapModule() {
  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FocusTrapModule);
};

FocusTrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: FocusTrapModule
});
FocusTrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function FocusTrapModule_Factory(t) {
    return new (t || FocusTrapModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FocusTrapModule, {
    declarations: function declarations() {
      return [FocusTrap];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
    },
    exports: function exports() {
      return [FocusTrap];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FocusTrapModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      exports: [FocusTrap],
      declarations: [FocusTrap]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "/DgE":
/*!************************************************************!*\
  !*** ./src/app/view/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "4VgK");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "BDe2");
/* harmony import */ var src_app_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/guard/auth.guard */ "eRTK");
/* harmony import */ var _reward_reward_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reward/reward.component */ "r3+g");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [src_app_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: '',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            },
            {
                path: 'reward',
                component: _reward_reward_component__WEBPACK_IMPORTED_MODULE_6__["RewardComponent"]
            },
        ]
    },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "/RsI":
/*!**********************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js ***!
  \**********************************************************************/
/*! exports provided: Dialog, DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dom */ "YyRF");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/focustrap */ "+oTs");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/utils */ "t2ka");














var _c0 = ["titlebar"];
var _c1 = ["content"];
var _c2 = ["footer"];

function Dialog_div_0_div_1_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r9.id + "-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.header);
  }
}

function Dialog_div_0_div_1_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r10.id + "-label");
  }
}

function Dialog_div_0_div_1_div_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

var _c3 = function _c3() {
  return {
    "p-dialog-header-icon p-dialog-header-maximize p-link": true
  };
};

function Dialog_div_0_div_1_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Dialog_div_0_div_1_div_2_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return ctx_r14.maximize();
    })("keydown.enter", function Dialog_div_0_div_1_div_2_button_6_Template_button_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return ctx_r16.maximize();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r12.maximized ? ctx_r12.minimizeIcon : ctx_r12.maximizeIcon);
  }
}

var _c4 = function _c4() {
  return {
    "p-dialog-header-icon p-dialog-header-close p-link": true
  };
};

function Dialog_div_0_div_1_div_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Dialog_div_0_div_1_div_2_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return ctx_r17.close($event);
    })("keydown.enter", function Dialog_div_0_div_1_div_2_button_7_Template_button_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return ctx_r19.close($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r13.closeIcon);
  }
}

function Dialog_div_0_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_div_2_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r20.initDrag($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Dialog_div_0_div_1_div_2_span_2_Template, 2, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Dialog_div_0_div_1_div_2_span_3_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, Dialog_div_0_div_1_div_2_ng_container_4_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, Dialog_div_0_div_1_div_2_button_6_Template, 2, 3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, Dialog_div_0_div_1_div_2_button_7_Template, 2, 3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.maximizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.closable);
  }
}

function Dialog_div_0_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function Dialog_div_0_div_1_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function Dialog_div_0_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Dialog_div_0_div_1_div_7_ng_container_3_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.footerTemplate);
  }
}

function Dialog_div_0_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_div_8_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r24.initResize($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

var _c5 = function _c5(a1, a2, a3, a4) {
  return {
    "p-dialog p-component": true,
    "p-dialog-rtl": a1,
    "p-dialog-draggable": a2,
    "p-dialog-resizable": a3,
    "p-dialog-maximized": a4
  };
};

var _c6 = function _c6(a0, a1) {
  return {
    transform: a0,
    transition: a1
  };
};

var _c7 = function _c7(a1) {
  return {
    value: "visible",
    params: a1
  };
};

function Dialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r26.onAnimationStart($event);
    })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r28.onAnimationEnd($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Dialog_div_0_div_1_div_2_Template, 8, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, Dialog_div_0_div_1_ng_container_6_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, Dialog_div_0_div_1_div_7_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, Dialog_div_0_div_1_div_8_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](15, _c5, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](20, _c6, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-labelledby", ctx_r1.id + "-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "p-dialog-content")("ngStyle", ctx_r1.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.resizable);
  }
}

var _c8 = function _c8(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  return {
    "p-dialog-mask": true,
    "p-component-overlay": a1,
    "p-dialog-mask-scrollblocker": a2,
    "p-dialog-left": a3,
    "p-dialog-right": a4,
    "p-dialog-top": a5,
    "p-dialog-top-left": a6,
    "p-dialog-top-right": a7,
    "p-dialog-bottom": a8,
    "p-dialog-bottom-left": a9,
    "p-dialog-bottom-right": a10
  };
};

function Dialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Dialog_div_0_div_1_Template, 9, 25, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r0.maskStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](4, _c8, [ctx_r0.modal, ctx_r0.modal || ctx_r0.blockScroll, ctx_r0.position === "left", ctx_r0.position === "right", ctx_r0.position === "top", ctx_r0.position === "topleft" || ctx_r0.position === "top-left", ctx_r0.position === "topright" || ctx_r0.position === "top-right", ctx_r0.position === "bottom", ctx_r0.position === "bottomleft" || ctx_r0.position === "bottom-left", ctx_r0.position === "bottomright" || ctx_r0.position === "bottom-right"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.visible);
  }
}

var _c9 = ["*", [["p-header"]], [["p-footer"]]];
var _c10 = ["*", "p-header", "p-footer"];
var showAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
  transform: '{{transform}}',
  opacity: 0
}), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{transition}}')]);
var hideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{transition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
  transform: '{{transform}}',
  opacity: 0
}))]);

var Dialog = /*#__PURE__*/function () {
  function Dialog(el, renderer, zone, cd) {
    Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dialog);

    this.el = el;
    this.renderer = renderer;
    this.zone = zone;
    this.cd = cd;
    this.draggable = true;
    this.resizable = true;
    this.closeOnEscape = true;
    this.closable = true;
    this.showHeader = true;
    this.blockScroll = false;
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.minX = 0;
    this.minY = 0;
    this.focusOnShow = true;
    this.keepInViewport = true;
    this.focusTrap = true;
    this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    this.closeIcon = 'pi pi-times';
    this.minimizeIcon = 'pi pi-window-minimize';
    this.maximizeIcon = 'pi pi-window-maximize';
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onResizeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.id = Object(primeng_utils__WEBPACK_IMPORTED_MODULE_9__["UniqueComponentId"])();
    this._style = {};
    this._position = "center";
    this.transformOptions = "scale(0.7)";
  }

  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dialog, [{
    key: "positionLeft",
    get: function get() {
      return 0;
    },
    set: function set(_positionLeft) {
      console.log("positionLeft property is deprecated.");
    }
  }, {
    key: "positionTop",
    get: function get() {
      return 0;
    },
    set: function set(_positionTop) {
      console.log("positionTop property is deprecated.");
    }
  }, {
    key: "responsive",
    get: function get() {
      return false;
    },
    set: function set(_responsive) {
      console.log("Responsive property is deprecated.");
    }
  }, {
    key: "breakpoint",
    get: function get() {
      return 649;
    },
    set: function set(_breakpoint) {
      console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.");
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this = this;

      this.templates.forEach(function (item) {
        switch (item.getType()) {
          case 'header':
            _this.headerTemplate = item.template;
            break;

          case 'content':
            _this.contentTemplate = item.template;
            break;

          case 'footer':
            _this.footerTemplate = item.template;
            break;

          default:
            _this.contentTemplate = item.template;
            break;
        }
      });
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this.breakpoints) {
        this.createStyle();
      }
    }
  }, {
    key: "visible",
    get: function get() {
      return this._visible;
    },
    set: function set(value) {
      this._visible = value;

      if (this._visible && !this.maskVisible) {
        this.maskVisible = true;
      }
    }
  }, {
    key: "style",
    get: function get() {
      return this._style;
    },
    set: function set(value) {
      if (value) {
        this._style = Object.assign({}, value);
        this.originalStyle = value;
      }
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(value) {
      this._position = value;

      switch (value) {
        case 'topleft':
        case 'bottomleft':
        case 'left':
          this.transformOptions = "translate3d(-100%, 0px, 0px)";
          break;

        case 'topright':
        case 'bottomright':
        case 'right':
          this.transformOptions = "translate3d(100%, 0px, 0px)";
          break;

        case 'bottom':
          this.transformOptions = "translate3d(0px, 100%, 0px)";
          break;

        case 'top':
          this.transformOptions = "translate3d(0px, -100%, 0px)";
          break;

        default:
          this.transformOptions = "scale(0.7)";
          break;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      var focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.container, '[autofocus]');

      if (focusable) {
        this.zone.runOutsideAngular(function () {
          setTimeout(function () {
            return focusable.focus();
          }, 5);
        });
      }
    }
  }, {
    key: "close",
    value: function close(event) {
      this.visibleChange.emit(false);
      event.preventDefault();
    }
  }, {
    key: "enableModality",
    value: function enableModality() {
      var _this2 = this;

      if (this.closable && this.dismissableMask) {
        this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', function (event) {
          if (_this2.wrapper && _this2.wrapper.isSameNode(event.target)) {
            _this2.close(event);
          }
        });
      }

      if (this.modal) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'p-overflow-hidden');
      }
    }
  }, {
    key: "disableModality",
    value: function disableModality() {
      if (this.wrapper) {
        if (this.dismissableMask) {
          this.unbindMaskClickListener();
        }

        if (this.modal) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
        }

        if (!this.cd.destroyed) {
          this.cd.detectChanges();
        }
      }
    }
  }, {
    key: "maximize",
    value: function maximize() {
      this.maximized = !this.maximized;

      if (!this.modal && !this.blockScroll) {
        if (this.maximized) primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'p-overflow-hidden');else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
      }

      this.onMaximize.emit({
        'maximized': this.maximized
      });
    }
  }, {
    key: "unbindMaskClickListener",
    value: function unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.maskClickListener();
        this.maskClickListener = null;
      }
    }
  }, {
    key: "moveOnTop",
    value: function moveOnTop() {
      if (this.autoZIndex) {
        this.container.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex);
        this.wrapper.style.zIndex = String(this.baseZIndex + (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex - 1));
      }
    }
  }, {
    key: "createStyle",
    value: function createStyle() {
      if (!this.styleElement) {
        this.styleElement = document.createElement('style');
        this.styleElement.type = 'text/css';
        document.head.appendChild(this.styleElement);
        var innerHTML = '';

        for (var breakpoint in this.breakpoints) {
          innerHTML += "\n                    @media screen and (max-width: ".concat(breakpoint, ") {\n                        .p-dialog[").concat(this.id, "] {\n                            width: ").concat(this.breakpoints[breakpoint], " !important;\n                        }\n                    }\n                ");
        }

        this.styleElement.innerHTML = innerHTML;
      }
    }
  }, {
    key: "initDrag",
    value: function initDrag(event) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'p-dialog-header-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
        return;
      }

      if (this.draggable) {
        this.dragging = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.container.style.margin = '0';
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'p-unselectable-text');
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      if (this.focusTrap) {
        if (event.which === 9) {
          event.preventDefault();
          var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getFocusableElements(this.container);

          if (focusableElements && focusableElements.length > 0) {
            if (!focusableElements[0].ownerDocument.activeElement) {
              focusableElements[0].focus();
            } else {
              var focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);

              if (event.shiftKey) {
                if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
              } else {
                if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
              }
            }
          }
        }
      }
    }
  }, {
    key: "onDrag",
    value: function onDrag(event) {
      if (this.dragging) {
        var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterWidth(this.container);
        var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterHeight(this.container);
        var deltaX = event.pageX - this.lastPageX;
        var deltaY = event.pageY - this.lastPageY;
        var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOffset(this.container);
        var leftPos = offset.left + deltaX;
        var topPos = offset.top + deltaY;
        var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getViewport();
        this.container.style.position = 'fixed';

        if (this.keepInViewport) {
          if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
            this._style.left = leftPos + 'px';
            this.lastPageX = event.pageX;
            this.container.style.left = leftPos + 'px';
          }

          if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
            this._style.top = topPos + 'px';
            this.lastPageY = event.pageY;
            this.container.style.top = topPos + 'px';
          }
        } else {
          this.lastPageX = event.pageX;
          this.container.style.left = leftPos + 'px';
          this.lastPageY = event.pageY;
          this.container.style.top = topPos + 'px';
        }
      }
    }
  }, {
    key: "endDrag",
    value: function endDrag(event) {
      if (this.dragging) {
        this.dragging = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-unselectable-text');
        this.cd.detectChanges();
        this.onDragEnd.emit(event);
      }
    }
  }, {
    key: "resetPosition",
    value: function resetPosition() {
      this.container.style.position = '';
      this.container.style.left = '';
      this.container.style.top = '';
      this.container.style.margin = '';
    } //backward compatibility

  }, {
    key: "center",
    value: function center() {
      this.resetPosition();
    }
  }, {
    key: "initResize",
    value: function initResize(event) {
      if (this.resizable) {
        this.resizing = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'p-unselectable-text');
        this.onResizeInit.emit(event);
      }
    }
  }, {
    key: "onResize",
    value: function onResize(event) {
      if (this.resizing) {
        var deltaX = event.pageX - this.lastPageX;
        var deltaY = event.pageY - this.lastPageY;
        var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterWidth(this.container);
        var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterHeight(this.container);
        var contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterHeight(this.contentViewChild.nativeElement);
        var newWidth = containerWidth + deltaX;
        var newHeight = containerHeight + deltaY;
        var minWidth = this.container.style.minWidth;
        var minHeight = this.container.style.minHeight;
        var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOffset(this.container);
        var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getViewport();
        var hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);

        if (hasBeenDragged) {
          newWidth += deltaX;
          newHeight += deltaY;
        }

        if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
          this._style.width = newWidth + 'px';
          this.container.style.width = this._style.width;
        }

        if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
          this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';

          if (this._style.height) {
            this._style.height = newHeight + 'px';
            this.container.style.height = this._style.height;
          }
        }

        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
      }
    }
  }, {
    key: "resizeEnd",
    value: function resizeEnd(event) {
      if (this.resizing) {
        this.resizing = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-unselectable-text');
        this.onResizeEnd.emit(event);
      }
    }
  }, {
    key: "bindGlobalListeners",
    value: function bindGlobalListeners() {
      if (this.draggable) {
        this.bindDocumentDragListener();
        this.bindDocumentDragEndListener();
      }

      if (this.resizable) {
        this.bindDocumentResizeListeners();
      }

      if (this.closeOnEscape && this.closable) {
        this.bindDocumentEscapeListener();
      }
    }
  }, {
    key: "unbindGlobalListeners",
    value: function unbindGlobalListeners() {
      this.unbindDocumentDragListener();
      this.unbindDocumentDragEndListener();
      this.unbindDocumentResizeListeners();
      this.unbindDocumentEscapeListener();
    }
  }, {
    key: "bindDocumentDragListener",
    value: function bindDocumentDragListener() {
      var _this3 = this;

      this.zone.runOutsideAngular(function () {
        _this3.documentDragListener = _this3.onDrag.bind(_this3);
        window.document.addEventListener('mousemove', _this3.documentDragListener);
      });
    }
  }, {
    key: "unbindDocumentDragListener",
    value: function unbindDocumentDragListener() {
      if (this.documentDragListener) {
        window.document.removeEventListener('mousemove', this.documentDragListener);
        this.documentDragListener = null;
      }
    }
  }, {
    key: "bindDocumentDragEndListener",
    value: function bindDocumentDragEndListener() {
      var _this4 = this;

      this.zone.runOutsideAngular(function () {
        _this4.documentDragEndListener = _this4.endDrag.bind(_this4);
        window.document.addEventListener('mouseup', _this4.documentDragEndListener);
      });
    }
  }, {
    key: "unbindDocumentDragEndListener",
    value: function unbindDocumentDragEndListener() {
      if (this.documentDragEndListener) {
        window.document.removeEventListener('mouseup', this.documentDragEndListener);
        this.documentDragEndListener = null;
      }
    }
  }, {
    key: "bindDocumentResizeListeners",
    value: function bindDocumentResizeListeners() {
      var _this5 = this;

      this.zone.runOutsideAngular(function () {
        _this5.documentResizeListener = _this5.onResize.bind(_this5);
        _this5.documentResizeEndListener = _this5.resizeEnd.bind(_this5);
        window.document.addEventListener('mousemove', _this5.documentResizeListener);
        window.document.addEventListener('mouseup', _this5.documentResizeEndListener);
      });
    }
  }, {
    key: "unbindDocumentResizeListeners",
    value: function unbindDocumentResizeListeners() {
      if (this.documentResizeListener && this.documentResizeEndListener) {
        window.document.removeEventListener('mousemove', this.documentResizeListener);
        window.document.removeEventListener('mouseup', this.documentResizeEndListener);
        this.documentResizeListener = null;
        this.documentResizeEndListener = null;
      }
    }
  }, {
    key: "bindDocumentEscapeListener",
    value: function bindDocumentEscapeListener() {
      var _this6 = this;

      var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', function (event) {
        if (event.which == 27) {
          if (parseInt(_this6.container.style.zIndex) === primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex + _this6.baseZIndex) {
            _this6.close(event);
          }
        }
      });
    }
  }, {
    key: "unbindDocumentEscapeListener",
    value: function unbindDocumentEscapeListener() {
      if (this.documentEscapeListener) {
        this.documentEscapeListener();
        this.documentEscapeListener = null;
      }
    }
  }, {
    key: "appendContainer",
    value: function appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') document.body.appendChild(this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].appendChild(this.wrapper, this.appendTo);
      }
    }
  }, {
    key: "restoreAppend",
    value: function restoreAppend() {
      if (this.container && this.appendTo) {
        this.el.nativeElement.appendChild(this.wrapper);
      }
    }
  }, {
    key: "onAnimationStart",
    value: function onAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.container = event.element;
          this.wrapper = this.container.parentElement;
          this.appendContainer();
          this.moveOnTop();
          this.bindGlobalListeners();
          this.container.setAttribute(this.id, '');

          if (this.modal) {
            this.enableModality();
          }

          if (!this.modal && this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'p-overflow-hidden');
          }

          if (this.focusOnShow) {
            this.focus();
          }

          break;
      }
    }
  }, {
    key: "onAnimationEnd",
    value: function onAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          this.onContainerDestroy();
          this.onHide.emit({});
          break;

        case 'visible':
          this.onShow.emit({});
          break;
      }
    }
  }, {
    key: "onContainerDestroy",
    value: function onContainerDestroy() {
      this.unbindGlobalListeners();
      this.dragging = false;
      this.maskVisible = false;

      if (this.maximized) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
        this.maximized = false;
      }

      if (this.modal) {
        this.disableModality();
      }

      if (this.blockScroll) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
      }

      this.container = null;
      this.wrapper = null;
      this._style = this.originalStyle ? Object.assign({}, this.originalStyle) : {};
    }
  }, {
    key: "destroyStyle",
    value: function destroyStyle() {
      if (this.styleElement) {
        document.head.removeChild(this.styleElement);
        this.styleElement = null;
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.container) {
        this.restoreAppend();
        this.onContainerDestroy();
      }

      this.destroyStyle();
    }
  }]);

  return Dialog;
}();

Dialog.ɵfac = function Dialog_Factory(t) {
  return new (t || Dialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]));
};

Dialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: Dialog,
  selectors: [["p-dialog"]],
  contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__["Header"], true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__["Footer"], true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"], false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Dialog_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.headerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.footerViewChild = _t.first);
    }
  },
  inputs: {
    draggable: "draggable",
    resizable: "resizable",
    closeOnEscape: "closeOnEscape",
    closable: "closable",
    showHeader: "showHeader",
    blockScroll: "blockScroll",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    minX: "minX",
    minY: "minY",
    focusOnShow: "focusOnShow",
    keepInViewport: "keepInViewport",
    focusTrap: "focusTrap",
    transitionOptions: "transitionOptions",
    closeIcon: "closeIcon",
    minimizeIcon: "minimizeIcon",
    maximizeIcon: "maximizeIcon",
    positionLeft: "positionLeft",
    positionTop: "positionTop",
    responsive: "responsive",
    breakpoint: "breakpoint",
    visible: "visible",
    style: "style",
    position: "position",
    header: "header",
    contentStyle: "contentStyle",
    contentStyleClass: "contentStyleClass",
    modal: "modal",
    dismissableMask: "dismissableMask",
    rtl: "rtl",
    appendTo: "appendTo",
    breakpoints: "breakpoints",
    styleClass: "styleClass",
    maskStyleClass: "maskStyleClass",
    maximizable: "maximizable"
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide",
    visibleChange: "visibleChange",
    onResizeInit: "onResizeInit",
    onResizeEnd: "onResizeEnd",
    onDragEnd: "onDragEnd",
    onMaximize: "onMaximize"
  },
  ngContentSelectors: _c10,
  decls: 1,
  vars: 1,
  consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], ["container", ""], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["content", ""], [4, "ngTemplateOutlet"], ["class", "p-dialog-footer", 4, "ngIf"], ["class", "p-resizable-handle", "style", "z-index: 90;", 3, "mousedown", 4, "ngIf"], [1, "p-dialog-header", 3, "mousedown"], ["titlebar", ""], ["class", "p-dialog-title", 4, "ngIf"], [1, "p-dialog-header-icons"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"], ["footer", ""], [1, "p-resizable-handle", 2, "z-index", "90", 3, "mousedown"]],
  template: function Dialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Dialog_div_0_Template, 2, 15, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.maskVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_7__["FocusTrap"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["Ripple"]],
  styles: [".p-dialog-mask{align-items:center;background-color:transparent;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{align-items:center;display:flex;flex-shrink:0;justify-content:space-between}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{align-items:center;display:flex}.p-dialog .p-dialog-header-icon{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:transparent}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{height:100%;left:0!important;max-height:100%;top:0!important;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start}.p-dialog-top-right{align-items:flex-start;justify-content:flex-end}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{align-items:flex-end;justify-content:flex-start}.p-dialog-bottom-right{align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{align-items:center;display:flex}"],
  encapsulation: 2,
  data: {
    animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(showAnimation)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visible => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(hideAnimation)])])]
  },
  changeDetection: 0
});

Dialog.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }];
};

Dialog.propDecorators = {
  header: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  draggable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  resizable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  positionLeft: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  positionTop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  contentStyle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  contentStyleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  closeOnEscape: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  dismissableMask: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  rtl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  closable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  responsive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  appendTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  breakpoints: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  styleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  maskStyleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  showHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  breakpoint: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  blockScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  autoZIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  baseZIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  minX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  minY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  focusOnShow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  maximizable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  keepInViewport: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  focusTrap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  transitionOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  closeIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  minimizeIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  maximizeIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  headerFacet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["Header"]]
  }],
  footerFacet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["Footer"]]
  }],
  templates: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]]
  }],
  headerViewChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
    args: ['titlebar']
  }],
  contentViewChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
    args: ['content']
  }],
  footerViewChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
    args: ['footer']
  }],
  onShow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onHide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  visibleChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onResizeInit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onResizeEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onDragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onMaximize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  style: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Dialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'p-dialog',
      template: "\n        <div *ngIf=\"maskVisible\" [class]=\"maskStyleClass\"\n            [ngClass]=\"{'p-dialog-mask': true, 'p-component-overlay': this.modal, 'p-dialog-mask-scrollblocker': this.modal || this.blockScroll,\n                'p-dialog-left': position === 'left',\n                'p-dialog-right': position === 'right',\n                'p-dialog-top': position === 'top',\n                'p-dialog-top-left': position === 'topleft' || position === 'top-left',\n                'p-dialog-top-right': position === 'topright' || position === 'top-right',\n                'p-dialog-bottom': position === 'bottom',\n                'p-dialog-bottom-left': position === 'bottomleft' || position === 'bottom-left',\n                'p-dialog-bottom-right': position === 'bottomright' || position === 'bottom-right'}\">\n            <div #container [ngClass]=\"{'p-dialog p-component':true, 'p-dialog-rtl':rtl,'p-dialog-draggable':draggable,'p-dialog-resizable':resizable, 'p-dialog-maximized': maximized}\"\n                [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"visible\" pFocusTrap [pFocusTrapDisabled]=\"focusTrap === false\"\n                [@animation]=\"{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" [attr.aria-labelledby]=\"id + '-label'\">\n                <div #titlebar class=\"p-dialog-header\" (mousedown)=\"initDrag($event)\" *ngIf=\"showHeader\">\n                    <span [attr.id]=\"id + '-label'\" class=\"p-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                    <span [attr.id]=\"id + '-label'\" class=\"p-dialog-title\" *ngIf=\"headerFacet\">\n                        <ng-content select=\"p-header\"></ng-content>\n                    </span>\n                    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n                    <div class=\"p-dialog-header-icons\">\n                        <button *ngIf=\"maximizable\" type=\"button\" [ngClass]=\"{'p-dialog-header-icon p-dialog-header-maximize p-link':true}\" (click)=\"maximize()\" (keydown.enter)=\"maximize()\" tabindex=\"-1\" pRipple>\n                            <span class=\"p-dialog-header-maximize-icon\" [ngClass]=\"maximized ? minimizeIcon : maximizeIcon\"></span>\n                        </button>\n                        <button *ngIf=\"closable\" type=\"button\" [ngClass]=\"{'p-dialog-header-icon p-dialog-header-close p-link':true}\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\" tabindex=\"-1\" pRipple>\n                            <span class=\"p-dialog-header-close-icon\" [ngClass]=\"closeIcon\"></span>\n                        </button>\n                    </div>\n                </div>\n                <div #content [ngClass]=\"'p-dialog-content'\" [ngStyle]=\"contentStyle\" [class]=\"contentStyleClass\">\n                    <ng-content></ng-content>\n                    <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                </div>\n                <div #footer class=\"p-dialog-footer\" *ngIf=\"footerFacet || footerTemplate\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n                </div>\n                <div *ngIf=\"resizable\" class=\"p-resizable-handle\" style=\"z-index: 90;\" (mousedown)=\"initResize($event)\"></div>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(showAnimation)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visible => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(hideAnimation)])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      styles: [".p-dialog-mask{align-items:center;background-color:transparent;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{align-items:center;display:flex;flex-shrink:0;justify-content:space-between}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{align-items:center;display:flex}.p-dialog .p-dialog-header-icon{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:transparent}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{height:100%;left:0!important;max-height:100%;top:0!important;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start}.p-dialog-top-right{align-items:flex-start;justify-content:flex-end}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{align-items:flex-end;justify-content:flex-start}.p-dialog-bottom-right{align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{align-items:center;display:flex}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
    }];
  }, {
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    resizable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    closeOnEscape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    closable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    showHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    blockScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    minX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    minY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    focusOnShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    keepInViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    focusTrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    transitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    closeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    minimizeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    maximizeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    visibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onResizeInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onResizeEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onMaximize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    positionLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    positionTop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    breakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    contentStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    contentStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    modal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    dismissableMask: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    rtl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    breakpoints: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    maskStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    maximizable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    headerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["Header"]]
    }],
    footerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["Footer"]]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]]
    }],
    headerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
      args: ['titlebar']
    }],
    contentViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
      args: ['content']
    }],
    footerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
      args: ['footer']
    }]
  });
})();

var DialogModule = function DialogModule() {
  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DialogModule);
};

DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DialogModule
});
DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function DialogModule_Factory(t) {
    return new (t || DialogModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_7__["FocusTrapModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DialogModule, {
    declarations: function declarations() {
      return [Dialog];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_7__["FocusTrapModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"]];
    },
    exports: function exports() {
      return [Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DialogModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_7__["FocusTrapModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"]],
      exports: [Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      declarations: [Dialog]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "2art":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-galleria.js ***!
  \************************************************************************/
/*! exports provided: Galleria, GalleriaContent, GalleriaItem, GalleriaItemSlot, GalleriaModule, GalleriaThumbnails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galleria", function() { return Galleria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaContent", function() { return GalleriaContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaItem", function() { return GalleriaItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaItemSlot", function() { return GalleriaItemSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaModule", function() { return GalleriaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaThumbnails", function() { return GalleriaThumbnails; });
/* harmony import */ var _Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var _Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/utils */ "t2ka");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dom */ "YyRF");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");












var _c0 = ["mask"];

var _c1 = function _c1(a1) {
  return {
    "p-galleria-mask p-component-overlay": true,
    "p-galleria-visible": a1
  };
};

var _c2 = function _c2(a0) {
  return {
    "zIndex": a0
  };
};

function Galleria_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-galleriaContent", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("maskHide", function Galleria_div_0_div_1_Template_p_galleriaContent_maskHide_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r5.onMaskHide();
    })("activeItemChange", function Galleria_div_0_div_1_Template_p_galleriaContent_activeItemChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r7.onActiveItemChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r3.maskClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c1, ctx_r3.visible))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c2, ctx_r3.zIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("ngStyle", ctx_r3.containerStyle);
  }
}

function Galleria_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Galleria_div_0_div_1_Template, 3, 11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.visible);
  }
}

function Galleria_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-galleriaContent", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r8.onActiveItemChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex);
  }
}

function GalleriaContent_div_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r5.maskHide.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function GalleriaContent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-galleriaItemSlot", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("templates", ctx_r2.galleria.templates);
  }
}

function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-galleriaThumbnails", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r7.onActiveIndexChange($event);
    })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r9.stopSlideShow();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("containerId", ctx_r3.id)("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("templates", ctx_r3.galleria.templates)("numVisible", ctx_r3.galleria.numVisible)("responsiveOptions", ctx_r3.galleria.responsiveOptions)("circular", ctx_r3.galleria.circular)("isVertical", ctx_r3.isVertical())("contentHeight", ctx_r3.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r3.galleria.showThumbnailNavigators)("slideShowActive", ctx_r3.slideShowActive);
  }
}

function GalleriaContent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-galleriaItemSlot", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("templates", ctx_r4.galleria.templates);
  }
}

var _c3 = function _c3(a1, a2, a3) {
  return {
    "p-galleria p-component": true,
    "p-galleria-fullscreen": a1,
    "p-galleria-indicator-onitem": a2,
    "p-galleria-item-nav-onhover": a3
  };
};

var _c4 = function _c4() {
  return {};
};

function GalleriaContent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GalleriaContent_div_0_button_1_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GalleriaContent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p-galleriaItem", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r10.onActiveIndexChange($event);
    })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r12.startSlideShow();
    })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r13.stopSlideShow();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, GalleriaContent_div_0_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r0.galleriaClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](20, _c3, ctx_r0.galleria.fullScreen, ctx_r0.galleria.showIndicatorsOnItem, ctx_r0.galleria.showItemNavigatorsOnHover && !ctx_r0.galleria.fullScreen))("ngStyle", !ctx_r0.galleria.fullScreen ? ctx_r0.galleria.containerStyle : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.galleria.fullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.value)("activeIndex", ctx_r0.activeIndex)("circular", ctx_r0.galleria.circular)("templates", ctx_r0.galleria.templates)("showIndicators", ctx_r0.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r0.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r0.galleria.indicatorFacet)("captionFacet", ctx_r0.galleria.captionFacet)("showItemNavigators", ctx_r0.galleria.showItemNavigators)("autoPlay", ctx_r0.galleria.autoPlay)("slideShowActive", ctx_r0.slideShowActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.galleria.showThumbnails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.footerFacet);
  }
}

function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

function GalleriaItemSlot_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
  }
}

var _c5 = function _c5(a1) {
  return {
    "p-galleria-item-prev p-galleria-item-nav p-link": true,
    "p-disabled": a1
  };
};

function GalleriaItem_button_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GalleriaItem_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r4.navBackward($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
  }
}

var _c6 = function _c6(a1) {
  return {
    "p-galleria-item-next p-galleria-item-nav p-link": true,
    "p-disabled": a1
  };
};

function GalleriaItem_button_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GalleriaItem_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r6.navForward($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c6, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
  }
}

function GalleriaItem_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-galleriaItemSlot", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx_r2.activeItem)("templates", ctx_r2.templates);
  }
}

function GalleriaItem_ul_6_li_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "button", 16);
  }
}

var _c7 = function _c7(a1) {
  return {
    "p-galleria-indicator": true,
    "p-highlight": a1
  };
};

function GalleriaItem_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GalleriaItem_ul_6_li_1_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      var index_r10 = ctx.index;
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r12.onIndicatorClick(index_r10);
    })("mouseenter", function GalleriaItem_ul_6_li_1_Template_li_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      var index_r10 = ctx.index;
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r14.onIndicatorMouseEnter(index_r10);
    })("keydown.enter", function GalleriaItem_ul_6_li_1_Template_li_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      var index_r10 = ctx.index;
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r15.onIndicatorKeyDown(index_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GalleriaItem_ul_6_li_1_button_1_Template, 1, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-galleriaItemSlot", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var index_r10 = ctx.index;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c7, ctx_r8.isIndicatorItemActive(index_r10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r8.indicatorFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("index", index_r10)("templates", ctx_r8.templates);
  }
}

function GalleriaItem_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GalleriaItem_ul_6_li_1_Template, 3, 6, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.value);
  }
}

var _c8 = ["itemsContainer"];

var _c9 = function _c9(a1) {
  return {
    "p-galleria-thumbnail-prev p-link": true,
    "p-disabled": a1
  };
};

var _c10 = function _c10(a1, a2) {
  return {
    "p-galleria-thumbnail-prev-icon pi": true,
    "pi-chevron-left": a1,
    "pi-chevron-up": a2
  };
};

function GalleriaThumbnails_button_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r4.navBackward($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c9, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c10, !ctx_r0.isVertical, ctx_r0.isVertical));
  }
}

var _c11 = function _c11(a1, a2, a3, a4) {
  return {
    "p-galleria-thumbnail-item": true,
    "p-galleria-thumbnail-item-current": a1,
    "p-galleria-thumbnail-item-active": a2,
    "p-galleria-thumbnail-item-start": a3,
    "p-galleria-thumbnail-item-end": a4
  };
};

function GalleriaThumbnails_div_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var index_r7 = ctx.index;
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r8.onItemClick(index_r7);
    })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var index_r7 = ctx.index;
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r10.onItemClick(index_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-galleriaItemSlot", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r6 = ctx.$implicit;
    var index_r7 = ctx.index;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](4, _c11, ctx_r2.activeIndex === index_r7, ctx_r2.isItemActive(index_r7), ctx_r2.firstItemAciveIndex() === index_r7, ctx_r2.lastItemActiveIndex() === index_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", ctx_r2.getTabIndex(index_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r6)("templates", ctx_r2.templates);
  }
}

var _c12 = function _c12(a1) {
  return {
    "p-galleria-thumbnail-next p-link": true,
    "p-disabled": a1
  };
};

var _c13 = function _c13(a1, a2) {
  return {
    "p-galleria-thumbnail-next-icon pi": true,
    "pi-chevron-right": a1,
    "pi-chevron-down": a2
  };
};

function GalleriaThumbnails_button_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r11.navForward($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c12, ctx_r3.isNavForwardDisabled()))("disabled", ctx_r3.isNavForwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c13, !ctx_r3.isVertical, ctx_r3.isVertical));
  }
}

var _c14 = function _c14(a0) {
  return {
    "height": a0
  };
};

var Galleria = /*#__PURE__*/function () {
  function Galleria(element, cd) {
    Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Galleria);

    this.element = element;
    this.cd = cd;
    this.fullScreen = false;
    this.numVisible = 3;
    this.showItemNavigators = false;
    this.showThumbnailNavigators = true;
    this.showItemNavigatorsOnHover = false;
    this.changeItemOnIndicatorHover = false;
    this.circular = false;
    this.autoPlay = false;
    this.transitionInterval = 4000;
    this.showThumbnails = true;
    this.thumbnailsPosition = "bottom";
    this.verticalThumbnailViewPortHeight = "300px";
    this.showIndicators = false;
    this.showIndicatorsOnItem = false;
    this.indicatorsPosition = "bottom";
    this.baseZIndex = 0;
    this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this._visible = false;
    this._activeIndex = 0;
  }

  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Galleria, [{
    key: "activeIndex",
    get: function get() {
      return this._activeIndex;
    },
    set: function set(activeIndex) {
      this._activeIndex = activeIndex;
    }
  }, {
    key: "visible",
    get: function get() {
      return this._visible;
    },
    set: function set(visible) {
      this._visible = visible;
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this = this;

      this.templates.forEach(function (item) {
        switch (item.getType()) {
          case 'header':
            _this.headerFacet = item.template;
            break;

          case 'footer':
            _this.footerFacet = item.template;
            break;

          case 'indicator':
            _this.indicatorFacet = item.template;
            break;

          case 'caption':
            _this.captionFacet = item.template;
            break;
        }
      });
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(simpleChanges) {
      if (this.fullScreen && simpleChanges.visible) {
        if (simpleChanges.visible.currentValue) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].addClass(document.body, 'p-overflow-hidden');
          this.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].zindex);
        } else {
          primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
        }
      }
    }
  }, {
    key: "onMaskHide",
    value: function onMaskHide() {
      this.visible = false;
      this.visibleChange.emit(false);
    }
  }, {
    key: "onActiveItemChange",
    value: function onActiveItemChange(index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        this.activeIndexChange.emit(index);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.fullScreen) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
      }
    }
  }]);

  return Galleria;
}();

Galleria.ɵfac = function Galleria_Factory(t) {
  return new (t || Galleria)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
};

Galleria.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: Galleria,
  selectors: [["p-galleria"]],
  contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"], false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Galleria_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
    }
  },
  inputs: {
    fullScreen: "fullScreen",
    numVisible: "numVisible",
    showItemNavigators: "showItemNavigators",
    showThumbnailNavigators: "showThumbnailNavigators",
    showItemNavigatorsOnHover: "showItemNavigatorsOnHover",
    changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
    circular: "circular",
    autoPlay: "autoPlay",
    transitionInterval: "transitionInterval",
    showThumbnails: "showThumbnails",
    thumbnailsPosition: "thumbnailsPosition",
    verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight",
    showIndicators: "showIndicators",
    showIndicatorsOnItem: "showIndicatorsOnItem",
    indicatorsPosition: "indicatorsPosition",
    baseZIndex: "baseZIndex",
    activeIndex: "activeIndex",
    visible: "visible",
    id: "id",
    value: "value",
    responsiveOptions: "responsiveOptions",
    maskClass: "maskClass",
    containerClass: "containerClass",
    containerStyle: "containerStyle"
  },
  outputs: {
    activeIndexChange: "activeIndexChange",
    visibleChange: "visibleChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["windowed", ""], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["mask", ""], [3, "value", "activeIndex", "ngStyle", "maskHide", "activeItemChange"], [3, "value", "activeIndex", "activeItemChange"]],
  template: function Galleria_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, Galleria_div_0_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Galleria_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fullScreen)("ngIfElse", _r1);
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], GalleriaContent];
  },
  styles: [".p-galleria-content,.p-galleria-item-wrapper{display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:flex;height:100%;position:relative}.p-galleria-item-nav{align-items:center;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-grid-row-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{align-items:center;display:flex;justify-content:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{align-items:center;cursor:pointer;display:flex;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{align-items:center;display:flex;justify-content:center}.p-galleria-indicator>button{align-items:center;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:flex;position:absolute;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:transparent;height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{align-items:center;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"],
  encapsulation: 2,
  changeDetection: 0
});

Galleria.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
  }];
};

Galleria.propDecorators = {
  activeIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  fullScreen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  numVisible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  responsiveOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  showItemNavigators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  showThumbnailNavigators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  showItemNavigatorsOnHover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  changeItemOnIndicatorHover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  circular: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  autoPlay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  transitionInterval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  showThumbnails: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  thumbnailsPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  verticalThumbnailViewPortHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  showIndicators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  showIndicatorsOnItem: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  indicatorsPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  baseZIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  maskClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  containerClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  containerStyle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  mask: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
    args: ['mask', {
      static: false
    }]
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  activeIndexChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  visibleChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  templates: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"]]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Galleria, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'p-galleria',
      template: "\n        <div *ngIf=\"fullScreen;else windowed\">\n            <div *ngIf=\"visible\" #mask [ngClass]=\"{'p-galleria-mask p-component-overlay':true, 'p-galleria-visible': this.visible}\" [class]=\"maskClass\" [ngStyle]=\"{'zIndex':zIndex}\">\n                <p-galleriaContent [value]=\"value\" [activeIndex]=\"activeIndex\" (maskHide)=\"onMaskHide()\" (activeItemChange)=\"onActiveItemChange($event)\" [ngStyle]=\"containerStyle\"></p-galleriaContent>\n            </div>\n        </div>\n\n        <ng-template #windowed>\n            <p-galleriaContent [value]=\"value\" [activeIndex]=\"activeIndex\" (activeItemChange)=\"onActiveItemChange($event)\"></p-galleriaContent>\n        </ng-template>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
      styles: [".p-galleria-content,.p-galleria-item-wrapper{display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:flex;height:100%;position:relative}.p-galleria-item-nav{align-items:center;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-grid-row-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{align-items:center;display:flex;justify-content:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{align-items:center;cursor:pointer;display:flex;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{align-items:center;display:flex;justify-content:center}.p-galleria-indicator>button{align-items:center;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:flex;position:absolute;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:transparent;height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{align-items:center;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
    }];
  }, {
    fullScreen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    numVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    showItemNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    showThumbnailNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    showItemNavigatorsOnHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    changeItemOnIndicatorHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    circular: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    autoPlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    transitionInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    showThumbnails: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    thumbnailsPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    verticalThumbnailViewPortHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    showIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    showIndicatorsOnItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    indicatorsPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    activeIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    visibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    responsiveOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    maskClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    containerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    containerStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    mask: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
      args: ['mask', {
        static: false
      }]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"]]
    }]
  });
})();

var GalleriaContent = /*#__PURE__*/function () {
  function GalleriaContent(galleria, cd) {
    Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GalleriaContent);

    this.galleria = galleria;
    this.cd = cd;
    this.value = [];
    this.maskHide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.activeItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.id = this.galleria.id || Object(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["UniqueComponentId"])();
    this.slideShowActicve = false;
    this._activeIndex = 0;
    this.slideShowActive = true;
  }

  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GalleriaContent, [{
    key: "activeIndex",
    get: function get() {
      return this._activeIndex;
    },
    set: function set(activeIndex) {
      this._activeIndex = activeIndex;
    }
  }, {
    key: "galleriaClass",
    value: function galleriaClass() {
      var thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.galleria.thumbnailsPosition);
      var indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('p-galleria-indicators', this.galleria.indicatorsPosition);
      return (this.galleria.containerClass ? this.galleria.containerClass + " " : '') + (thumbnailsPosClass ? thumbnailsPosClass + " " : '') + (indicatorPosClass ? indicatorPosClass + " " : '');
    }
  }, {
    key: "startSlideShow",
    value: function startSlideShow() {
      var _this2 = this;

      this.interval = setInterval(function () {
        var activeIndex = _this2.galleria.circular && _this2.value.length - 1 === _this2.activeIndex ? 0 : _this2.activeIndex + 1;

        _this2.onActiveIndexChange(activeIndex);

        _this2.activeIndex = activeIndex;
      }, this.galleria.transitionInterval);
      this.slideShowActive = true;
    }
  }, {
    key: "stopSlideShow",
    value: function stopSlideShow() {
      if (this.interval) {
        clearInterval(this.interval);
      }

      this.slideShowActive = false;
    }
  }, {
    key: "getPositionClass",
    value: function getPositionClass(preClassName, position) {
      var positions = ['top', 'left', 'bottom', 'right'];
      var pos = positions.find(function (item) {
        return item === position;
      });
      return pos ? "".concat(preClassName, "-").concat(pos) : '';
    }
  }, {
    key: "isVertical",
    value: function isVertical() {
      return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
    }
  }, {
    key: "onActiveIndexChange",
    value: function onActiveIndexChange(index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        this.activeItemChange.emit(this.activeIndex);
      }
    }
  }]);

  return GalleriaContent;
}();

GalleriaContent.ɵfac = function GalleriaContent_Factory(t) {
  return new (t || GalleriaContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Galleria), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
};

GalleriaContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GalleriaContent,
  selectors: [["p-galleriaContent"]],
  inputs: {
    value: "value",
    activeIndex: "activeIndex"
  },
  outputs: {
    maskHide: "maskHide",
    activeItemChange: "activeItemChange"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive", "onActiveIndexChange", "startSlideShow", "stopSlideShow"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [1, "p-galleria-close-icon", "pi", "pi-times"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]],
  template: function GalleriaContent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GalleriaContent_div_0_Template, 7, 25, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.value && ctx.value.length > 0);
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], GalleriaItem, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["Ripple"], GalleriaItemSlot, GalleriaThumbnails];
  },
  encapsulation: 2,
  changeDetection: 0
});

GalleriaContent.ctorParameters = function () {
  return [{
    type: Galleria
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
  }];
};

GalleriaContent.propDecorators = {
  activeIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  maskHide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  activeItemChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GalleriaContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'p-galleriaContent',
      template: "\n        <div [attr.id]=\"id\" *ngIf=\"value && value.length > 0\" [ngClass]=\"{'p-galleria p-component': true, 'p-galleria-fullscreen': this.galleria.fullScreen, \n            'p-galleria-indicator-onitem': this.galleria.showIndicatorsOnItem, 'p-galleria-item-nav-onhover': this.galleria.showItemNavigatorsOnHover && !this.galleria.fullScreen}\"\n            [ngStyle]=\"!galleria.fullScreen ? galleria.containerStyle : {}\" [class]=\"galleriaClass()\">\n            <button *ngIf=\"galleria.fullScreen\" type=\"button\" class=\"p-galleria-close p-link\" (click)=\"maskHide.emit()\" pRipple>\n                <span class=\"p-galleria-close-icon pi pi-times\"></span>\n            </button>\n            <div *ngIf=\"galleria.templates && galleria.headerFacet\" class=\"p-galleria-header\">\n                <p-galleriaItemSlot type=\"header\" [templates]=\"galleria.templates\"></p-galleriaItemSlot>\n            </div>\n            <div class=\"p-galleria-content\">\n                <p-galleriaItem [value]=\"value\" [activeIndex]=\"activeIndex\" [circular]=\"galleria.circular\" [templates]=\"galleria.templates\" (onActiveIndexChange)=\"onActiveIndexChange($event)\" \n                    [showIndicators]=\"galleria.showIndicators\" [changeItemOnIndicatorHover]=\"galleria.changeItemOnIndicatorHover\" [indicatorFacet]=\"galleria.indicatorFacet\"\n                    [captionFacet]=\"galleria.captionFacet\" [showItemNavigators]=\"galleria.showItemNavigators\" [autoPlay]=\"galleria.autoPlay\" [slideShowActive]=\"slideShowActive\"\n                    (startSlideShow)=\"startSlideShow()\" (stopSlideShow)=\"stopSlideShow()\"></p-galleriaItem>\n\n                <p-galleriaThumbnails *ngIf=\"galleria.showThumbnails\" [containerId]=\"id\" [value]=\"value\" (onActiveIndexChange)=\"onActiveIndexChange($event)\" [activeIndex]=\"activeIndex\" [templates]=\"galleria.templates\"\n                    [numVisible]=\"galleria.numVisible\" [responsiveOptions]=\"galleria.responsiveOptions\" [circular]=\"galleria.circular\"\n                    [isVertical]=\"isVertical()\" [contentHeight]=\"galleria.verticalThumbnailViewPortHeight\" [showThumbnailNavigators]=\"galleria.showThumbnailNavigators\"\n                    [slideShowActive]=\"slideShowActive\" (stopSlideShow)=\"stopSlideShow()\"></p-galleriaThumbnails>\n            </div>\n            <div *ngIf=\"galleria.templates && galleria.footerFacet\" class=\"p-galleria-footer\">\n                <p-galleriaItemSlot type=\"footer\" [templates]=\"galleria.templates\"></p-galleriaItemSlot>\n            </div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [{
      type: Galleria
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    maskHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    activeItemChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

var GalleriaItemSlot = /*#__PURE__*/function () {
  function GalleriaItemSlot() {
    Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GalleriaItemSlot);
  }

  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GalleriaItemSlot, [{
    key: "item",
    get: function get() {
      return this._item;
    },
    set: function set(item) {
      var _this3 = this;

      this._item = item;

      if (this.templates) {
        this.templates.forEach(function (item) {
          if (item.getType() === _this3.type) {
            switch (_this3.type) {
              case 'item':
              case 'caption':
              case 'thumbnail':
                _this3.context = {
                  $implicit: _this3.item
                };
                _this3.contentTemplate = item.template;
                break;
            }
          }
        });
      }
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this4 = this;

      this.templates.forEach(function (item) {
        if (item.getType() === _this4.type) {
          switch (_this4.type) {
            case 'item':
            case 'caption':
            case 'thumbnail':
              _this4.context = {
                $implicit: _this4.item
              };
              _this4.contentTemplate = item.template;
              break;

            case 'indicator':
              _this4.context = {
                $implicit: _this4.index
              };
              _this4.contentTemplate = item.template;
              break;

            default:
              _this4.context = {};
              _this4.contentTemplate = item.template;
              break;
          }
        }
      });
    }
  }]);

  return GalleriaItemSlot;
}();

GalleriaItemSlot.ɵfac = function GalleriaItemSlot_Factory(t) {
  return new (t || GalleriaItemSlot)();
};

GalleriaItemSlot.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GalleriaItemSlot,
  selectors: [["p-galleriaItemSlot"]],
  inputs: {
    item: "item",
    templates: "templates",
    index: "index",
    type: "type"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function GalleriaItemSlot_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contentTemplate);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
  encapsulation: 2,
  changeDetection: 0
});
GalleriaItemSlot.propDecorators = {
  templates: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  index: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  item: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GalleriaItemSlot, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'p-galleriaItemSlot',
      template: "\n        <ng-container *ngIf=\"contentTemplate\">\n            <ng-container *ngTemplateOutlet=\"contentTemplate; context: context\"></ng-container>\n        </ng-container>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
    }]
  }], null, {
    item: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

var GalleriaItem = /*#__PURE__*/function () {
  function GalleriaItem() {
    Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GalleriaItem);

    this.circular = false;
    this.showItemNavigators = false;
    this.showIndicators = true;
    this.slideShowActive = true;
    this.changeItemOnIndicatorHover = true;
    this.autoPlay = false;
    this.startSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this._activeIndex = 0;
  }

  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GalleriaItem, [{
    key: "activeIndex",
    get: function get() {
      return this._activeIndex;
    },
    set: function set(activeIndex) {
      this._activeIndex = activeIndex;
      this.activeItem = this.value[this._activeIndex];
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this.autoPlay) {
        this.startSlideShow.emit();
      }
    }
  }, {
    key: "next",
    value: function next() {
      var nextItemIndex = this.activeIndex + 1;
      var activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
      this.onActiveIndexChange.emit(activeIndex);
    }
  }, {
    key: "prev",
    value: function prev() {
      var prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
      var activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.onActiveIndexChange.emit(activeIndex);
    }
  }, {
    key: "stopTheSlideShow",
    value: function stopTheSlideShow() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.stopSlideShow.emit();
      }
    }
  }, {
    key: "navForward",
    value: function navForward(e) {
      this.stopTheSlideShow();
      this.next();

      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "navBackward",
    value: function navBackward(e) {
      this.stopTheSlideShow();
      this.prev();

      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "onIndicatorClick",
    value: function onIndicatorClick(index) {
      this.stopTheSlideShow();
      this.onActiveIndexChange.emit(index);
    }
  }, {
    key: "onIndicatorMouseEnter",
    value: function onIndicatorMouseEnter(index) {
      if (this.changeItemOnIndicatorHover) {
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
      }
    }
  }, {
    key: "onIndicatorKeyDown",
    value: function onIndicatorKeyDown(index) {
      this.stopTheSlideShow();
      this.onActiveIndexChange.emit(index);
    }
  }, {
    key: "isNavForwardDisabled",
    value: function isNavForwardDisabled() {
      return !this.circular && this.activeIndex === this.value.length - 1;
    }
  }, {
    key: "isNavBackwardDisabled",
    value: function isNavBackwardDisabled() {
      return !this.circular && this.activeIndex === 0;
    }
  }, {
    key: "isIndicatorItemActive",
    value: function isIndicatorItemActive(index) {
      return this.activeIndex === index;
    }
  }]);

  return GalleriaItem;
}();

GalleriaItem.ɵfac = function GalleriaItem_Factory(t) {
  return new (t || GalleriaItem)();
};

GalleriaItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GalleriaItem,
  selectors: [["p-galleriaItem"]],
  inputs: {
    circular: "circular",
    showItemNavigators: "showItemNavigators",
    showIndicators: "showIndicators",
    slideShowActive: "slideShowActive",
    changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
    autoPlay: "autoPlay",
    activeIndex: "activeIndex",
    value: "value",
    templates: "templates",
    indicatorFacet: "indicatorFacet",
    captionFacet: "captionFacet"
  },
  outputs: {
    startSlideShow: "startSlideShow",
    stopSlideShow: "stopSlideShow",
    onActiveIndexChange: "onActiveIndexChange"
  },
  decls: 7,
  vars: 6,
  consts: [[1, "p-galleria-item-wrapper"], [1, "p-galleria-item-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["type", "item", 1, "p-galleria-item", 3, "item", "templates"], ["class", "p-galleria-caption", 4, "ngIf"], ["class", "p-galleria-indicators p-reset", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [1, "p-galleria-item-prev-icon", "pi", "pi-chevron-left"], [1, "p-galleria-item-next-icon", "pi", "pi-chevron-right"], [1, "p-galleria-caption"], ["type", "caption", 3, "item", "templates"], [1, "p-galleria-indicators", "p-reset"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter"], ["type", "button", "tabIndex", "-1", "class", "p-link", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1", 1, "p-link"]],
  template: function GalleriaItem_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GalleriaItem_button_2_Template, 2, 4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-galleriaItemSlot", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, GalleriaItem_button_4_Template, 2, 4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, GalleriaItem_div_5_Template, 2, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, GalleriaItem_ul_6_Template, 2, 1, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx.activeItem)("templates", ctx.templates);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.captionFacet);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showIndicators);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], GalleriaItemSlot, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
  encapsulation: 2,
  changeDetection: 0
});
GalleriaItem.propDecorators = {
  circular: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  showItemNavigators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  showIndicators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  slideShowActive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  changeItemOnIndicatorHover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  autoPlay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  templates: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  indicatorFacet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  captionFacet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  startSlideShow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  stopSlideShow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  onActiveIndexChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  activeIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GalleriaItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'p-galleriaItem',
      template: "\n        <div class=\"p-galleria-item-wrapper\">\n            <div class=\"p-galleria-item-container\">\n                <button *ngIf=\"showItemNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-item-prev p-galleria-item-nav p-link': true, 'p-disabled': this.isNavBackwardDisabled()}\" (click)=\"navBackward($event)\" [disabled]=\"isNavBackwardDisabled()\" pRipple>\n                    <span class=\"p-galleria-item-prev-icon pi pi-chevron-left\"></span>\n                </button>\n                <p-galleriaItemSlot type=\"item\" [item]=\"activeItem\" [templates]=\"templates\" class=\"p-galleria-item\"></p-galleriaItemSlot>\n                <button *ngIf=\"showItemNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-item-next p-galleria-item-nav p-link': true,'p-disabled': this.isNavForwardDisabled()}\" (click)=\"navForward($event)\"  [disabled]=\"isNavForwardDisabled()\" pRipple>\n                    <span class=\"p-galleria-item-next-icon pi pi-chevron-right\"></span>\n                </button>\n                <div class=\"p-galleria-caption\" *ngIf=\"captionFacet\">\n                    <p-galleriaItemSlot type=\"caption\" [item]=\"activeItem\" [templates]=\"templates\"></p-galleriaItemSlot>\n                </div>\n            </div>\n            <ul *ngIf=\"showIndicators\" class=\"p-galleria-indicators p-reset\">\n                <li *ngFor=\"let item of value; let index = index;\" tabindex=\"0\"\n                    (click)=\"onIndicatorClick(index)\" (mouseenter)=\"onIndicatorMouseEnter(index)\" (keydown.enter)=\"onIndicatorKeyDown(index)\"\n                    [ngClass]=\"{'p-galleria-indicator': true,'p-highlight': isIndicatorItemActive(index)}\">\n                    <button type=\"button\" tabIndex=\"-1\" class=\"p-link\" *ngIf=\"!indicatorFacet\">\n                    </button>\n                    <p-galleriaItemSlot type=\"indicator\" [index]=\"index\" [templates]=\"templates\"></p-galleriaItemSlot>\n                </li>\n            </ul>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [];
  }, {
    circular: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    showItemNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    showIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    slideShowActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    changeItemOnIndicatorHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    autoPlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    startSlideShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    stopSlideShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    onActiveIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    indicatorFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    captionFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

var GalleriaThumbnails = /*#__PURE__*/function () {
  function GalleriaThumbnails(cd) {
    Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GalleriaThumbnails);

    this.cd = cd;
    this.isVertical = false;
    this.slideShowActive = false;
    this.circular = false;
    this.contentHeight = "300px";
    this.showThumbnailNavigators = true;
    this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.startPos = null;
    this.thumbnailsStyle = null;
    this.sortedResponsiveOptions = null;
    this.totalShiftedItems = 0;
    this.page = 0;
    this._numVisible = 0;
    this.d_numVisible = 0;
    this._oldNumVisible = 0;
    this._activeIndex = 0;
    this._oldactiveIndex = 0;
  }

  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GalleriaThumbnails, [{
    key: "numVisible",
    get: function get() {
      return this._numVisible;
    },
    set: function set(numVisible) {
      this._numVisible = numVisible;
      this._oldNumVisible = this.d_numVisible;
      this.d_numVisible = numVisible;
    }
  }, {
    key: "activeIndex",
    get: function get() {
      return this._activeIndex;
    },
    set: function set(activeIndex) {
      this._oldactiveIndex = this._activeIndex;
      this._activeIndex = activeIndex;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.createStyle();

      if (this.responsiveOptions) {
        this.bindDocumentListeners();
      }
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      var totalShiftedItems = this.totalShiftedItems;

      if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
        if (this._activeIndex <= this.getMedianItemIndex()) {
          totalShiftedItems = 0;
        } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
          totalShiftedItems = this.d_numVisible - this.value.length;
        } else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
          totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex() + 1;
        } else {
          totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex();
        }

        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
        }

        if (this.itemsContainer && this.itemsContainer.nativeElement) {
          this.itemsContainer.nativeElement.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
        }

        if (this._oldactiveIndex !== this._activeIndex) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
          this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
        }

        this._oldactiveIndex = this._activeIndex;
        this._oldNumVisible = this.d_numVisible;
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this.calculatePosition();
    }
  }, {
    key: "createStyle",
    value: function createStyle() {
      if (!this.thumbnailsStyle) {
        this.thumbnailsStyle = document.createElement('style');
        this.thumbnailsStyle.type = 'text/css';
        document.body.appendChild(this.thumbnailsStyle);
      }

      var innerHTML = "\n            #".concat(this.containerId, " .p-galleria-thumbnail-item {\n                flex: 1 0 ").concat(100 / this.d_numVisible, "%\n            }\n        ");

      if (this.responsiveOptions) {
        this.sortedResponsiveOptions = Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.responsiveOptions);
        this.sortedResponsiveOptions.sort(function (data1, data2) {
          var value1 = data1.breakpoint;
          var value2 = data2.breakpoint;
          var result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return -1 * result;
        });

        for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
          var res = this.sortedResponsiveOptions[i];
          innerHTML += "\n                    @media screen and (max-width: ".concat(res.breakpoint, ") {\n                        #").concat(this.containerId, " .p-galleria-thumbnail-item {\n                            flex: 1 0 ").concat(100 / res.numVisible, "%\n                        }\n                    }\n                ");
        }
      }

      this.thumbnailsStyle.innerHTML = innerHTML;
    }
  }, {
    key: "calculatePosition",
    value: function calculatePosition() {
      if (this.itemsContainer && this.sortedResponsiveOptions) {
        var windowWidth = window.innerWidth;
        var matchedResponsiveData = {
          numVisible: this._numVisible
        };

        for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
          var res = this.sortedResponsiveOptions[i];

          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }

        if (this.d_numVisible !== matchedResponsiveData.numVisible) {
          this.d_numVisible = matchedResponsiveData.numVisible;
          this.cd.markForCheck();
        }
      }
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex(index) {
      return this.isItemActive(index) ? 0 : null;
    }
  }, {
    key: "navForward",
    value: function navForward(e) {
      this.stopTheSlideShow();
      var nextItemIndex = this._activeIndex + 1;

      if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
        this.step(-1);
      }

      var activeIndex = this.circular && this.value.length - 1 === this._activeIndex ? 0 : nextItemIndex;
      this.onActiveIndexChange.emit(activeIndex);

      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "navBackward",
    value: function navBackward(e) {
      this.stopTheSlideShow();
      var prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
      var diff = prevItemIndex + this.totalShiftedItems;

      if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
        this.step(1);
      }

      var activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.onActiveIndexChange.emit(activeIndex);

      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(index) {
      this.stopTheSlideShow();
      var selectedItemIndex = index;

      if (selectedItemIndex !== this._activeIndex) {
        var diff = selectedItemIndex + this.totalShiftedItems;
        var dir = 0;

        if (selectedItemIndex < this._activeIndex) {
          dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();

          if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
            this.step(dir);
          }
        } else {
          dir = this.getMedianItemIndex() - diff;

          if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
            this.step(dir);
          }
        }

        this.activeIndex = selectedItemIndex;
        this.onActiveIndexChange.emit(this.activeIndex);
      }
    }
  }, {
    key: "step",
    value: function step(dir) {
      var totalShiftedItems = this.totalShiftedItems + dir;

      if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (dir > 0 && totalShiftedItems > 0) {
        totalShiftedItems = 0;
      }

      if (this.circular) {
        if (dir < 0 && this.value.length - 1 === this._activeIndex) {
          totalShiftedItems = 0;
        } else if (dir > 0 && this._activeIndex === 0) {
          totalShiftedItems = this.d_numVisible - this.value.length;
        }
      }

      if (this.itemsContainer) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
        this.itemsContainer.nativeElement.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
        this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
      }

      this.totalShiftedItems = totalShiftedItems;
    }
  }, {
    key: "stopTheSlideShow",
    value: function stopTheSlideShow() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.stopSlideShow.emit();
      }
    }
  }, {
    key: "changePageOnTouch",
    value: function changePageOnTouch(e, diff) {
      if (diff < 0) {
        // left
        this.navForward(e);
      } else {
        // right
        this.navBackward(e);
      }
    }
  }, {
    key: "getTotalPageNumber",
    value: function getTotalPageNumber() {
      return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
    }
  }, {
    key: "getMedianItemIndex",
    value: function getMedianItemIndex() {
      var index = Math.floor(this.d_numVisible / 2);
      return this.d_numVisible % 2 ? index : index - 1;
    }
  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd() {
      if (this.itemsContainer && this.itemsContainer.nativeElement) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].addClass(this.itemsContainer.nativeElement, 'p-items-hidden');
        this.itemsContainer.nativeElement.style.transition = '';
      }
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(e) {
      var touchobj = e.changedTouches[0];

      if (this.isVertical) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(e) {
      var touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    }
  }, {
    key: "isNavBackwardDisabled",
    value: function isNavBackwardDisabled() {
      return !this.circular && this._activeIndex === 0 || this.value.length <= this.d_numVisible;
    }
  }, {
    key: "isNavForwardDisabled",
    value: function isNavForwardDisabled() {
      return !this.circular && this._activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
    }
  }, {
    key: "firstItemAciveIndex",
    value: function firstItemAciveIndex() {
      return this.totalShiftedItems * -1;
    }
  }, {
    key: "lastItemActiveIndex",
    value: function lastItemActiveIndex() {
      return this.firstItemAciveIndex() + this.d_numVisible - 1;
    }
  }, {
    key: "isItemActive",
    value: function isItemActive(index) {
      return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
    }
  }, {
    key: "bindDocumentListeners",
    value: function bindDocumentListeners() {
      var _this5 = this;

      if (!this.documentResizeListener) {
        this.documentResizeListener = function () {
          _this5.calculatePosition();
        };

        window.addEventListener('resize', this.documentResizeListener);
      }
    }
  }, {
    key: "unbindDocumentListeners",
    value: function unbindDocumentListeners() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.responsiveOptions) {
        this.unbindDocumentListeners();
      }

      if (this.thumbnailsStyle) {
        this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
      }
    }
  }]);

  return GalleriaThumbnails;
}();

GalleriaThumbnails.ɵfac = function GalleriaThumbnails_Factory(t) {
  return new (t || GalleriaThumbnails)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
};

GalleriaThumbnails.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GalleriaThumbnails,
  selectors: [["p-galleriaThumbnails"]],
  viewQuery: function GalleriaThumbnails_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c8, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
    }
  },
  inputs: {
    isVertical: "isVertical",
    slideShowActive: "slideShowActive",
    circular: "circular",
    contentHeight: "contentHeight",
    showThumbnailNavigators: "showThumbnailNavigators",
    numVisible: "numVisible",
    activeIndex: "activeIndex",
    containerId: "containerId",
    value: "value",
    responsiveOptions: "responsiveOptions",
    templates: "templates"
  },
  outputs: {
    onActiveIndexChange: "onActiveIndexChange",
    stopSlideShow: "stopSlideShow"
  },
  decls: 8,
  vars: 6,
  consts: [[1, "p-galleria-thumbnail-wrapper"], [1, "p-galleria-thumbnail-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-galleria-thumbnail-items-container", 3, "ngStyle"], [1, "p-galleria-thumbnail-items", 3, "transitionend", "touchstart", "touchmove", "touchend"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [3, "ngClass"], [1, "p-galleria-thumbnail-item-content", 3, "click", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"]],
  template: function GalleriaThumbnails_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GalleriaThumbnails_button_2_Template, 2, 8, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("transitionend", function GalleriaThumbnails_Template_div_transitionend_4_listener() {
        return ctx.onTransitionEnd();
      })("touchstart", function GalleriaThumbnails_Template_div_touchstart_4_listener($event) {
        return ctx.onTouchStart($event);
      })("touchmove", function GalleriaThumbnails_Template_div_touchmove_4_listener($event) {
        return ctx.onTouchMove($event);
      })("touchend", function GalleriaThumbnails_Template_div_touchend_4_listener($event) {
        return ctx.onTouchEnd($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, GalleriaThumbnails_div_6_Template, 3, 9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, GalleriaThumbnails_button_7_Template, 2, 8, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c14, ctx.isVertical ? ctx.contentHeight : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], GalleriaItemSlot],
  encapsulation: 2,
  changeDetection: 0
});

GalleriaThumbnails.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
  }];
};

GalleriaThumbnails.propDecorators = {
  containerId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  isVertical: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  slideShowActive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  circular: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  responsiveOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  contentHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  showThumbnailNavigators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  templates: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  onActiveIndexChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  stopSlideShow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  itemsContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
    args: ['itemsContainer']
  }],
  numVisible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  activeIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GalleriaThumbnails, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'p-galleriaThumbnails',
      template: "\n        <div class=\"p-galleria-thumbnail-wrapper\">\n            <div class=\"p-galleria-thumbnail-container\">\n                <button *ngIf=\"showThumbnailNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-thumbnail-prev p-link': true, 'p-disabled': this.isNavBackwardDisabled()}\" (click)=\"navBackward($event)\" [disabled]=\"isNavBackwardDisabled()\" pRipple>\n                    <span [ngClass]=\"{'p-galleria-thumbnail-prev-icon pi': true, 'pi-chevron-left': !this.isVertical, 'pi-chevron-up': this.isVertical}\"></span>\n                </button>\n                <div class=\"p-galleria-thumbnail-items-container\" [ngStyle]=\"{'height': isVertical ? contentHeight : ''}\">\n                    <div #itemsContainer class=\"p-galleria-thumbnail-items\" (transitionend)=\"onTransitionEnd()\"\n                        (touchstart)=\"onTouchStart($event)\" (touchmove)=\"onTouchMove($event)\" (touchend)=\"onTouchEnd($event)\">\n                        <div *ngFor=\"let item of value; let index = index;\" [ngClass]=\"{'p-galleria-thumbnail-item': true, 'p-galleria-thumbnail-item-current': activeIndex === index, 'p-galleria-thumbnail-item-active': isItemActive(index),\n                            'p-galleria-thumbnail-item-start': firstItemAciveIndex() === index, 'p-galleria-thumbnail-item-end': lastItemActiveIndex() === index }\">\n                            <div class=\"p-galleria-thumbnail-item-content\" [attr.tabindex]=\"getTabIndex(index)\" (click)=\"onItemClick(index)\" (keydown.enter)=\"onItemClick(index)\">\n                                <p-galleriaItemSlot type=\"thumbnail\" [item]=\"item\" [templates]=\"templates\"></p-galleriaItemSlot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <button *ngIf=\"showThumbnailNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-thumbnail-next p-link': true, 'p-disabled': this.isNavForwardDisabled()}\" (click)=\"navForward($event)\" [disabled]=\"isNavForwardDisabled()\" pRipple>\n                    <span [ngClass]=\"{'p-galleria-thumbnail-next-icon pi': true, 'pi-chevron-right': !this.isVertical, 'pi-chevron-down': this.isVertical}\"></span>\n                </button>\n            </div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
    }];
  }, {
    isVertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    slideShowActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    circular: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    contentHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    showThumbnailNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    onActiveIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    stopSlideShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    numVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    containerId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    responsiveOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    itemsContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
      args: ['itemsContainer']
    }]
  });
})();

var GalleriaModule = function GalleriaModule() {
  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GalleriaModule);
};

GalleriaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: GalleriaModule
});
GalleriaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function GalleriaModule_Factory(t) {
    return new (t || GalleriaModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GalleriaModule, {
    declarations: function declarations() {
      return [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"]];
    },
    exports: function exports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GalleriaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "4VgK":
/*!*******************************************************!*\
  !*** ./src/app/view/dashboard/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "+FhW");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ "9OJo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, store, router, route) {
        this.fb = fb;
        this.store = store;
        this.router = router;
        this.route = route;
        this.displayModal = false;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.showModalDialog = function () {
        this.displayModal = true;
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "4wG1":
/*!***********************************************************************!*\
  !*** ./src/app/shared/component/reward-card/reward-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: RewardCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardCardComponent", function() { return RewardCardComponent; });
/* harmony import */ var _raw_loader_reward_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./reward-card.component.html */ "fYo8");
/* harmony import */ var _reward_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-card.component.scss */ "aCFX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_store_dashboard_dashboard_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/dashboard/dashboard.action */ "uvpQ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RewardCardComponent = /** @class */ (function () {
    function RewardCardComponent(store) {
        this.store = store;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    RewardCardComponent.prototype.ngOnInit = function () {
    };
    RewardCardComponent.prototype.onEditReward = function () {
        this.onEdit.emit(this.data);
    };
    RewardCardComponent.prototype.onDeleteReward = function () {
        this.store.dispatch(new src_app_store_dashboard_dashboard_action__WEBPACK_IMPORTED_MODULE_4__["DELETE_REWARD"](this.data.id));
    };
    RewardCardComponent.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    RewardCardComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        onEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    RewardCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'reward-card',
            template: _raw_loader_reward_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_reward_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], RewardCardComponent);
    return RewardCardComponent;
}());



/***/ }),

/***/ "9OJo":
/*!*********************************************************!*\
  !*** ./src/app/view/dashboard/home/home.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "N8VF":
/*!****************************************************!*\
  !*** ./src/app/view/dashboard/dashboard.module.ts ***!
  \****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "/DgE");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "BDe2");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "4VgK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/galleria */ "2art");
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/skeleton */ "jeV5");
/* harmony import */ var src_app_shared_component_reward_card_reward_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/reward-card/reward-card.component */ "4wG1");
/* harmony import */ var _reward_reward_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reward/reward.component */ "r3+g");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var src_app_shared_component_reward_form_reward_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/reward-form/reward-form.component */ "zwZ2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                src_app_shared_component_reward_card_reward_card_component__WEBPACK_IMPORTED_MODULE_16__["RewardCardComponent"],
                _reward_reward_component__WEBPACK_IMPORTED_MODULE_17__["RewardComponent"],
                src_app_shared_component_reward_form_reward_form_component__WEBPACK_IMPORTED_MODULE_19__["RewardFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                primeng_ripple__WEBPACK_IMPORTED_MODULE_7__["RippleModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__["InputSwitchModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
                primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__["SkeletonModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                primeng_galleria__WEBPACK_IMPORTED_MODULE_14__["GalleriaModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__["InputTextareaModule"]
            ],
            bootstrap: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "Q7aN":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/reward-form/reward-form.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-input {\n  min-width: 200px;\n}\n.form-input .label {\n  margin-bottom: 5px;\n  font-size: 17px;\n  display: block;\n}\n.content {\n  min-height: 200px;\n}\n.c-input {\n  width: 100%;\n  font-size: 20px;\n  font-weight: 200;\n}\n.p-inputtextarea {\n  font-weight: 200;\n  font-size: 20px;\n}\n.p-button {\n  margin: 10px;\n}\n:host::ng-deep .p-dropdown {\n  width: 70% !important;\n}\n:host::ng-deep .p-dropdown .p-dropdown-label {\n  font-size: 20px;\n}\n:host::ng-deep .p-dropdown .p-dropdown-panel {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jld2FyZC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVSO0FBRUE7RUFDSSxpQkFBQTtBQUNKO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBREE7RUFDSSxZQUFBO0FBSUo7QUFESTtFQUNJLHFCQUFBO0FBSVI7QUFGSTtFQUNJLGVBQUE7QUFJUjtBQUZJO0VBQ0EsZUFBQTtBQUlKIiwiZmlsZSI6InJld2FyZC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0taW5wdXQge1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgLmxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLmNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuLmMtaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG4ucC1pbnB1dHRleHRhcmVhe1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnAtYnV0dG9ue1xuICAgIG1hcmdpbjogMTBweDtcbn1cbjpob3N0OjpuZy1kZWVwIHtcbiAgICAucC1kcm9wZG93biB7XG4gICAgICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnAtZHJvcGRvd24gLnAtZHJvcGRvd24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5wLWRyb3Bkb3duIC5wLWRyb3Bkb3duLXBhbmVsIHtcbiAgICBmb250LXNpemU6IDIwcHhcbiAgICA7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "Q86z":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/reward-form/reward-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\" >\n    <form [formGroup]=\"rewardForm\" (ngSubmit)=\"onSubmit\">\n        <div class=\"p-grid p-pr-5 p-pl-5\">\n            <div class=\"p-col-12 \">\n                <div class=\"form-input\">\n                    <label class=\"label\">Reward type</label>\n                    <p-dropdown class=\"c-dropdown\" [options]=\"rewardType$ | async \" placeholder=\"Select reward type\"\n                      formControlName=\"type\" optionLabel=\"desc\" optionValue=\"type\"></p-dropdown>\n                </div>\n            </div>\n            <div class=\"p-col-12 \">\n                <div class=\"form-input\">\n                    <label class=\"label\">Reward title</label>\n                    <input formControlName=\"title\" class=\"c-input\" type=\"text\" pInputText />\n                </div>\n            </div>\n            <div class=\"p-col-12 \">\n                <div class=\"form-input\">\n                    <label class=\"label\">Reward description</label>\n                    <textarea formControlName=\"desc\" rows=\"5\" style=\"width: 100%;\" cols=\"30\" pInputTextarea></textarea>\n                </div>\n            </div>\n\n        </div>\n\n    </form>\n\n\n\n</div>");

/***/ }),

/***/ "QIUk":
/*!********************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js ***!
  \********************************************************************/
/*! exports provided: Card, CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");








function Card_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function Card_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Card_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}

function Card_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function Card_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.titleTemplate);
  }
}

function Card_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function Card_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Card_div_4_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.subheader, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.subtitleTemplate);
  }
}

function Card_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function Card_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function Card_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Card_div_8_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate);
  }
}

var _c0 = ["*", [["p-header"]], [["p-footer"]]];
var _c1 = ["*", "p-header", "p-footer"];

var Card = /*#__PURE__*/function () {
  function Card(el) {
    Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Card);

    this.el = el;
  }

  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Card, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this = this;

      this.templates.forEach(function (item) {
        switch (item.getType()) {
          case 'header':
            _this.headerTemplate = item.template;
            break;

          case 'title':
            _this.titleTemplate = item.template;
            break;

          case 'subtitle':
            _this.subtitleTemplate = item.template;
            break;

          case 'content':
            _this.contentTemplate = item.template;
            break;

          case 'footer':
            _this.footerTemplate = item.template;
            break;

          default:
            _this.contentTemplate = item.template;
            break;
        }
      });
    }
  }, {
    key: "getBlockableElement",
    value: function getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
  }]);

  return Card;
}();

Card.ɵfac = function Card_Factory(t) {
  return new (t || Card)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
};

Card.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: Card,
  selectors: [["p-card"]],
  contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"], true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__["Footer"], true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  inputs: {
    header: "header",
    subheader: "subheader",
    style: "style",
    styleClass: "styleClass"
  },
  ngContentSelectors: _c1,
  decls: 9,
  vars: 9,
  consts: [[3, "ngClass", "ngStyle"], ["class", "p-card-header", 4, "ngIf"], [1, "p-card-body"], ["class", "p-card-title", 4, "ngIf"], ["class", "p-card-subtitle", 4, "ngIf"], [1, "p-card-content"], [4, "ngTemplateOutlet"], ["class", "p-card-footer", 4, "ngIf"], [1, "p-card-header"], [1, "p-card-title"], [1, "p-card-subtitle"], [1, "p-card-footer"]],
  template: function Card_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Card_div_1_Template, 3, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Card_div_3_Template, 3, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, Card_div_4_Template, 3, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, Card_ng_container_7_Template, 1, 0, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, Card_div_8_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "p-card p-component")("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.headerFacet || ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.header || ctx.titleTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.subheader || ctx.subtitleTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
  styles: [".p-card-header img{width:100%}"],
  encapsulation: 2,
  changeDetection: 0
});

Card.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }];
};

Card.propDecorators = {
  header: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  subheader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  style: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  styleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  headerFacet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"]]
  }],
  footerFacet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["Footer"]]
  }],
  templates: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Card, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'p-card',
      template: "\n        <div [ngClass]=\"'p-card p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"p-card-header\" *ngIf=\"headerFacet || headerTemplate\">\n                <ng-content select=\"p-header\"></ng-content>\n                <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n            </div>\n            <div class=\"p-card-body\">\n                <div class=\"p-card-title\" *ngIf=\"header || titleTemplate\">\n                    {{header}}\n                    <ng-container *ngTemplateOutlet=\"titleTemplate\"></ng-container>\n                </div>\n                <div class=\"p-card-subtitle\" *ngIf=\"subheader || subtitleTemplate\">\n                    {{subheader}}\n                    <ng-container *ngTemplateOutlet=\"subtitleTemplate\"></ng-container>\n                </div>\n                <div class=\"p-card-content\">\n                    <ng-content></ng-content>\n                    <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                </div>\n                <div class=\"p-card-footer\" *ngIf=\"footerFacet || footerTemplate\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n                </div>\n            </div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      styles: [".p-card-header img{width:100%}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }];
  }, {
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    subheader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    headerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"]]
    }],
    footerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["Footer"]]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]]
    }]
  });
})();

var CardModule = function CardModule() {
  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CardModule);
};

CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CardModule
});
CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function CardModule_Factory(t) {
    return new (t || CardModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CardModule, {
    declarations: function declarations() {
      return [Card];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
    },
    exports: function exports() {
      return [Card, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      exports: [Card, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      declarations: [Card]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "aCFX":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/reward-card/reward-card.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-container {\n  height: 300px;\n  overflow: hidden;\n}\n.img-container .img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n:host::ng-deep .p-card .p-card-title {\n  font-size: 25px;\n  font-weight: 500;\n}\n:host::ng-deep .p-card .p-card-subtitle {\n  font-size: 14px;\n  font-weight: 300;\n}\n:host::ng-deep .p-card .p-card-content {\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jld2FyZC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNSO0FBTVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFIWjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSFo7QUFLUTtFQUNLLGdCQUFBO0FBSGIiLCJmaWxlIjoicmV3YXJkLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNvbnRhaW5lcntcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC5pbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyAgIFxuICAgIH1cbn1cblxuOmhvc3Q6Om5nLWRlZXB7XG4gICAgLnAtY2FyZCB7XG5cbiAgICAgICAgLnAtY2FyZC10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIC5wLWNhcmQtc3VidGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB9XG4gICAgICAgIC5wLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgbWluLWhlaWdodDogNzBweDtcbiAgICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "eRTK":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/auth/auth.state */ "eL2y");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuthenticated = this.store.selectSnapshot(src_app_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_3__["AuthState"].isAuthenticated);
        if (!isAuthenticated) {
            this.router.navigate(['login']);
        }
        return isAuthenticated;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "fYo8":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/reward-card/reward-card.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-card  [header]=\"data?.title\" [subheader]=\"data?.typeDesc\" [style]=\"{width: '100%'}\" styleClass=\"p-shadow-5 p-card-header\">\n    <ng-template pTemplate=\"header\">\n        <div class=\"img-container\" >\n            <img alt=\"Card\" [src]=\"data?.img\" class=\"img\">\n        </div>\n    </ng-template>\n    <label >{{data?.desc}}</label>\n    <ng-template pTemplate=\"footer\" >\n     <div class=\"p-text-right\">\n         <button pButton pRipple type=\"button\" style=\"font-size: 10px;\" icon=\"pi pi-external-link\" (click)=\"onEditReward()\" class=\"p-button-rounded p-button-text\"></button>\n         <button pButton pRipple type=\"button\" icon=\"pi pi-trash\" (click)=\"onDeleteReward()\" class=\"p-button-rounded p-button-text\"></button>\n     </div>\n    </ng-template>\n</p-card>");

/***/ }),

/***/ "izRg":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/dashboard/reward/reward.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body g-container\">\n    <div class=\"g-section-module\">\n\n        <label class=\"g-section-title\">\n            Rewards\n        </label>\n        <label class=\"g-section-desc\">\n            Where you can manage redOne rewards\n        </label>\n        <div class=\"p-text-right p-d-flex p-jc-end p-ai-center\" (click)=\"showModalDialog()\">\n            <div class=\"add-reward-btn\">\n                <i class=\"pi pi-plus p-mr-1\"></i>\n                <span>Add reward</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"reward-container\">\n        <div class=\"p-grid p-align-stretch vertical-container\" *ngIf=\"(rewardList$  | async)?.length > 0\">\n            <div class=\"p-col-12 p-md-6 p-lg-4 p-p-3\" *ngFor=\"let item of rewardList$  | async\">\n                <reward-card [data]=\"item\" (onEdit)=\"onEdit($event)\"></reward-card>\n            </div>\n        </div>\n        <div  class=\"p-text-center no-rec-container\" *ngIf=\"(rewardList$  | async)?.length <=0\">\n            <img src=\"assets/image/no-record.jpeg\" class=\"no-record-img\" alt=\"\" >\n            <div class=\"no-rec-label\">\n                <label for=\"\">You have no reward in the moment</label>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<p-dialog [header]=\"isFormEdit ? 'Edit Reward' : 'Add Reward'\" [(visible)]=\"displayModal\" [modal]=\"true\"\n    [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n    <reward-form *ngIf=\"displayModal\" [data]=\"rewardDetail\" (formData)=\"formData($event)\"></reward-form>\n    <ng-template pTemplate=\"footer\" class=\"dialog-footer\">\n        <p-button (click)=\"displayModal=false\" label=\"Cancel\" styleClass=\"p-button-text\" center></p-button>\n        <button [disabled]=\"!rewardDetail\" (click)=\"onSubmit()\" pButton type=\"submit\"\n            [label]=\"isFormEdit ?  'Edit' : 'Submit'\"></button>\n    </ng-template>\n</p-dialog>");

/***/ }),

/***/ "lUlD":
/*!*************************************************************!*\
  !*** ./src/app/view/dashboard/reward/reward.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".std-ta-center {\n  text-align: center;\n}\n\n.c-container {\n  padding: 0 5vw;\n}\n\n.g-container {\n  padding-left: 2vw;\n  padding-right: 2vw;\n}\n\n.g-show-for-desktop {\n  display: none;\n}\n\n.g-show-for-mobile {\n  display: unset;\n}\n\n.container .section-module {\n  padding: 5px;\n}\n\n@media (min-width: 768px) {\n  .g-show-for-desktop {\n    display: unset;\n  }\n\n  .g-show-for-mobile {\n    display: none;\n  }\n\n  .g-container {\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n\n  .g-section-module {\n    padding: 35px 0;\n    text-align: center;\n  }\n  .g-section-module .g-section-title {\n    display: block;\n    font-size: 44px;\n    font-weight: 600;\n  }\n  .g-section-module .g-section-desc {\n    display: block;\n    font-size: 23px;\n    margin-top: 5px;\n    font-weight: 200;\n  }\n}\n\n@media (min-width: 992px) {\n  .g-container {\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n}\n\n.body {\n  background-color: white;\n}\n\n.add-reward-btn {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.no-rec-container {\n  margin-top: -30px;\n}\n\n.no-rec-container .no-record-img {\n  text-align: center;\n  width: 40%;\n}\n\n.no-rec-container .no-rec-label {\n  margin-top: -30px;\n  font-size: 22px;\n}\n\n.dropdown-content {\n  width: 50vw;\n  height: 200px;\n}\n\n:host::ng-deep .p-dialog-footer {\n  text-align: right;\n  padding: 15px 40px;\n}\n\n:host::ng-deep .p-dialog .p-dialog-header {\n  border-bottom: none;\n  background: white;\n  color: #333333;\n  padding: 1rem;\n  text-align: center;\n}\n\n:host::ng-deep .p-dialog .p-dialog-header .p-dialog-title {\n  width: 100%;\n  font-weight: 200;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9jdXN0b20tc3R5bGUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3Jld2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtBQ0pKOztBRE9BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksYUFBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtBQ0pKOztBRFFJO0VBQ0ksWUFBQTtBQ0xSOztBQ2hCSTtFRjBCQTtJQUNJLGNBQUE7RUNOTjs7RURRRTtJQUNJLGFBQUE7RUNMTjs7RURRRTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUNMTjs7RURRRTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQ0xOO0VET007SUFDSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDTFY7RURRTTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDTlY7QUFDRjs7QUN6Q0k7RUZzREE7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VDVk47QUFDRjs7QUExREE7RUFDSSx1QkFBQTtBQTRESjs7QUExREE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQTZESjs7QUF6REE7RUFDSSxpQkFBQTtBQTRESjs7QUEzREk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUE2RFI7O0FBM0RJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBNkRSOztBQTFEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBNkRKOztBQXhESTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUEyRFI7O0FBekRJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUEyRFI7O0FBMURRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTREWiIsImZpbGUiOiJyZXdhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCI7XG5cbi8vIGcgc3RhbmQgZm9yIGdsb2JhbFxuXG4vL2ZvciBtb2JpbGVcbi5zdGQtdGEtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCA1dnc7XG59XG5cbi5nLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAydnc7XG4gICAgcGFkZGluZy1yaWdodDogMnZ3O1xufVxuXG4uZy1zaG93LWZvci1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZy1zaG93LWZvci1tb2JpbGUge1xuICAgIGRpc3BsYXk6IHVuc2V0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICAuc2VjdGlvbi1tb2R1bGUge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxufVxuLy9mb3IgdGFibGV0XG5AaW5jbHVkZSBzY3JlZW4tdGFibGV0IHtcbiAgICAuZy1zaG93LWZvci1kZXNrdG9wIHtcbiAgICAgICAgZGlzcGxheTogdW5zZXQ7XG4gICAgfVxuICAgIC5nLXNob3ctZm9yLW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmctY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHZ3O1xuICAgIH1cblxuICAgIC5nLXNlY3Rpb24tbW9kdWxlIHtcbiAgICAgICAgcGFkZGluZzogMzVweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmctc2VjdGlvbi10aXRsZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICB9XG4gICAgICAgIC5nLXNlY3Rpb24tZGVzY3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG4vL2ZvciBkZXNrdG9wXG5AaW5jbHVkZSBzY3JlZW4tZGVza3RvcCB7XG4gICAgLmctY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHZ3O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9nbG9iYWxzLnNjc3MnO1xuXG4uYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5hZGQtcmV3YXJkLWJ0bntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5cbi5uby1yZWMtY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIC5uby1yZWNvcmQtaW1ne1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxuICAgIC5uby1yZWMtbGFiZWx7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxufVxuLmRyb3Bkb3duLWNvbnRlbnR7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cbi8vIG1vZGFsXG5cbjpob3N0OjpuZy1kZWVwe1xuICAgIC5wLWRpYWxvZy1mb290ZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDQwcHg7XG4gICAgfVxuICAgIC5wLWRpYWxvZyAucC1kaWFsb2ctaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5wLWRpYWxvZy10aXRsZXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAbWl4aW4gc2NyZWVuLW1vYmlsZSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIEBjb250ZW50XG4gICAgfVxufTtcblxuQG1peGluIHNjcmVlbi10YWJsZXQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBAY29udGVudFxuICAgIH1cbn07XG5cbkBtaXhpbiBzY3JlZW4tZGVza3RvcCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn07Il19 */");

/***/ }),

/***/ "r3+g":
/*!***********************************************************!*\
  !*** ./src/app/view/dashboard/reward/reward.component.ts ***!
  \***********************************************************/
/*! exports provided: RewardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardComponent", function() { return RewardComponent; });
/* harmony import */ var _raw_loader_reward_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./reward.component.html */ "izRg");
/* harmony import */ var _reward_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward.component.scss */ "lUlD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_store_dashboard_dashboard_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/dashboard/dashboard.action */ "uvpQ");
/* harmony import */ var src_app_store_dashboard_dashboard_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/dashboard/dashboard.state */ "eD2F");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RewardComponent = /** @class */ (function () {
    function RewardComponent(store, action, fb) {
        this.store = store;
        this.action = action;
        this.fb = fb;
        this.displayModal = false;
        this.isFormEdit = false;
    }
    RewardComponent.prototype.ngOnInit = function () {
        this.getLov();
    };
    RewardComponent.prototype.getLov = function () {
        this.store.dispatch(new src_app_store_dashboard_dashboard_action__WEBPACK_IMPORTED_MODULE_6__["GET_LOV"]);
    };
    RewardComponent.prototype.showModalDialog = function (data) {
        this.isFormEdit = data ? true : false;
        this.rewardDetail = data ? data : null;
        this.displayModal = true;
    };
    RewardComponent.prototype.formData = function (event) {
        this.rewardDetail = event ? event : null;
    };
    RewardComponent.prototype.onEdit = function (event) {
        if (event) {
            this.showModalDialog(event);
        }
    };
    RewardComponent.prototype.onSubmit = function () {
        if (this.rewardDetail) {
            if (this.isFormEdit) {
                this.store.dispatch(new src_app_store_dashboard_dashboard_action__WEBPACK_IMPORTED_MODULE_6__["EDIT_REWARD"](this.rewardDetail));
            }
            else {
                this.store.dispatch(new src_app_store_dashboard_dashboard_action__WEBPACK_IMPORTED_MODULE_6__["ADD_REWARD"](this.rewardDetail));
            }
            this.displayModal = false;
        }
    };
    RewardComponent.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_dashboard_dashboard_state__WEBPACK_IMPORTED_MODULE_7__["DashboardState"].rewardList),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], RewardComponent.prototype, "rewardList$", void 0);
    RewardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-reward',
            template: _raw_loader_reward_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_reward_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RewardComponent);
    return RewardComponent;
}());



/***/ }),

/***/ "zFJ7":
/*!*****************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtextarea.js ***!
  \*****************************************************************************/
/*! exports provided: InputTextarea, InputTextareaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextarea", function() { return InputTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextareaModule", function() { return InputTextareaModule; });
/* harmony import */ var _Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








var InputTextarea = /*#__PURE__*/function () {
  function InputTextarea(el, ngModel, control, cd) {
    Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InputTextarea);

    this.el = el;
    this.ngModel = ngModel;
    this.control = control;
    this.cd = cd;
    this.onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
  }

  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InputTextarea, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (this.ngModel) {
        this.ngModelSubscription = this.ngModel.valueChanges.subscribe(function () {
          _this.updateState();
        });
      }

      if (this.control) {
        this.ngControlSubscription = this.control.valueChanges.subscribe(function () {
          _this.updateState();
        });
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      if (this.autoResize) this.resize();
      this.updateFilledState();
      this.cd.detectChanges();
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      this.updateState();
    }
  }, {
    key: "updateFilledState",
    value: function updateFilledState() {
      this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      if (this.autoResize) {
        this.resize(e);
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      if (this.autoResize) {
        this.resize(e);
      }
    }
  }, {
    key: "resize",
    value: function resize(event) {
      this.el.nativeElement.style.height = 'auto';
      this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';

      if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
        this.el.nativeElement.style.overflowY = "scroll";
        this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
      } else {
        this.el.nativeElement.style.overflow = "hidden";
      }

      this.onResize.emit(event || {});
    }
  }, {
    key: "updateState",
    value: function updateState() {
      this.updateFilledState();

      if (this.autoResize) {
        this.resize();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.ngModelSubscription) {
        this.ngModelSubscription.unsubscribe();
      }

      if (this.ngControlSubscription) {
        this.ngControlSubscription.unsubscribe();
      }
    }
  }]);

  return InputTextarea;
}();

InputTextarea.ɵfac = function InputTextarea_Factory(t) {
  return new (t || InputTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]));
};

InputTextarea.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: InputTextarea,
  selectors: [["", "pInputTextarea", ""]],
  hostVars: 10,
  hostBindings: function InputTextarea_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function InputTextarea_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      })("focus", function InputTextarea_focus_HostBindingHandler($event) {
        return ctx.onFocus($event);
      })("blur", function InputTextarea_blur_HostBindingHandler($event) {
        return ctx.onBlur($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("p-inputtextarea", true)("p-inputtext", true)("p-component", true)("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize);
    }
  },
  inputs: {
    autoResize: "autoResize"
  },
  outputs: {
    onResize: "onResize"
  }
});

InputTextarea.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }];
};

InputTextarea.propDecorators = {
  autoResize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  onResize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['input', ['$event']]
  }],
  onFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['focus', ['$event']]
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['blur', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InputTextarea, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[pInputTextarea]',
      host: {
        '[class.p-inputtextarea]': 'true',
        '[class.p-inputtext]': 'true',
        '[class.p-component]': 'true',
        '[class.p-filled]': 'filled',
        '[class.p-inputtextarea-resizable]': 'autoResize'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
    }];
  }, {
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['input', ['$event']]
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['focus', ['$event']]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['blur', ['$event']]
    }],
    autoResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();

var InputTextareaModule = function InputTextareaModule() {
  Object(_Users_muhamadsyahierul_Documents_Interview_Documents_redOne_project_redOne_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InputTextareaModule);
};

InputTextareaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: InputTextareaModule
});
InputTextareaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function InputTextareaModule_Factory(t) {
    return new (t || InputTextareaModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InputTextareaModule, {
    declarations: function declarations() {
      return [InputTextarea];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
    },
    exports: function exports() {
      return [InputTextarea];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InputTextareaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      exports: [InputTextarea],
      declarations: [InputTextarea]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "zwZ2":
/*!***********************************************************************!*\
  !*** ./src/app/shared/component/reward-form/reward-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: RewardFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardFormComponent", function() { return RewardFormComponent; });
/* harmony import */ var _raw_loader_reward_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./reward-form.component.html */ "Q86z");
/* harmony import */ var _reward_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-form.component.scss */ "Q7aN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_dashboard_dashboard_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/dashboard/dashboard.state */ "eD2F");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RewardFormComponent = /** @class */ (function () {
    function RewardFormComponent(store, fb) {
        this.store = store;
        this.fb = fb;
        this.formData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.unsubsribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    RewardFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.onFormChange();
    };
    RewardFormComponent.prototype.initForm = function () {
        this.rewardForm = this.fb.group({
            type: [this.data ? this.data.type : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            title: [this.data ? this.data.title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            desc: [this.data ? this.data.desc : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    RewardFormComponent.prototype.onFormChange = function () {
        var _this = this;
        this.rewardForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubsribe$)).subscribe(function (res) {
            if (_this.rewardForm.valid) {
                var data = {
                    desc: _this.rewardForm.controls.desc.value,
                    title: _this.rewardForm.controls.title.value,
                    type: _this.rewardForm.controls.type.value,
                    id: _this.data ? _this.data.id : null,
                    typeDesc: _this.data ? _this.getDescOfType(_this.rewardForm.controls.type.value) : null,
                    img: _this.data ? _this.getImgUrl(_this.rewardForm.controls.type.value) : null
                };
                return _this.formData.emit(_this.rewardForm.valid ? data : null);
            }
        });
    };
    RewardFormComponent.prototype.getSelectedType = function (type) {
        var rewardTypeList = this.store.selectSnapshot(src_app_store_dashboard_dashboard_state__WEBPACK_IMPORTED_MODULE_7__["DashboardState"].rewardType);
        if (rewardTypeList && type) {
            return rewardTypeList.find(function (item) { return item.type === type; });
        }
    };
    RewardFormComponent.prototype.getDescOfType = function (type) {
        var selected = this.getSelectedType(type);
        return selected.desc;
    };
    RewardFormComponent.prototype.getImgUrl = function (type) {
        var selected = this.getSelectedType(type);
        return selected.img;
    };
    RewardFormComponent.prototype.ngOnDestroy = function () {
        this.unsubsribe$.next();
        this.unsubsribe$.complete();
    };
    RewardFormComponent.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    RewardFormComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        formData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_dashboard_dashboard_state__WEBPACK_IMPORTED_MODULE_7__["DashboardState"].rewardType),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], RewardFormComponent.prototype, "rewardType$", void 0);
    RewardFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'reward-form',
            template: _raw_loader_reward_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_reward_form_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RewardFormComponent);
    return RewardFormComponent;
}());



/***/ })

}]);
//# sourceMappingURL=view-dashboard-dashboard-module.js.map