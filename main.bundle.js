webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lyrics_lyrics_list_lyrics_list_component__ = __webpack_require__("../../../../../src/app/lyrics/lyrics-list/lyrics-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lyrics_lyric_details_lyric_details_component__ = __webpack_require__("../../../../../src/app/lyrics/lyric-details/lyric-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'lyrics',
        component: __WEBPACK_IMPORTED_MODULE_2__lyrics_lyrics_list_lyrics_list_component__["a" /* LyricsListComponent */]
    },
    {
        path: 'Lyric/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__lyrics_lyric_details_lyric_details_component__["a" /* LyricDetailsComponent */]
    }
    // { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet (deactivate)=\"onDeactivate()\"></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.onDeactivate = function () {
        document.body.scrollTop = 0;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_page_slider__ = __webpack_require__("../../../../ng2-page-slider/bundles/ng2-page-slider.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lyrics_lyrics_list_lyrics_list_component__ = __webpack_require__("../../../../../src/app/lyrics/lyrics-list/lyrics-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lyrics_lyric_details_lyric_details_component__ = __webpack_require__("../../../../../src/app/lyrics/lyric-details/lyric-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_lyrics_list_lyricslist_service__ = __webpack_require__("../../../../../src/app/services/lyrics-list/lyricslist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__banners_lyrics_lyrics_component__ = __webpack_require__("../../../../../src/app/banners/lyrics/lyrics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_nav_nav_component__ = __webpack_require__("../../../../../src/app/shared/nav/nav.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__lyrics_lyrics_list_lyrics_list_component__["a" /* LyricsListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__lyrics_lyric_details_lyric_details_component__["a" /* LyricDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__banners_lyrics_lyrics_component__["a" /* LyricsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_nav_nav_component__["a" /* NavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_page_slider__["a" /* PageSliderModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_materialize__["a" /* MaterializeModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_lyrics_list_lyricslist_service__["a" /* LyricslistService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/banners/lyrics/lyrics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/banners/lyrics/lyrics.component.html":
/***/ (function(module, exports) {

module.exports = " \n   \n <kb-page-slider [enableOverscroll]=\"true\" [overlayIndicator]=\"false\"  dotColor=\"black\"\n                        [(page)]=\"pageNumber\"  [showIndicator]=\"true\" [enableOverscroll]=\"true\" (pageCountChange)=\"pageCount = $event\">\n\n            <!-- Pages -->\n <div class=\"mask\"></div>\n            <div class=\"p-t-100\" *kbPages=\"let page of pages\" [ngStyle]=\"{'background': 'url('+ page.image +') no-repeat center'}\">\n           <!--  <img src=\"{{page.image}}\"> -->\n            <div class=\"bannerTitle\">\n                  <h2 class=\"white-text\">{{page.title}}</h2>\n                  <a mz-button  class=\"raduis\">watch review  </a>\n            </div>\n            </div>\n \n            <!-- Navigation Buttons -->\n            <kb-nav-button backward [showBackground]=\"true\"\n                        [(page)]=\"pageNumber\" [pageCount]=\"pageCount\">\n            </kb-nav-button>\n \n            <kb-nav-button forward [showBackground]=\"true\"\n                        [(page)]=\"pageNumber\" [pageCount]=\"pageCount\">\n            </kb-nav-button>\n \n        </kb-page-slider> \n "

/***/ }),

/***/ "../../../../../src/app/banners/lyrics/lyrics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LyricsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LyricsComponent = (function () {
    // public pageNumber: number = 0;
    //   public pageCount: number = 0;
    //   public pages = [
    //     {
    //       title: "About the Company",
    //       color: "red"
    //     },
    //     {
    //       title: "A Mission Statement",
    //       color: "green"
    //     },
    //     {
    //       title: "Diversity!",
    //       color: "seagreen"
    //     },
    //     {
    //       title: "World-class Business Things",
    //       color: "blue"
    //     },
    //     {
    //       title: "Ideas! Do You Have Any?",
    //       color: "purple"
    //     },
    //     {
    //       title: "Leaders In A Field Maybe?",
    //       color: "maroon"
    //     },
    //     {
    //       title: "We Have Lawyers",
    //       color: "orange"
    //     }
    //   ]
    function LyricsComponent() {
        this.pageNumber = 0;
        this.pageCount = 0;
        this.pages = [
            {
                image: "https://in.bmscdn.com/showcaseimage/eventtrailer/jagga-jasoos-movie-showcase-23-06-2017-20-16.jpg",
                title: "movie title"
            },
            {
                image: "https://in.bmscdn.com/showcaseimage/eventtrailer/war-for-the-planet-of-the-apes-movie-showcase-22-06-2017-20-28.jpg",
                title: "War for the Planet of the appes",
            },
            {
                image: "https://in.bmscdn.com/showcaseimage/eventtrailer/jab-harry-met-sejal-movie-page-showcase-21-26-june-21-06-2017-20-37.jpg",
                title: "movie title"
            },
            {
                image: "https://in.bmscdn.com/showcaseimage/eventtrailer/spider-man-homecoming-movie-showcase-23-06-2017-20-27.jpg",
                title: "movie title"
            }
        ];
    }
    LyricsComponent.prototype.ngOnInit = function () {
    };
    return LyricsComponent;
}());
LyricsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-lyrics',
        template: __webpack_require__("../../../../../src/app/banners/lyrics/lyrics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/banners/lyrics/lyrics.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LyricsComponent);

//# sourceMappingURL=lyrics.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{font-size: 1.8rem !important; margin: 26px 8px 8px 0 !important; text-transform: capitalize;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- banner start -->\r\n<app-lyrics></app-lyrics>\r\n<!-- banner end -->\r\n <div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t<h1>\r\n\t\t<a routerLink=\"/\">Recent Activity  \r\n\t\t\t<i class=\"material-icons\">chevron_right</i>\r\n\t\t</a>\r\n\t</h1>\r\n\t<app-lyrics-list></app-lyrics-list>\r\n\r\n\t</div>\r\n </div>\r\n\r\n <div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t<h1>Popular Movies</h1>\r\n\t<app-lyrics-list></app-lyrics-list>\r\n\t\r\n\t</div>\r\n </div>\r\n\r\n <div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t<h1>Popular Lyrics</h1>\r\n\t<app-lyrics-list></app-lyrics-list>\r\n\t\r\n\t</div>\r\n </div>\r\n\r\n <div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t<h1>Popular Artist</h1>\r\n\t<app-lyrics-list></app-lyrics-list>\r\n\t\r\n\t</div>\r\n </div>\r\n\r\n  <div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t<h1>90's Hits</h1>\r\n\t<app-lyrics-list></app-lyrics-list>\r\n\t\r\n\t</div>\r\n </div>\r\n\r\n   <div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t<h1>chiranjeevi hits</h1>\r\n\t<app-lyrics-list></app-lyrics-list>\r\n\t\r\n\t</div>\r\n </div>\r\n\r\n\t "

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/lyrics/lyric-details/lyric-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner-detail{ margin-top: -65px; position: relative;}\r\n.banner-detail .fullW{height: 350px; background-size: cover !important;}\r\n.fullDetails{position: absolute; bottom: 5px; z-index: 2; width: 100%; color: #fff; }\r\nh4{color: #fff; font-weight: bold; text-transform: capitalize;}\r\n/*.fullDetails .chip{background:rgba(255,255,255,0.3); border: 1px solid #e4e4e4; color: #e4e4e4; line-height: 22px; height: 22px;}*/\r\n.MovieListUser{list-style: none; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 8px;}\r\n.MovieListUser img{max-width: 40px;}\r\n.MovieListUser li{text-align: center; min-width: 70px; max-width:120px; margin: 0 8px;}\r\n.MovieListUser .role, .MovieListUser .name{text-transform: capitalize; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}\r\n.card-title{font-weight: bold; margin: 0 -24px;\r\npadding: 0px 15px 16px 25px; border-bottom: 1px solid #ddd;}\r\n.youtube{margin-top: 15px; margin-bottom: 15px; }\r\n.youtube iframe{width: 100% !important; border-radius:0 !important;  }\r\n.youtube .songtitle{ background: #fff; margin-bottom: 12px; padding: 4px; margin-top: -6px;}\r\nh5{text-transform: capitalize;}\r\n.youtubeMovie{\r\nmargin:-12px -25px -33px;\r\n}\r\n.youtubeMovie iframe{width: 100% !important; min-height: 350px;}\r\n\r\n.chip{background:rgba(255,255,255,0.1); font-size: 76%; border: 0.5px solid rgba(255,255,255,0.2); color: #e4e4e4; line-height: 22px; height: 22px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lyrics/lyric-details/lyric-details.component.html":
/***/ (function(module, exports) {

module.exports = " <div *ngFor=\"let detail of lyricDetails\"> \r\n\r\n<div class=\"banner-detail\">\r\n   <div class=\"mask\"></div>\r\n   <div class=\"mask-black\"></div>\r\n   <div class=\"p-t-100 fullW\" [ngStyle]=\"{'background': 'url('+ detail.banner +') no-repeat center'}\">\r\n   <div class=\"fullDetails\" >\r\n      <div class=\"container\">\r\n         <div class=\"row\">\r\n            <div class=\"col m12\">\r\n               <h4 class=\"textOverflow\">{{detail.movie_name}}</h4>\r\n               <small class=\"chip\" *ngFor=\"let genre of detail.genre\">{{genre}}</small>\r\n            </div>\r\n           <div class=\"col m12\">\r\n               <ul class=\"MovieListUser\">\r\n                  <li class=\"avatar left\" *ngFor=\"let artist of detail.artists\">\r\n                     <div class=\"role\">{{artist.role}}</div>\r\n                     <img class=\"circle\" [src]=\"artist.image\" alt=\"{{artist.name}}\" title=\"{{artist.name}}\">\r\n                     <div class=\"name\">{{artist.name}}</div>\r\n                  </li>\r\n                  \r\n               </ul>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n</div>\r\n\r\n<!-- <div class=\"container\">\r\n\t<div class=\"row\">\r\n\t   <ul class=\"tabs\">\r\n\t      <li class=\"tab\"><a routerLink=\"/Videos\">Videos</a></li>\r\n\t      <li class=\"tab\"><a class=\"active\" routerLink=\"/lyrics\">lyrics</a></li>\r\n\t      <li class=\"tab\"><a href=\"#Reviews\">Reviews</a></li>\r\n\t   </ul>\r\n\t </div>\r\n</div> -->\r\n\r\n<!-- <div id='Videos'>\r\n<div class=\"container\">\r\n   <div class=\"row\">\r\n      <div class=\"col m8 s12\">\r\n         <div class=\"card moveTopCard\">\r\n            <div class=\"card-content\">\r\n               <div class=\"card-title\">Bahubali Full Movie</div>\r\n               <div class=\"youtubeMovie\">\r\n               <iframe src=\"https://www.youtube.com/embed/XAW915UjfZg?wmode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent\" frameborder=\"0\" allowfullscreen></iframe>\r\n\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n\r\n       <div class=\"col m4 s12\">\r\n       <div class=\"youtube\">\r\n       <h5>Songs</h5>\r\n       <iframe src=\"https://www.youtube.com/embed/XAW915UjfZg?wmode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent\" frameborder=\"0\" allowfullscree></iframe>\r\n       <div class=\"songtitle\">Title Name</div>\r\n\r\n       <iframe src=\"https://www.youtube.com/embed/XAW915UjfZg?wmode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent\" frameborder=\"0\" allowfullscree></iframe>\r\n       <div class=\"songtitle\">Title Name</div>\r\n\r\n       </div>\r\n      </div>\r\n      \r\n   </div>\r\n</div>\r\n\r\n</div> -->\r\n\r\n\r\n  \r\n\r\n<!-- <div id='lyrics'> -->\r\n<div class=\"container\">\r\n   <div class=\"row\">\r\n      <div class=\"col m7 s12\">\r\n         <div class=\"card moveTopCard\">\r\n            <div class=\"card-content\">\r\n               <div class=\"card-title\">{{detail.song_title}}</div>\r\n               <p class=\"pre\">{{detail.lyrics}}</p>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"col m5 s12\">\r\n         <div class=\"youtube\">\r\n          <!--   <h5>Lyrics song</h5> -->\r\n           <!--  <iframe src=\"https://www.youtube.com/embed/XAW915UjfZg?enablejsapi=1&amp;autoplay=0&amp;cc_load_policy=0&amp;iv_load_policy=1&amp;loop=0&amp;modestbranding=0&amp;rel=1&amp;showinfo=0&amp;theme=dark&amp;color=red&amp;autohide=2&amp;controls=2&amp;playsinline=0&amp;\"  allowfullscreen=\"\" data-no-lazy=\"1\"></iframe>\r\n            <div class=\"songtitle\">Title Name</div>\r\n\r\n            <iframe src=\"https://www.youtube.com/embed/zX7jeqbu3pE?enablejsapi=1&amp;autoplay=0&amp;cc_load_policy=0&amp;iv_load_policy=1&amp;loop=0&amp;modestbranding=0&amp;rel=1&amp;showinfo=0&amp;theme=dark&amp;color=red&amp;autohide=2&amp;controls=2&amp;playsinline=0&amp;\"  allowfullscreen=\"\" data-no-lazy=\"1\"></iframe>\r\n           <div class=\"songtitle\">Title Name</div> -->\r\n           \r\n         </div>\r\n         <ul class=\"collection with-header\">\r\n         \t\t<li class=\"collection-header\">\r\n                    <h5>{{detail.movie_name}} Songs</h5>\r\n                  </li>\r\n                  <li class=\"collection-item\">\r\n                     <a class=\"\" >Oka Praanam</a>\r\n                  </li>\r\n                  <li class=\"collection-item\">\r\n                     <a class=\"\" >Dandaalayyaa (English Translation) </a>\r\n                  </li>\r\n                  <li class=\"collection-item\">\r\n                     <a class=\"\" >Dandaalayyaa </a>\r\n                  </li>\r\n                  <li class=\"collection-item\">\r\n                     <a class=\"\" >Kannaa Nidurinchara </a>\r\n                  </li>\r\n               </ul>\r\n\r\n      </div>\r\n   </div>\r\n</div>\r\n<!-- \r\n</div> -->\r\n\r\n\r\n \r\n </div>"

/***/ }),

/***/ "../../../../../src/app/lyrics/lyric-details/lyric-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lyric_details_lyric_details_service__ = __webpack_require__("../../../../../src/app/services/lyric-details/lyric-details.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LyricDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { LyricslistService } from '../../services/lyrics-list/lyricslist.service';
var LyricDetailsComponent = (function () {
    // public details = [
    //      {
    //       image: "https://in.bmscdn.com/showcaseimage/eventtrailer/jagga-jasoos-movie-showcase-23-06-2017-20-16.jpg",
    //       movieName: "movie title gose here",
    //       movieType:'comedy'
    //    }
    // ];
    function LyricDetailsComponent(router, _LyricDetailsService) {
        this.router = router;
        this._LyricDetailsService = _LyricDetailsService;
    }
    LyricDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['id'];
            _this._LyricDetailsService.getLyricDetails(id).subscribe(function (lyricDetails) {
                //   console.log(lyricDetails)
                _this.lyricDetails = lyricDetails;
            });
        });
    };
    return LyricDetailsComponent;
}());
LyricDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-lyric-details',
        template: __webpack_require__("../../../../../src/app/lyrics/lyric-details/lyric-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lyrics/lyric-details/lyric-details.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_lyric_details_lyric_details_service__["a" /* LyricDetailsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_lyric_details_lyric_details_service__["a" /* LyricDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_lyric_details_lyric_details_service__["a" /* LyricDetailsService */]) === "function" && _b || Object])
], LyricDetailsComponent);

