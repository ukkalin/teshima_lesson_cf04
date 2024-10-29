"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("better-sqlite3");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fukkalin%2F00%E9%96%8B%E7%99%BA%2FBolt%2Flesson_cf04%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fukkalin%2F00%E9%96%8B%E7%99%BA%2FBolt%2Flesson_cf04&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fukkalin%2F00%E9%96%8B%E7%99%BA%2FBolt%2Flesson_cf04%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fukkalin%2F00%E9%96%8B%E7%99%BA%2FBolt%2Flesson_cf04&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ukkalin_00_Bolt_lesson_cf04_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/ukkalin/00開発/Bolt/lesson_cf04/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ukkalin_00_Bolt_lesson_cf04_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnVra2FsaW4lMkYwMCVFOSU5NiU4QiVFNyU5OSVCQSUyRkJvbHQlMkZsZXNzb25fY2YwNCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ1a2thbGluJTJGMDAlRTklOTYlOEIlRTclOTklQkElMkZCb2x0JTJGbGVzc29uX2NmMDQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaXRhbC1jb250ZW50LXN0b3JlLz82NWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy91a2thbGluLzAw6ZaL55m6L0JvbHQvbGVzc29uX2NmMDQvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy91a2thbGluLzAw6ZaL55m6L0JvbHQvbGVzc29uX2NmMDQvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fukkalin%2F00%E9%96%8B%E7%99%BA%2FBolt%2Flesson_cf04%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fukkalin%2F00%E9%96%8B%E7%99%BA%2FBolt%2Flesson_cf04&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDUTtBQUV4QyxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0Msa0RBQVdBO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpdGFsLWNvbnRlbnQtc3RvcmUvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoXCJcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/db/index.ts":
/*!*************************!*\
  !*** ./src/db/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDb: () => (/* binding */ createDb),\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_d1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm/d1 */ \"(rsc)/./node_modules/drizzle-orm/d1/driver.js\");\n/* harmony import */ var drizzle_orm_better_sqlite3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/better-sqlite3 */ \"(rsc)/./node_modules/drizzle-orm/better-sqlite3/driver.js\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ \"(rsc)/./src/db/schema.ts\");\n\n\n\n\nfunction createDb(d1) {\n    if (true) {\n        const sqlite = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())(\"sqlite.db\");\n        return (0,drizzle_orm_better_sqlite3__WEBPACK_IMPORTED_MODULE_2__.drizzle)(sqlite, {\n            schema: _schema__WEBPACK_IMPORTED_MODULE_1__\n        });\n    }\n    return (0,drizzle_orm_d1__WEBPACK_IMPORTED_MODULE_3__.drizzle)(d1, {\n        schema: _schema__WEBPACK_IMPORTED_MODULE_1__\n    });\n}\nlet db;\nif (false) {} else {\n    if (!global.db) {\n        global.db = createDb();\n    }\n    db = global.db;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGIvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUM2QjtBQUNoQztBQUNIO0FBRTVCLFNBQVNJLFNBQVNDLEVBQWU7SUFDdEMsSUFBSUMsSUFBNkNELEVBQUU7UUFDakQsTUFBTUUsU0FBUyxJQUFJTCx1REFBUUEsQ0FBQztRQUM1QixPQUFPRCxtRUFBYUEsQ0FBQ00sUUFBUTtZQUFFSixNQUFNQSxzQ0FBQUE7UUFBQztJQUN4QztJQUNBLE9BQU9ILHVEQUFPQSxDQUFDSyxJQUFJO1FBQUVGLE1BQU1BLHNDQUFBQTtJQUFDO0FBQzlCO0FBUUEsSUFBSUs7QUFFSixJQUFJRixLQUF5QixFQUFjLEVBSzFDLE1BQU07SUFDTCxJQUFJLENBQUNNLE9BQU9KLEVBQUUsRUFBRTtRQUNkSSxPQUFPSixFQUFFLEdBQUdKO0lBQ2Q7SUFDQUksS0FBS0ksT0FBT0osRUFBRTtBQUNoQjtBQUVhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaXRhbC1jb250ZW50LXN0b3JlLy4vc3JjL2RiL2luZGV4LnRzP2RhYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZHJpenpsZSB9IGZyb20gJ2RyaXp6bGUtb3JtL2QxJztcbmltcG9ydCB7IGRyaXp6bGUgYXMgZHJpenpsZUJldHRlciB9IGZyb20gJ2RyaXp6bGUtb3JtL2JldHRlci1zcWxpdGUzJztcbmltcG9ydCBEYXRhYmFzZSBmcm9tICdiZXR0ZXItc3FsaXRlMyc7XG5pbXBvcnQgKiBhcyBzY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGIoZDE/OiBEMURhdGFiYXNlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB8fCAhZDEpIHtcbiAgICBjb25zdCBzcWxpdGUgPSBuZXcgRGF0YWJhc2UoJ3NxbGl0ZS5kYicpO1xuICAgIHJldHVybiBkcml6emxlQmV0dGVyKHNxbGl0ZSwgeyBzY2hlbWEgfSk7XG4gIH1cbiAgcmV0dXJuIGRyaXp6bGUoZDEsIHsgc2NoZW1hIH0pO1xufVxuXG5leHBvcnQgdHlwZSBEYkNsaWVudCA9IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZURiPjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgZGI6IERiQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbmxldCBkYjogRGJDbGllbnRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgaWYgKCFwcm9jZXNzLmVudi5EQiB8fCB0eXBlb2YgcHJvY2Vzcy5lbnYuREIgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpcyBub3QgcHJvcGVybHkgY29uZmlndXJlZCcpO1xuICB9XG4gIGRiID0gY3JlYXRlRGIocHJvY2Vzcy5lbnYuREIgYXMgRDFEYXRhYmFzZSk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5kYikge1xuICAgIGdsb2JhbC5kYiA9IGNyZWF0ZURiKCk7XG4gIH1cbiAgZGIgPSBnbG9iYWwuZGI7XG59XG5cbmV4cG9ydCB7IGRiIH0iXSwibmFtZXMiOlsiZHJpenpsZSIsImRyaXp6bGVCZXR0ZXIiLCJEYXRhYmFzZSIsInNjaGVtYSIsImNyZWF0ZURiIiwiZDEiLCJwcm9jZXNzIiwic3FsaXRlIiwiZGIiLCJlbnYiLCJEQiIsIkVycm9yIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/db/index.ts\n");

