"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = 5001;
(0, app_1.createServer)().then((result) => {
    result.listen(port, () => {
        console.log(`api running on ${port}`);
    });
});
//# sourceMappingURL=index.js.map