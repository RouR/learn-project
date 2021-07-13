(self["webpackChunklearn_project"] = self["webpackChunklearn_project"] || []).push([["src_app_recipes_recipes-routing_module_ts"],{

/***/ 4907:
/*!*************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDetailPage": () => (/* binding */ RecipeDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recipe_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recipe-detail.page.html */ 5064);
/* harmony import */ var _recipe_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-detail.page.scss */ 9068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9922);
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes.service */ 8174);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);








let RecipeDetailPage = class RecipeDetailPage {
    constructor(activatedRoute, router, alertCtrl, recipesService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.recipesService = recipesService;
    }
    ngOnInit() {
        this.loadedRecipe$ = this.activatedRoute.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(params => this.recipesService.getRecipe(params.get('recipeId'))), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(recipe => {
            // console.log(recipe);
            if (!recipe) {
                console.warn('todo navigate');
                this.router.navigate(['/recipes']);
            }
        }));
    }
    delete(recipeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Are you sure to Delete?',
                message: 'will delete sadfsdf',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log(`Confirm Cancel: ${blah}`);
                        }
                    },
                    {
                        text: 'Delete',
                        // cssClass: 'secondary',
                        handler: () => {
                            this.recipesService.deleteRecipe(recipeId);
                            this.router.navigate(['/recipes']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
RecipeDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__.RecipesService }
];
RecipeDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-recipe-detail',
        template: _raw_loader_recipe_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recipe_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecipeDetailPage);



/***/ }),

/***/ 2713:
/*!************************************************************************!*\
  !*** ./src/app/recipes/recipe-list-item/recipe-list-item.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeListItemComponent": () => (/* binding */ RecipeListItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recipe_list_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recipe-list-item.component.html */ 4219);
/* harmony import */ var _recipe_list_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-list-item.component.scss */ 5781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let RecipeListItemComponent = class RecipeListItemComponent {
    constructor() { }
    ngOnInit() { }
};
RecipeListItemComponent.ctorParameters = () => [];
RecipeListItemComponent.propDecorators = {
    recipeItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
RecipeListItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-recipe-list-item',
        template: _raw_loader_recipe_list_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        styles: [_recipe_list_item_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecipeListItemComponent);



/***/ }),

/***/ 8969:
/*!***************************************************!*\
  !*** ./src/app/recipes/recipes-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesModule": () => (/* binding */ RecipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes.page */ 9570);
/* harmony import */ var _recipe_detail_recipe_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.page */ 4907);
/* harmony import */ var _recipe_list_item_recipe_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-list-item/recipe-list-item.component */ 2713);









const routes = [
    {
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_0__.RecipesPage
    },
    {
        path: 'details/:recipeId',
        component: _recipe_detail_recipe_detail_page__WEBPACK_IMPORTED_MODULE_1__.RecipeDetailPage
        // loadChildren: () => import('./recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule)
    }
];
let RecipesModule = class RecipesModule {
};
RecipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
        ],
        declarations: [
            _recipes_page__WEBPACK_IMPORTED_MODULE_0__.RecipesPage,
            _recipe_detail_recipe_detail_page__WEBPACK_IMPORTED_MODULE_1__.RecipeDetailPage,
            _recipe_list_item_recipe_list_item_component__WEBPACK_IMPORTED_MODULE_2__.RecipeListItemComponent
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    })
], RecipesModule);



/***/ }),

/***/ 9570:
/*!*****************************************!*\
  !*** ./src/app/recipes/recipes.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesPage": () => (/* binding */ RecipesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recipes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recipes.page.html */ 4704);
/* harmony import */ var _recipes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.page.scss */ 4248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.service */ 8174);





let RecipesPage = class RecipesPage {
    constructor(recipesService) {
        this.recipesService = recipesService;
        this.recipes = recipesService.getAllRecipes();
    }
    ngOnInit() {
    }
};
RecipesPage.ctorParameters = () => [
    { type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__.RecipesService }
];
RecipesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-recipes',
        template: _raw_loader_recipes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recipes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecipesPage);



/***/ }),

/***/ 8174:
/*!********************************************!*\
  !*** ./src/app/recipes/recipes.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesService": () => (/* binding */ RecipesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let RecipesService = class RecipesService {
    constructor() {
        this.recipes = [
            {
                id: 'r1',
                title: 'Schnitzel1',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
                ingredients: ['French Fries', 'Pork Meat', 'Salad']
            },
            {
                id: 'r2',
                title: 'Spaghetti22',
                // eslint-disable-next-line max-len
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
                ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
            }
        ];
    }
    getAllRecipes() {
        return [...this.recipes];
    }
    getRecipe(recipeId) {
        var _a;
        return (_a = this.recipes.find(recipe => recipe.id === recipeId)) !== null && _a !== void 0 ? _a : null;
    }
    deleteRecipe(recipeId) {
        this.recipes = this.recipes.filter(x => x.id !== recipeId);
    }
};
RecipesService.ctorParameters = () => [];
RecipesService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], RecipesService);



/***/ }),

/***/ 9068:
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 5781:
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list-item/recipe-list-item.component.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 4248:
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 5064:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/recipes\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ (loadedRecipe$ | async)?.title ?? \"Error\"}}</ion-title>\n    <ion-buttons slot=\"primary\" *ngIf=\"loadedRecipe$ | async as forDelete\">\n      <ion-button (click)=\"delete(forDelete.id)\"><ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"loadedRecipe$ | async as loadedRecipe; else notLoaded\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"loadedRecipe.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h1 class=\"ion-text-center\">{{ loadedRecipe.title }}</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor=\"let ig of loadedRecipe.ingredients\">\n            {{ ig }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ng-template #notLoaded>\n  notLoaded\n</ng-template>\n");

/***/ }),

/***/ 4219:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list-item/recipe-list-item.component.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item>\n  <ion-avatar slot=\"start\">\n    <ion-img [src]=\"recipeItem.imageUrl\"></ion-img>\n  </ion-avatar>\n  <ion-label> {{ recipeItem.title }} </ion-label>\n</ion-item>\n");

/***/ }),

/***/ 4704:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Recipes!</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <app-recipe-list-item *ngFor=\"let recipe of recipes\"\n                          [recipeItem]=\"recipe\"\n                          [routerLink]=\"['./details/', recipe.id]\">\n    </app-recipe-list-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_recipes_recipes-routing_module_ts.js.map