/***/ }),

/***/ "(rsc)/./src/db/schema.ts":
/*!**************************!*\
  !*** ./src/db/schema.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   products: () => (/* binding */ products),\n/* harmony export */   purchases: () => (/* binding */ purchases),\n/* harmony export */   users: () => (/* binding */ users)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/sql/sql.js\");\n/* harmony import */ var drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/sqlite-core */ \"(rsc)/./node_modules/drizzle-orm/sqlite-core/table.js\");\n/* harmony import */ var drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-orm/sqlite-core */ \"(rsc)/./node_modules/drizzle-orm/sqlite-core/columns/text.js\");\n/* harmony import */ var drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/sqlite-core */ \"(rsc)/./node_modules/drizzle-orm/sqlite-core/columns/integer.js\");\n\n\nconst users = (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_0__.sqliteTable)(\"users\", {\n    id: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"id\").primaryKey(),\n    name: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"name\"),\n    email: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"email\").notNull().unique(),\n    password: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"password\").notNull(),\n    phone: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"phone\"),\n    role: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"role\", {\n        enum: [\n            \"USER\",\n            \"ADMIN\"\n        ]\n    }).default(\"USER\").notNull(),\n    createdAt: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_2__.integer)(\"created_at\", {\n        mode: \"timestamp\"\n    }).notNull().default((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.sql)`CURRENT_TIMESTAMP`),\n    updatedAt: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_2__.integer)(\"updated_at\", {\n        mode: \"timestamp\"\n    }).notNull().default((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.sql)`CURRENT_TIMESTAMP`)\n});\nconst products = (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_0__.sqliteTable)(\"products\", {\n    id: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"id\").primaryKey(),\n    name: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"name\").notNull(),\n    description: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"description\").notNull(),\n    price: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_2__.integer)(\"price\").notNull(),\n    imageUrl: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"image_url\"),\n    createdAt: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_2__.integer)(\"created_at\", {\n        mode: \"timestamp\"\n    }).notNull().default((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.sql)`CURRENT_TIMESTAMP`),\n    updatedAt: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_2__.integer)(\"updated_at\", {\n        mode: \"timestamp\"\n    }).notNull().default((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.sql)`CURRENT_TIMESTAMP`)\n});\nconst purchases = (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_0__.sqliteTable)(\"purchases\", {\n    id: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"id\").primaryKey(),\n    userId: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"user_id\").notNull().references(()=>users.id),\n    productId: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"product_id\").notNull().references(()=>products.id),\n    stripeId: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_1__.text)(\"stripe_id\").notNull().unique(),\n    createdAt: (0,drizzle_orm_sqlite_core__WEBPACK_IMPORTED_MODULE_2__.integer)(\"created_at\", {\n        mode: \"timestamp\"\n    }).notNull().default((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.sql)`CURRENT_TIMESTAMP`)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGIvc2NoZW1hLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDbUM7QUFFOUQsTUFBTUksUUFBUUgsb0VBQVdBLENBQUMsU0FBUztJQUN4Q0ksSUFBSUgsNkRBQUlBLENBQUMsTUFBTUksVUFBVTtJQUN6QkMsTUFBTUwsNkRBQUlBLENBQUM7SUFDWE0sT0FBT04sNkRBQUlBLENBQUMsU0FBU08sT0FBTyxHQUFHQyxNQUFNO0lBQ3JDQyxVQUFVVCw2REFBSUEsQ0FBQyxZQUFZTyxPQUFPO0lBQ2xDRyxPQUFPViw2REFBSUEsQ0FBQztJQUNaVyxNQUFNWCw2REFBSUEsQ0FBQyxRQUFRO1FBQUVZLE1BQU07WUFBQztZQUFRO1NBQVE7SUFBQyxHQUFHQyxPQUFPLENBQUMsUUFBUU4sT0FBTztJQUN2RU8sV0FBV2IsZ0VBQU9BLENBQUMsY0FBYztRQUFFYyxNQUFNO0lBQVksR0FBR1IsT0FBTyxHQUFHTSxPQUFPLENBQUNmLGdEQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDaEdrQixXQUFXZixnRUFBT0EsQ0FBQyxjQUFjO1FBQUVjLE1BQU07SUFBWSxHQUFHUixPQUFPLEdBQUdNLE9BQU8sQ0FBQ2YsZ0RBQUcsQ0FBQyxpQkFBaUIsQ0FBQztBQUNsRyxHQUFHO0FBRUksTUFBTW1CLFdBQVdsQixvRUFBV0EsQ0FBQyxZQUFZO0lBQzlDSSxJQUFJSCw2REFBSUEsQ0FBQyxNQUFNSSxVQUFVO0lBQ3pCQyxNQUFNTCw2REFBSUEsQ0FBQyxRQUFRTyxPQUFPO0lBQzFCVyxhQUFhbEIsNkRBQUlBLENBQUMsZUFBZU8sT0FBTztJQUN4Q1ksT0FBT2xCLGdFQUFPQSxDQUFDLFNBQVNNLE9BQU87SUFDL0JhLFVBQVVwQiw2REFBSUEsQ0FBQztJQUNmYyxXQUFXYixnRUFBT0EsQ0FBQyxjQUFjO1FBQUVjLE1BQU07SUFBWSxHQUFHUixPQUFPLEdBQUdNLE9BQU8sQ0FBQ2YsZ0RBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUNoR2tCLFdBQVdmLGdFQUFPQSxDQUFDLGNBQWM7UUFBRWMsTUFBTTtJQUFZLEdBQUdSLE9BQU8sR0FBR00sT0FBTyxDQUFDZixnREFBRyxDQUFDLGlCQUFpQixDQUFDO0FBQ2xHLEdBQUc7QUFFSSxNQUFNdUIsWUFBWXRCLG9FQUFXQSxDQUFDLGFBQWE7SUFDaERJLElBQUlILDZEQUFJQSxDQUFDLE1BQU1JLFVBQVU7SUFDekJrQixRQUFRdEIsNkRBQUlBLENBQUMsV0FDVk8sT0FBTyxHQUNQZ0IsVUFBVSxDQUFDLElBQU1yQixNQUFNQyxFQUFFO0lBQzVCcUIsV0FBV3hCLDZEQUFJQSxDQUFDLGNBQ2JPLE9BQU8sR0FDUGdCLFVBQVUsQ0FBQyxJQUFNTixTQUFTZCxFQUFFO0lBQy9Cc0IsVUFBVXpCLDZEQUFJQSxDQUFDLGFBQWFPLE9BQU8sR0FBR0MsTUFBTTtJQUM1Q00sV0FBV2IsZ0VBQU9BLENBQUMsY0FBYztRQUFFYyxNQUFNO0lBQVksR0FBR1IsT0FBTyxHQUFHTSxPQUFPLENBQUNmLGdEQUFHLENBQUMsaUJBQWlCLENBQUM7QUFDbEcsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2l0YWwtY29udGVudC1zdG9yZS8uL3NyYy9kYi9zY2hlbWEudHM/ZjAxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcWwgfSBmcm9tICdkcml6emxlLW9ybSc7XG5pbXBvcnQgeyBzcWxpdGVUYWJsZSwgdGV4dCwgaW50ZWdlciB9IGZyb20gJ2RyaXp6bGUtb3JtL3NxbGl0ZS1jb3JlJztcblxuZXhwb3J0IGNvbnN0IHVzZXJzID0gc3FsaXRlVGFibGUoJ3VzZXJzJywge1xuICBpZDogdGV4dCgnaWQnKS5wcmltYXJ5S2V5KCksXG4gIG5hbWU6IHRleHQoJ25hbWUnKSxcbiAgZW1haWw6IHRleHQoJ2VtYWlsJykubm90TnVsbCgpLnVuaXF1ZSgpLFxuICBwYXNzd29yZDogdGV4dCgncGFzc3dvcmQnKS5ub3ROdWxsKCksXG4gIHBob25lOiB0ZXh0KCdwaG9uZScpLFxuICByb2xlOiB0ZXh0KCdyb2xlJywgeyBlbnVtOiBbJ1VTRVInLCAnQURNSU4nXSB9KS5kZWZhdWx0KCdVU0VSJykubm90TnVsbCgpLFxuICBjcmVhdGVkQXQ6IGludGVnZXIoJ2NyZWF0ZWRfYXQnLCB7IG1vZGU6ICd0aW1lc3RhbXAnIH0pLm5vdE51bGwoKS5kZWZhdWx0KHNxbGBDVVJSRU5UX1RJTUVTVEFNUGApLFxuICB1cGRhdGVkQXQ6IGludGVnZXIoJ3VwZGF0ZWRfYXQnLCB7IG1vZGU6ICd0aW1lc3RhbXAnIH0pLm5vdE51bGwoKS5kZWZhdWx0KHNxbGBDVVJSRU5UX1RJTUVTVEFNUGApXG59KTtcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzID0gc3FsaXRlVGFibGUoJ3Byb2R1Y3RzJywge1xuICBpZDogdGV4dCgnaWQnKS5wcmltYXJ5S2V5KCksXG4gIG5hbWU6IHRleHQoJ25hbWUnKS5ub3ROdWxsKCksXG4gIGRlc2NyaXB0aW9uOiB0ZXh0KCdkZXNjcmlwdGlvbicpLm5vdE51bGwoKSxcbiAgcHJpY2U6IGludGVnZXIoJ3ByaWNlJykubm90TnVsbCgpLFxuICBpbWFnZVVybDogdGV4dCgnaW1hZ2VfdXJsJyksXG4gIGNyZWF0ZWRBdDogaW50ZWdlcignY3JlYXRlZF9hdCcsIHsgbW9kZTogJ3RpbWVzdGFtcCcgfSkubm90TnVsbCgpLmRlZmF1bHQoc3FsYENVUlJFTlRfVElNRVNUQU1QYCksXG4gIHVwZGF0ZWRBdDogaW50ZWdlcigndXBkYXRlZF9hdCcsIHsgbW9kZTogJ3RpbWVzdGFtcCcgfSkubm90TnVsbCgpLmRlZmF1bHQoc3FsYENVUlJFTlRfVElNRVNUQU1QYClcbn0pO1xuXG5leHBvcnQgY29uc3QgcHVyY2hhc2VzID0gc3FsaXRlVGFibGUoJ3B1cmNoYXNlcycsIHtcbiAgaWQ6IHRleHQoJ2lkJykucHJpbWFyeUtleSgpLFxuICB1c2VySWQ6IHRleHQoJ3VzZXJfaWQnKVxuICAgIC5ub3ROdWxsKClcbiAgICAucmVmZXJlbmNlcygoKSA9PiB1c2Vycy5pZCksXG4gIHByb2R1Y3RJZDogdGV4dCgncHJvZHVjdF9pZCcpXG4gICAgLm5vdE51bGwoKVxuICAgIC5yZWZlcmVuY2VzKCgpID0+IHByb2R1Y3RzLmlkKSxcbiAgc3RyaXBlSWQ6IHRleHQoJ3N0cmlwZV9pZCcpLm5vdE51bGwoKS51bmlxdWUoKSxcbiAgY3JlYXRlZEF0OiBpbnRlZ2VyKCdjcmVhdGVkX2F0JywgeyBtb2RlOiAndGltZXN0YW1wJyB9KS5ub3ROdWxsKCkuZGVmYXVsdChzcWxgQ1VSUkVOVF9USU1FU1RBTVBgKVxufSk7XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB0eXBlb2YgdXNlcnMuJGluZmVyU2VsZWN0O1xuZXhwb3J0IHR5cGUgUHJvZHVjdCA9IHR5cGVvZiBwcm9kdWN0cy4kaW5mZXJTZWxlY3Q7XG5leHBvcnQgdHlwZSBQdXJjaGFzZSA9IHR5cGVvZiBwdXJjaGFzZXMuJGluZmVyU2VsZWN0OyJdLCJuYW1lcyI6WyJzcWwiLCJzcWxpdGVUYWJsZSIsInRleHQiLCJpbnRlZ2VyIiwidXNlcnMiLCJpZCIsInByaW1hcnlLZXkiLCJuYW1lIiwiZW1haWwiLCJub3ROdWxsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJwaG9uZSIsInJvbGUiLCJlbnVtIiwiZGVmYXVsdCIsImNyZWF0ZWRBdCIsIm1vZGUiLCJ1cGRhdGVkQXQiLCJwcm9kdWN0cyIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJpbWFnZVVybCIsInB1cmNoYXNlcyIsInVzZXJJZCIsInJlZmVyZW5jZXMiLCJwcm9kdWN0SWQiLCJzdHJpcGVJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/db/schema.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _auth_drizzle_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/drizzle-adapter */ \"(rsc)/./node_modules/@auth/drizzle-adapter/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/db */ \"(rsc)/./src/db/index.ts\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_drizzle_adapter__WEBPACK_IMPORTED_MODULE_0__.DrizzleAdapter)(_db__WEBPACK_IMPORTED_MODULE_3__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await _db__WEBPACK_IMPORTED_MODULE_3__.db.query.users.findFirst(credentials.email);\n                if (!user || !user.password) {\n                    return null;\n                }\n                const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                if (!isValid) {\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    callbacks: {\n        session: ({ session, token })=>{\n            return {\n                ...session,\n                user: {\n                    ...session.user,\n                    id: token.id,\n                    role: token.role\n                }\n            };\n        },\n        jwt: ({ token, user })=>{\n            if (user) {\n                return {\n                    ...token,\n                    id: user.id,\n                    role: user.role\n                };\n            }\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNEO0FBRVc7QUFDcEM7QUFDSjtBQUdsQixNQUFNSSxjQUErQjtJQUMxQ0MsU0FBU0wscUVBQWNBLENBQUNHLG1DQUFFQTtJQUMxQkcsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsV0FBVztRQUNUUCwyRUFBbUJBLENBQUM7WUFDbEJRLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsT0FBTztnQkFDVDtnQkFFQSxNQUFNRSxPQUFPLE1BQU1iLG1DQUFFQSxDQUFDYyxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDVCxZQUFZQyxLQUFLO2dCQUU3RCxJQUFJLENBQUNLLFFBQVEsQ0FBQ0EsS0FBS0YsUUFBUSxFQUFFO29CQUMzQixPQUFPO2dCQUNUO2dCQUVBLE1BQU1NLFVBQVUsTUFBTWxCLHVEQUFjLENBQUNRLFlBQVlJLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFFeEUsSUFBSSxDQUFDTSxTQUFTO29CQUNaLE9BQU87Z0JBQ1Q7Z0JBRUEsT0FBTztvQkFDTEUsSUFBSU4sS0FBS00sRUFBRTtvQkFDWFgsT0FBT0ssS0FBS0wsS0FBSztvQkFDakJGLE1BQU1PLEtBQUtQLElBQUk7b0JBQ2ZjLE1BQU1QLEtBQUtPLElBQUk7Z0JBQ2pCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVGxCLFNBQVMsQ0FBQyxFQUFFQSxPQUFPLEVBQUVtQixLQUFLLEVBQUU7WUFDMUIsT0FBTztnQkFDTCxHQUFHbkIsT0FBTztnQkFDVlUsTUFBTTtvQkFDSixHQUFHVixRQUFRVSxJQUFJO29CQUNmTSxJQUFJRyxNQUFNSCxFQUFFO29CQUNaQyxNQUFNRSxNQUFNRixJQUFJO2dCQUNsQjtZQUNGO1FBQ0Y7UUFDQUcsS0FBSyxDQUFDLEVBQUVELEtBQUssRUFBRVQsSUFBSSxFQUFFO1lBQ25CLElBQUlBLE1BQU07Z0JBQ1IsT0FBTztvQkFDTCxHQUFHUyxLQUFLO29CQUNSSCxJQUFJTixLQUFLTSxFQUFFO29CQUNYQyxNQUFNUCxLQUFLTyxJQUFJO2dCQUNqQjtZQUNGO1lBQ0EsT0FBT0U7UUFDVDtJQUNGO0lBQ0FFLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2l0YWwtY29udGVudC1zdG9yZS8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyaXp6bGVBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL2RyaXp6bGUtYWRhcHRlclwiXG5pbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvZGJcIlxuaW1wb3J0IHsgdXNlcnMgfSBmcm9tIFwiQC9kYi9zY2hlbWFcIlxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogRHJpenpsZUFkYXB0ZXIoZGIpLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCJcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KGNyZWRlbnRpYWxzLmVtYWlsKVxuXG4gICAgICAgIGlmICghdXNlciB8fCAhdXNlci5wYXNzd29yZCkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiwgdG9rZW4gfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2Vzc2lvbixcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIC4uLnNlc3Npb24udXNlcixcbiAgICAgICAgICBpZDogdG9rZW4uaWQsXG4gICAgICAgICAgcm9sZTogdG9rZW4ucm9sZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBqd3Q6ICh7IHRva2VuLCB1c2VyIH0pID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4udG9rZW4sXG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgcm9sZTogdXNlci5yb2xlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlblxuICAgIH1cbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvYXV0aC9zaWduaW4nLFxuICB9XG59Il0sIm5hbWVzIjpbIkRyaXp6bGVBZGFwdGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImRiIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJxdWVyeSIsInVzZXJzIiwiZmluZEZpcnN0IiwiaXNWYWxpZCIsImNvbXBhcmUiLCJpZCIsInJvbGUiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImp3dCIsInBhZ2VzIiwic2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/drizzle-orm","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/@auth","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fukkalin%2F00%E9%96%8B%E7%99%BA%2FBolt%2Flesson_cf04%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fukkalin%2F00%E9%96%8B%E7%99%BA%2FBolt%2Flesson_cf04&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();