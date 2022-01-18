(self["webpackChunkMyArticlesBlog"] = self["webpackChunkMyArticlesBlog"] || []).push([["src_app_article-body_article-body_module_ts"],{

/***/ 97206:
/*!*************************************************************!*\
  !*** ./src/app/article-body/article-body-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleBodyPageRoutingModule": function() { return /* binding */ ArticleBodyPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _article_body_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-body.page */ 54017);




const routes = [
    {
        path: '',
        component: _article_body_page__WEBPACK_IMPORTED_MODULE_0__.ArticleBodyPage
    }
];
let ArticleBodyPageRoutingModule = class ArticleBodyPageRoutingModule {
};
ArticleBodyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArticleBodyPageRoutingModule);



/***/ }),

/***/ 13811:
/*!*****************************************************!*\
  !*** ./src/app/article-body/article-body.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleBodyPageModule": function() { return /* binding */ ArticleBodyPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _article_body_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-body-routing.module */ 97206);
/* harmony import */ var _article_body_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-body.page */ 54017);







let ArticleBodyPageModule = class ArticleBodyPageModule {
};
ArticleBodyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _article_body_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticleBodyPageRoutingModule
        ],
        declarations: [_article_body_page__WEBPACK_IMPORTED_MODULE_1__.ArticleBodyPage]
    })
], ArticleBodyPageModule);



/***/ }),

/***/ 54017:
/*!***************************************************!*\
  !*** ./src/app/article-body/article-body.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleBodyPage": function() { return /* binding */ ArticleBodyPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_article_body_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./article-body.page.html */ 35952);
/* harmony import */ var _article_body_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-body.page.scss */ 42495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ArticleBodyPage = class ArticleBodyPage {
    constructor() { }
    ngOnInit() {
    }
};
ArticleBodyPage.ctorParameters = () => [];
ArticleBodyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-article-body',
        template: _raw_loader_article_body_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_article_body_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ArticleBodyPage);



/***/ }),

/***/ 42495:
/*!*****************************************************!*\
  !*** ./src/app/article-body/article-body.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLWJvZHkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 35952:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article-body/article-body.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>article-body</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p>\n    Some words about me...\n  </p>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_article-body_article-body_module_ts-es2015.js.map