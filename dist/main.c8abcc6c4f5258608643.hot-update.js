exports.id = "main";
exports.modules = {

/***/ "./src/middleware/authz.middleware.ts":
/*!********************************************!*\
  !*** ./src/middleware/authz.middleware.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_jwt_1 = __importDefault(__webpack_require__(/*! express-jwt */ \"express-jwt\"));\r\nvar jwks_rsa_1 = __importDefault(__webpack_require__(/*! jwks-rsa */ \"jwks-rsa\"));\r\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\ndotenv.config();\r\nexports.checkJwt = express_jwt_1.default({\r\n    secret: jwks_rsa_1.default.expressJwtSecret({\r\n        cache: true,\r\n        rateLimit: true,\r\n        jwksRequestsPerMinute: 5,\r\n        jwksUri: process.env.AUTH0_DOMAIN + \"/.well-known/jwks.json\"\r\n    }),\r\n    // Validate the audience and the issuer.\r\n    audience: process.env.AUTH0_AUDIENCE,\r\n    issuer: process.env.AUTH0_DOMAIN + \"/\",\r\n    algorithms: [\"RS256\"]\r\n});\r\n\n\n//# sourceURL=webpack:///./src/middleware/authz.middleware.ts?");

/***/ })

};