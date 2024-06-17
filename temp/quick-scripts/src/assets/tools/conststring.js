"use strict";
cc._RF.push(module, '8f2c2I+V2lFmbeIQLiIP7yL', 'conststring');
// tools/conststring.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var conststring = /** @class */ (function (_super) {
    __extends(conststring, _super);
    function conststring() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //这个类用来放只读常量用于localstoragehelper的getvalue（key）等方法的参数
    conststring.USERINFO = "userinfo";
    return conststring;
}(cc.Component));
exports.default = conststring;

cc._RF.pop();