var _a, _b;
//# sourceMappingURL=lyric-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/lyrics/lyrics-list/lyrics-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlayer{\r\n    background-image:linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.0));\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;     \r\n    z-index: 1;\r\n}\r\n/*.overlayer1{\r\nposition: relative; z-index: 2;\r\n}*/\r\n\r\n/*card list start*/\r\n.card .card-image{max-height: 200px; min-height: 200px;   overflow: hidden;}\r\n.card .card-image img{height: 100%;}\r\n.card.img_large .card-image{max-height: 300px;}\r\n.show-card{border-radius:5px;  overflow: hidden;}\r\n.show-card:hover{\r\n    -ms-box-shadow:0 5px 10px rgba(0,0,0,0.3);\r\n    box-shadow:0 5px 10px rgba(0,0,0,0.3); \r\n}\r\n.card .card-image{\r\n    box-shadow: 0;\r\n    border-radius:0;\r\n    border: 1px solid #ddd;\r\n}\r\nh3.card-title{ margin-top:0; font-size: 110%; color: #212121; line-height: 20px !important; font-weight: 500; margin-bottom: 0 !important;}\r\n.chip-title{font-size: 90%; color:#888 !important;}\r\n.card .card-content{padding: 12px 8px;}\r\n\r\n/*.card .card-image img{height: 200px;}*/\r\n/*.lng{padding-bottom: 8px;}*/\r\n/*.playList{padding: 2px 2px}*/\r\n/*.banner_reduce{height: 250px;  width: 100%; position: relative; top: -65px; overflow: hidden; margin-bottom: -25px;}*/\r\n\r\n/*.chip{background:rgba(255,255,255,0.1); font-size: 76%; border: 0.5px solid rgba(255,255,255,0.2); color: #e4e4e4; line-height: 22px; height: 22px;}*/\r\n/*.absoluteBottom{position: absolute; bottom: 0; left: 8px; right: 8px;}*/\r\n/*.lng{padding-bottom: 8px; color: #fff; font-size: 95%;}*/\r\n.col-padding .col.s6{padding: 9px !important; }\r\n.col-padding .col.s6:first-child{padding-left: 0  !important;}\r\n.col-padding .col.s6:nth-child(4n+0){padding-right: 0 !important;}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lyrics/lyrics-list/lyrics-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n   <div class=\" cardCustom-mini col-padding\">\n\n      <div class=\"col s6 m3\" *ngFor=\"let lyric of lyrics\" >\n      <a routerLink=\"/Lyric/{{lyric.id}}\">\n        <article class=\"card show-card\">\n          <div class=\"card-image\">\n             <div class=\"overlayer\"></div>\n             <img [src]=\"lyric.imageURL\">\n          </div>\n          <div class=\"card-content\">\n              <h3 class=\"card-title textOverflow\">{{lyric.movieName}}</h3>\n             <p class=\"chip-title\">{{lyric.genre[0]}}, {{lyric.genre[1]}}, {{lyric.audioReleaseDate}}</p>\n          </div>\n       </article>\n       </a>\n      </div>\n\n\n    </div>\n \n\n "

