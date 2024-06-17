"use strict";
cc._RF.push(module, '4201fxKxeZMR5ZMSK649exq', 'tools');
// tools/tools.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools = /** @class */ (function () {
    function tools() {
    }
    tools.numtolabel = function (a, b) {
        b.string = a + "";
    };
    tools.labeltonum = function (b) {
        var a = parseInt(b.string);
        return a;
    };
    tools.prototype.start = function () {
    };
    return tools;
}());
exports.default = tools;

cc._RF.pop();