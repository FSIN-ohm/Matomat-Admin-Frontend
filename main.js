(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account-management/account-management.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/account-management/account-management.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-data-table *ngIf=\"users && admins\" #table [dataColumns]=\"columnsToDisplay\" [dataSource]=\"users\" [enableDeleteButton]=\"true\" [enableAddButton]=\"true\"\n  (edit)=\"editAccount($event)\" (delete)=\"deleteAccount($event)\" (add)=\"createAccount()\"></app-data-table>\n"

/***/ }),

/***/ "./src/app/account-management/account-management.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/account-management/account-management.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%; }\n\n.mat-elevation-z8 {\n  box-shadow: none; }\n\ndata-table {\n  margin: 20px auto; }\n\n.add {\n  margin-top: 10px;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZS1zY3JhYmkvUHJvamVjdHMvTWF0b2htYXQvYWRtaW4tZnJvbnRlbmQvc3JjL2FwcC9hY2NvdW50LW1hbmFnZW1lbnQvYWNjb3VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC1tYW5hZ2VtZW50L2FjY291bnQtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tYXQtZWxldmF0aW9uLXo4IHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgZGF0YS10YWJsZSB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIH1cblxuICAuYWRkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/account-management/account-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/account-management/account-management.component.ts ***!
  \********************************************************************/
