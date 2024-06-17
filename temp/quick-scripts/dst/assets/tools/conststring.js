
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/tools/conststring.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdG9vbHNcXGNvbnN0c3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQXlDLCtCQUFZO0lBQXJEOztJQUtBLENBQUM7SUFKRyxvREFBb0Q7SUFDcEMsb0JBQVEsR0FBRyxVQUFVLENBQUE7SUFHekMsa0JBQUM7Q0FMRCxBQUtDLENBTHdDLEVBQUUsQ0FBQyxTQUFTLEdBS3BEO2tCQUxvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb25zdHN0cmluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLy/ov5nkuKrnsbvnlKjmnaXmlL7lj6ror7vluLjph4/nlKjkuo5sb2NhbHN0b3JhZ2VoZWxwZXLnmoRnZXR2YWx1Ze+8iGtlee+8ieetieaWueazleeahOWPguaVsFxuICAgIHN0YXRpYyByZWFkb25seSBVU0VSSU5GTyA9IFwidXNlcmluZm9cIlxuXG5cbn1cbiJdfQ==