/***/ }),

/***/ "../../../../../src/app/lyrics/lyrics-list/lyrics-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lyrics_list_lyricslist_service__ = __webpack_require__("../../../../../src/app/services/lyrics-list/lyricslist.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LyricsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LyricsListComponent = (function () {
    function LyricsListComponent(route, _lyricslistService) {
        this.route = route;
        this._lyricslistService = _lyricslistService;
    }
    LyricsListComponent.prototype.ngOnInit = function () {
        this.getLyrics();
    };
    LyricsListComponent.prototype.getLyrics = function () {
        var _this = this;
        this._lyricslistService.getLyrics().subscribe(function (lyrics) { _this.lyrics = lyrics; }, function (error) { _this.errorMessage = error; });
    };
    return LyricsListComponent;
}());
LyricsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-lyrics-list',
        template: __webpack_require__("../../../../../src/app/lyrics/lyrics-list/lyrics-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lyrics/lyrics-list/lyrics-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_lyrics_list_lyricslist_service__["a" /* LyricslistService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_lyrics_list_lyricslist_service__["a" /* LyricslistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_lyrics_list_lyricslist_service__["a" /* LyricslistService */]) === "function" && _b || Object])
], LyricsListComponent);

var _a, _b;
//# sourceMappingURL=lyrics-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/lyric-details/lyric-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LyricDetailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LyricDetailsService = (function () {
    function LyricDetailsService(_http) {
        this._http = _http;
        //private _Lyricurl: string = 'assets/api/181.json';
        this._Lyricurl = "http://myewalletsfykxuhqe9y.devcloud.acquia-sites.com/albums/latest_albums/100.json?callback=JSON_CALLBACK";
    }
    LyricDetailsService.prototype.getLyricDetails = function (id) {
        return this._http.get(this._Lyricurl).map(function (res) { return res.json(); });
    };
    return LyricDetailsService;
}());
LyricDetailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LyricDetailsService);

