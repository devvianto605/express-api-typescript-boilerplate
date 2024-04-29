"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
exports.router = express_1.default.Router();
exports.router.get('/', controllers_1.getItems);
exports.router.get("/:id", controllers_1.getItem);
exports.router.post("/", controllers_1.createItem);
// update a product
exports.router.put("/:id", controllers_1.updateItem);
// delete a product
exports.router.delete("/:id", controllers_1.deleteItem);
//# sourceMappingURL=item.route.js.map