"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please enter item name"],
    },
    description: {
        type: String,
        required: false,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        required: false,
    },
    parts: {
        type: Array,
        required: false,
    },
}, {
    timestamps: true,
});
exports.Item = (0, mongoose_1.model)("Item", ItemSchema);
//# sourceMappingURL=item.model.js.map