var _a;
//# sourceMappingURL=lyric-details.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/lyrics-list/lyricslist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LyricslistService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LyricslistService = (function () {
    function LyricslistService(_http) {
        this._http = _http;
        //private _Lyricsurl: string = 'assets/api/100.json';
        this._Lyricsurl = "http://myewalletsfykxuhqe9y.devcloud.acquia-sites.com/albums/latest_albums/100.json";
    }
    LyricslistService.prototype.getLyrics = function () {
        return this._http.get(this._Lyricsurl).map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LyricslistService.prototype.handleError = function (error) {
        // console.error(error);
        var message = "Error status code " + error.status + " at " + error.url;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(message);
    };
    return LyricslistService;
}());
LyricslistService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LyricslistService);

var _a;
//# sourceMappingURL=lyricslist.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = (function () {
    //private _searchLyricurl: string  ="http://myewalletsfykxuhqe9y.devcloud.acquia-sites.com/albums/latest_albums/100.json";
    function SearchService(_http) {
        this._http = _http;
        this._searchLyricurl = 'assets/api/100.json';
    }
    SearchService.prototype.searchLyricsList = function (searchLyric) {
        return this._http.get(this._searchLyricurl).map(function (response) { return response.json(); });
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.header-search-wrapper{\r\n\tmargin: 10px auto 0 240px;\r\n    width: calc(100% - 600px);\r\n    height: 40px;\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n.header-search-wrapper i{\r\n    position: absolute;     \r\n    line-height: 45px;\r\n    padding-left: 20px;\r\n     color: #999;\r\n}\r\ninput.header-search-input {\r\n    display: block;\r\n    padding: 8px 8px 8px 72px;\r\n    width: 100%;\r\n    background: rgba(50,50,50,0.9);\r\n    height: 24px;\r\n    transition: all 200ms ease;\r\n    border: none;\r\n    font-size: 16px;\r\n    -webkit-appearance: textfield;\r\n       -moz-appearance: textfield;\r\n            appearance: textfield;\r\n    font-weight: normal;\r\n    outline: none;\r\n    border-radius: 3px;\r\n    border:1px solid rgba(50,50,50,0.4);\r\n\r\n}\r\n\r\n/*input.header-search-input:hover {\r\n    background: rgba(255,255,255,0.5);\r\n}*/\r\n\r\ninput.header-search-input:focus {\r\n    color: #fff;\r\n    background: rgba(255,255,255,0.2);\r\n    border-bottom: none !important;\r\n    box-shadow: none !important;\r\n        font-weight: normal;\r\n}\r\n\r\n\r\n.header-search-input::-webkit-input-placeholder {\r\n    color: #999;\r\n    font-size: 16px;\r\n    font-weight: 400\r\n}\r\n\r\n.header-search-input:-ms-input-placeholder {\r\n     color: #999;\r\n    font-size: 16px;\r\n    font-weight: 400\r\n}\r\n\r\n.header-search-input:focus::-webkit-input-placeholder {\r\n\r\n    font-size: 16px;\r\n    font-weight: 400\r\n}\r\n\r\n.header-search-input:focus:-ms-input-placeholder {\r\n    font-size: 16px;\r\n    font-weight: 400\r\n}\r\n\r\n.header-search-input:focus::placeholder {\r\n    font-size: 16px;\r\n    font-weight: 400\r\n}\r\n\r\n.header-search-input:focus:-ms-input-placeholder {\r\n    font-size: 16px;\r\n    font-weight: 400\r\n}\r\n\r\n.header-search-input::-webkit-input-placeholder {\r\n    font-size: 16px;\r\n    font-weight: 400\r\n}\r\n\r\n.header-search-input:-ms-input-placeholder {\r\n    font-size: 16px;\r\n    font-weight: 400\r\n}\r\n\r\n.header-search-input::placeholder {\r\n    font-size: 16px;\r\n    font-weight: 400\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<mz-navbar>\n  <a routerLink=\"/\" class=\"brand-logo\"><img src=\"assets/images/logo.png\" alt=\"logo\">\n   <!-- <i [id]=\"'btn-sidenav-demo'\" class=\"material-icons\">menu</i>  -->\n  </a>\n  <div class=\"header-search-wrapper hide-on-med-and-down\">\n<form>\n     <i class=\"material-icons\">search</i>\n    <input type=\"text\" [(ngModel)]=\"searchLyric\" name=\"searchLyric\" (keyup)=\"searchLyrics()\" class=\"header-search-input z-depth-2\" placeholder=\"Serach for Movies & lyrics\">\n</form>\n  </div>\n  <mz-navbar-item-container [align]=\"'right'\">\n    <mz-navbar-item><a routerLink=\"/lyrics\">lyrics</a></mz-navbar-item>\n   <a [id]=\"'btn-sidenav-demo'\"><i class=\"material-icons\">menu</i> </a>\n     \n  </mz-navbar-item-container>\n</mz-navbar>\n\n\n<!-- <mz-sidenav>\n  <mz-sidenav-collapsible [onClose]=\"closeFunctionCallback\" [onOpen]=\"openFunctionCallback\">\n    <mz-sidenav-collapsible-header>\n       <i mz-icon-mdi [icon]=\"'menu-right'\" class=\"caret\"></i>Collapsible\n    </mz-sidenav-collapsible-header>\n    <mz-sidenav-collapsible-content>\n      <mz-sidenav-link>\n       <a routerLink=\"/lyrics\">lyrics</a>\n      </mz-sidenav-link>\n      <mz-sidenav-link>\n        <a href=\"#\" class=\"waves-effect\">Second Link</a>\n      </mz-sidenav-link>\n    </mz-sidenav-collapsible-content>\n  </mz-sidenav-collapsible>\n</mz-sidenav>\n -->\n\n <mz-sidenav [id]=\"'sidenav-demo'\" [collapseButtonId]=\"'btn-sidenav-demo'\">\n  <div class=\"center\">\n    <a routerLink=\"/\" class=\"brand-logo\"><img src=\"assets/images/logo.png\" alt=\"logo\"></a>\n  </div>\n  <!-- <mz-sidenav-header>\n    Sidenav header\n  </mz-sidenav-header> -->\n  <!-- <mz-sidenav-subheader>Link Subheader</mz-sidenav-subheader> -->\n  <mz-sidenav-link><a routerLink=\"/lyrics\">Lyrics</a></mz-sidenav-link>\n</mz-sidenav>\n\n \n\n\n <!--   <div class=\" cardCustom-mini col-padding\">\n    <h3>search results</h3>\n      <div class=\"col s6 m3\" *ngFor=\"let results of searchRes\">\n      <a routerLink=\"/Lyric/{{results.id}}\">\n        <article class=\"card show-card\">\n          <div class=\"card-image\">\n             <div class=\"overlayer\"></div>\n             <img [src]=\"results.imageURL\">\n          </div>\n          <div class=\"card-content\">\n              <h3 class=\"card-title textOverflow\">{{results.movieName}}</h3>\n             <p class=\"chip-title\">{{results.genre[0]}}, {{results.genre[1]}}, {{results.audioReleaseDate}}</p>\n          </div>\n       </article>\n       </a>\n      </div>\n\n    </div> -->"

/***/ }),

/***/ "../../../../../src/app/shared/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_search_service__ = __webpack_require__("../../../../../src/app/services/search/search.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(_searchService) {
        this._searchService = _searchService;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.searchLyrics = function () {
        var _this = this;
        this._searchService.searchLyricsList(this.searchLyric).subscribe(function (searchRes) {
            _this.searchRes = searchRes;
            //console.log(searchRes);
        });
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/shared/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/nav/nav.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_search_search_service__["a" /* SearchService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_search_service__["a" /* SearchService */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map