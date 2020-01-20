exports.id = "main";
exports.modules = {

/***/ "./src/items/items.router.ts":
/*!***********************************!*\
  !*** ./src/items/items.router.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * Required External Modules and Interfaces\r\n */\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar ItemService = __importStar(__webpack_require__(/*! ./items.service */ \"./src/items/items.service.ts\"));\r\n/**\r\n * Router Definition\r\n */\r\nexports.itemsRouter = express_1.default.Router();\r\n/**\r\n * Controller Definitions\r\n */\r\n// GET items/\r\nexports.itemsRouter.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var items, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, ItemService.findAll()];\r\n            case 1:\r\n                items = _a.sent();\r\n                res.status(200).send(items);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                res.status(404).send(e_1.message);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// GET items/:id\r\nexports.itemsRouter.get(\"/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, item, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = parseInt(req.params.id, 10);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, ItemService.find(id)];\r\n            case 2:\r\n                item = _a.sent();\r\n                res.status(200).send(item);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_2 = _a.sent();\r\n                res.status(404).send(e_2.message);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// POST items/\r\nexports.itemsRouter.post(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var item, e_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                item = req.body.item;\r\n                return [4 /*yield*/, ItemService.create(item)];\r\n            case 1:\r\n                _a.sent();\r\n                res.sendStatus(201);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_3 = _a.sent();\r\n                res.status(404).send(e_3.message);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// PUT items/\r\nexports.itemsRouter.put(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var item, e_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                item = req.body.item;\r\n                return [4 /*yield*/, ItemService.update(item)];\r\n            case 1:\r\n                _a.sent();\r\n                res.sendStatus(200);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_4 = _a.sent();\r\n                res.status(500).send(e_4.message);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// DELETE items/:id\r\nexports.itemsRouter.delete(\"/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, e_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                id = parseInt(req.params.id, 10);\r\n                return [4 /*yield*/, ItemService.remove(id)];\r\n            case 1:\r\n                _a.sent();\r\n                res.sendStatus(200);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_5 = _a.sent();\r\n                res.status(500).send(e_5.message);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n\n\n//# sourceURL=webpack:///./src/items/items.router.ts?");

/***/ }),

/***/ "./src/middleware/authz.middleware.ts":
false,

/***/ "express-jwt":
false,

/***/ "jwks-rsa":
false

};