/*! exports provided: AccountManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountManagementComponent", function() { return AccountManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-modal/account-modal.component */ "./src/app/account-management/account-modal/account-modal.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountManagementComponent = /** @class */ (function () {
    function AccountManagementComponent(injector, service, toastr) {
        this.injector = injector;
        this.service = service;
        this.toastr = toastr;
        this.columnsToDisplay = ['name', 'balance', 'last_seen', 'admin'];
    }
    AccountManagementComponent.prototype.ngOnInit = function () {
        this.getAdminsAndUsers();
    };
    AccountManagementComponent.prototype.getAdminsAndUsers = function () {
        this.getUsers();
        this.getAdmins();
        this.checkForAdminRole();
    };
    AccountManagementComponent.prototype.checkForAdminRole = function () {
        var _this = this;
        setTimeout(function () {
            if (typeof (_this.admins) === 'undefined' || typeof (_this.users) === 'undefined') {
                _this.checkForAdminRole();
                return;
            }
            else {
                for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                    var user = _a[_i];
                    for (var _b = 0, _c = _this.admins; _b < _c.length; _b++) {
                        var admin = _c[_b];
                        if (user.id === admin.id) {
                            user.admin = true;
                        }
                    }
                }
            }
        }, 200);
    };
    AccountManagementComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
        });
    };
    AccountManagementComponent.prototype.getAdmins = function () {
        var _this = this;
        this.service.getAdmins().subscribe(function (admins) {
            _this.admins = admins;
            console.log(_this.admins);
        });
    };
    AccountManagementComponent.prototype.editAccount = function (account) {
        var _this = this;
        var modalService = this.injector.get(ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]);
        var modalRef = modalService.show(_account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_2__["AccountModalComponent"]);
        modalRef.content.showEditModal(account);
        modalRef.content.onClose.subscribe(function (updatedAccount) {
            _this.service.editAdmin(updatedAccount, account.id).subscribe(function () {
                _this.toastr.success('Account wurde erfolgreich bearbeitet!', 'Erfolg', {
                    positionClass: 'toast-top-right',
                    timeOut: 6000
                });
                _this.getAdminsAndUsers();
            }, function (error) { console.log(error); });
        });
    };
    AccountManagementComponent.prototype.createAccount = function () {
        var _this = this;
        var modalService = this.injector.get(ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]);
        var modalRef = modalService.show(_account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_2__["AccountModalComponent"]);
        modalRef.content.showCreationModal();
        modalRef.content.onClose.subscribe(function (account) {
            _this.service.addAdmin(account).subscribe(function (res) {
                _this.toastr.success('Account wurde erfolgreich erstellt!', 'Erfolg', {
                    positionClass: 'toast-top-right',
                    timeOut: 6000
                });
                _this.getAdminsAndUsers();
            }, function (error) { console.log(error); });
        });
    };
    AccountManagementComponent.prototype.deleteAccount = function (account) {
        var _this = this;
        if (confirm("Wollen Sie diesen Account endgültig löschen?")) {
            if (account.id > -1) {
                this.service.deleteUser(account.id).subscribe(function (res) {
                    _this.getAdminsAndUsers();
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"]),
        __metadata("design:type", Object)
    ], AccountManagementComponent.prototype, "table", void 0);
    AccountManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-management',
            template: __webpack_require__(/*! ./account-management.component.html */ "./src/app/account-management/account-management.component.html"),
            styles: [__webpack_require__(/*! ./account-management.component.scss */ "./src/app/account-management/account-management.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], AccountManagementComponent);
    return AccountManagementComponent;
}());



/***/ }),

/***/ "./src/app/account-management/account-modal/account-modal.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/account-management/account-modal/account-modal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"accountForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\">{{header}}</h3>\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"fields-container\">\n      <mat-form-field class=\"col-md-12\">\n        <input matInput placeholder=\"Name *\" formControlName=\"user_name\">\n      </mat-form-field>\n      <mat-form-field *ngIf=\"addAdminModal\" class=\"col-md-12\">\n        <input matInput type=\"password\" placeholder=\"Passwort *\" formControlName=\"password\">\n      </mat-form-field>\n      <mat-form-field *ngIf=\"addAdminModal\" class=\"col-md-12\">\n        <input matInput placeholder=\"Email *\" formControlName=\"email\">\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">cancel</button>\n    <button class=\"btn btn-success\" type=\"submit\">save</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/account-management/account-modal/account-modal.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/account-management/account-modal/account-modal.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQtbWFuYWdlbWVudC9hY2NvdW50LW1vZGFsL2FjY291bnQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account-management/account-modal/account-modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/account-management/account-modal/account-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AccountModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModalComponent", function() { return AccountModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountModalComponent = /** @class */ (function () {
    function AccountModalComponent(bsModal, formBuilder, toastr) {
        this.bsModal = bsModal;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.addAdminModal = false;
        this.accountForm = this.createFormGroup(formBuilder);
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AccountModalComponent.prototype.ngOnInit = function () {
        this.account = new Object();
    };
    AccountModalComponent.prototype.createFormGroup = function (formBuilder) {
        return formBuilder.group({
            user_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AccountModalComponent.prototype.createEditFormGroup = function (formBuilder) {
        return formBuilder.group({
            user_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AccountModalComponent.prototype.initWithData = function (account) {
        this.accountForm.patchValue({
            user_name: account.name,
        });
    };
    AccountModalComponent.prototype.show = function () {
    };
    AccountModalComponent.prototype.showEditModal = function (account) {
        this.header = 'Account bearbeiten';
        this.accountForm = this.createEditFormGroup(this.formBuilder);
        if (account != null) {
            this.account = account;
            this.initWithData(account);
        }
    };
    AccountModalComponent.prototype.showCreationModal = function () {
        this.header = 'Admin erstellen';
        this.addAdminModal = true;
    };
    AccountModalComponent.prototype.cancel = function () {
        this.bsModal.hide();
    };
    AccountModalComponent.prototype.onSubmit = function () {
        if (this.accountForm.valid) {
            if (this.accountForm.value.password != null && this.accountForm.value.password.length < 8) {
                this.toastr.error('Das neue Passwort muss mindestens 8 Zeichen lang sein!', 'Error', {
                    positionClass: 'toast-top-right',
                    timeOut: 6000
                });
            }
            else {
                this.mapAccount(this.accountForm.value);
                this.onClose.next(this.account);
                this.bsModal.hide();
            }
        }
        else {
            this.findInvalidControls(this.accountForm);
            this.toastr.error('Bitte füllen Sie die fehlenden Felder aus!', 'Error', {
                positionClass: 'toast-top-right',
                timeOut: 6000
            });
        }
    };
    AccountModalComponent.prototype.findInvalidControls = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.findInvalidControls(control);
            }
        });
    };
    AccountModalComponent.prototype.mapAccount = function (accountForm) {
        this.account.user_name = accountForm.user_name;
        this.account.password = accountForm.password;
        this.account.email = accountForm.email;
        console.log(this.account);
    };
    AccountModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-modal',
            template: __webpack_require__(/*! ./account-modal.component.html */ "./src/app/account-management/account-modal/account-modal.component.html"),
            styles: [__webpack_require__(/*! ./account-modal.component.scss */ "./src/app/account-management/account-modal/account-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AccountModalComponent);
    return AccountModalComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_management_account_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-management/account-management.component */ "./src/app/account-management/account-management.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// internalSiteRoutes declares all Routes that can be visited on our Project-page:
// NOTE: internalSiteRoutes must be inserted top to bottom and from most specific to least specific.
var internalSiteRoutes = [
    { path: 'acc-management', component: _account_management_account_management_component__WEBPACK_IMPORTED_MODULE_2__["AccountManagementComponent"] },
    { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] },
    { path: 'product-management', component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"] },
    { path: 'transactions', component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(internalSiteRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-navigation *ngIf=\"authService.isAuthorized\"></app-main-navigation>\n<app-login-page *ngIf=\"!authService.isAuthorized\"></app-login-page>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5); }\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center; }\n\n.example-sidenav {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZS1zY3JhYmkvUHJvamVjdHMvTWF0b2htYXQvYWRtaW4tZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
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
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Admin-Frontend';
        this.showFiller = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-navigation/main-navigation.component */ "./src/app/main-navigation/main-navigation.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _account_management_account_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-management/account-management.component */ "./src/app/account-management/account-management.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _account_management_account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./account-management/account-modal/account-modal.component */ "./src/app/account-management/account-modal/account-modal.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _products_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./products/product-modal/product-modal.component */ "./src/app/products/product-modal/product-modal.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./order-form/order-form.component */ "./src/app/order-form/order-form.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_6__["MainNavigationComponent"],
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
                _account_management_account_management_component__WEBPACK_IMPORTED_MODULE_10__["AccountManagementComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_12__["TransactionsComponent"],
                _account_management_account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_19__["AccountModalComponent"],
                _products_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_23__["ProductModalComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_24__["DataTableComponent"],
                _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_26__["OrderFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_21__["TabsModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
            ],
            entryComponents: [_account_management_account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_19__["AccountModalComponent"], _products_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_23__["ProductModalComponent"]],
            providers: [
                _data_service__WEBPACK_IMPORTED_MODULE_27__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
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
        this.isAuthorized = false;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'admins/me';
    }
    AuthService.prototype.login = function (username, password) {
        this.user = username;
        this.password = password;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.get(this.url, { responseType: 'text', observe: 'response', headers: headers });
    };
    AuthService.prototype.logout = function () {
        this.user = '';
        this.password = '';
        this.isAuthorized = false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/data-table/data-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button *ngIf=\"enableOrder\" mat-fab color=\"primary\" class=\"add\" (click)=\"orderStuff()\">\n  <i class=\"material-icons md-48\">add_shopping_cart</i>\n</button> -->\n\n<div class=\"mat-elevation-z8 data-table\">\n  <mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <ng-container *ngFor=\"let disCol of dataColumns; let colIndex = index\" matColumnDef=\"{{disCol}}\">\n      {{disCol |json }}\n      <mat-header-cell *matHeaderCellDef>{{disCol}}</mat-header-cell>\n      <mat-cell *matCellDef=\"let element \"> \n        <span *ngIf=\"disCol !== 'thumbnail'\">\n          {{element[disCol]}}\n        </span>\n        <img *ngIf=\"disCol === 'thumbnail'\" [src]=\"element[disCol]\"/>\n      </mat-cell>\n    </ng-container>\n\n\n\n    <ng-container *ngIf=\"!readonly\" matColumnDef=\"settings\">\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let data\">\n        <button *ngIf=\"enableOrder\" mat-button color=\"basic\" (click)=\"orderStuff(data)\">\n          <i class=\"material-icons md-48\">add_shopping_cart</i>\n        </button>\n        <button mat-button color=\"basic\" (click)=\"editData(data)\">\n          <i class=\"material-icons\">edit</i>\n        </button>\n        <button *ngIf=\"enableDeleteButton\" mat-button color=\"warn\" (click)=\"deleteData(data)\">\n          <i class=\"material-icons\">delete</i>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></mat-header-row>\n    <mat-row *matRowDef=\"let myRowData; columns: columnsToDisplay\"></mat-row>\n  </mat-table>\n\n  <!-- <mat-paginator #paginator [length]=\"dataSource.data.length\" [pageIndex]=\"0\" [pageSize]=\"50\"\n    [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator> -->\n</div>\n\n<footer class=\"footer\">\n  <button *ngIf=\"enableAddButton\" [ngStyle]=\"{'right':sideBarVisible === true ? '300px' : '16px'}\" mat-fab color=\"primary\" class=\"stick-right\" (click)=\"addData()\">\n    <i class=\"material-icons md-48\">add</i>\n  </button>\n</footer>"

/***/ }),

/***/ "./src/app/data-table/data-table.component.scss":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 45px;\n  max-height: 45px;\n  padding: 5px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n::ng-deep .mat-elevation-z8.data-table {\n  box-shadow: none; }\n\n::ng-deep .mat-table {\n  background-color: #fafafa; }\n\n::ng-deep .mat-paginator {\n  background-color: #fafafa; }\n\n.footer {\n  width: 100%;\n  height: 80px;\n  right: 0px;\n  bottom: 0px;\n  background: transparent; }\n\n.stick-right {\n  position: fixed;\n  right: 16px;\n  bottom: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZS1zY3JhYmkvUHJvamVjdHMvTWF0b2htYXQvYWRtaW4tZnJvbnRlbmQvc3JjL2FwcC9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUdFLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFFWCx1QkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgbWF4LXdpZHRoOiA0NXB4O1xuICAgIG1heC1oZWlnaHQ6IDQ1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuXG46Om5nLWRlZXAgLm1hdC1lbGV2YXRpb24tejguZGF0YS10YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cbi5mb290ZXIge1xuICAvLyBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG5cbiAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbn1cblxuLnN0aWNrLXJpZ2h0e1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxNnB4O1xuICBib3R0b206IDE2cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        // @ViewChild(MatPaginator) paginator: MatPaginator;
        // @ViewChild(MatSort) sort: MatSort;
        this.dataColumns = [];
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.order = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnsToDisplay = [];
    }
    DataTableComponent.prototype.ngOnInit = function () {
        if (!this.readonly) {
            // this.dataSource = new ProductsSource(this.paginator, this.sort);
            this.columnsToDisplay = this.columnsToDisplay.concat(this.dataColumns.concat(['settings']));
        }
        else {
            this.columnsToDisplay = this.dataColumns;
            console.log(this.columnsToDisplay);
        }
    };
    DataTableComponent.prototype.editData = function (data) {
        this.edit.emit(data);
    };
    DataTableComponent.prototype.deleteData = function (data) {
        this.delete.emit(data);
    };
    DataTableComponent.prototype.addData = function () {
        this.add.emit();
    };
    DataTableComponent.prototype.orderStuff = function (data) {
        this.order.emit(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DataTableComponent.prototype, "dataColumns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataTableComponent.prototype, "enableOrder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataTableComponent.prototype, "enableAddButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataTableComponent.prototype, "enableDeleteButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataTableComponent.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "add", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "order", void 0);
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.scss */ "./src/app/data-table/data-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http, authService) {
        this.http = http;
        this.authService = authService;
        this._productsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'products';
        this._transactionsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'transactions';
        this._usersUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'users';
        this._adminUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'admins';
    }
    DataService.prototype.createHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(this.authService.user + ':' + this.authService.password) });
    };
    DataService.prototype.getUsers = function () {
        return this.http.get(this._usersUrl, { headers: this.createHeader() });
    };
    DataService.prototype.getUserById = function (id) {
        return this.http.get(this._usersUrl + '/' + id, { headers: this.createHeader() });
    };
    DataService.prototype.editUser = function (user, id) {
        return this.http.patch(this._usersUrl + '/' + id, user, { headers: this.createHeader() });
    };
    DataService.prototype.deleteUser = function (id) {
        return this.http.delete(this._usersUrl + '/' + id, { headers: this.createHeader() });
    };
    DataService.prototype.getAdmins = function () {
        return this.http.get(this._adminUrl, { headers: this.createHeader() });
    };
    DataService.prototype.getAdminById = function (id) {
        return this.http.get(this._adminUrl + '/' + id, { headers: this.createHeader() });
    };
    DataService.prototype.getLoggedInAdmin = function () {
        return this.http.get(this._adminUrl + '/me', { headers: this.createHeader() });
    };
    DataService.prototype.addAdmin = function (admin) {
        return this.http.post(this._adminUrl, admin, { headers: this.createHeader() });
    };
    DataService.prototype.editAdmin = function (admin, id) {
        return this.http.patch(this._adminUrl + '/' + id, admin, { headers: this.createHeader() });
    };
    DataService.prototype.deleteAdmin = function (id) {
        return this.http.delete(this._adminUrl + '/' + id, { headers: this.createHeader() });
    };
    DataService.prototype.getProducts = function () {
        return this.http.get(this._productsUrl, { headers: this.createHeader() });
    };
    DataService.prototype.getProductById = function (id) {
        return this.http.get(this._productsUrl + '/' + id, { headers: this.createHeader() });
    };
    DataService.prototype.addProduct = function (product) {
        return this.http.post(this._productsUrl, product, { headers: this.createHeader() });
    };
    DataService.prototype.editProduct = function (product, id) {
        return this.http.patch(this._productsUrl + '/' + id, product, { headers: this.createHeader() });
    };
    DataService.prototype.deleteProduct = function (id) {
        return this.http.delete(this._productsUrl + '/' + id, { headers: this.createHeader() });
    };
    DataService.prototype.getTransactions = function () {
        return this.http.get(this._transactionsUrl, { headers: this.createHeader() });
    };
    DataService.prototype.makeOrderTransaction = function (order) {
        return this.http.post(this._transactionsUrl + '/order', order, { headers: this.createHeader() });
    };
    DataService.prototype.makePurchaseTransaction = function (order) {
        return this.http.post(this._transactionsUrl + '/purchases', order, { headers: this.createHeader() });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card class=\"login-card\">\n    <mat-card-header class=\"card-header\">\n      <mat-card-title>Login</mat-card-title>\n    </mat-card-header>\n    <mat-card-content class=\"card-content\">\n      <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\">\n        <div>\n          <mat-form-field>\n            <input matInput placeholder=\"Username\" formControlName=\"username\" required />\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field>\n            <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" required />\n          </mat-form-field>\n        </div>\n        <button mat-raised-button type=\"submit\" class=\"btn\">Login</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/login-page/login-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 50px;\n  text-align: center; }\n\n.login-card {\n  background: #ffffff;\n  margin: auto;\n  padding: 0px; }\n\n@media (min-width: 0px) {\n    .login-card {\n      width: 100%; } }\n\n@media (min-width: 576px) {\n    .login-card {\n      width: 50%; } }\n\n@media (min-width: 768px) {\n    .login-card {\n      width: 40%; } }\n\n@media (min-width: 992px) {\n    .login-card {\n      width: 30%; } }\n\n@media (min-width: 1200px) {\n    .login-card {\n      width: 20%; } }\n\n.card-header {\n  background: #009688;\n  color: #ffffff;\n  padding-bottom: 0px; }\n\n.card-content {\n  padding-top: 10px;\n  margin-bottom: 0px; }\n\n.btn {\n  margin-top: 5px;\n  margin-bottom: 15px;\n  background: #009688;\n  color: #FFFFFF; }\n\n.btn:hover {\n    background: #298780; }\n\n.btn:active {\n    background: #298780; }\n\n::ng-deep .mat-form-field {\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZS1zY3JhYmkvUHJvamVjdHMvTWF0b2htYXQvYWRtaW4tZnJvbnRlbmQvc3JjL2FwcC9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVk7RUFFWixZQUFZLEVBQUE7O0FBRVo7SUFOSjtNQU9RLFdBQVcsRUFBQSxFQWNsQjs7QUFaRztJQVRKO01BVVEsVUFBVSxFQUFBLEVBV2pCOztBQVRHO0lBWko7TUFhUSxVQUFVLEVBQUEsRUFRakI7O0FBTkc7SUFmSjtNQWdCUSxVQUFVLEVBQUEsRUFLakI7O0FBSEc7SUFsQko7TUFtQlEsVUFBVSxFQUFBLEVBRWpCOztBQUVEO0VBQ0ksbUJBQTRCO0VBQzVCLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBNEI7RUFDNUIsY0FBYyxFQUFBOztBQUpsQjtJQU1RLG1CQUFrQixFQUFBOztBQU4xQjtJQVNRLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLy8gd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICBAbWVkaWEobWluLXdpZHRoOiAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgIH1cbiAgICBAbWVkaWEobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgIH1cbiAgICBAbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDE1MCwgMTM2KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5idG4ge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCAxNTAsIDEzNik7XG4gICAgY29sb3I6ICNGRkZGRkY7ICAgXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IzI5ODc4MDtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjk4NzgwO1xuICAgIH1cbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDgwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(toastr, formBuilder, route, router, dataService, authService) {
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginPageComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            this.toastr.error("Form ist invalid", "Error");
            return;
        }
        var user = this.loginForm.controls.username.value;
        var password = this.loginForm.controls.password.value;
        this.authService.login(user, password).subscribe(function (res) {
            _this.authService.isAuthorized = true;
            _this.router.navigate(['/product-management']);
        }, function (error) {
            _this.error = error;
            _this.toastr.error("Falsche Logindaten", "Error");
        });
        console.log(localStorage);
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/login-page/login-page.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/main-navigation/main-navigation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/main-navigation/main-navigation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Matohmat</span>\n\n  <mat-list class=\"button-list\">\n    <button mat-flat-button class=\"toolbar-button\" color=\"primary\" routerLink=\"settings\" routerLinkActive=\"highlight\" [routerLinkActiveOptions]=\"{exact:\n      true}\">Account Settings</button>\n    <button mat-flat-button class=\"toolbar-button\" color=\"primary\" routerLink=\"transactions\" routerLinkActive=\"highlight\"\n    [routerLinkActiveOptions]=\"{exact: true}\">Transactions</button>\n    <button mat-flat-button class=\"toolbar-button\" color=\"primary\" routerLink=\"acc-management\" routerLinkActive=\"highlight\"\n    [routerLinkActiveOptions]=\"{exact: true}\">Accountmanagement</button>\n    <button mat-flat-button class=\"toolbar-button\" color=\"primary\" routerLink=\"product-management\" routerLinkActive=\"highlight\"\n    [routerLinkActiveOptions]=\"{exact: true}\">Productmanagement</button>  \n  </mat-list>\n  \n  <!-- This fills the remaining space of the current row -->\n  <span class=\"fill-remaining-space\"></span>\n\n  <button mat-button class=\"toolbar-button logout\" (click)=\"logout()\">\n    <mat-icon>power_settings_new</mat-icon>\n  </button>\n</mat-toolbar>\n \n<main class=\"main\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/main-navigation/main-navigation.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/main-navigation/main-navigation.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  padding: 0px 0px 0px 16px;\n  height: 48px; }\n\n.mat-list-base {\n  padding: 0px 16px; }\n\n.toolbar-button {\n  height: 48px;\n  border-radius: 0;\n  font-size: 16px;\n  color: #FAFAFA; }\n\n.highlight {\n  border-bottom: 6px solid #FAFAFA;\n  background-color: #008678; }\n\n.fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.logout {\n  width: 48px; }\n\n.main {\n  padding: 16px;\n  background-color: #FAFAFA; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZS1zY3JhYmkvUHJvamVjdHMvTWF0b2htYXQvYWRtaW4tZnJvbnRlbmQvc3JjL2FwcC9tYWluLW5hdmlnYXRpb24vbWFpbi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLW5hdmlnYXRpb24vbWFpbi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQ0FBZ0M7RUFDaEMseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0U7bURDSGlEO0VES2pELGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2IseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdmlnYXRpb24vbWFpbi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFye1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5tYXQtbGlzdC1iYXNle1xuICBwYWRkaW5nOiAwcHggMTZweDtcbn1cblxuLnRvb2xiYXItYnV0dG9ue1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGQUZBRkE7XG59XG5cbi5oaWdobGlnaHR7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjRkFGQUZBO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Njc4O1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmxvZ291dHtcbiAgd2lkdGg6IDQ4cHg7XG59XG5cbi5tYWlue1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufSIsIi5tYXQtdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDE2cHg7XG4gIGhlaWdodDogNDhweDsgfVxuXG4ubWF0LWxpc3QtYmFzZSB7XG4gIHBhZGRpbmc6IDBweCAxNnB4OyB9XG5cbi50b29sYmFyLWJ1dHRvbiB7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0ZBRkFGQTsgfVxuXG4uaGlnaGxpZ2h0IHtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNGQUZBRkE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg2Nzg7IH1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87IH1cblxuLmxvZ291dCB7XG4gIHdpZHRoOiA0OHB4OyB9XG5cbi5tYWluIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/main-navigation/main-navigation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main-navigation/main-navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: MainNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavigationComponent", function() { return MainNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainNavigationComponent = /** @class */ (function () {
    function MainNavigationComponent(breakpointObserver, authService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainNavigationComponent.prototype.logout = function () {
        this.authService.logout();
    };
    MainNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-navigation',
            template: __webpack_require__(/*! ./main-navigation.component.html */ "./src/app/main-navigation/main-navigation.component.html"),
            styles: [__webpack_require__(/*! ./main-navigation.component.scss */ "./src/app/main-navigation/main-navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MainNavigationComponent);
    return MainNavigationComponent;
}());



/***/ }),

/***/ "./src/app/order-form/order-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/order-form/order-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Warenkorb</h4>\n<div class=\"col-md-12 body\">\n  <mat-radio-group class=\"radio-group\" (change)=\"changedSelection($event)\">\n    <mat-radio-button class=\"col-md-12\" checked=\"true\" value=\"buy\">Einkaufen</mat-radio-button>\n    <mat-radio-button class=\"col-md-12\" value=\"sell\">Verkaufen</mat-radio-button>\n  </mat-radio-group>\n\n\n  <form [formGroup]=\"orderForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div *ngIf=\"products.length > 0\">\n      <div formArrayName=\"orders\">\n        <div *ngFor=\"let product of products; let i=index\">\n          <div [formGroupName]=\"i\">\n            <mat-form-field class=\"col-md-6\">\n              <input matInput formControleName=\"name\" placeholder=\"Name\" [value]=\"product.name\">\n            </mat-form-field>\n\n            <mat-form-field class=\"col-md-3\">\n              <input type=\"number\" formControlName=\"amount\" matInput placeholder=\"Anzahl\" [value]=\"product.count\"\n                (keyup)=\"onKey($event)\">\n            </mat-form-field>\n\n            <button class=\"col-md-1\" mat-button color=\"warn\" (click)=\"deleteProduct(product)\">\n              <i class=\"material-icons\">delete</i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"infotext\" *ngIf=\"products.length === 0\">\n      <i>Bitte fügen sie dem Warenkorb Produkte hinzu.</i>\n    </div>\n\n    <mat-form-field *ngIf=\"selectedValue === 'buy'\" class=\"col-md-12\">\n      <input matInput formControlName=\"amount\" placeholder=\"Einkaufspreis\">\n    </mat-form-field>\n\n    <div class=\"col-md-12\">\n      <button class=\"col-md-6 btn btn-default\" type=\"button\" (click)=\"cancel()\">Abbrechen</button>\n      <button class=\"col-md-6 btn btn-success\" type=\"sumbit\">Einkaufen</button>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/order-form/order-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/order-form/order-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  text-align: center;\n  padding-bottom: 10px; }\n\n::ng-deep .mat-button.mat-warn {\n  padding: 0px; }\n\n.footer {\n  position: absolute;\n  right: 0;\n  bottom: 70px; }\n\n.infotext {\n  color: grey;\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZS1zY3JhYmkvUHJvamVjdHMvTWF0b2htYXQvYWRtaW4tZnJvbnRlbmQvc3JjL2FwcC9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQUdoQjtFQUVJLFdBQVc7RUFDWCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1idXR0b24ubWF0LXdhcm4ge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogNzBweDtcbn1cblxuLmluZm90ZXh0IHtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgcGFkZGluZzogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/order-form/order-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-form/order-form.component.ts ***!
  \****************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderFormComponent = /** @class */ (function () {
    function OrderFormComponent(toastr, formBuilder, dataService) {
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        // TODO: Input id, name, costs, amountGewünscht
        this.closeSidaBar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.products = [];
        this.selectedValue = 'buy';
        this.orderForm = this.createFormGroup(formBuilder);
    }
    OrderFormComponent.prototype.ngOnInit = function () {
    };
    OrderFormComponent.prototype.createFormGroup = function (formBuilder) {
        return formBuilder.group({
            amount: 0,
            orders: formBuilder.array([this.createOrderItem()])
        });
    };
    OrderFormComponent.prototype.createOrderItem = function () {
        return this.formBuilder.group({
            product_info: [''],
            name: [''],
            amount: 0
        });
    };
    OrderFormComponent.prototype.changedSelection = function (event) {
        this.selectedValue = event.value;
    };
    OrderFormComponent.prototype.addItem = function () {
        this.orders = this.orderForm.get('orders');
        this.orders.push(this.createOrderItem());
    };
    OrderFormComponent.prototype.addProduct = function (product) {
        this.addItem();
        var foundProduct = this.findDuplicateProduct(product.id);
        if (foundProduct === null) {
            var data = {
                id: product.id,
                name: product.name,
                count: +1
            };
            this.products.push(data);
        }
        else {
            foundProduct.count = foundProduct.count + 1;
        }
        console.log(this.products);
    };
    OrderFormComponent.prototype.deleteProduct = function (product) {
        if (confirm("Wollen Sie dieses Produkt aus dem Warenkorb entfernen?")) {
            var index = this.products.indexOf(product);
            if (product.id > -1) {
                this.products.splice(index, 1);
            }
        }
    };
    OrderFormComponent.prototype.cancel = function () {
        if (confirm("Wollen Sie den Einkauf abbrechen?")) {
            console.log("Cancel");
            this.closeSidaBar.emit(true);
            this.products = [];
        }
    };
    OrderFormComponent.prototype.mapOrderProducts = function () {
        var jsonObject = new Object({
            amount: this.orderForm.value.amount,
            orders: []
        });
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var prod = _a[_i];
            var data = new Object({
                product_info: prod.id,
                amount: prod.count
            });
            jsonObject['orders'].push(data);
        }
        return jsonObject;
    };
    OrderFormComponent.prototype.mapPurchaseProducts = function () {
        var jsonObject = new Object({
            orders: []
        });
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var prod = _a[_i];
            var data = new Object({
                product: prod.id,
                amount: prod.count
            });
            jsonObject['orders'].push(data);
        }
        return jsonObject;
    };
    OrderFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("SUBMIT");
        console.log(this.orderForm);
        if (confirm("Möchten sie den Einkauf jetzt einbuchen?")) {
            if (this.selectedValue === 'buy') {
                var jsonObject = this.mapOrderProducts();
                this.dataService.makeOrderTransaction(jsonObject).subscribe(function (res) {
                    _this.closeSidaBar.emit(true);
                    _this.products = [];
                    _this.toastr.success('Bestellung war erfolgreich!', 'Erfolg', {
                        positionClass: 'toast-top-right',
                        timeOut: 6000
                    });
                }, function (error) { return console.log(error); });
            }
            else {
                var jsonObject = this.mapPurchaseProducts();
                this.dataService.makePurchaseTransaction(jsonObject).subscribe(function (res) {
                    _this.closeSidaBar.emit(true);
                    _this.products = [];
                    _this.toastr.success('Bestellung war erfolgreich!', 'Erfolg', {
                        positionClass: 'toast-top-right',
                        timeOut: 6000
                    });
                }, function (error) { return console.log(error); });
            }
        }
    };
    OrderFormComponent.prototype.findDuplicateProduct = function (id) {
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.id === id) {
                return product;
            }
        }
        return null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrderFormComponent.prototype, "closeSidaBar", void 0);
    OrderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-form',
            template: __webpack_require__(/*! ./order-form.component.html */ "./src/app/order-form/order-form.component.html"),
            styles: [__webpack_require__(/*! ./order-form.component.scss */ "./src/app/order-form/order-form.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], OrderFormComponent);
    return OrderFormComponent;
}());



/***/ }),

/***/ "./src/app/products/product-modal/product-modal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/products/product-modal/product-modal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\">{{header}}</h3>\n  </div>\n\n  <div class=\"modal-body\">\n      <div class=\"fields-container\">\n        <mat-form-field class=\"col-md-12\">\n          <input matInput placeholder=\"Produktname *\" formControlName=\"name\">\n        </mat-form-field>\n\n        <mat-form-field class=\"col-md-12\">\n          <input matInput placeholder=\"Thumbnail\" formControlName=\"thumbnail\">\n        </mat-form-field>\n\n        <mat-form-field class=\"col-md-12\">\n          <input matInput type=\"number\" placeholder=\"Meldebestand\" formControlName=\"reorder_point\">\n        </mat-form-field>\n\n        <mat-form-field class=\"col-md-12\">\n          <input matInput type=\"number\" placeholder=\"Preis\" formControlName=\"price\">\n        </mat-form-field>\n\n        <mat-form-field class=\"col-md-12\">\n          <input matInput type=\"number\" placeholder=\"Anzahl pro Kasten\" formControlName=\"items_per_crate\">\n        </mat-form-field>\n\n        <mat-form-field class=\"col-md-12\">\n          <input matInput type=\"barcode\" placeholder=\"Barcode\" formControlName=\"barcode\">\n        </mat-form-field>\n\n        <div *ngIf=\"patchProduct\" class=\"col-md-12\">\n          <mat-checkbox  formControlName=\"is_available\">Produkt vorhanden</mat-checkbox>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">cancel</button>\n    <button class=\"btn btn-success\" type=\"submit\">save</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/products/product-modal/product-modal.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/products/product-modal/product-modal.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".readonly {\n  color: #A4A4A4;\n  cursor: default; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZS1zY3JhYmkvUHJvamVjdHMvTWF0b2htYXQvYWRtaW4tZnJvbnRlbmQvc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LW1vZGFsL3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1tb2RhbC9wcm9kdWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWRvbmx5IHtcbiAgICBjb2xvcjogI0E0QTRBNDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/products/product-modal/product-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-modal/product-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModalComponent", function() { return ProductModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    return ImageSnippet;
}());
var ProductModalComponent = /** @class */ (function () {
    function ProductModalComponent(bsModal, formBuilder, toastr) {
        this.bsModal = bsModal;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.patchProduct = false;
        this.productForm = this.createFormGroup(formBuilder);
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ProductModalComponent.prototype.ngOnInit = function () {
        this.product = new Object();
    };
    ProductModalComponent.prototype.createFormGroup = function (formBuilder) {
        return formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reorder_point: 0,
            price: 0,
            items_per_crate: 0,
            thumbnail: [''],
            is_available: false,
            barcode: [''] // für beides
        });
    };
    ProductModalComponent.prototype.initWithData = function (product) {
        console.log(product);
        this.productForm.patchValue({
            name: product.name,
            items_per_crate: product.items_per_crate,
            reorder_point: product.reorder_point,
            price: product.price,
            thumbnail: product.thumbnail,
            is_available: product.is_available,
            barcode: product.barcode
        });
    };
    ProductModalComponent.prototype.show = function () {
    };
    ProductModalComponent.prototype.showEditModal = function (product) {
        this.patchProduct = true;
        this.header = "Produkt bearbeiten";
        if (product != null) {
            this.mapProduct(product);
            this.initWithData(product);
        }
    };
    ProductModalComponent.prototype.showCreationModal = function () {
        this.header = "Produkt hinzufügen";
    };
    ProductModalComponent.prototype.cancel = function () {
        this.bsModal.hide();
    };
    ProductModalComponent.prototype.onSubmit = function () {
        if (this.productForm.valid) {
            console.log(this.productForm.value);
            this.mapProduct(this.productForm.value);
            this.onClose.next(this.product);
            console.log(this.product);
            this.bsModal.hide();
        }
        else {
            this.findInvalidControls(this.productForm);
            this.toastr.error('Bitte füllen Sie die fehlenden Felder aus!', 'Error', {
                positionClass: 'toast-top-right',
                timeOut: 6000
            });
        }
    };
    ProductModalComponent.prototype.mapProduct = function (productForm) {
        console.log(this.product);
        console.log(productForm);
        console.log(productForm.barcode);
        if (typeof (productForm.barcode) !== 'undefined') {
            console.log("NOT EMPTY");
            this.product.barcode = productForm.barcode;
        }
        this.product.name = productForm.name;
        this.product.thumbnail = productForm.thumbnail;
        this.product.reorder_point = productForm.reorder_point;
        this.product.price = productForm.price;
        this.product.items_per_crate = productForm.items_per_crate;
        this.product.is_available = productForm.is_available;
        this.product.barcode = productForm.barcode;
        console.log(this.product);
    };
    ProductModalComponent.prototype.findInvalidControls = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.findInvalidControls(control);
            }
        });
    };
    ProductModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-modal',
            template: __webpack_require__(/*! ./product-modal.component.html */ "./src/app/products/product-modal/product-modal.component.html"),
            providers: [src_app_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]],
            styles: [__webpack_require__(/*! ./product-modal.component.scss */ "./src/app/products/product-modal/product-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ProductModalComponent);
    return ProductModalComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container *ngIf=\"products\" class=\"order-container\">\n\n  <mat-sidenav [(opened)]=\"sideBarVisible\" mode=\"side\" position=\"end\">\n    <app-order-form class=\"order\" #order class=\"order\" (closeSidaBar)=\"closeSideBar($event)\"></app-order-form>\n  </mat-sidenav>\n\n  <!--<button [ngStyle]=\"{'right':sideBarVisible === true ? '380px' : '80px'}\" mat-fab color=\"primary\" class=\"bot-toolbar-button\"\n    (click)=\"toggleSideBar()\">\n    <i class=\"material-icons md-48\">shopping_cart</i>\n  </button>-->\n\n  <app-data-table #table class=\"table\" [dataColumns]=\"columnsToDisplay\" [dataSource]=\"products\"\n    [enableDeleteButton]=\"false\" [enableAddButton]=\"true\" [enableOrder]=\"true\" showImage=\"true\"\n    (edit)=\"editProduct($event)\" (add)=\"addProduct()\" (order)=\"orderProduct($event)\"></app-data-table>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%; }\n\n.mat-elevation-z8 {\n  box-shadow: none; }\n\n.order {\n  padding: 10px; }\n\n.add {\n  margin-top: 10px;\n  margin-left: 10px; }\n\n::ng-deep .mat-drawer-container {\n  height: 100%; }\n\n::ng-deep .mat-drawer-content {\n  overflow: hidden; }\n\n::ng-deep .mat-drawer.mat-sidenav.mat-drawer-end {\n  width: 400px;\n  height: 100%; }\n\n.footer {\n  position: fixed;\n  width: 100%;\n  height: 80px;\n  right: 0px;\n  bottom: 0px;\n  background: #FAFAFA; }\n\n.stick-right {\n  position: fixed;\n  right: 80px;\n  bottom: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZS1zY3JhYmkvUHJvamVjdHMvTWF0b2htYXQvYWRtaW4tZnJvbnRlbmQvc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUVmLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFFWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1hdC1lbGV2YXRpb24tejgge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAub3JkZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuYWRkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LWRyYXdlci5tYXQtc2lkZW5hdi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gIFxuICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XG4gIH1cbiAgXG4gIC5zdGljay1yaWdodHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDgwcHg7XG4gICAgYm90dG9tOiAxNnB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-modal/product-modal.component */ "./src/app/products/product-modal/product-modal.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order-form/order-form.component */ "./src/app/order-form/order-form.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(injector, toastr, dataService, changeDetector) {
        this.injector = injector;
        this.toastr = toastr;
        this.dataService = dataService;
        this.changeDetector = changeDetector;
        this.openOrderSideBar = false;
        this.sideBarVisible = false;
        this.columnsToDisplay = ['thumbnail', 'name', 'price', 'reorder_point', 'is_available', 'items_per_crate'];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.dataService.getProducts().subscribe(function (res) {
            _this.products = res;
        });
    };
    ProductsComponent.prototype.editProduct = function (product) {
        var _this = this;
        var modalService = this.injector.get(ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]);
        var modalRef = modalService.show(_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_2__["ProductModalComponent"]);
        modalRef.content.showEditModal(product);
        modalRef.content.onClose.subscribe(function (newProduct) {
            _this.dataService.editProduct(newProduct, product.id).subscribe(function () {
                _this.toastr.success('Produkt wurde erfolgreich bearbeitet!', 'Erfolg', {
                    positionClass: 'toast-top-right',
                    timeOut: 6000
                });
                _this.getProducts();
                (function (error) { console.log(error); });
            });
        });
    };
    ProductsComponent.prototype.orderProduct = function (product) {
        this.sideBarVisible = true;
        this.changeDetector.detectChanges();
        this.order.addProduct(product);
    };
    ProductsComponent.prototype.addProduct = function () {
        var _this = this;
        var modalService = this.injector.get(ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]);
        var modalRef = modalService.show(_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_2__["ProductModalComponent"]);
        modalRef.content.showCreationModal();
        modalRef.content.onClose.subscribe(function (product) {
            _this.dataService.addProduct(product).subscribe(function (res) {
                _this.toastr.success('Produkt wurde erfolgreich hinzugefügt!', 'Erfolg', {
                    positionClass: 'toast-top-right',
                    timeOut: 6000
                });
                _this.getProducts();
            }, function (error) { console.log(error); });
        });
    };
    ProductsComponent.prototype.closeSideBar = function (close) {
        if (close) {
            this.sideBarVisible = false;
        }
    };
    ProductsComponent.prototype.toggleSideBar = function () {
        this.sideBarVisible = !this.sideBarVisible;
        this.table.orderSideBarVisible = this.sideBarVisible;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"]),
        __metadata("design:type", _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"])
    ], ProductsComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('order'),
        __metadata("design:type", _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_4__["OrderFormComponent"])
    ], ProductsComponent.prototype, "order", void 0);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"settingsForm\">\n  <tabset>\n    <tab heading=\"Passwort ändern\" id=\"passwordTab\">\n        <div formGroupName=\"password\">\n          <div class=\"fields-container\">\n            <mat-form-field class=\"col-md-12\">\n              <input matInput placeholder=\"Aktuelles Passwort *\" formControlName=\"old_password\" type=\"password\">\n            </mat-form-field>\n      \n            <mat-form-field class=\"col-md-12\">\n              <input matInput placeholder=\"Neues Passwort *\" formControlName=\"new_password\" type=\"password\">\n            </mat-form-field>\n      \n            <mat-form-field class=\"col-md-12\">\n              <input matInput placeholder=\"Neues Passwort bestätigen *\" formControlName=\"new_password_confirm\" type=\"password\">\n            </mat-form-field>\n          </div>\n          <button class=\"btn btn-success\" (click)=\"changePassword()\">Passwort ändern</button>\n        </div>\n    </tab>\n    <tab heading=\"E-Mail ändern\" id=\"emailTab\">\n        <div formGroupName=\"email\">\n          <div class=\"fields-container\">\n    \n            <mat-form-field class=\"col-md-12\">\n              <input matInput placeholder=\"Neue Email *\" formControlName=\"new_email\" type=\"email\">\n            </mat-form-field>\n      \n            <mat-form-field class=\"col-md-12\">\n              <input matInput placeholder=\"Neue Email bestätigen *\" formControlName=\"new_email_confirm\" type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field class=\"col-md-12\">\n              <input matInput placeholder=\"Passwort eingeben *\" formControlName=\"password\" type=\"password\">\n            </mat-form-field>\n          </div>\n          <button class=\"btn btn-success\" (click)=\"changeMail()\">E-Mail ändern</button>\n        </div>\n    </tab>\n  </tabset>\n\n\n\n\n</form>"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-container > .nav.nav-tabs > .nav-item > .nav-link.active {\n  background-color: #fafafa;\n  border-color: #dee2e6 #dee2e6 #fafafa; }\n\n::ng-deep .nav-link {\n  color: #000000; }\n\n.fields-container {\n  padding-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZS1zY3JhYmkvUHJvamVjdHMvTWF0b2htYXQvYWRtaW4tZnJvbnRlbmQvc3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixxQ0FBcUMsRUFBQTs7QUFHekM7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAudGFiLWNvbnRhaW5lciA+IC5uYXYubmF2LXRhYnMgPiAubmF2LWl0ZW0gPiAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNiAjZGVlMmU2ICNmYWZhZmE7XG59XG5cbjo6bmctZGVlcCAubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZmllbGRzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(formBuilder, toastr, authService, dataService) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.authService = authService;
        this.dataService = dataService;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.settingsForm = this.createFormGroup(formBuilder);
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getAdminData();
    };
    SettingsComponent.prototype.getAdminData = function () {
        var _this = this;
        return this.dataService.getLoggedInAdmin().subscribe(function (res) {
            _this.admin = res;
        });
    };
    SettingsComponent.prototype.createFormGroup = function (formBuilder) {
        return formBuilder.group({
            email: formBuilder.group({
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                new_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)])],
                new_email_confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)])],
            }),
            password: formBuilder.group({
                old_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                new_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                new_password_confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            })
        });
    };
    Object.defineProperty(SettingsComponent.prototype, "PasswordForm", {
        get: function () {
            return this.settingsForm.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "MailForm", {
        get: function () {
            return this.settingsForm.controls.email;
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.PasswordForm.valid) {
            if (this.PasswordForm.value.old_password !== this.authService.password) {
                this.PasswordForm.controls.old_password.patchValue("");
                this.PasswordForm.controls.old_password.markAsTouched;
                this.toastr.error('Das angegebene Passwort ist nicht richtig!', 'Error', {
                    positionClass: 'toast-top-right',
                    timeOut: 6000
                });
            }
            else if (this.PasswordForm.value.new_password !== this.PasswordForm.value.new_password_confirm) {
                this.PasswordForm.controls.new_password_confirm.patchValue("");
                this.PasswordForm.controls.new_password_confirm.markAsTouched;
                this.toastr.error('Die Passwörter stimmen nicht überein!', 'Error', {
                    positionClass: 'toast-top-right',
                    timeOut: 6000
                });
            }
            else if (this.PasswordForm.value.new_password.length < 8) {
                this.toastr.error('Das neue Passwort muss mindestens 8 Zeichen lang sein!', 'Error', {
                    positionClass: 'toast-top-right',
                    timeOut: 6000
                });
            }
            else {
                console.log(this.admin);
                var newAdmin = {
                    email: this.admin.email,
                    user_name: this.admin.user_name,
                    password: this.PasswordForm.value.new_password
                };
                this.dataService.editAdmin(newAdmin, this.admin.id).subscribe(function (res) {
                    console.log(res);
                    _this.toastr.success('Das Passwort wurde erfolgreich geändert!', 'Error', {
                        positionClass: 'toast-top-right',
                        timeOut: 6000
                    });
                });
            }
        }
        else {
            this.findInvalidControls(this.PasswordForm);
            this.toastr.error('Bitte befülle die erforderlichen Felder!', 'Error', {
                positionClass: 'toast-top-right',
                timeOut: 6000
            });
        }
    };
    SettingsComponent.prototype.changeMail = function () {
        var _this = this;
        console.log(this.admin);
        if (this.MailForm.valid) {
            if (this.MailForm.value.password !== this.authService.password) {
                this.MailForm.controls.password.patchValue("");
                this.MailForm.controls.password.markAsTouched;
                this.toastr.error('Das angegebene Passwort ist nicht richtig!', 'Erfolg', {
                    positionClass: 'toast-top-right',
                    timeOut: 6000
                });
            }
            else if (this.MailForm.value.new_email !== this.MailForm.value.new_email_confirm) {
                this.MailForm.controls.new_email_confirm.patchValue("");
                this.MailForm.controls.new_email_confirm.markAsTouched();
                this.toastr.error('Die E-Mails stimmen nicht überein!', 'Error', {
                    positionClass: 'toast-top-right',
                    timeOut: 6000
                });
            }
            else {
                console.log(this.admin);
                var newAdmin = {
                    email: this.MailForm.value.new_email,
                    user_name: this.admin.user_name,
                    password: this.authService.password
                };
                this.dataService.editAdmin(newAdmin, this.admin.id).subscribe(function (res) {
                    console.log(res);
                    _this.toastr.success('Die E-Mail wurde erfolgreich geändert!', 'Erfolg', {
                        positionClass: 'toast-top-right',
                        timeOut: 6000
                    });
                });
            }
        }
        else {
            this.findInvalidControls(this.MailForm);
            this.toastr.error('Bitte befülle die erforderlichen Felder!', 'Error', {
                positionClass: 'toast-top-right',
                timeOut: 6000
            });
        }
    };
    SettingsComponent.prototype.findInvalidControls = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.findInvalidControls(control);
            }
        });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/transactions/transactions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-data-table *ngIf=\"transactions\" #table class=\"table\" [dataColumns]=\"columnsToDisplay\" [dataSource]=\"transactions\" [readonly]=\"true\">\n</app-data-table>"

/***/ }),

/***/ "./src/app/transactions/transactions.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/transactions/transactions.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionsComponent = /** @class */ (function () {
    // columnsToDisplay = [{ 'key': 'date', 'value': 'Datum' },
    // { 'key': 'sender', 'value': 'Sender' },
    // { 'key': 'receiver', 'value': 'Empfänger' },
    // { 'key': 'amount', 'value': 'Anzahl' },
    // { 'key': 'transaction_type', 'value': 'Transaktionstyp' }];
    function TransactionsComponent(dataService) {
        this.dataService = dataService;
        this.columnsToDisplay = ['date', 'sender', 'receiver', 'amount', 'transaction_type'];
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        this.getTransactions();
    };
    TransactionsComponent.prototype.getTransactions = function () {
        var _this = this;
        this.dataService.getTransactions().subscribe(function (res) {
            console.log(res);
            _this.transactions = res;
        });
    };
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.scss */ "./src/app/transactions/transactions.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    URL: 'https://matohmat-dev.schabi.org/v1/'
    // URL: 'http://127.0.0.1:5000/v1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/the-scrabi/Projects/Matohmat/admin-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map